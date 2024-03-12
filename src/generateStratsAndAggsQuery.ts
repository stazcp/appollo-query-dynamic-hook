export const generateStratsAndAggsQuery = (includeDetails: boolean) => {
  // Construct the fields selection based on the includeDetails boolean
  const fieldsToSelect = includeDetails
    ? 'id name details __typename' // Include 'details' when includeDetails is true
    : 'id name __typename' // Exclude 'details' otherwise

  // Remove the $includeDetails variable from the query string
  return `
    query GetData {
      data {
        ${fieldsToSelect}
      }
    }
  `
}
