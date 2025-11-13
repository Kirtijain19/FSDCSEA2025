import React from 'react'

function ICard(props) {
  return (
    <div>
      <h2>name:{props.name}</h2>
      <h2>Age:{props.age}</h2>
      <h2>Branch:{props.branch}</h2>
      <h2>College:{props.college}</h2>
      <h2>Location:{props.location}</h2>
    </div>
  )
}

export default ICard
