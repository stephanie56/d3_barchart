import React, { Component } from 'react';
import * as d3 from 'd3';
import Chart from './Chart';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:[4, 8, 15, 16, 23, 42],
    }
  }

  _handleChart(){
    console.log('trigger handle chart!');
    d3.selectAll('.Chart')
    .data(this.state.data)
      .style('width', (d) => {  return d * 10 + 'px'; });
  }


  render() {
    return (
      <div className="App">
        {
          this.state.data.map((number) => {
            return (
              <Chart number={number} />
            );
          })
        }
        <input type='button' onClick={this._handleChart.bind(this)} value="change chart!"></input>
      </div>
    );
  }
}

export default App;
