import React, { Component } from 'react';


class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
      currentInput: '',
      operator: null,
      previousInput: '',
    };
  }

  handleNumberClick = (num) => {
    const { currentInput, display } = this.state;
    if (currentInput.length < 9) {
      const updatedInput = currentInput === '0' ? num : currentInput + num;
      this.setState({ currentInput: updatedInput, display: updatedInput });
    }
  };

  handleOperatorClick = (operator) => {
    const { currentInput, previousInput } = this.state;
    if (currentInput !== '') {
      this.setState({
        operator,
        previousInput: currentInput,
        currentInput: '',
      });
    }
  };

  handleEqualsClick = () => {
    const { currentInput, previousInput, operator } = this.state;
    if (previousInput !== '' && currentInput !== '') {
      const result = eval(`${previousInput} ${operator} ${currentInput}`);
      this.setState({
        display: result.toString().substring(0, 9),
        currentInput: result.toString().substring(0, 9),
        previousInput: '',
        operator: null,
      });
    }
  };

  handleClearClick = () => {
    this.setState({
      display: '0',
      currentInput: '',
      operator: null,
      previousInput: '',
    });
  };

  render() {
    const { display } = this.state;
    return (
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => this.handleNumberClick('7')}>7</button>
            <button onClick={() => this.handleNumberClick('8')}>8</button>
            <button onClick={() => this.handleNumberClick('9')}>9</button>
            <button onClick={() => this.handleOperatorClick('+')}>+</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick('4')}>4</button>
            <button onClick={() => this.handleNumberClick('5')}>5</button>
            <button onClick={() => this.handleNumberClick('6')}>6</button>
            <button onClick={() => this.handleOperatorClick('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick('1')}>1</button>
            <button onClick={() => this.handleNumberClick('2')}>2</button>
            <button onClick={() => this.handleNumberClick('3')}>3</button>
            <button onClick={() => this.handleOperatorClick('*')}>*</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick('0')}>0</button>
            <button onClick={this.handleClearClick}>C</button>
            <button onClick={this.handleEqualsClick}>=</button>
            <button onClick={() => this.handleOperatorClick('/')}>/</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
