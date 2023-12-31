import spinner from '../media/loading.gif'

const Loader = () => {
  return (
    <div className = "loader">
      <img src = { spinner } alt = "Loading icon"/>
      <h1>
        Loading...
      </h1>
    </div>
  )
}

export default Loader