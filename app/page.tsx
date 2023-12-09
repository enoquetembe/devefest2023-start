/* eslint-disable react/jsx-key */
"use client"

import { Item } from "./components/Item"

export default function Home() {

  return (
    <main className='flex justify-center items-center h-screen bg-zinc-900'>
     <form  className='flex flex-col gap-4 mr-40 bg-zinc-700 p-10 rounded-md'>
        <input 
         className="text-white w-full px-3 py-2 rounded-sm bg-zinc-900"
         type="text" 
         placeholder='Nome'
         />
        <input 
          className="text-white w-full px-3 py-2 rounded-sm bg-zinc-900"
          type="email" 
          placeholder='Email'
        />

        <button 
          className="bg-green-500 text-white w-full px-3 py-2 rounded-sm hover:bg-green-400"
          type="submit"
        >
          Save
        </button>
     </form>

     <div className="text-white">
      
          <Item name="Enoque" email="enoquetemb@gmail.com"/>
          <Item name="John Doe" email="john@gmail.com"/>
     </div>
    </main>
  )
}
