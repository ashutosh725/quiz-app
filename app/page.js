'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleName = () => {
    if (name.trim() !== '') { 
      router.push('/quiz');
    } else {
      alert('Please Enter Your Name');
    }
  }

  return (
    <div className='h-screen bg-fuchsia-500 flex justify-center items-center'>
      <div className='flex justify-center items-center'>
        <div className='bg-white p-10 shadow shadow-teal-400 flex flex-col justify-center items-center'>
          <h1 className='font-bold text-3xl'>Join Quiz</h1>
          <div className='flex flex-col justify-center items-center mt-6'>
            <input
              type='text'
              value={name}
              placeholder='Enter Your Name'
              onChange={(e) => setName(e.target.value)}
              className='p-2 border border-black rounded-md overflow-hidden'
            />
            <button
              className='mt-4 py-2 px-7 font-semibold text-xl bg-indigo-400 rounded-full hover:bg-indigo-600 focus'
              onClick={handleName}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
