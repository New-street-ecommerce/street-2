"use client"
import React,{useState} from 'react'
import axios from 'axios'
import Link from 'next/link';
const EditProfil = () => {
const [userName, setUsername] =useState('')
const [bio,setBio] = useState('')
const hundleUpdate:Function=async()=>{
   
    
    const artistId=1
    try {
        await axios.put(`http://localhost:5000/artist/Profile/updateProfil/${artistId}`,{
            name: userName,
            bio: bio,
        })
        console.log('Profile updated successfully');
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
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          className='p-3 rounded-full bg-transparent border text-white'
          placeholder='Bio'
          value={bio}
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
