import React, { useState, ChangeEvent } from 'react';
import { Input, Button, Div } from './styles/CreateNewGroupInput.styled';

interface CreateNewGroupInputProps {
  onAddItem: (item: { title: string; text: string }) => void;
}

export const CreateNewGroupInput: React.FC<CreateNewGroupInputProps> = ({ onAddItem }) => {
  const [newGroupInputValue, setNewGroupInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewGroupInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    onAddItem({
      title: newGroupInputValue,
      text: '',
    });

    setNewGroupInputValue('');
  };

  return (
    <>
      <Div>
        <Input
          type="text"
          placeholder="Create New Group"
          value={newGroupInputValue}
          onChange={handleInputChange}
        />
        <Button onClick={handleButtonClick}>Create</Button>
      </Div>
    </>
  );
};
