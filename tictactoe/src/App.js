import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    PLAYER_ONE_SYM: 'X',
    PLAYER_TWO_SYM: 'O',
    currentTurn: 'X',
    board: [
      '', '', '', '', '', '', '', '' ,''
    ],
    winner: null
  }
 }
  componentDidMount() {
    this.setState({
    message:'Hello world!'
    })
  }

  handleClick(index) {
    if(this.state.board[index] === '') {
      this.state.board[index] = this.state.currentTurn;
      this.setState({
        board: this.state.board,
        currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYM ? this.state.PLAYER_TWO_SYM : this.state.PLAYER_ONE_SYM,
        winner: this.checkForWinner(),
      });
    }
  }

  handleResetClick(){
    console.log('Resetting!')
  }

  checkForWinner() {
    var currentTurn = this.state.currentTurn
    var symbols = this.state.board
    var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    const winner = winningCombos.find(function(combo) {
      if(symbols[combo[0]] !== "" && symbols[combo[1]] !== ""  && symbols[combo[2]] !== ""  && symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]) {
        console.log('currentTurn: ', currentTurn);
        return true
      }
      return null
    })

    if (winner !== undefined){
      return currentTurn
    }
  }

 render() {
  return (
    <div className="app-container">
      {this.state.winner ? <h1>{`The winner is ${this.state.winner}`}</h1> : null}
      <div className='board'>
        {this.state.board.map((cell, index) => {
          return  <div onClick={() => this.handleClick(index)} className='square'>{cell}</div>;
        })}
      </div>
      <button onClick={() => this.handleResetClick()} className='button' >Reset</button>
    </div>
  )
 }
}
//function App() {
//  return (
//
//
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}
//
export default App;
