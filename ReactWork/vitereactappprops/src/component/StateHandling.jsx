import React, { useState } from 'react'

function StateHandling() {
    const [counter, setCounter]=useState(20);
    function incCounter(){
        setCounter(counter+5)
    }

  return (
    <div>
      <h2>Counter Value={counter}</h2>
      <button onClick={incCounter}>increase counter</button>
      <button onClick={()=>setCounter(counter-5)}>decrease counter</button>
    </div>
  )
}

export default StateHandling
