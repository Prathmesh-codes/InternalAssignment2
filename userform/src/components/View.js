import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import {ic_cached} from 'react-icons-kit/md/ic_cached'


export const View = ({users,deleteuser,updateuser}) => {
    
    return users.map(user=>(
        
        <tr key={user.ID}>
            <td>{user.ID}</td>
            <td>{user.Name}</td>
            <td>{user.Designation}</td>
            <td>{user.Email}</td>
            <td className='delete-btn' onClick={()=>deleteuser(user.ID)}>
                <Icon icon={trash}/>
            </td>      
            <td className='update-btn' onClick={()=>updateuser(user.ID)}>
           <Icon icon={ic_cached}/>
            </td>                
        </tr>            
    
))
}
