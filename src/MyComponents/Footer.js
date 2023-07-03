import React from 'react'

const Footer = () => {
  let footerStyle ={
    position:"relative",
    top:"95vh",
    width:"100%"

  }
  return (
    <footer className='bg-dark text-light' style={footerStyle}>
      <p className='text-center'>Copyright @ My todo list</p>
      
    </footer>
  )
}

export default Footer
