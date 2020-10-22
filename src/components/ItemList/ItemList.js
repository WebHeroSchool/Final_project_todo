import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItems }) => (
  <ul>
    <li><Item todoItem = {todoItems[0]} /></li>
    <li><Item todoItem = {todoItems[1]} /></li>
    <li><Item todoItem = {todoItems[2]} /></li>
  </ul>
);

export default ItemList;