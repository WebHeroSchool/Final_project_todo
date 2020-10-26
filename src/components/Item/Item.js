import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';

const Item = ({ value, isDone }) => (
  <li className = {
    classnames({
      [styles.item]: true,
      [styles.done]: isDone
    })
  }>{value}</li>
);

export default Item;