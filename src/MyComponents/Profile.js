import React from 'react'
import useFetch from '../hooks/useFetch'
import SideBar from './SideBar';

export default function Profile ()  {
  const {loading, error, data}=useFetch('http://localhost:1337/api/profilevals?populate=*')
  if (loading) return <p>loading...</p>
  if (error===[]) return<p>error...:</p>
  return (
    
    <div className='row'><div className='col-md-2'></div>
    < div className='col-md-8'>
    
    
      {
        
      data?.map(ProfileInfo=>(
        <>
        <div className='row'>
        <div key={ProfileInfo.id} className='ProfileInfo-card col-md-8'>
        
           <div className='profileInformation col-md-4'>
            <img src={'http://localhost:1337'+ ProfileInfo.attributes.Ppic.data.attributes.url}></img>
          </div>
           <div className='col-md-4'>
           <h5>Pardeep Singh Software Engineer</h5>
           </div>
           
            

          </div>
          </div>
          <div className='row'>
           <h5 className='text-center'><strong>Profile</strong></h5>
           <div>{ProfileInfo.attributes.Description}</div>
           </div>
           </>
      ))
      }
    
    </div>
    <div className='col-md-2'>
    <SideBar/>
    </div>
    </div>
  )

}


//</div>export default Profile


// // import React from 'react';
// import React, { useEffect, useState } from 'react';

// const Profile = () => {
//   const [users, setUsers] = useState([])

//   const fetchUserData = () => {
//     fetch("${process.env.REACT_APP_BACKEND}api/profile-infos")
//       .then(response => {
//         return response.text()
//       })
//       .then(data => {
//         setUsers(data)
//       })
//   }


//   // const fetchUserData = () => {
//   //   fetch("https://jsonplaceholder.typicode.com/users")
//   //     .then(response => {
//   //       return response.json()
//   //     })
//   //     .then(data => {
//   //       setUsers(data)
//   //     })
//   // }

//   useEffect(() => {
//     fetchUserData()
//   }, [])

//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.Profiledata}></li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Profile;
