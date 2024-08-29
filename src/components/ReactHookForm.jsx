import React from 'react'
import { useForm } from 'react-hook-form'

const ReactHookForm = () => {
    // register to bind the form to the "state"
    // handleSubmit = what happen when the form is submit (pass a callback funciton here)
    // errors is the form error
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <h2>Example React Hook Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="text" placeholder="Name" {...register("name", { required: true })} />
                    {errors.name && <p style={{color:'red'}}>Name is required</p>}
                </div>
                <div>
                <input type="text" placeholder="Email" {...register("email", {required: true, pattern: '//\S+@\S+\.\S+//i'})} />     
                {errors.email && <p style={{color:'red'}}>Please fill in the email in correct format</p>}
                </div>
                <div>
                    <input type="tel" placeholder="Mobile number" {...register("mobile", { required: true, minLength: 6, maxLength: 12 })} />
                    <select {...register("title", { required: true })}>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Dr">Dr</option>
                    </select>
                </div>
                <div>
                    <input {...register("developer", { required: true })} type="radio" value="Yes" />
                    <input {...register("developer", { required: true })} type="radio" value="No" />
                </div>
                <div>
                    <select {...register("department", { required: true })}>
                        <option value="IT">IT</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="Admin">Admin</option>
                        <option value="Management">Management</option>
                        <option value="Operation">Operation</option>
                    </select></div>
                <div>
                    <textarea {...register("message", {})} />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default ReactHookForm