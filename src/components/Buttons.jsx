import React from 'react';
import { Button } from '../styles/ButtonsStyles';

const Buttons = ({ text, func }) => {
  return (
    <Button type="button" onClick={ func }>{ text }</Button>
  )
};

export default Buttons;
