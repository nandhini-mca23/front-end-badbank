// import userContext from "./context";

// import {useContext} from 'react';
// import './App.css';
// import { useState } from "react";
// import axios from 'axios';


// function Alldata(){

//     const ctx = useContext(userContext)
    
//     return(<><br></br>
//     <h1 className="account">Alldata</h1><br></br>
//     {/* <h2>{JSON.stringify(ctx.users[0])}</h2> */}
//     <table>
//         <tr>
//             <th><td>Name</td></th>
//             <th><td>Email</td></th>
//             <th><td>Password</td></th>
//             <th><td>Amount</td></th>
//             <th><td>delete account</td></th>
//         </tr>
//         {
//             ctx.user.map((item,key)=>{
// return      <tr>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//             <td>{item.password}</td>
//             <td>{item.amount}
//             </td>
//             <td> <button className="bb">delete</button></td>
//         </tr>

//             })
        
// }
//     </table>
//     </>)
// }

// export default Alldata;

//////////////////////////////////////////////////////////////////////////////////////////////////////
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";


function Alldata() {
  const [data, setData] = useState([]);
  const [delTrigger,setDelTrigger] = useState(false)

 

  function delClick(id){
    axios.delete(`https://server-1-tq16.onrender.com/delete/${id}`).then(setDelTrigger(true))
  }

  useEffect(()=>{

    axios.get("https://server-1-tq16.onrender.com/data").then((item) => {
      setData(item.data);
      setDelTrigger(false)
  })
  },[delTrigger])
 

  return (
    <>
      
      <table>
        <tr>
          <th>
            <td>Name</td>
          </th>
          <th>
            <td>Email</td>
          </th>
          <th>
            <td>Password</td>
          </th>
          <th>
            <td>Amount</td>
          </th>
          <th>
            <td>Delete Account</td>
          </th>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>{item.amount}</td>
            <td>
              <button onClick={()=>delClick(item._id)} className="btn-del">Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Alldata;