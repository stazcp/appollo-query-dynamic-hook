import { useQuery, gql } from '@apollo/client'
import { useMemo } from 'react'
import { generateStratsAndAggsQuery } from './generateStratsAndAggsQuery'

function useCustomAnalysisStratsQuery(includeDetails: boolean) {
  const QUERY_STRING = useMemo(() => {
    const queryString = generateStratsAndAggsQuery(includeDetails)
    return gql`
      ${queryString}
    `
  }, [includeDetails])

  console.log('QUERY_STRING', QUERY_STRING)

  const { data, loading, error } = useQuery(QUERY_STRING, {
    fetchPolicy: 'no-cache',
  })

  return { data, loading, error }
}

export default useCustomAnalysisStratsQuery
