import React from 'react';
import {carsServices} from "../../services";

const Car = ({car,setIdByDelete,setIdByUpdate}) => {
    let deleteCar = async ()=>{
        await carsServices.deleteById(car.id)
        setIdByDelete(car.id)
    }
    return (
        <div>
            <div>id:{car.id}</div>
            <div>model:{car.model}</div>
            <div>price:{car.price}</div>
            <div>year:{car.year}</div>
            <button onClick={()=>deleteCar() }>delateCar</button>
            <button onClick={()=>setIdByUpdate(car)}>update car</button>
            <hr/>
        </div>
    );
};

export default Car;