import {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {addUser,removeUser} from './Redux/users/CredentialsSlice.js'
import {useNavigate} from 'react-router-dom'
import './register.css'


function Register(){
    const userList=useSelector((state)=>state.credential.users)
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [data,setData]=useState([])
    const navigate=useNavigate()

    const dispatch=useDispatch()

    useEffect(()=>{
        const token=localStorage.getItem("token")
        if(token){
            navigate("/home")
        }
    })

    const handleUserReg=(()=>{
        if(username!=="" && password!==""){
            dispatch(addUser({username:username,password:password}))
            localStorage.setItem("token",username)
            navigate("/home")
            
            
        }
        else{
            alert("Please enter all the required information")
        }
    })
    
    return(
        <div className="register-container">
        <h1>Register Page</h1>
        <input className="register-input" placeholder="Enter username" type="email" onChange={(event)=>setUsername(event.target.value)}></input>
        <input className="register-input"placeholder="Enter password" onChange={(event)=>setPassword(event.target.value)}></input>
        <button className="register-button" onClick={()=>handleUserReg()}>Register</button>
        <p>Already a member? Click here to <a onClick={()=>navigate("/")} style={{cursor:"pointer"}}>Login</a></p>
        </div>
    )
}

export default Register;