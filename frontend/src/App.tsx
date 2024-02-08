
import './App.css'
import Body from './component/Body'
// import { useDispatch, useSelector } from 'react-redux'
import Navbar from './navbar/Navbar'
// import { decrement, increment } from './redux/AppSlice'

function App() {
  return (
    <>
    <div>
      <Navbar/>


      <div>
        <Body/>

      </div>
     
    </div>
      
    </>
  )
}

export default App
