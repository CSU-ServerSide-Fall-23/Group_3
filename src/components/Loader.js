import spinner from './loading.gif'

const Loader = () => {
  return (
    <div className="loader">
        <img src={spinner} alt="Loading icon"/>
        <h1> Wait a minute</h1>
    </div>
  )
}

export default Loader