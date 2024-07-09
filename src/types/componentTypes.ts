import { ChangeEvent } from "react";

export interface ButtonProps {
    name?: string;
    type?: "button" | "submit";
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    width?: string;
    disabled?: boolean;
}

export interface InputProps {
    type?: string;
    error?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    valueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    disabled?: boolean;
    label?: string;
    withLabel?: boolean;
    width?: string;
    labelStyles?: string;
    leftElement?: JSX.Element;
    withLeftElement?: boolean;
}
