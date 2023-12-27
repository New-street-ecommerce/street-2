"use client"
import React,{useState} from 'react'
import axios from 'axios'
import Link from 'next/link';
import { useEffect } from 'react';
import { set } from 'firebase/database';

const EditProfil = () => {
const [userName, setUsername] =useState<string>('')
const [bio,setBio] = useState('')
const [id,setId] = useState('')


useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    const parsedUser = JSON.parse(storedUser);
    setId(parsedUser.data.id);
  }
  
}, [id]);
const hundleUpdate:Function=async()=>{
    try {
        await axios.put(`http://localhost:5000/artist/Profile/updateProfil/${id}`,{
          username:userName,
          bio : bio
        })
        console.log(userName,'user',bio,'bio');
    } catch (error:any) {
        console.error('Error updating profile:', error.response?.data?.msg || 'Unknown error');
    }
}

return (
    <div className='p-3 max-w-3xl mx-auto mb-20'>
      <h1 className='text-white text-3xl text-center mt-20 uppercase'>
        Edit Profil
      </h1>
      <form className='flex flex-col gap-4 mt-10'>
        <input
          id="userName"
          className='p-3 rounded-full bg-transparent border text-white'
          type='text'
          placeholder='Username'
          // value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          className='p-3 rounded-full bg-transparent border text-white'
          placeholder='Bio'
          // value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
         <Link href="/Profil">
         <button
          type="button" 
          className="p-3 rounded-full bg-violet-500 text-white uppercase"
          onClick ={(event:React.MouseEvent<HTMLButtonElement>)=>hundleUpdate()}
        >
          Update
        </button>
      </Link>
      </form>
    
    </div>

    
  );
};

export default EditProfil
