import React from 'react';
import classnames from 'classnames';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import styles from './Item.module.css';

const Item = ({ value, isDone }) => {
  const [show, setShow] = React.useState(false);

  const mouseLeave = () => {
    setShow(false);
  };

  const mouseEnter = () => {
    setShow(true);
  };

  return (
  <div className = {styles.wrap} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
    <li className = {
      classnames({
        [styles.item]: true,
        [styles.done]: isDone
      })
    }>
      {value}
      </li>
    <IconButton
      aria-label="delete"
      className={!show ? styles.delete : ''}>
      <DeleteIcon/>
    </IconButton>
  </div>);
};

export default Item;