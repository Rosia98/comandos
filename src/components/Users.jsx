import React from 'react'

const Users = ({dataUser}) => {
  return (
    <div>Hola Users :D
        {dataUser.map(itemUser=>{
            return(
            <ul key={itemUser.id}>
                <li>{itemUser.name}</li>
                <li><img src={itemUser.photo} alt="" /></li>
            </ul>
            )
            
        })}
    </div>
  )
}

export default Users