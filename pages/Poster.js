import React from 'react'

const Poster = () => {
  return (
   <>
<div class="flex flex-col items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">

 <h1 className='mb-2 text-2xl text-gray-500'>Loading</h1>
<div class="flex relative space-x-2 animate-pulse">
    <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
    <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
    <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
</div>

</div>
   </>
  )
}

export default Poster