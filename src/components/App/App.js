import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItems/InputItems';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    todoItems: [
      {
        value: 'Закончить модуль',
        isDone: true,
        id: 1
      },
      {
        value: 'Заплатить по счетам',
        isDone: false,
        id: 2
      },
      {
        value: 'Навести порядок',
        isDone: true,
        id: 3
      }]
  };
  
  onMouseClick = (id) => {
    const newItemList = this.state.todoItems.map(item => {
      const newItem = {...item}
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });

    this.setState({todoItems: newItemList});
  }
  
  render() {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Список дел:</h1>
        <InputItem/>
        <ItemList todoItems={this.state.todoItems} onMouseClick={this.onMouseClick}/>
        <Footer items={this.state.todoItems}/>
      </div>
    )
  }
};


export default App;