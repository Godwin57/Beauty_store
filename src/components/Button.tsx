import { FC } from "react";
import { ButtonProps } from "@/types/componentTypes";

const Button: FC<ButtonProps> = ({
    name,
    onClick,
    type,
    className,
    disabled,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${className} disabled:opacity-50`}
        >
            {name}
        </button>
    );
};

export default Button;
