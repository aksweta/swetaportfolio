import React from "react"
import "./text.css"

const Textarea = ({ label, type, id }) => {
  return (
    <div className="row mb-3">
      <label for={id} className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-10">
        <input type={type} className="form-control" id={id} />
      </div>
    </div>
  )
}

export default Textarea
