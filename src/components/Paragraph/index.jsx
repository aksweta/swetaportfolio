import React from "react"
import "./index.css"

const Text = ({ type, bold, italic, colour, children }) => {
  return (
    <>
      {type === "p" && (
        <p
          className={`${colour} ${bold ? "bold" : ""} ${
            italic ? "italic" : ""
          }`}
        >
          {children}
        </p>
      )}
      {type === "span" && <span className={colour}>{children}</span>}
    </>
  )
}

export default Text
