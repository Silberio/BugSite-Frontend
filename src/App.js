import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>BUG SITE</h4>
      </header>
      <div className="App-content">
        <h1>CONTENT</h1>
        <MyComponent />
      </div>
      <div className="App-header">
        <APIFetchTest />
      </div>
    </div>
  );
}



class MyComponent extends React.Component {
  handleClick(e) {
    e.preventDefault()

    fetch('http://localhost:8080/bugs/')
      .then(function(response) {
      return response.json();
        })
        .then(function(myJson) {
    console.log(myJson);
    });
  }

  render() {
    return(
      <div>
        <p>MOTH</p>
        <img src={ require("./media/mothsample.png")} />
        <button onClick={this.handleClick}> Log </button>
      </div>
      );
  }
}

class APIFetchTest extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      bugs: ["moth","bug"]
    };
  }

  componentDidMount() {
        fetch('http://localhost:8080/bugs/').then(
      function(response) {
      return response.json();
        }).then();
  }

  render() {
    return(
      <div>
        <h3>API Fetch Test</h3>
        <ul>
          {
            this.state.bugs.map((bug, i) => (<li>{bug}</li>))
          }
        </ul>
      </div>)
  }

}

export default App;
