import React from 'react'
import { Nav } from '../components/atomic/Nav'
import { RowList } from './../components/RowList'
import { Row } from './../components/types'
import styles from '../styles/Home.module.css'
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useQuery,
} from '@apollo/client'

const GET_ROWS = gql`
  {
    multipleRows {
      id
      name
      code
      count
      description
    }
  }
`

const Sklad = () => {
  const { loading, error, data } = useQuery(GET_ROWS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <Nav></Nav>
      <div className={styles.sklad}>
        <header className="Sklad-header"></header>
        <RowList items={data.multipleRows}></RowList>
      </div>
    </>
  )
}

export default Sklad
