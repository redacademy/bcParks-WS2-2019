const {Query} = require('./Query')
const {auth} = require('./Mutation/auth')
const {User} = require('./User')

module.exports = {
  Query,
  Mutation: {
    ...auth,
  },
  User,
}
