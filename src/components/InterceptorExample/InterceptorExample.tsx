import { useApi } from "../../hooks/useApi"
import { RickAndMortiCharacter } from "../../models"
import { getMorty } from "../../services/api.service"

const InterceptorExample = () => {
  const { loading, error, data, fetch } = useApi<RickAndMortiCharacter>(getMorty, { autoFetch: true })

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h1>Character Data:</h1>
      <pre>{JSON.stringify(data)}</pre>
      <button onClick={fetch}>Refetch Data</button>
    </div>

  )
}

export default InterceptorExample;
