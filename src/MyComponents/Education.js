import React from 'react'
import useFetch from '../hooks/useFetch'

const Education = () => {
    const {loading, error, data}=useFetch('http://localhost:1337/api/educations')
if (loading) return <p>loading...</p>
if (error===[]) return<p>error...:</p>

  return (
    <div>
        <h5 className='text-center'><strong >Education</strong></h5>
      
        <div>
      {
        
      data?.map(Education=>(
        <div key={Education.id} >
        
           <div className='EmploymentHistory container'>
           <div > <h6 className=''><strong>{Education.attributes.Description} ,<br></br> {Education.attributes.institute}</strong></h6>
           <p >{Education.attributes.startDate} ---- {Education.attributes.EndDate} <br/>
           University: {Education.attributes.University}<br></br>
           Address: {Education.attributes.location}<br></br>
           Degree Type: {Education.attributes.DegreeType}</p>
           </div>
           
            
            </div> 
          </div>
      ))
      }
    </div>
    </div>
  )
}

export default Education
