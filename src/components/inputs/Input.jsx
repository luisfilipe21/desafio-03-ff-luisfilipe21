import { forwardRef } from "react"

export const Input = forwardRef(({ errors, label, ...rest }, ref) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
                {label}
            </label>
            <input 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
            ref={ref} 
            {...rest} />
            
            {errors ? <p className="text-red-600 mt-2 ">{errors.message}</p> : <p className="text-white mt-2 ">{errors?.message}</p> }
        </div>
    )
})