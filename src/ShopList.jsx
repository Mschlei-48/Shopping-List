import {useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { removeList,editList, addList } from './Redux/shop/ShopiLIstSlice.js';
import './ShopList.css'
import {useNavigate} from 'react-router-dom'

function ShopList(){
    const shopList =useSelector(state=>state.shop);
    const [data,setData]=useState([])
    const [uniqueData,setUniqueData]=useState([])
    const dispatch=useDispatch();
    const [search,setSearch]=useState("")
    const [edit,setEdit]=useState(false)
    const [editID,setEditID]=useState(0)
    const [sort,setSort]=useState("")

    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [category,setCategory]=useState("All")
    const [itemCategory,setItemCategory]=useState("")
    const [size,setSize]=useState("")
    const [quantity,setQuantity]=useState(0)



    useEffect(()=>{
        handleCategories()

    })


    const handleCategories=(()=>{
        if(category==="All"){
            setData(shopList.tasks)
        }
        else if(category==="Carbs"){
            setData(shopList.tasks.filter((item)=>item.category==category))
        }
        else if(category==="Vegetables"){
            setData(shopList.tasks.filter((item)=>item.category==category))
        }
        else if(category==="Dairy"){
            setData(shopList.tasks.filter((item)=>item.category==category))
        }
        else if(category==="Poultry"){
            setData(shopList.tasks.filter((item)=>item.category==category))
        }
        if(search!==""){
            setData(shopList.tasks.slice(1,).filter((item)=>(item.shopItem.toLowerCase()).includes((search.toLowerCase()))))
        }
    })



    const handleAdd=(()=>{
        if(name!=="" && itemCategory!=="" && size!=="" && quantity!==0 && quantity!==""){
            dispatch(addList({shopItem:name,id:Date.now(),category:itemCategory,size:size,quantity:quantity}))
        }
        else{
            alert("Please enter the required fields")
        }
        
    })

    const handleEdit=(()=>{
        if(name!=="" && itemCategory!=="" && size!=="" && quantity!==0 && quantity!==""){
            dispatch(editList({id:editID,newItem:name,size:size,category:itemCategory,quantity:quantity}))
            setEdit(false)
        }
        else{
            alert("Please enter the required fields")
        } 
    })
    return(
        <div className="main-content">
            <button style={{marginLeft:"900px",backgroundColor:"orange"}} onClick={()=>{navigate("/");localStorage.removeItem("token")}}>Logout</button>
        <div className="form-content">
            <h3>Enter Shopping List Items</h3>
            <input placeholder="Enter Item Name" className="form-input" onChange={(event)=>setName(event.target.value)}></input>
            <input placeholder="Enter Quantity" className="form-input" type="number" onChange={(event)=>setQuantity(event.target.value)}></input>
            <input placeholder="Enter Size" style={{marginRight:"359px"}} className="form-input" type="text" onChange={(event)=>setSize(event.target.value)}></input>
            <br></br>
            <label for="cegories" className="label">Choose a category:  </label>
            <select name="categories" className="categories-selector" onChange={(event)=>setItemCategory(event.target.value)}>
                <option value="Cereals">Cereals</option>
                <option value="Carbs">Carbs</option>
                <option value="Poultry">Poultry</option>
                <option value="Dairy">Dairy</option>
                <option value="Vegetables">Vegetables</option>
            </select>
            <br></br>
            <button onClick={()=>handleAdd()} className="addButton">Add Item</button>
        </div>
        <h3>Shopping List</h3>
        <input placeholder="Search..." className="search" onChange={(event)=>setSearch(event.target.value)}></input>
        <br></br>
        <div className="category-div">
            <button className="category-button" id="all-button" onClick={()=>setCategory("All")}>All</button>
            <button className="category-button" id="carbs-button" onClick={()=>setCategory("Carbs")}>Carbs</button>
            <button className="category-button" id="diary-button" onClick={()=>setCategory("Dairy")}>Dairy</button>
            <button className="category-button" id="poultry-button" onClick={()=>setCategory("Poultry")}>Poultry</button>
            <button className="category-button" id="vegetable-button" onClick={()=>setCategory("Vegetables")}>Vegetables</button>
        </div>
        {edit===true?(
            <>
            <input className="edit-input" placeholder="Enter Item Name" onChange={(event)=>setName(event.target.value)}></input>
            <br></br>
            <input className="edit-input" placeholder="Enter Size" type="text" onChange={(event)=>setSize(event.target.value)}></input>
            <br></br>
            <input className="edit-input" placeholder="Enter Quantity" type="number" onChange={(event)=>setQuantity(event.target.value)}></input>
            <br></br>
            <label className="edit-label" for="categories">Choose a category:  </label>
            <select name="categories" className="categories-selector" onChange={(event)=>setItemCategory(event.target.value)}>
                <option value="Cereals">Cereals</option>
                <option value="Carbs">Carbs</option>
                <option value="Poultry">Poultry</option>
                <option value="Dairy">Dairy</option>
                <option value="Vegetables">Vegetables</option>
            </select>
            <br></br>
            <button onClick={()=>handleEdit()}>Save</button>
            <button onClick={()=>setEdit(false)}>Cancel</button>
        </>
    ):(
        <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.shopItem}</td>
              <td>{item.category}</td>
              <td>{item.size}</td>
              <td>{item.quantity}</td>
              <td><button className="edit-button" onClick={() => { setEdit(true); setEditID(item.id)}}>Edit</button></td>
              <td><button className="delete-button" onClick={() => dispatch(removeList(item.id))}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
            )
    }
    </div>
    )
}

export default ShopList;