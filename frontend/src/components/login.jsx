

import { useState } from "react";
import Onboarding from "./onboarding";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

   
    const handleSubmit=async (e)=>{
         
        e.preventDefault();

        try {
            const response= await fetch('http://localhost:8080/users/login',{
                method:"POST",
                headers:{
                    "Content-Type":'application/json',
                },
                body:JSON.stringify({
                    email:email,
                    password:password,
                }),
            });
            const data=await response.json();
            if(response.ok){
                alert('user logged in');
                navigate('/onboarding')

            }
            else{
                if (response.status === 401) {
                    alert('Wrong credentials');
                  } else {
                    alert('An error occurred during login');
                  }
            }
        } 
        
        catch (err) {
            console.error(err)
        }

    }


    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
  <h1 style={{ color: '#333' }}>Login Page</h1>
  <form
    action=""
    onSubmit={handleSubmit}
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <input
      type="text"
      placeholder="Email"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value);
      }}
      style={{ margin: '10px', padding: '5px' }}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => {
        setPassword(e.target.value);
      }}
      style={{ margin: '10px', padding: '5px' }}
    />
    <button style={{ margin: '10px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
  </form>
</div>

    )
}