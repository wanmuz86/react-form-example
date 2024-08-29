import React, { useRef } from 'react'

const UncontrolledExample = () => {

    // useRef = document.getElementById (getting the reference of a DOM element)
    const nameRef = useRef('');
    const emailRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' ref={nameRef} placeholder='Enter name' required/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' ref={emailRef} placeholder='Enter email' required/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default UncontrolledExample