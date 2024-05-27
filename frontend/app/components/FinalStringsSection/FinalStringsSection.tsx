'use client';

import { FC } from 'react';
import { StyledFinalString, StyledFinalStringsContainer } from './FinalStringsSection.styles';

interface IFinalStringsSectionProps {
    finalStrings: Array<string>
};

export const FinalStringsSection: FC<IFinalStringsSectionProps> = ({finalStrings}) => {
    
    return (
        <StyledFinalStringsContainer>
                {finalStrings.map((finalStr, index) => {
                    return (
                        <StyledFinalString key={`finalStr_${index}`}>{finalStr}</StyledFinalString>
                    );
                })}
        </StyledFinalStringsContainer>
    );
};