function rot13(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwqyz'.split('');
  let newString = '';

  let originalIndex = 0;
  let newIndex = 0;

  for (let i = 0; i < string.length; i++) {
    if (alphabet.includes(string[i].toLowerCase())) {

      originalIndex = alphabet.findIndex(element => element === string[i].toLowerCase());
      newIndex = originalIndex + 13;
      if (newIndex > 25) {
        newIndex = newIndex - 26;
      }

      if (string[i].toUpperCase() === string[i]) {
        newString += alphabet[newIndex].toUpperCase();
      } else {
        newString += alphabet[newIndex];
      }
    } else {
      newString += string[i];
    }
  }

  return newString
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));