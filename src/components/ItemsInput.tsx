import React from 'react';
import { Div, Flex, Input, DeleteImg,  Li, ParentDiv, ChekboxDiv, H5, FlexDiv, FlexDivSec,  Img } from './styles/ItemInput.styled';
import DeleteIcon from './assets/DeleteIcon.png';
import CopyIcon from './assets/CopyIcon.png';

interface ItemsInputProps {
  title: string;
  onDelete: () => void;
}

const ItemsInput: React.FC<ItemsInputProps> = ({ title, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <>
      <Div>
        <Flex>
          <h4>{title}</h4>
          <DeleteImg src={DeleteIcon} alt="DeleteIcon.png" onClick={handleDeleteClick} />
        </Flex>
        <Input type="text" placeholder="Enter your text" />
        <ParentDiv>
            <FlexDiv>
            <ChekboxDiv></ChekboxDiv>
            <H5>Title</H5>
            </FlexDiv>
            <FlexDivSec >
              <Img src={CopyIcon} alt='CopyIcon.png'  />
              <Img src={DeleteIcon} alt='DeleteIcon.png'/>
            </FlexDivSec >
        </ParentDiv>
      </Div>
    </>
  );
};

export default ItemsInput;
