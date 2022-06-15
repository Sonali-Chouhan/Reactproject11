import React,{useEffect, useState} from 'react'

const Home = () => {
  // const datas=process.env.REACT_APP_TOKEN;
// console.log("datas",datas)
  const [list,setlist] = useState([])
 const [data,setdata] = useState({
     name: '',
     last: '',
     email: '',
     phone: ''
 })


    const handelsubmit= (e) =>{
      e.preventDefault()
      const item = data
      const ppp = list
      console.log("2222",item)
     
     
      ppp.push({
        name: item.name,
        last: item.last,
        email:item.email,
        phone: item.phone
 
      });
      setlist(ppp);
      setdata(
       
        {...data,item,
          name: '',
          last: '',
          email: '',
          phone: ''
       
        }

        )

      console.log('22',list)
    }
    useEffect(()=>{

    },[list])
  return (
    <div>
    <form  onSubmit={handelsubmit}  >
<label>name</label><br></br>
<input type="text"  name='name'  value={data.name}  onChange={(e)=>setdata({...data,name:e.target.value})} /><br></br>
<label>last</label><br></br>
<input type="text"  name="last" value={data.last}  onChange={(e)=>setdata({...data,last:e.target.value})}  /><br></br>
<label>phone</label><br></br>
<input type="text" name="phone"  value={data.phone} onChange={(e)=>setdata({...data,phone:e.target.value})}  /><br></br>
<label>email</label><br></br>
<input type="text"  name='email' value={data.email}  onChange={(e)=>setdata({...data,email:e.target.value})} /><br></br>
<button type='submit' >submit</button>


    </form>
    {
      list.map((p,index)=>{
        return(
          <>
          <h3 key={index}>{p.name}</h3>
          <h3>{p.last}</h3>
          <h3>{p.phone}</h3>
          <h3>{p.email}</h3>

          </>
        )
      })
    }




 
</div>
  )
}

export default Home


