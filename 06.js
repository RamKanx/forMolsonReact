// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const inputRef = React.useRef()
  
  // 🐨 add a submit event handler here (`handleSubmit`).
  function handleSubmit (event){

    //calling the event.preventDefault() //refresh the page is default.
    event.preventDefault()

    //onSubmitUsername(event.target.elements.usernameInput.value)
    //variation.
    
    //onSubmitUsername(event.target.elements[0].value) //working but turning off for extra credit.

    //now implementing the extra credit variation to get the value by using a ref.
    //const inputRef = React.inputRef()//current.value
    onSubmitUsername(inputRef.current.value)


    //sticking with the argument value val for now. 3 

  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  //the onSubmit is used in the form tag, and the curly brackets for the handleSubmit function.

  return (
    <form onSubmit={handleSubmit}> 
      <div>
        <label>Username:</label>
        <input id="usernameInput" type="text" ref={inputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
