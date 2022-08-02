import React from "react"

const Link = ({ href, onClick, children }) => {
  return (
    <>
      <a href={href} onClick={onClick}>
        {children}
      </a>
    </>
  )
}

export default Link
