'use client';

import { FC, ReactNode } from "react";
import { StyledMain } from "./StyledMain";

export const Main: FC<{ children?: ReactNode }> = ({ children }) => {
    return <StyledMain>{children}</StyledMain>;
};