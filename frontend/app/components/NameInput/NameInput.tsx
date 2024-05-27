'use client';

import { Dispatch, FC, SetStateAction } from "react";
import { StyledNameInput } from "./NameInput.styles";

interface INameInputProps {
    setName: Dispatch<SetStateAction<string>>,
};

export const NameInput: FC<INameInputProps> = ({setName}) => {
    const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setName((event.target as HTMLInputElement).value);
    };

    return (
        <StyledNameInput onKeyUp={onKeyUp} placeholder="Can I have your name?" />
    );
};