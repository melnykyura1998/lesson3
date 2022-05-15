
import './App.css';
import Carss from "./components/cars/carss";
import CarForm from "./components/carForm/carForm";
import {useState} from "react";

function App() {
    const[newCar,setNewCar] = useState(null)
    const[idByUpdate,setIdByUpdate]=useState(null)
    const[updatedCar,setUpdatedCar]=useState(null)
  return (
    <div className="App">
        <CarForm setNewCar={setNewCar} carByUpdate={idByUpdate} setUpdatedCar={setUpdatedCar} setCarByUpdate={setIdByUpdate}/>
        <div className={'carss'} >
            <Carss newCar={newCar} setIdByUpdate={setIdByUpdate} updatedCar={updatedCar} />
        </div>
    </div>
  );
}

export default App;
