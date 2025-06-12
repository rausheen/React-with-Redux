
import './App.css'
import {incNum} from './action';
import {decNum} from './action';
import { useDispatch ,useSelector } from 'react-redux';

 function App() {
  const dispatch=useDispatch();
  const changeTheNumber=useSelector(state=>state.changeTheNumber)
  return (
    <>
    <div>
      <a onClick={()=> dispatch(decNum())} title='DECREMENT'>DECREMENT</a>
      <input type="text" value={changeTheNumber} />
      <a onClick={()=> dispatch(incNum())} title='INCREMENT'>INCREMENT</a>
    </div>
    </>
  )
 }
export default App
