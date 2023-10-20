import React from 'react';

import { useHuddle01Web } from '@huddle01/react/hooks';

import Button from './Button';

const SendButton = ({ event, disabled }) => {
  const { send } = useHuddle01Web();

  const buttonStyle = {
    backgroundColor: 'violet',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <Button disabled={disabled} onClick={() => send(event)} style={buttonStyle}>
        {event}
      </Button>
    </div>
  );
};

export default SendButton;

