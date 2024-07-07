import netflixSpinner from '../../assets/netflixSpinner.gif'

const Spinner = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <img src={netflixSpinner} alt="" className='w-16'/>
    </div>
  )
}

export default Spinner
