
import './App.css';
// import Carss from "./components/cars/carss";
// import CarForm from "./components/carForm/carForm";
import {useReducer, useState} from "react";

function App() {
    const [value,setValue]=useState({cat:'',dog:''})

    const reducer = (state,action)=>{
       const{type,payload}=action
       switch (type) {
           case 'addCat':
               return{...state,cat:[...state.cat,{name:payload,id:Date.now()}]}
           case 'delyteCat':
               return {...state,cat: state.cat.filter(catDelyte => catDelyte.id !== payload)}
           case 'addDog':
               return{...state,dog:[...state.dog,{name:payload,id:Date.now()}]}
           case 'delyteDog':
               return {...state,dog: state.dog.filter(dogDelyte => dogDelyte.id !== payload)}
       }
    }

    const [state,dispatch] = useReducer(reducer,{cat:[],dog:[]})

    const createOrDelyte = (type,payload) => {
       dispatch({type,payload})
        setValue({cat:'',dog:''})
    }
    console.log(value)
  return (
      <div>
          <div><label>Cat<input type="text" placeholder={'catname'} value={value.cat}
                              onChange={({target}) => setValue({cat: target.value})}/></label>
              <button onClick={() => createOrDelyte('addCat', value.cat)}>addCat</button>
                  {state.cat.map(catName=><div key={catName.id} >{catName.name}
                      <button onClick={()=>createOrDelyte('delyteCat',catName.id)}>delyte</button></div>)}

          </div>
          <div><label>Dog<input type="text" placeholder={'dogname'}
                              onChange={({target}) => setValue({dog: target.value})}/></label>
              <button onClick={() => createOrDelyte('addDog', value.dog)}>addDog</button>
              {state.dog.map(dogName=><div key={dogName.id} >{dogName.name}
                  <button onClick={()=>createOrDelyte('delyteDog',dogName.id)} >delyte</button></div>)}
          </div>
      </div>

  );
}

export default App;
