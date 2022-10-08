import axios from 'axios'
import React, { useEffect } from 'react'

function Profile() {

    useEffect(()=>{
axios.get("http://localhost:5000/UserInfo")
.then((res)=>console.log(res.data))
    },[])
  return (
    <div>
      profile
    </div>
  )
}

export default Profile
