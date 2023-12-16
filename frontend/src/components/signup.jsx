
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function Signup() {

const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const navigate=useNavigate();


  const handleSubmit=async(e)=>{
    e.preventDefault()

   try{
      const response=await fetch('http://localhost:8080/users/register',{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            email:email,
            password:password
        }),
      });
      const data=await response.json();
      alert('user has been added')
      navigate('/login')
      console.log(data);
      setEmail('');
      setPassword('');
   }
   catch(err){
       console.error(err);
   }


    
    // console.log(email,password);


  }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
  <h1 style={{ color: '#333' }}>Signup Page</h1>
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