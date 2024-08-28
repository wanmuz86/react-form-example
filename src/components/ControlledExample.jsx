import React, {useState} from 'react'

const ControlledExample = () => {
    const handleForm = () => {
        console.log(name)

    }

    const [name, setName] = useState('')

    const handleNameChanged = (e)=> {
        setName(e.target.value)
    }

  return (
    <div>
        <h2>Controlled Form Example</h2>
        <form onSubmit={handleForm}>
        <div>
            <input type="text" placeholder='Enter your name' value={name} 
            onChange={handleNameChanged}/>
        </div>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ControlledExample