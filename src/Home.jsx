import {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { addList,removeList,editList } from './Redux/ShopiLIstSlice.js';
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom'


function Home(){
    const dispatch=useDispatch();
    // const inputRef=useRef(null)
    const [selected,setSelected]=useState(false)
    const shopList=useSelector(state =>state.shop)
    const navigate=useNavigate()
    console.log(shopList)


    return(
        <>
        {selected===true?(
                <div>
                    <h1>Shopping List</h1>
                    <button onClick={()=>{dispatch(addList({id:Date.now(),shopItem:"Onions"}));setSelected(true)}}>+</button><span>Onions</span>
                    <p>vegetables</p>
                   
                    <br></br>
                    <button onClick={()=>{dispatch(addList({id:Date.now(),shopItem:"Tomatoes"}));setSelected(true)}}>+</button><span>Tomatoes</span>
                   
                    <br></br>
                    <button onClick={()=>{dispatch(addList({id:Date.now(),shopItem:"Eggs"}));setSelected(true)}}>+</button><span>Eggs</span>
                    
                    <br></br>
                    <button onClick={()=>{dispatch(addList({id:Date.now(),shopItem:"Bread"}));setSelected(true)}}>+</button><span>Bread</span>
                    
                    <br></br>
                    <button onClick={()=>{dispatch(addList({id:Date.now(),shopItem:"Rice"}));setSelected(true)}}>+</button><span>Rice</span>
                    
                    <br></br>
                    <button onClick={()=>navigate("/list")}>Add Shopping List ({shopList.tasks.length})</button> 
                </div>  
        ):
        (
            <div onClick={()=>setSelected(true)}>
            <h1>Shopping List</h1>
            <button onClick={()=>{dispatch(addList({id:Date.now(),shopItem:"Onion"}));setSelected(true)}}>+</button><span>Onions</span>
            <p>Vegetables</p>
                <input placeholder="Quantity"/>
            <br></br>
            <button onClick={()=>{dispatch(addList({id:Date.now(),shopItem:"Tomato"}));setSelected(true)}}>+</button><span>Tomatoes</span>
            <p>Vegetables</p>
            <input placeholder="Quantity"/>
            <br></br>
            <button onClick={()=>{dispatch(addList({id:Date.now(),shopItem:"Eggs"}));setSelected(true)}}>+</button><span>Eggs</span>
            <p>Poultry</p>
            <input placeholder="Quantity"/>
            <br></br>
            <button onClick={()=>{dispatch(addList({id:Date.now(),shopItem:"Bread"}));setSelected(true)}}>+</button><span>Bread</span>
            <p>Carbs</p>
            <input placeholder="Quantity"/>
            <br></br>
            <button onClick={()=>{dispatch(addList({id:Date.now(),shopItem:"Rice"}));setSelected(true)}}>+</button><span>Rice</span>
            <p>Carbs</p>
            <input placeholder="Quantity"/>
            <br></br>
            </div>
        )}

        </>
    )
}

export default Home;