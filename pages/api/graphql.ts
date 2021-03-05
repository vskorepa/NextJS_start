import { ApolloServer, gql } from 'apollo-server-micro'

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

const typeDefs = gql`
  type Query {
    singleRow(id: Int!): Row!
    multipleRows: [Row]!
  }

  type Row {
    id: ID!
    name: String!
    code: String!
    description: String
    count: Int!
  }
`

const resolvers = {
  Query: {
    singleRow: (_, arg) => rows.find((row) => row.id === arg.id),
    multipleRows: () => rows,
  },
  Row: {
    id: (data) => data.id,
    name: (data) => data.name,
    code: (data) => data.code,
    description: (data) => data.description,
    count: (data) => data.count,
  },
}
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})

export const config = {
  api: {
    bodyParser: false,
  },
}
export default apolloServer.createHandler({ path: '/api/graphql' })
