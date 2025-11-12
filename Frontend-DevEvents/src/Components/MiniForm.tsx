import React from 'react'

const MiniForm = () => {
  return (
    <form className='w-full h-fit bg-white/10 px-4 py-8 flex flex-col gap-4'>
      <h2 className='text-white poppins-semibold'>Book Your Spot</h2>
      <div>
      <label className='text-white text-sm'>Enter Your Name</label>
      <input type='text' className='px-2 py-1 border border-white w-full rounded bg-purple-100/50 mt-2 '/>
      </div>
      <div>
      <label className='text-white text-sm'>Enter Your Email</label>
      <input type='email' className='px-2 py-1 border border-white w-full rounded bg-purple-100/50 mt-2'/>
      </div>
      <div>
        <button className='button1 w-full text-white'>submit</button>
      </div>
    </form>
  )
}

export default MiniForm