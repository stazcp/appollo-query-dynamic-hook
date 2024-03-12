import { ApolloProvider } from '@apollo/client'
import client from './apolloClient'
import './App.css'
import StrategiesComponent from './StrategiesComponent'

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Dynamic Query Example</h1>
        <StrategiesComponent />
      </div>
    </ApolloProvider>
  )
}

export default App
