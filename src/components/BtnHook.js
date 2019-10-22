import React, { useState } from 'react'

function BtnHook() {
  const [counter, setCounter] = useState(4)

  return (
    <div>
      <h2>Clicked count:  {counter} </h2> <br /><br />
      <button onClick={() => setCounter(counter + 1)}> Increment</button>
    </div>
  )
}

export default BtnHook ;
