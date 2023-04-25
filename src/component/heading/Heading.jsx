import React from 'react'

function Heading(props) {
  return (
    <>
      <h2 className='heading'>{props.title}</h2>
    </>
  )
}
function SubHeading(props) {
  return (
    <>
      <h3 className='heading'>{props.title}</h3>
    </>
  )
}

export  {Heading , SubHeading}