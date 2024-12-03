import React from 'react';

export interface GameButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    isSelected: boolean;
    isWrongAnswer: boolean;
    correctColor?: string;
    wrongColor?: string;
}

export default function GameButton ({title, isSelected, isWrongAnswer, correctColor, wrongColor,  ...rest}: GameButtonProps){
    const getStyle = () => {
           if(isWrongAnswer && isSelected) return {backgroundColor: wrongColor};
           if(isSelected) return {backgroundColor: correctColor};
           return {};
       }
   
       return <button  title={title} aria-label={`Select ${title}`} style={getStyle()} {...rest}>{title}</button>
   
   }