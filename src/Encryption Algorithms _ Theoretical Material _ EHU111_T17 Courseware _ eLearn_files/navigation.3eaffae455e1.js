var edx = edx || {},

    Navigation = (function() {
        var navigation = {
            accordionToggleButton: $('.accordion-mobile-toggle-btn'),
            accordion: $('.course-sidebar'),
            accordionPullOutBtn: $('.accordion-show-btn'),
            accordionPullInBtn: $('.accordion-hide-btn'),

            init: function() {
                if ($('.accordion').length) {
                    navigation.loadAccordion();
                }
            },

            loadAccordion: function() {
                navigation.checkForCurrent();
                navigation.listenForClick();
                navigation.listenForKeypress();
                navigation.checkShowMenu();
                navigation.highlightDeadline();
            },

            checkShowMenu: function() {
              let courseIndex = $('.course-sidebar');
              let showMenu = localStorage.getItem('showMenu');

              if (showMenu === 'true' || showMenu === null) {
                courseIndex.removeClass('hide-container');
                navigation.accordionPullOutBtn.hide();
              } else {
                courseIndex.addClass('hide-container');
                navigation.accordionPullOutBtn.show();
              }
            },

            getActiveIndex: function() {
                var index = $('div[data-active-unit=true]'),
                    button = null;

                if (index < 0) {
                    // button = $('.accordion .js-button-chapter:eq(' + index + ')');

                    return null
                }

                return button;
            },

            checkForCurrent: function() {
                var button = navigation.getActiveIndex();

                $('div[data-active-unit=true]').closest('.unit-list').siblings().find('.js-arrow-icon').toggleClass('fa-rotate-180')

                if (navigation.allAccordionSectionsIsOpen()) {
                    $('.expand-all-button')
                        .attr('aria-expanded', 'true')
                        .text(gettext('Collapse All'));
                }

            },

            allAccordionSectionsIsOpen: function () {
                return Array.prototype.slice.call(document.querySelectorAll('.button-chapter')).every(item => item.getAttribute('aria-expanded') === 'true');
            },

            highlightDeadline: function() {
                const todayDate = Date.now();
                const oneDay = 86400000;

                $('.subtitle-name').each(function() {
                    const dueDateStr = $(this).attr("data-datetime")?.replace(/ /g,"T");

                    if (!dueDateStr) {
                      return;
                    }

                    const dueDate = Date.parse(dueDateStr);

                    //Highlight the date if the deadline expires
                    if ((dueDate - oneDay) <= todayDate) {
                      $(this).addClass('is-highlight');
                    }

                    if (todayDate > dueDate) {
                      $(this).removeClass('is-highlight');
                    }
                });
            },

            listenForClick: function() {
                $('.accordion').on('click', '.button-chapter', function(event) {
                    const isPrerequisite = $(this).data('is-prereq');

                    if (Boolean(isPrerequisite)) {
                      location.href = $(this).attr('href');
                    } else {
                      event.preventDefault();

                      var $button = $(event.currentTarget),
                          section = $button.next('.chapter-content-container');

                      navigation.toggleAccordion($button, section);
                    }

                });


                navigation.accordionPullInBtn.click(() => {
                  navigation.accordion.addClass('hide-container');
                  navigation.accordionPullOutBtn.show()

                  localStorage.setItem('showMenu', false);
                });

                navigation.accordionPullOutBtn.click(() => {
                  navigation.accordion.removeClass('hide-container');
                  navigation.accordionPullOutBtn.hide()

                  localStorage.setItem('showMenu', true);
                });

                $('.expand-all-button').click( (event) => navigation.handleAllExpandButtonClick(event));

                $('.course-index-mobile').click(() =>  navigation.openMobileNavigation());

                $("body").click(event => navigation.closeMobileNavigation(event));
            },

            listenForKeypress: function() {
                $('.accordion').on('keydown', '.button-chapter', function(event) {
                    // because we're changing the role of the toggle from an 'a' to a 'button'
                    // we need to ensure it has the same keyboard use cases as a real button.
                    // this is useful for screenreader users primarily.
                    if (event.which == 32) { // spacebar
                        event.preventDefault();
                        $(event.currentTarget).trigger('click');
                    } else {
                        return true;
                    }
                });
            },

            closeMobileNavigation: function (event) {
              if (
                  $('body').hasClass('body-darken')
                  && !$(event.target).closest('.course-sidebar').length
                  && !$(event.target).closest('.course-index-mobile').length
              ) {
                  navigation.accordionToggleButton.removeClass('fa-rotate-180');
                  $('body').removeClass('body-darken');
                  navigation.accordion.removeClass('show-container');
              }
            },

            openMobileNavigation: function () {
                const body = $('body');

                navigation.accordionToggleButton.toggleClass('fa-rotate-180');
                body.toggleClass('body-darken');
                navigation.accordion.toggleClass('show-container');
            },

            closeAccordions: function(button, section) {
                var menu = $(section).find('.chapter-menu'),
                    toggle;

                $('.accordion .js-button-chapter').each(function(index, element) {
                    $toggle = $(element);

                    $toggle
                        .removeClass('is-open')
                        .attr('aria-expanded', 'false');

                    $toggle
                        .children('.group-heading')
                        .removeClass('active')
                        .find('.icon')
                            .removeClass('fa-rotate-180');

                    $toggle
                        .next('.chapter-content-container')
                        .removeClass('is-open')
                        .find('.chapter-menu').not(menu)
                            .removeClass('is-open')
                            .slideUp();
                });
            },

            setupCurrentAccordionSection: function(button) {
                const section = $(button).next('.chapter-content-container');

                navigation.toggleAccordion(button, section);
                section.find('.button-chapter').find('.icon').toggleClass('fa-rotate-180');
            },

            toggleAccordion: function(button, section) {
                var $sectionEl = $(section),
                    firstLink = $sectionEl.find('.menu-item').first(),
                    $buttonEl = $(button);

                $buttonEl
                    .removeClass('is-hidden')
                    .toggleClass('is-open')
                    .attr('aria-expanded', 'true');

                $buttonEl
                    .find('.group-heading')
                    .toggleClass('active')
                    .find('.js-arrow-icon')
                      .toggleClass('fa-rotate-180');

                $sectionEl
                    .slideToggle()
                    .removeClass('is-hidden')
                    .toggleClass('is-open')
                    .children('.chapter-menu')
                        .toggleClass('is-open')

                if (navigation.allAccordionSectionsIsOpen()) {
                  $('.expand-all-button').text(gettext('Collapse All')).attr('aria-expanded', 'true');
                }
            },

            collapseSection: function (sectionToggleButton) {
                const $toggleButtonChevron = $(sectionToggleButton).find('.fa-chevron-down');
                const $contentPanel = $(sectionToggleButton).next('.chapter-content-container');

                $contentPanel
                  .slideUp()
                  .removeClass('is-open')
                  .addClass('is-hidden')
                  .find('.chapter-menu')
                    .removeClass('is-open');

                $toggleButtonChevron.removeClass('fa-rotate-180');
                $(sectionToggleButton).attr('aria-expanded', 'false');
            },

            expandSection: function (sectionToggleButton) {
                const $toggleButtonChevron = $(sectionToggleButton).find('.fa-chevron-down');
                const $contentPanel = $(sectionToggleButton).next('.chapter-content-container');

                $contentPanel
                  .slideDown()
                  .addClass('is-open')
                  .removeClass('is-hidden')
                  .find('.chapter-menu')
                    .addClass('is-open');

                $toggleButtonChevron.addClass('fa-rotate-180');
                $(sectionToggleButton).attr('aria-expanded', 'true');
            },

            handleAllExpandButtonClick: function (event) {
                const $toggleButton = $('.expand-all-button');
                const toggleAllExpanded =  $toggleButton.attr('aria-expanded')  === 'true';
                let openAllAccordion;

                if (toggleAllExpanded) {
                  $toggleButton.attr('aria-expanded', 'false');
                  openAllAccordion = navigation.collapseSection;
                  $toggleButton.text(gettext('Expand All'));
                } else {
                  $toggleButton.attr('aria-expanded', 'true');
                  openAllAccordion = navigation.expandSection;
                  $toggleButton.text(gettext('Collapse All'));
                }

                $('.course-navigation').find('.button-chapter.chapter')
                    .each((_, sectionToggleButton) => openAllAccordion(sectionToggleButton));

                event.stopImmediatePropagation();
            }
        };

        return {
            init: navigation.init
        };
    }());

edx.util = edx.util || {};
edx.util.navigation = Navigation;
edx.util.navigation.init();
