import React, { useRef, useState } from 'react'

const Example1 = () => {
    const input1=useRef();
    const input2=useRef();
    const input3=useRef();
    const input4=useRef();

    const[item,setitem]=useState([])
    const InputValue=()=>{
      const data1=  input1.current.value;
      const data2=  input2.current.value;
      const data3=  input3.current.value;
      const data4=  input4.current.value;
      
      console.log("data1",data1)
      console.log("data2",data2)
      console.log("data3",data3)
      console.log("data4",data4)
      const record=item
      record.push({data1,data2,data3,data4})
      setitem(record)
    console.log("record",record)
    }
    
  return (
    <div>
        <h3>Use useRef</h3>
         <input type="text" ref={input1}/><br/>
         <input type="text" ref={input2}/><br/>
         <input type="text" ref={input3}/><br/>
         <input type="text" ref={input4}/><br/>
         <button onClick={InputValue}>Save</button>

    </div>
  )
}

export default Example1