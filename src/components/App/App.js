import './App.css';
import Planets from '../Planets';
import { getPlanets } from '../../context/Action';
import { Context } from '../../context/Context';
import  { useEffect,useContext } from'react'




function App() {


const {data, setData} = useContext(Context)

useEffect(() => {
  getPlanets(setData)
},[]);
 
  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      <Planets />
      {/* <button onClick={()=>{getPlanets(setErrors,setData)}}/> */}
    </div>
  );
}

export default App;
