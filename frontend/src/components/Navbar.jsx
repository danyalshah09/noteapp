import { PlusIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <>
    <header className='bg-base-300 bg-green-500 border-b border-base-content/10'>
    <div className='mx-auto max-w-6xl p-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-bold text-primary font-mono tracking-tight'>Thinkboard</h1>
      <div className='flex flex-row items-center gap-4 bg-blue-500 p-2 rounded-3xl'>
        <Link to={"/create"} className="btn btn-primary">
        <PlusIcon/>
        New Note
        </Link>

      </div>
        </div>

    </div>

    </header>


    </>
  )
}

export default Navbar