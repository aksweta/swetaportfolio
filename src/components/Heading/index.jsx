import React from "react"
import "./index.css"

const Heading = ({ type, colour, children }) => {
  return (
    <>
      {type === "h1" && <h1 className={colour}>{children}</h1>}
      {type === "h2" && <h2 className={colour}>{children}</h2>}
      {type === "h3" && <h3 className={colour}>{children}</h3>}
      {type === "h4" && <h4 className={colour}>{children}</h4>}
      {type === "h5" && <h5 className={colour}>{children}</h5>}
      {type === "h6" && <h6 className={colour}>{children}</h6>}
    </>
  )
}

export default Heading
