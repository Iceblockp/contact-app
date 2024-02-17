import React from 'react'

const FormComponents = ({type,name,label,placeholder,...rest}) => {
  return (
    <div className='flex flex-col my-5 w-full'>
        <label className=' text-lg ' htmlFor={name}>{label}</label>
        <input {...rest} className=' w-full px-2 py-3 rounded-lg mt-2 bg-gray-200 border-2 border-blue-300 ' type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  )
}

export default FormComponents