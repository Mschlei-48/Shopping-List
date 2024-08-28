import {useState,useEffect} from 'react';
// import {useDispatch,useSelector} from 'react-redux';
import { addList,removeList,editList } from './Redux/shop/ShopiLIstSlice.js';
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom'
import {addUser,removeUser} from './Redux/users/CredentialsSlice.js'
import {useDispatch,useSelector} from 'react-redux'
import "./login.css"

function Login(){
    // const navigate=useNavigate()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const userList=useSelector((state)=>state.credential.users)
    const [Username,setUsername]=useState("")
    const [Password,setPassword]=useState("")


    useEffect(()=>{
        const token=localStorage.getItem("token")
        if(token){
            navigate("/home")
        }
    })
    const handleLogin=(()=>{
        const user=userList.filter((user)=>user.username===(Username))
        console.log("User:",user)
        if(user.length>0 && user[0].password===Password){
            localStorage.setItem("token",Username)
            navigate("/home")
        }
        else if(user.length>0 && user[0].password!==Password){
            alert("Incorrect password")
        }
        else{
            alert("User not found, please register below")
        }

    })
    console.log(userList)
    return(
        <div className="login-container">
        <h1>Login</h1>
        <input className="login-input" placeholder="Enter Username" type="email" onChange={(event)=>setUsername(event.target.value)}></input>
        <input className="login-input" placeholder="Enter Password" onChange={(event)=>setPassword(event.target.value)}></input>
        <br></br>
        <button className="login-button" onClick={()=>handleLogin()}>Login</button>
        <p>Not a member? Click here to <a onClick={()=>navigate("/register")} style={{cursor:"pointer"}}>Register</a></p>
        </div>
    )
}
export default Login;