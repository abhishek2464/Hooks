
import './App.css'
import Home  from '../Components/Home'
function App() {

  return (
    <>
    <div className='header'>
      <button className='btn one'>Home
        <Route path='/' element={<Home/>}></Route>
      </button>
      <button className='btn two'>About us</button>
      <button className='btn three'>Rooms</button>
      <button className='btn four'>Blog</button>
      <button className='btn five'>Concact</button>
      <button className='btn six'>Book-Online</button>
      <button className='btn seven'>Contact-us</button>

      <img  className='img' src='https://m.bbb.org/prod/corecmsimages/03e136d8-c7c8-4fd8-be3e-876d90d00b58.jpg' alt=""></img>
      <button className='btn five'>Check-in</button>
      <button className='btn '>Check-out</button>
      <button className='btn '>Book</button>
    </div>
    </>
  )
}

export default App
