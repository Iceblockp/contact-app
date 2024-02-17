import React from 'react'

const ButtonComponent = ({style,children,...rest}) => {
  return (
    <button {...rest} className={`px-2 py-3 bg-blue-400 text-white w-full active:ring-2 active:ring-blue-700 duration-200 ${style} `}>{children}</button>
  )
}

export default ButtonComponent