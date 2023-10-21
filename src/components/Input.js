import React, { useState } from 'react';

function MetamaskAddressInput({ onSubmit }) {
  const [address, setAddress] = useState('');

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="address">Metamask Address:</label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={handleAddressChange}
        placeholder="Enter your Metamask address"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MetamaskAddressInput;


