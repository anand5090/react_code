//import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data=useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(()=>{
    //   fetch('https://api.github.com/users/anand5090')
    //   .then(response=>response.json())
    //   .then(data=>{
    //     console.log(data)
    //     setdata(data)
    // })
    // },[])
  return (
    <div className=' bg-gray-600 text-white m-4 text-3xl text-center p-4'>
      GitHUb Follwers :{data.followers}
      <img src={data.avatar_url} alt="" width={300}/>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () =>{
  const response= await fetch('https://api.github.com/users/anand5090')
  return response.json()
}