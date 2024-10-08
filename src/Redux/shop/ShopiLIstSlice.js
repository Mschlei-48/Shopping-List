import {createSlice} from "@reduxjs/toolkit";

const initialState={
    tasks:[],
};

const shopListSlice=createSlice({
    name:"shop",
    initialState,
    reducers:{
        addList:(state,action)=>{
            state.tasks.push(action.payload);
        },
        removeList:(state,action)=>{
            state.tasks= state.tasks.filter((task)=>task.id!==action.payload);
        },
        editList:(state,action)=>{
            const {id,newItem,category,size,quantity}=action.payload
            const task=state.tasks.find(((task)=>task.id==id));
            if(task){
                task.shopItem=newItem;
                task.size=size;
                task.category=category;
                task.quantity=quantity
            }
        }
            },
})

export default shopListSlice.reducer
export const{addList,removeList,editList}=shopListSlice.actions;
// export default shopListSlice







  
