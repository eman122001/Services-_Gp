import { createSlice } from "@reduxjs/toolkit";

let AddService = createSlice({
    name : "addition",
    initialState : [],
    reducers : {
        Add : (state , action) => {

            let find = state.find((serv)=> serv.id === action.payload.id)

            if(find){

            }else {
                state.push({...action.payload , quantity : 1});
            }

        },
        deleteServ : (state , action)=>{
            return state.filter(produc => {
                return produc.id !== action.payload.id
            });
        },
        increment : (state , action) => {
            let serv = state.find(serv => serv.id === action.payload.id)

            serv ? serv.quantity+=1 : console.log("not found")
        },
        decrement : (state , action) => {
            let serv = state.find(serv => serv.id === action.payload.id)

            serv ? serv.quantity-=1 : console.log("not found")
        }
    }
})

export default AddService.reducer;
export let {Add , deleteServ , increment , decrement } = AddService.actions