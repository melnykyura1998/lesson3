import React, {useEffect, useState} from 'react';
import {carsServices} from "../../services";
import Car from "../car/car";

const Carss = ({newCar,setIdByUpdate,updatedCar}) => {
    const[cars,setCars] = useState([])
    const[idByDelete,setIdByDelete]=useState(null)
    useEffect(()=>{
        carsServices.getAll().then(({data})=>setCars(data))
    },[])

    useEffect(()=>{
        if(newCar) {
            setCars([newCar,...cars ])
        }
        if(idByDelete) {
            setCars(cars.filter((car)=> car.id !== idByDelete))
            // carsServices.deleteById(idByDelete).then(({data})=>setCars(data))
        }
    },[newCar,idByDelete])
    useEffect(()=>{
        if(updatedCar){
            cars.splice(cars.findIndex(car=>car.id===updatedCar.id),1,updatedCar)
            setCars([...cars])
        }

    },[updatedCar])

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setIdByDelete={setIdByDelete} setIdByUpdate={setIdByUpdate}/>)}

        </div>
    );
};

export default Carss;