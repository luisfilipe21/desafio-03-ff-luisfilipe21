import { forwardRef } from "react"

export const Textarea = forwardRef (({errors, label, ...rest }, ref ) => {

    return(
        <textarea ref={ref} {...rest}>
            
        </textarea>
    )
})