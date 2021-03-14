import { QueryResolvers, MutationResolvers } from './type-defs.graphqls'
import { ResolverContext } from './apollo'
require('dotenv').config()

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
  multipleRows: async (_parent, _args, _context, _info) => {
    const data = await fetch(`${process.env.DB_SRC}/rows.json`)
    const dataJson = await data.json()
    return dataJson
  },
  singleRow: async (_parent, _args, _context, _info) => {
    const data = await fetch(`${process.env.DB_SRC}/rows.json`)
    const dataJson = await data.json()
    return dataJson.find((row) => row.id === _args.id)
  },
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  AddSingleRow: async (_parent, _args, _context, _info) => {
    const data = await fetch(`${process.env.DB_SRC}/rows.json`)
    const dataJson = await data.json()

    if (!dataJson.find((x) => x.id === _args.id)) dataJson.push(_args)
    return dataJson.find((row) => row.id === _args.id)
  },
  deleteSingleRow(_parent, _args, _context, _info) {
    rows.filter((x) => x.id !== _args.id)
    return rows.find((x) => x.id === _args.id)
  },
}

export default { Query, Mutation }
