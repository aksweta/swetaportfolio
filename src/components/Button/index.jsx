import React from "react"
import "./index.css"

const Button = ({ colour, borderRadius, onClick, children }) => {
  return (
    <button
      type="button"
      className={`btn btn-${colour} ${borderRadius ? "border-radius" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
