import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';

const Footer = ({ items }) => {
  let countArr = items.filter(item => !item.isDone)
  return (
    <div className={styles.wrap}>
      <div className={styles.count}>Оставшиеся дела: {countArr.length}</div>
      <div>
        <Button style={{fontSize: '10px'}}>Все</Button>
        <Button style={{fontSize: '10px'}}>Активные</Button>
        <Button style={{fontSize: '10px'}}>Выполненные</Button>
      </div>
      <Button style={{fontSize: '10px'}}>Удалить выполненные</Button>
    </div>
  )
};

export default Footer;