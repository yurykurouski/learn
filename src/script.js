const files = [
  'Checksums and cyclic codes for detecting errors _ Theoretical Material _ EHU111_T12 Courseware _ eLearn.html',
  'Compression Techniques _ Theoretical Material _ EHU111_T17 Courseware _ eLearn.html',
  'Decoders _ Theoretical Material _ EHU111_T9 Courseware _ eLearn.html',
  'Demultiplexers _ Theoretical Material _ EHU111_T9 Courseware _ eLearn.html',
  'Disjunctive normal form _ Theoretical Material _ EHU111_T5 Courseware _ eLearn.html',
  'Encoders _ Theoretical Material _ EHU111_T9 Courseware _ eLearn.html',
  'Encryption Algorithms _ Theoretical Material _ EHU111_T17 Courseware _ eLearn.html',
  'Error Correction Code _ Theoretical Material _ EHU111_T12 Courseware _ eLearn.html',
  'Floating-point form of rational numbers _ Theoretical Material _ EHU111_T10 Courseware _ eLearn.html',
  'Introduction to State Machines _ Theoretical Material _ EHU111_T16 Courseware _ eLearn.html',
  'Multiplexers _ Theoretical Material _ EHU111_T9 Courseware _ eLearn.html',
  'Quiz _ Quiz _ EHU111_T3 Courseware _ eLearn.html',
  'Quiz _ Quiz _ EHU111_T9 Courseware _ eLearn.html',
  'Quiz _ Quiz _ EHU111_T10 Courseware _ eLearn.html',
  'Quiz _ Quiz _ EHU111_T11 Courseware _ eLearn.html',
  'Quiz _ Quiz _ EHU111_T12 Courseware _ eLearn.html',
  'Quiz _ Quiz _ EHU111_T16 Courseware _ eLearn.html',
  'Quiz _ Quiz _ EHU111_T17 Courseware _ eLearn.html',
  'Shift Register _ Theoretical Material _ EHU111_T16 Courseware _ eLearn.html',
  'SR latches _ Theoretical Material _ EHU111_T16 Courseware _ eLearn.html',
  'Task 1. Applying Simple Methods of Compression _ Practice _ EHU111_T17 Courseware _ eLearn.html',
  'Task 1. Calculating parity bits _ Practice _ EHU111_T12 Courseware _ eLearn.html',
  'Task 1. Converting fixed-point binary to decimal form _ Practice _ EHU111_T10 Courseware _ eLearn.html',
  'Task 1. Converting from Binary to Decimal _ Practice _ EHU111_T2 Courseware _ eLearn.html',
  'Task 1. Converting Unsigned Integers from Decimal to One Complement Binary Forms _ Practice _ EHU111_T3 Courseware _ eLearn.html',
  'Task 2. Basic Binary Operations_ Addition _ Practice _ EHU111_T3 Courseware _ eLearn.html',
  'Task 2. Converting floating-point binary to decimal form _ Practice _ EHU111_T10 Courseware _ eLearn.html',
  'Task 2. Converting from Decimal to Binary _ Practice _ EHU111_T2 Courseware _ eLearn.html',
  'Task 2. Encoding Images _ Practice _ EHU111_T11 Courseware _ eLearn.html',
  'Task 2. Encrypting and Decrypting a Message _ Practice _ EHU111_T17 Courseware _ eLearn.html',
  'Task 3. Computing a Hash Value for a Message _ Practice _ EHU111_T17 Courseware _ eLearn.html',
  'Task 3. Converting from Binary to Hexadecimal _ Practice _ EHU111_T2 Courseware _ eLearn.html',
  'Task 3. Correcting errors using Hamming code _ Practice _ EHU111_T12 Courseware _ eLearn.html',
  'Task 4. Correcting errors using Hamming code _ Practice _ EHU111_T12 Courseware _ eLearn.html',
  'Task 5. Calculating checksums _ Practice _ EHU111_T12 Courseware _ eLearn.html',
  'The Hashing Function _ Theoretical Material _ EHU111_T17 Courseware _ eLearn.html',
]


const root = document.querySelector('ul');

files.map(el => {
  const elem = document.createElement('li');

  const item = document.createElement('a');
  item.href = `/src/${ el }`;
  item.textContent = el;

  item.style.lineHeight = 2;

  elem.appendChild(item);
  root.appendChild(elem);
})