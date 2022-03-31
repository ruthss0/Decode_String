const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const decoder = (code) => {
  const codeArr = code.split("");
  const num = parseInt(codeArr.shift());
  const mapCode = codeArr.map(value => {
    const addIndex = alphabet.indexOf(value) + num;
    return alphabet[addIndex % alphabet.length];
  })
  return mapCode.join("");
}

console.log(decoder('1a')) // Should print 'b'
console.log(decoder('3ce')) // Should print 'fh'
console.log(decoder('2fcjjm')) // Should print 'hello'
