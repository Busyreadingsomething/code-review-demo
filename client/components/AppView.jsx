import React from 'react';
import axios from 'axios';
function PuppyList(props) {
  return(
    <div className="puppy-container">
      <div className="puppy">
      <h3 className="breed">{props.list[0].toString().split('/')[4]}</h3>
      <a href="https://www.youtube.com/watch?v=MujRLvZ61jE"><img src={props.list[0]} /></a>
      </div>
      <div className="puppy">
      <h3 className="breed">{props.list[1].toString().split('/')[4]}</h3>
      <a href="https://www.youtube.com/watch?v=MujRLvZ61jE"><img src={props.list[1]} /></a>
      </div>
      <div className="puppy">
      <h3 className="breed">{props.list[2].toString().split('/')[4]}</h3>
      <a href="https://www.youtube.com/watch?v=MujRLvZ61jE"><img src={props.list[2]} /></a>
      </div>
      <div className="puppy">
      <h3 className="breed">{props.list[3].toString().split('/')[4]}</h3>
      <a href="https://www.youtube.com/watch?v=MujRLvZ61jE"><img src={props.list[3]} /></a>
      </div>
      <div className="puppy">
      <h3 className="breed">{props.list[4].toString().split('/')[4]}</h3>
      <a href="https://www.youtube.com/watch?v=MujRLvZ61jE"><img src={props.list[4]} /></a>
      </div>
    </div>
  )
}
function SearchView(props) {
  return(
    <div className="search-container">
      <h3>SPELLING COUNTS!</h3>
      <input type="text" id="search-puppy" onChange={props.search}/>
      <input type="button" value="SEARCH" id="button" onClick={props.get}/> 
    </div>
  )
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      cats: [1, 2, 3, 4, 5, 6],
    };

    this.handleclick = this.handleclick.bind(this);
  }

  handleclick() {
    const context = this;
    axios.get(`/puppies/${this.state.search}`)
      .then(result => context.setState({
        cats: result.data.message
      }));
  }

  handleInput(e) {
    console.log('HIT');
    this.setState({
      search: e.target.value,
    });
    console.log(this.state)
  }

  render() {
    console.log(this.state.list)
    return(
      <div className="app-container">
        <h1>EVERYBODY LOVES PUPPIES!</h1>
        <SearchView search={(e) => this.handleInput(e)} get={this.handleclick}/>
        <PuppyList list={this.state.cats} />
      </div>
    );
  }
}

export default App;
