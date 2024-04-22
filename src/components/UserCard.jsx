import React from 'react'

function UserCard({name= "Veer", email="veer@gmail.com", website="veer.info", contact="635482xxx", city="sirohi"}) {
  return (
    <div className=' w-full bg-gray-500/30 p-2 rounded-xl hover:border-[1px] border-white/40 transition-all duration-200' >
        <div className='flex flex-col items-normal text-center justify-center'>
            <h1 className='font-semibold text-xl'>{name}</h1>
            <div className=''>
                <h2 className=''>email:    {email} </h2>
                <h2 className=''>contact: {contact}</h2>
            </div>
            <div>
                <p className=''>city: {city}</p>
                <p className=''>website: {website}</p>
            </div>
        </div>
    </div>
  )
}

export default UserCard