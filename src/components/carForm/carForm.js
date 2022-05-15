import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carsServices} from "../../services";
import {joiResolver} from "@hookform/resolvers/joi";
import {carvalidator} from "../validator/validator";

const CarForm = ({setNewCar, carByUpdate, setUpdatedCar,setCarByUpdate}) => {
    const {register, reset, handleSubmit, formState: {errors,isValid}, setValue} = useForm({
        resolver: joiResolver(carvalidator),
        mode: 'onTouched'
    })
    useEffect(() => {
        if (carByUpdate) {
            setValue('model', carByUpdate.model)
            setValue('price', carByUpdate.price)
            setValue('year', carByUpdate.year)
        }
    }, [carByUpdate])

    const mySabmit = async (car) => {
        if (carByUpdate) {
            const {data} = await carsServices.change(carByUpdate.id, car)
            setUpdatedCar(data)
            setCarByUpdate(false)
        } else {
            const {data} = await carsServices.addNewCar(car)
            setNewCar(data)
        }
        reset()
    }

    return (
        <form onSubmit={handleSubmit(mySabmit)}>

            <div><label>Model:<input type="text" {...register('model')} /></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>price:<input type="text" {...register('price', {valueAsNumber: true})} /></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>year<input type="text" {...register('year', {valueAsNumber: true})} /></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid} >{carByUpdate ? ' Update' : 'Creat'}</button>


        </form>
    );
};

export default CarForm;