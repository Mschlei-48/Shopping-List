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
    const [sort,setSort]=useState("")

    const [name,setName]=useState("")
    const [category,setCategory]=useState("All")
    const [size,setSize]=useState("")
    const [quantity,setQuantity]=useState(0)



    useEffect(()=>{
        // if(search===""){
        //     setData(shopList.tasks)
        // }
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
            <label for="cegories">Choose a category:</label>
            <select name="categories" id="categories-selector" onChange={(event)=>setCategory(event.target.value)}>
                <option value="Cereals">Cereals</option>
                <option value="Carbs">Carbs</option>
                <option value="Poultry">Poultry</option>
                <option value="Dairy">Dairy</option>
                <option value="Vegetables">Vegetables</option>
            </select>
            <br></br>
            <button onClick={()=>handleAdd()}>Add Item</button>
        </div>
        <h1>Shopping List</h1>
        <input placeholder="Search..." onChange={(event)=>setSearch(event.target.value)}></input>
        <br></br>
        <button onClick={()=>setCategory("All")}>All</button>
        <button onClick={()=>setCategory("Carbs")}>Carbs</button>
        <button onClick={()=>setCategory("Dairy")}>Dairy</button>
        <button onClick={()=>setCategory("Poultry")}>Poultry</button>
        <button onClick={()=>setCategory("Vegetables")}>Vegetables</button>
        {edit===true?(
            <>
            {/* <input placeholder="Enter Item" onChange={(event)=>dispatch(editList({id:editID,newItem:event.target.value}))}></input> */}
            <input placeholder="Enter Item Name" onChange={(event)=>setName(event.target.value)}></input>
            <br></br>
            <label for="cars">Choose a category:</label>
            <select name="categories" id="categories-selector" onChange={(event)=>setCategory(event.target.value)}>
                <option value="Cereals">Cereals</option>
                <option value="Carbs">Carbs</option>
                <option value="Poultry">Poultry</option>
                <option value="Dairy">Dairy</option>
                <option value="Vegetables">Vegetables</option>
            </select>
            <br></br>
            <input placeholder="Enter Size" type="text" onChange={(event)=>setSize(event.target.value)}></input>
            <br></br>
            <input placeholder="Enter Quantity" type="number" onChange={(event)=>setQuantity(event.target.value)}></input>
            <br></br>
            <button onClick={()=>{setEdit(false);dispatch(editList({id:editID,newItem:name,size:size,category:category,quantity:quantity}))}}>Save</button>
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