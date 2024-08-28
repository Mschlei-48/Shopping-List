import {createSlice} from '@reduxjs/toolkit'

const initialState={
    users:[],
}

const credSlice=createSlice({
    name:"credential",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.users.push(action.payload)
        },
        removeUser:(state,action)=>{
            state.users=state.users.filter((user)=>user.username!==action.payload)
        }
    }

})

export default credSlice.reducer
// export default credSlice
export const{addUser,removeUser}=credSlice.actions
