import React, { useState } from 'react'

const ControlledExample = () => {

    const handleForm = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(gender);

    }

    // input  part
    const [name, setName] = useState('')

    const handleNameChanged = (e) => {
        setName(e.target.value)
    }

    // Drop down menu

    const [gender,setGender] = useState("male")
    const options = [{ name: "Male", value: "male" }, { name: "Female", value: "female" },
    { name: "Prefer not to disclosed", value: "nondisclose" }]

    const handleSelectChange = (e) => {
        setGender(e.target.value)
    }

    // Single Check box

    const [isChecked, setIsChecked] = useState(false);
    return (
        <div>
            <h2>Controlled Form Example</h2>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Enter your name' value={name}
                        onChange={handleNameChanged} />
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" value={gender} onChange={handleSelectChange}>
                        {
                            options.map(val => <option value={val.value} key={val.value}>{val.name}</option>)
                        }

                    </select>
                </div>
                <div>
                    <label htmlFor="agree">
                    <input type="checkbox" name="agree" checked={isChecked} onChange={(e)=> setIsChecked(e.target.checked)} />
                        I  agree to the term and conditions
                    </label>
                    {isChecked && <p>User has agree to the term and condition</p>}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ControlledExample