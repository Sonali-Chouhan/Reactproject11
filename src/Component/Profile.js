import React, { useState } from 'react';
//import { useForm, Controller } from "react-hook-form";
// import Select from "react-select";
// import MultiSelect from  'react-multiple-select-dropdown-lite'
// import  'react-multiple-select-dropdown-lite/dist/index.css'


const Profile = () => {
    
    // const [value, setvalue] = useState()
    const [state,setState]=useState({
        userList:[],
        firstName:"",
        lastName:'',
        email:'',
        password:"",
        number:""
    })
    const handleSave=(event)=>{
        event.preventDefault()
        var userList=state.userList
        userList.push({
                       firstName:state.firstName,lastName:state.lastName,
                       email:state.email,password:state.password,number:state.number
                    })
        setState({
            ...state,
            userList,
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            number:''
        })


    }
    
  return (
    <div>
       
        <form>
            <h3>User-Form</h3>
            <label>First-Name</label><br/>
            <input type="text" 
                   name="firstName" 
                   value={state.firstName} 
                   onChange={(e)=>setState({...state,firstName:e.target.value})}/><br/>
             <label>Last-Name</label><br/>
            <input type="text" 
                   name="lastName" 
                   value={state.lastName} 
                   onChange={(e)=>setState({...state,lastName:e.target.value})}/><br/>
             <label>Email</label><br/>
            <input type="text" 
                   name="email" 
                   value={state.email} 
                   onChange={(e)=>setState({...state,email:e.target.value})}/><br/>
             <label>Password</label><br/>
            <input type="text" 
                   name="password" 
                   value={state.password} 
                   onChange={(e)=>setState({...state,password:e.target.value})}/><br/>
             <label>Contact</label><br/>
            <input type="text" 
                   name="number" 
                   value={state.number} 
                   onChange={(e)=>setState({...state,number:e.target.value})}/><br/>
            <button onClick={handleSave}>Save</button>

        </form>
        
        
        <center>
        <h3>User-Table</h3>
        <table border="1px solid black">
            <thead>
                <tr>
                    <th>User-Name</th>
                    <th>Last-Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.userList.map((item,id)=>{
                        return(
                            <tr key={id}>
                           
                               <td>{item.firstName}</td>
                               <td>{item.lastName}</td>
                               <td>{item.email}</td>
                               <td>{item.number}</td>
                           
                           </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </center>
    </div>
  )
}

export default Profile