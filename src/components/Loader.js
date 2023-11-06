import spinner from './loading.gif'

const Loader = () => {
  return (
    <div className = "loader">
        <img src = {spinner} alt = "Loading icon"/>
        <h1> loading...</h1>
    </div>
  )
}

export default Loader