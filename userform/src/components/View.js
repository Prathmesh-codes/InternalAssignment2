import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({users,deleteuser}) => {
    
    return users.map(user=>(
        
        <tr key={user.ID}>
            <td>{user.ID}</td>
            <td>{user.Name}</td>
            <td>{user.Designation}</td>
            <td className='delete-btn' onClick={()=>deleteuser(user.ID)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}
