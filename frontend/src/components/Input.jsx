import { forwardRef, useId } from "react";

const Input = forwardRef(
  ({ type = "type", label = "", divClassName = "", inputClassName = "", ...props }, ref) => {
    const id = useId()
    return (
        <div className={`${divClassName}`}>
            {label && <label htmlFor={id}>{label}</label>}
            <input type={type} className={inputClassName} {...props} />
        </div>
    )
  },
);
