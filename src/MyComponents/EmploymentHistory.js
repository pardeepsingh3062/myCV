import React from 'react'
import useFetch from '../hooks/useFetch'

const EmploymentHistory = () => {
    const {loading, error, data}=useFetch('http://localhost:1337/api/employment-histories')
  if (loading) return <p>loading...</p>
  if (error===[]) return<p>error...:</p>
  return (
    <div>
      <h5 className='text-center'><strong >Employment History</strong></h5>
      <div>
      {
        
      data?.map(employmentHistory=>(
        <div key={employmentHistory.id} >
        
           <div className='EmploymentHistory container'>
           <div > <h6 className=''><strong>{employmentHistory.attributes.Position} at {employmentHistory.attributes.companyName}, {employmentHistory.attributes.locations}</strong></h6>
          <p >{employmentHistory.attributes.from} To {employmentHistory.attributes.To}</p>
           </div>
           
            <p>{employmentHistory.attributes.jobrole}</p>
            </div> 
          </div>
      ))
      }
    </div>
    </div>
  )
}

export default EmploymentHistory
