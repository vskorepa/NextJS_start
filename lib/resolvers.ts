import { QueryResolvers, MutationResolvers } from './type-defs.graphqls'
import { ResolverContext } from './apollo'
import console from 'console'

const row = {
  id: String(1),
  name: 'Černý Toner',
  code: 'CT4015PBDSL',
  description: 'černý toner do Xerox WC7545',
  count: 5,
}
const rows = [
  {
    id: 1,
    name: 'Black Toner',
    code: 'CT4015PBDSL',
    description: 'černý toner do Xerox WC7545',
    count: 5,
  },
  {
    id: 2,
    name: 'Yelow Toner',
    code: 'ZL4015PBDCK',
    description: 'žlutý toner do Xerox WC7545',
    count: 3,
  },
  {
    id: 3,
    name: 'Cyan Toner',
    code: 'CT4015PBDSL',
    description: 'modrý toner do Xerox WC7545',
    count: 4,
  },
  {
    id: 4,
    name: 'Magenta Toner',
    code: 'ZL4015PBDCK',
    description: 'fialový toner do Xerox WC7545',
    count: 8,
  },
]

const Query: Required<QueryResolvers<ResolverContext>> = {
  row(_parent, _args, _context, _info) {
    return row
  },
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  updateName(_parent, _args, _context, _info) {
    console.log(`setting a new name to ${_args.name}`)
    row.name = _args.name
    return row
  },
}

export default { Query, Mutation }
