import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import ReactLogo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app-header">
          <img src={ReactLogo} className="react-logo" alt="logo"/>
          <h2>Welcome to Relab</h2>
        </div>

        <div>
          <SearchBar />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
