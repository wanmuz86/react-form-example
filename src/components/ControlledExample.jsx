import React, { useState } from 'react'

const ControlledExample = () => {

    const handleForm = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(gender);
        console.log(radioSelection);

    }

    // input  part
    const [name, setName] = useState('')

    const handleNameChanged = (e) => {
        setName(e.target.value)
    }

    // Drop down menu

    const [gender, setGender] = useState("male")
    const options = [{ name: "Male", value: "male" }, { name: "Female", value: "female" },
    { name: "Prefer not to disclosed", value: "nondisclose" }]

    const handleSelectChange = (e) => {
        setGender(e.target.value)
    }

    // Single Check box

    const [isChecked, setIsChecked] = useState(false);


    // Multiple checkboxes

    // Creating the options of the checkboxes
    const [colors, setColors] = useState([
        { name: "Blue", isChecked: false },
        { name: "Red", isChecked: false },
        { name: "Green", isChecked: false },
        { name: "Yellow", isChecked: false }
    ]);

    const handleColorChange = (color) => {
        color.isChecked = !color.isChecked // It will be the reverse of checked
        setColors([...colors])
    }


    // options radio button

    const [radioSelection, setRadioSelection] = useState('male');

    const handleRadioChange = (e) => {
        setRadioSelection(e.target.value)
    }


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
                        <input type="checkbox" name="agree" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                        I  agree to the term and conditions
                    </label>
                    {isChecked && <p>User has agree to the term and condition</p>}
                </div>
                <div>
                    <ul>
                        {
                            colors.map(val =>
                                <li key={val.name}>
                                    <input type="checkbox" name='colors' checked={val.setIsChecked}
                                        onChange={() => handleColorChange(val)} />
                                    <label>{val.name}</label>
                                </li>)
                        }
                    </ul>
                    <p>Selected colors:
                        {colors.filter(val => val.isChecked).map(val => <li key={val.name}>{val.name}</li>)}
                    </p>
                </div>
                <div>
                    {
                    options.map(val =>
                        <div>
                            <input type="radio" value={val.value} name='gender' onChange={handleRadioChange} />
                            {val.name}
                        </div>
                    )}
                </div>

                <button type='submit' disabled={!isChecked}>Submit</button>
            </form>
        </div>
    )
}

export default ControlledExample