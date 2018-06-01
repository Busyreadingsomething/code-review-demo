import React from 'react';
import axios from 'axios';

const Puppy = props => (
  <div className="puppy">
    <h3 className="breed">{props.pup.toString().split('/')[4].toUpperCase()}</h3>
    <a href="https://www.youtube.com/watch?v=MujRLvZ61jE">
      <img src={props.pup} alt="pup" />
    </a>
  </div>
);

const PuppyList = props => (
  <div className="puppy-container">
    <h1>LIST OF PUPS</h1>
    {
      props.list.map(pup => <Puppy pup={pup} />)
    }
  </div>
);

const SearchView = props => (
  <div className="search-container">
    <h3>SPELLING COUNTS!</h3>
    <input type="text" id="search-puppy" onChange={props.search} />
    <input type="button" value="SEARCH" id="button" onClick={props.get} />
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      puppies: [],
    };
  }

  handleClick() {
    const context = this;
    axios.get(`/puppies/${this.state.search}`)
      .then(result => context.setState({
        puppies: result.data.message,
      }));
  }

  handleInput(e) {
    this.setState({
      search: e.target.value,
    });
  }

  render() {
    return (
      <div className="app-container">
        <h1>EVERYBODY LOVES PUPPIES!</h1>
        <SearchView search={e => this.handleInput(e)} get={() => this.handleClick()}/>
        <PuppyList list={this.state.puppies} />
      </div>
    );
  }
}

export default App;
