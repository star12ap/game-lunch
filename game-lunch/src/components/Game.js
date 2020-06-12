import React from 'react';
import Card from './Card';
import lists from '../data/Lists';
import './css/Game.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameGoing: true,
      select: null
    }
  }

  chooseFood(name) {
    this.setState({
      gameGoing: false,
      select:name
    })
  }

  render() {
    if (this.state.gameGoing) {
      const foods = lists.map((food) => {
        return (
          <Card key={food.Name + food.Code} value={food.Name} status={this.state.gameGoing} onClick={() => this.chooseFood(food.Name)}></Card>
        )
      });

      return (
        <div className='game'>
          <div className='locate'>
            <div className='panel'>{foods}</div>
          </div>
        </div>
      );  
    } else {
      return (
        <div className='game'>
          <div className='locate'>
            <div className='panel'><Card key={this.state.select} value={this.state.select}></Card></div>
          </div>
        </div>
      )
    }
    
  }
}

export default Game;