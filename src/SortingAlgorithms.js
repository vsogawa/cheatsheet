import React, { Component } from 'react';

class SortingAlgorithms extends Component {
    state={
        firstPage: <Content1/>,
        secondPage: null,
        thirdPage: null,
    }

    updateColumn(columnNum, page) {
        if (columnNum === "1") {
            this.setState({firstPage: page});
        } else if (columnNum === "2") {
            this.setState({secondPage: page});
        } else if (columnNum === "3") {
            this.setState({thirdPage: page});
        }
    }

    render() {        
        let secondDisplay; let thirdDisplay;
        if (this.props.columns === 1) {
            secondDisplay = "none";
            thirdDisplay = "none";
        } else if (this.props.columns === 2) {
            thirdDisplay = "none";
        } else {
            secondDisplay = "inline";
            thirdDisplay = "inline";
        }
        
        return(
            <div className="container">
                <div style={{width: "100"/this.props.columns+"%"}}>
                    <SortSelector column="1" updateColumn={this.updateColumn.bind(this)}/>
                    {this.state.firstPage}
                </div>
                <div style={{width: "100"/this.props.columns+"%", display: secondDisplay}}>
                    <SortSelector column="2" updateColumn={this.updateColumn.bind(this)}/>
                    {this.state.secondPage}
                </div>
                <div style={{width: "100"/this.props.columns+"%", display: thirdDisplay}}>
                    <SortSelector column="3" updateColumn={this.updateColumn.bind(this)}/>
                    {this.state.thirdPage}
                </div>
            </div>
        )
    }
}

export default SortingAlgorithms;


class SortSelector extends Component {
    
    parseData() {
        let columnNum = this.props.column;
        let dropid = "drop" + this.props.column;
        let value = document.getElementById(dropid).value;
        let page;
        if (value === "Content1") {
            page = <Content1/>;
        }
        if (value === "Content2") {
            page = <Content2/>;
        }
        if (value === "Content3") {
            page = <Content3/>;
        }
        this.props.updateColumn(columnNum, page);
    }
    
    render() {        
        let dropid = "drop" + this.props.column;
        
        return(
            <div>
                <select id={dropid} onChange={this.parseData.bind(this)} defaultValue="searchalgos">
                  <option value="searchalgos" disabled>Select a sorting algorithm...</option>
                  <option value="Content1">Content1</option>
                  <option value="Content2">Content2</option>
                  <option value="Content3">Content3</option>
                </select>
            </div>
        )
    }
}

class Content1 extends Component {
    render() {        
        return(
            <div id="sample1" className="content">
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
            </div>
        )
    }
}

class Content2 extends Component {
    render() {        
        return(
            <div id="sample2" className="content">
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
            </div>
        )
    }
}

class Content3 extends Component {
    render() {        
        return(
            <div id="sample3" className="content">
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
            </div>
        )
    }
}