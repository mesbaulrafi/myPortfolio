import React from 'react'

const Button = ({className,btnText}) => {
  return (
    <button className={`cursor-pointer  px-5 rounded-sm ${className}`}>{btnText}</button>
  )
}

export default Button