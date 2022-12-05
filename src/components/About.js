import {useState} from 'react'
function About(){
    const[village,setVillage]=useState("america")
    const[country,setCountry]=useState("India")
	return(
          <div>
          {/*<h1>{country}</h1>
          <p>{village}</p>*/}
          <input placeholder="username" onChange={(e)=>setVillage(e.target.value)}/>
          <p><input placeholder="password" onChange={(e)=>setCountry(e.target.value)}/></p>
          <p><button onClick={()=>console.log(village,country)}>submit</button></p>
          </div>
		)
}
export default About