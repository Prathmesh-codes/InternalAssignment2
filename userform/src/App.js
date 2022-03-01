import React,{useState, useEffect} from 'react'
import { View } from './components/View';

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('users');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  // Users array of objects
  const [users, setusers]=useState(getDatafromLS());

  // input field states
  const [Name, setName]=useState('');
  const [Designation, setDesc]=useState('');
  const [ID, setId]=useState('');
  const [Email, setEmail]=useState('');

  // form submit event
  const handleAddUserSubmit=(e)=>{
    e.preventDefault();

    // creating an object
    let user={
      Name,
      Designation,
      ID,
      Email
    }
    setusers([...users,user]);
    setName('');
    setDesc('');
    setId('');
    setEmail('');
  }

  // delete user from local storage
  const deleteuser=(ID)=>{
    const filteredusers=users.filter((element,index)=>{
      return element.ID !== ID
    })
    setusers(filteredusers);
  }


  //updating a user 
  const updateuser=(ID)=>{
    const filteredusers=users.filter((element,index)=>{
      return element.ID !== ID
    })
    setusers(filteredusers);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('users',JSON.stringify(users));
  },[users])

  return (
    <div className='wrapper'>
      <h1>User List App</h1>
      <p>Add and view Users using local storage</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddUserSubmit}>

            <label>Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={Name}></input>
            <br></br>

            <label>Designation</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setDesc(e.target.value)} value={Designation}></input>
            <br></br>

            <label>ID#</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setId(e.target.value)} value={ID}></input>
            <br></br>

            <label>Email</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setEmail(e.target.value)} value={Email}></input>
            <br></br>
            
            <button type="submit" className='btn btn-success btn-md'>
              ADD user to the list
            </button>
          </form>
        </div>
        

        <div className='view-container'>
          {users.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Email</th>
                    <th>Delete</th>
                    <th>Update</th>
                  </tr>
                </thead>
                <tbody>
                  <View users={users} deleteuser={deleteuser} updateuser={updateuser}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setusers([])}>Remove All</button>
          </>}
          {users.length < 1 && <div>No users are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default App

