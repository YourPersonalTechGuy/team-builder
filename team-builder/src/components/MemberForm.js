import React from "react";

export default function MemberForm(props) {
    const { values, update, submit } = props

    const change = (e) => {
        const {name, value} = e.target
        update(name, value)
    }

    const submitDefault = (e) => {
        e.preventDefault()
        submit()
    }

    return(
        <form className="form container" onSubmit={submitDefault}>
            <div className="form-inputs">
                <label>FirstName: 
                    <input 
                        name='fname' 
                        type='text' 
                        value={values.fname} 
                        onChange={change} 
                        placeholder='Input First Name...'
                    />
                </label>

                <label>LastName: 
                    <input 
                        name='lname' 
                        type='text' 
                        value={values.lname} 
                        onChange={change} 
                        placeholder='Input Last Name...'
                    />
                </label>

                <label>Email: 
                    <input       
                        name='email' 
                        type='email' 
                        value={values.email} 
                        onChange={change} 
                        placeholder='name@email.com'  
                    />
                </label>

                <label>Codename: 
                    <input 
                        name='codename' 
                        type='text' 
                        value={values.codename} 
                        onChange={change} 
                        placeholder='Input codename...'
                        maxLength='30'
                    />
                </label>

                <label>Position: 
                    <select value={values.position} name="position" onChange={change}>
                        <option value="">---Position---</option>
                        <option value="Commander">Commander</option>
                        <option value="General">General</option>
                        <option value="Lieutenant">Lieutenant</option>
                        <option value="Officer">Officer</option>
                        <option value="Private">Private</option>
                        <option value="Mentor">Mentor</option>
                    </select>
                </label>
            </div>

            <div className="submission">
                <button disabled={!values.fname || !values.lname || !values.email || !values.codename || !values.position}>SUBMIT</button>
            </div>
        </form>
    )
}