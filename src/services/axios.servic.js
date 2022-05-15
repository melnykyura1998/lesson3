import axios from "axios";
import baseURL from "../constants/constants";

export const axiosServic = axios.create({baseURL})