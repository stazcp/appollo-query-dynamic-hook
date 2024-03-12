import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { MockLink } from '@apollo/client/testing'

// Adjusted mocks to reflect the actual queries being sent
const mocks = [
  // Mock for query when details are included
  {
    request: {
      query: gql`
        query GetData {
          data {
            id
            name
            details
            __typename
          }
        }
      `,
    },
    result: {
      data: {
        data: [
          {
            id: '1',
            name: 'Strategy One',
            details: 'banana', // Assuming details are requested
            __typename: 'Strategy',
          },
          // Add more detailed items as necessary
        ],
      },
    },
  },
  // Mock for query when details are NOT included
  {
    request: {
      query: gql`
        query GetData {
          data {
            id
            name
            __typename
          }
        }
      `,
    },
    result: {
      data: {
        data: [
          // Assuming a simpler response when details are not requested
          {
            id: '1',
            name: 'Strategy One',
            __typename: 'Strategy',
          },
          // Add more basic items as necessary
        ],
      },
    },
  },
]

// Creating the Apollo Client with MockLink
const client = new ApolloClient({
  link: new MockLink(mocks),
  cache: new InMemoryCache(),
})

export default client
