import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SortingAlgorithms from './SortingAlgorithms.js';
import DataStructures from './DataStructures.js';
import Other from './Other.js';


class App extends Component {
    state = {
        columns: 1,
        category: "SortingAlgorithms",
    }

    handleButtonClick = (e, data) => {
        let test = e.target;
        console.log(test);
        let buttons = document.getElementsByClassName("numberOfColumns");
        //buttons.remove("activeButton");
        //test.addClass("activeButton");
        
        this.setState({columns: data});
    }
    
    updateSection = (e, data) => {
        this.setState({category: data});
    }
    
    componentDidMount() {
        let self = this;
        window.addEventListener('resize', function () {
          var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
          if (width < 940) {
              self.setState({columns: 1});
          } else if (width < 1200 && self.state.columns ===3) {
              self.setState({columns: 2});
          }
      })
    }
    
    
  render() {
      let currentPage;
      let tabClass1="first button"; let tabClass2="button"; let tabClass3="button";
      if (this.state.category === "SortingAlgorithms") {
          tabClass1 = "first button activeTab"
          currentPage = <SortingAlgorithms columns={this.state.columns}/>
      } else if (this.state.category === "DataStructures") {
          tabClass2 = "button activeTab"
          currentPage = <DataStructures columns={this.state.columns}/>
      } else if (this.state.category === "Other") {
          tabClass3 = "button activeTab"
          currentPage = <Other columns={this.state.columns}/>
      }
        let c1 = "colButton"; let c2 = "colButton"; let c3 = "colButton";
        if (this.state.columns === 1) {
            c1 = "activeButton colButton";
        } else if (this.state.columns === 2) {
            c2 = "activeButton colButton";
        } else if (this.state.columns === 3) {
            c3 = "activeButton colButton";
        }
    
          
    return (
      <div id="whole">
        <header>
            <h1>Viviana's Algorithm Cheat Sheet</h1>
        </header>
        <nav>
            <div className={tabClass1} id="SortingAlgorithms"
                onClick={((e) => this.updateSection(e, "SortingAlgorithms"))}>Sorting Algorithms</div>
            <div className={tabClass2} id="DataStructures"
                onClick={((e) => this.updateSection(e, "DataStructures"))}>Data Structures</div>
            <div className={tabClass3} id="Other"
                onClick={((e) => this.updateSection(e, "Other"))}>Other</div>
            <div id="filler"/>
            <div id="numOfCols">Number of Columns: 
                <button id="one" className={c1} onClick={((e) => this.handleButtonClick(e, 1))}>1</button>
                <button id="two" className={c2} onClick={((e) => this.handleButtonClick(e, 2))}>2</button>
                <button id="three" className={c3} onClick={((e) => this.handleButtonClick(e, 3))}>3</button>
            </div>
        </nav>
        <div id="dropdowns"/>
        {currentPage}
      </div>
    )
  }
}

export default App;