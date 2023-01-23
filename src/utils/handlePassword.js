const bcrypjs = require('bcryptjs')

const encrypt = async (passwordPlain) => {
  const hash = await bcrypjs.hash(passwordPlain, 10)
  return hash
}

const compare = async (passwordPlain, hashPassword) => {
  return await bcrypjs.compare(passwordPlain, hashPassword)
};


module.exports = { encrypt, compare }