import React from 'react';
import { Button } from '@material-ui/core';
// import Search from '@material-ui/icons/Search';

const ButtonComponent = ({text, icon, color, variant, handleClick}) => {
    return (
        <>
            <Button onClick={() => handleClick()} color={color} variant={variant}>{text}</Button>
        </>
    );
}

export default ButtonComponent;
