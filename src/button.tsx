import { JSX, ReactNode } from "react";

type BtnProps = {
    id: string;
    val: string | number;
    funct?: (e: React.MouseEvent<HTMLButtonElement>) => void; 
    children?: ReactNode; 
};

export const Button = ({ id, val, funct, children }: BtnProps): JSX.Element => {
    return (
        <button id={id} value={val} onClick={funct}>
            {children}
        </button>
    );
};
