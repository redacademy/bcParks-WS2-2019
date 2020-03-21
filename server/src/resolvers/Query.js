const {getUserId} = require('../utils')

const Query = {
  users(parent, args, context) {
    return context.prisma.users()
  },
  me(parent, args, context) {
    const id = getUserId(context)
    return context.prisma.user({id})
  },
}

module.exports = {Query}
