import {useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { removeList,editList, addList } from './Redux/ShopiLIstSlice.js';


function ShopList(){
    const shopList =useSelector(state=>state.shop);
    const [data,setData]=useState([])
    const [uniqueData,setUniqueData]=useState([])
    const dispatch=useDispatch();
    const [search,setSearch]=useState("")
    const [edit,setEdit]=useState(false)
    const [editID,setEditID]=useState(0)

    const [name,setName]=useState("")
    const [category,setCategory]=useState("")
    const [size,setSize]=useState("")
    const [quantity,setQuantity]=useState(0)



    useEffect(()=>{
        handleSearch()
    },[search,shopList])


    const handleSearch=(()=>{
        if(search===""){
            setData(shopList.tasks)
        }
        else if(search!==""){
            setData(shopList.tasks.slice(1,).filter((item)=>(item.shopItem.toLowerCase()).includes((search.toLowerCase()))))
        }
    })

    const handleAdd=(()=>{

        dispatch(addList({shopItem:name,id:Date.now(),category:category,size:size,quantity:quantity}))
    })



    console.log("Data:",data)
    return(
        <div>
        <div className="form-content">
            <input placeholder="Enter Item Name" onChange={(event)=>setName(event.target.value)}></input>
            <br></br>
            <input placeholder="Enter Quantity" type="number" onChange={(event)=>setQuantity(event.target.value)}></input>
            <br></br>
            <input placeholder="Enter Size" type="text" onChange={(event)=>setSize(event.target.value)}></input>
            <br></br>
            <label for="cars">Choose a category:</label>
            <select name="categories" id="categories-selector" onChange={(event)=>setCategory(event.target.value)}>
                <option value="cereals">Cereals</option>
                <option value="carbs">Carbs</option>
                <option value="poultry">Poultry</option>
                <option value="dairy">Dairy</option>
            </select>
            <br></br>
            <button onClick={()=>handleAdd()}>Add Item</button>
        </div>
        <h1>Shopping List</h1>
        <input placeholder="Search..." onChange={(event)=>setSearch(event.target.value)}></input>
        <br></br>
        <button>All</button>
        <button>Carbs</button>
        <button>Dairy</button>
        <button>Poultry</button>
        {edit===true?(
            <>
            <input placeholder="Enter Item" onChange={(event)=>dispatch(editList({id:editID,newItem:event.target.value}))}></input>
            <button onClick={()=>setEdit(false)}>Save</button>
        </>
    ):(
        data.map((item)=>(
            <div key={item.id}>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    <tr>
                        <td>{item.shopItem}</td>
                        <td>{item.category}</td>
                        <td>{item.size}</td>
                        <td>{item.quantity}</td>
                        <td><button onClick={()=>{setEdit(true);setEditID(item.id)}}>Edit</button></td>
                        <td><button onClick={()=>dispatch(removeList(item.id))}>Delete</button></td>
                    </tr>
                </table>
                {/* <span>{item.shopItem}</span>
                <span>   </span>
                <span>   </span>
                <span>   </span>
                <span>{item.category}</span> */}
                {/* <button onClick={()=>{setEdit(true);setEditID(item.id)}}>Edit</button>
                <button onClick={()=>dispatch(removeList(item.id))}>Delete</button> */}
                {/* <button style={{position:"fixed",bottom:"30px",right:"30px"}}>Add more items+</button> */}
                </div>
            ))
    )}

    </div>
    )
}

export default ShopList;