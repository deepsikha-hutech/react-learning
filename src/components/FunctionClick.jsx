import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button clicked')
    }
  return (
    <div>
        <button onclick= {clickHandler()}>Click</button>
        </div>
  )
}

export default FunctionClick