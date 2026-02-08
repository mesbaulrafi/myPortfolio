import React, { Children } from 'react'

const Conteinar = ({className,children}) => {
  return (
    <div className={`w-[1140px] m-auto ${className}`}>{children}</div>
  )
}

export default Conteinar