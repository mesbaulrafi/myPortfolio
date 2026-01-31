import React, { Children } from 'react'

const Conteinar = ({className,children}) => {
  return (
    <div className={`max-w-[1310px] m-auto ${className}`}>{children}</div>
  )
}

export default Conteinar