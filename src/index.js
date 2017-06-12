import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/index.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
