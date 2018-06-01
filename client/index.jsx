import ReactDOM from 'react-dom';
import App from './components/AppView';
import helper from './helpers/index';

helper();

ReactDOM.render(<App />, document.getElementById('pups'));