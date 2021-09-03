  const reverseString = (string) => {
      const reStr = string.split('').reverse().join('')
      return reStr;
  }

  module.exports = reverseString;