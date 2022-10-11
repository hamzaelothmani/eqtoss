import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Ham = () => {
const [queryText, setQueryText] = useState()
const [searchResults, setSearchResults] = useState([])
console.log(searchResults);

useEffect(() => {
  ;(async () => {
    if (!queryText) {
      setSearchResults([])
      return false
    }

    const { data } = await axios.get('/api/server/search', {
      params: {
        title: queryText,
      },
    })

    setSearchResults(data)
  })()
}, [queryText])

  return (
    <>

<div className='mx-auto text-center  my-32'>
  <input autoFocus onChange={(e)=>setQueryText(e.target.value)} type="text" placeholder='search...' className='border mx-auto boder-2' />
</div>
    </>
  )
}

export default Ham