import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItems }) => (
  <ul>
    {todoItems.map(item => <Item value = {item.value} isDone = {item.isDone} key = {item.value}/>)}
  </ul>
);

export default ItemList;