import React from 'react'

const FormField = ({ LabelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name}>{LabelName}</label>
        {isSurpriseMe && (
          <button type="button" onClick={handleSurpriseMe} className="font-semibold text-xs bg-gray-100 py-1 px-2 rounded-[5px] text-black">
            Surprse Me!
          </button>
        )}
      </div>

      <input 
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-indigo-500 focus:border-indigo-500 outline-none block w-full py-2 px-2"
         />
    </div>
    
  )
}

export default FormField