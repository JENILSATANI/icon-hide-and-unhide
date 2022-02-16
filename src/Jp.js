import React from 'react'
import { IconButton, InputAdornment, TextField, useTheme } from '@material-ui/core'
import { useState } from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
function Jp() {

  const [password,setpassword] = useState(false)
  const [name,setname] = useState('')
  const[entry,setentry] = useState([])
  const handleonclick =  () =>{
    setpassword(!password)
  }
  const handleonmousedown = () =>{
    setpassword (!password)
  }
  const handlesubmit = (e) =>{
    e.preventDefault();
   const  allnewentry = {name}
   setentry([...entry,allnewentry])
  }
  return (
    <div>

   <TextField
      
     label='password'
     color='red'
     variant='filled'
     type={password ? 'text' : 'password'}
     InputProps={{
       endAdornment:(
         <InputAdornment position='end'>
         <IconButton
         
         onClick={handleonclick}
         onMouseDown={handleonmousedown}
         >
          {password ? <VisibilityIcon/> : <VisibilityOffIcon/>}
         </IconButton>
         </InputAdornment>
       )
     }}

   />
       <form onSubmit={handlesubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' value={name} onChange={(e)=>setname(e.target.value)} ></input>
        <button type='submit' onClick={handlesubmit} >Submit</button>
        </form>
        <table>
          <tr>
            <th>name</th>
          </tr>
            {
              entry.map((curElem) =>{
                return(
                  <tr>
                    <td>
                      <p>{curElem.name}</p>
                    </td>
                  </tr>
                )
              })
            }
        </table>
    </div>

  )
}

export default Jp