import React from "react"

import "app/components/form-input/form-input.scss"

const FormInput = ({ label, onChange, ...otherProps }) => {
  return (
    <div className="form-input-group">
      <input className="form-input" onChange={onChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : (
        <></>
      )}
    </div>
  )
}

export default FormInput
