import React from 'react'
import './form-input.styles.scss'

const FormInput = ({handleChange, handleSubmit, label, ...otherProps}) =>{
    return(
        <div className='group'>
            <input className='form-input' onChange={handleChange} onSubmit={handleSubmit}{...otherProps}/>
                {
                    label ? (
                    <label 
                    className={`${
                        otherProps.value.length ? 'shrink' : '' } 
                        form-input-label`}
                        >
                        {label}
                    </label>
                    )
                    : null
                }
        </div>
    )
}

export default FormInput;

