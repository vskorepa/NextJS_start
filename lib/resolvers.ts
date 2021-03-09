import { QueryResolvers, MutationResolvers } from './type-defs.graphqls'
import { ResolverContext } from './apollo'
import console from 'console'

const userProfile = {
  id: String(1),
  name: 'John Smith',
  status: 'cached',
}
const rows = [
  {
    id: 0,
    name: 'Black Toner',
    code: 'CT4015PBDSL',
    description: 'černý toner do Xerox WC7545',
    count: 5,
  },
  {
    id: 1,
    name: 'Yelow Toner',
    code: 'ZL4015PBDCK',
    description: 'žlutý toner do Xerox WC7545',
    count: 3,
  },
  {
    id: 2,
    name: 'Cyan Toner',
    code: 'CT4015PBDSL',
    description: 'modrý toner do Xerox WC7545',
    count: 4,
  },
  {
    id: 3,
    name: 'Magenta Toner',
    code: 'ZL4015PBDCK',
    count: 8,
  },
]

const Query: Required<QueryResolvers<ResolverContext>> = {
  viewer(_parent, _args, _context, _info) {
    return userProfile
  },
  multipleRows(_parent, _args, _context, _info) {
    return rows
  },
  singleRow(_parent, _args, _context, _info) {
    return rows.find((row) => row.id === _args.id)
  },
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  updateName(_parent, _args, _context, _info) {
    console.log(`setting a new name to ${_args.name}`)
    userProfile.name = _args.name
    return userProfile
  },
  AddSingleRow(_parent, _args, _context, _info) {
    rows.push(_args)
    return _args
  },
  deleteSingleRow(_parent, _args, _context, _info) {
    rows.filter((x) => x.id !== _args.id)
    return rows.find((x) => x.id === _args.id)
  },
}

export default { Query, Mutation }
