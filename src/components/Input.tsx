import { FC } from "react";
import { InputProps } from "@/types/componentTypes";

const Input: FC<InputProps> = ({
    type = "text",
    name,
    className,
    value,
    placeholder,
    error,
    disabled,
    withLabel,
    label,
    width = "",
    labelStyles,
    valueChange,
    withLeftElement,
    leftElement,
}) => {
    return (
        <div className="relative">
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={valueChange}
                className={`${withLeftElement ? "px-12" : "px-4"} ${className}`}
            />
            {withLeftElement && (
                <div className="absolute inset-y-0 left-2 flex items-center pl-4">
                    {leftElement}
                </div>
            )}
        </div>
    );
};

export default Input;
