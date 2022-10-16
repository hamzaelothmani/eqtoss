import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Ham = () => {
  const [sort, setSort] = useState('createdAt')
  const [filter, setFilter] = useState('')

useEffect(()=>{
  // if(sort){

    axios.get(`/api/server?page=${sort}`)
    .then(function(response) {
     
        console.log(response)
    })
    .catch(function(error) {
        console.log((error))
    });
  // }else if(filter){
  //   axios.get(`/api/server?page=${filter}`)
  //   .then(function(response) {
  //     setFormData(response.data.data)
  //       console.log(response)
  //   })
  //   .catch(function(error) {
  //       console.log((error))
  //   });
  // }
}, [sort, filter])

  return (
    <div>Ham</div>
  )
}

export default Ham