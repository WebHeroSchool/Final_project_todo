import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItems, onMouseClick }) => (
  <ul>
    {todoItems.map(item => <Item value = {item.value} isDone = {item.isDone} key = {item.value} onMouseClick = {onMouseClick}/>)}
  </ul>
);

export default ItemList;