import {axiosServic} from "./axios.servic";
import {urls} from "../constants/constants";

export const carsServices = {
    getAll: ()=>axiosServic(urls.cars),
    getById: (carId)=>axiosServic.get(`${urls.cars}/${carId}`),
    addNewCar: (newCar)=>axiosServic.post(urls.cars,newCar),
    deleteById: (carId)=>axiosServic.delete(`${urls.cars}/${carId}`),
    change: (id,item)=>axiosServic.put(`${urls.cars}/${id}`,item)
}