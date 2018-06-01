const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

const morgan = require('morgan'); 
app.use(express.json());
app.use(morgan('dev'));
const breedList = {
  'affenpinscher': 'affenpinscher',
  'beagle': 'beagle',
  'boxer': 'boxer',
  'bulldog': 'bulldog',
  'boston bulldog': 'bulldog/boston',
  'french bulldog': 'bulldog/french',
  'chihuahua': 'chihuahua',
  'chow': 'chow',
  'collie': 'collie',
  'border collie': 'collie/border',
  'dalmatian': 'dalmatian',
  'husky': 'husky',
  'labrador': 'labrador',
  'mix': 'mix',
  'newfoundland': 'newfoundland',
  'pug': 'pug',
  'shiba': 'shiba',
  'irish wolfhound': 'wolfhound/irish',
  'wolfhound': 'wolfhound',
}

app.use(express.static('public'));

app.get('/puppies/:breed', function(req, res) {
  console.log('HELLO', req.params);
  const { breed } = req.params;
  if (breedList.hasOwnProperty(breed)) {
    axios.get(`https://dog.ceo/api/breed/${breedList[breed]}/images`)
      .then(result => {
        res.json(result.data)
      })
      .catch(err => {
        res.status(404);
        res.send('NO PUPPY :(');
      })
  } else {
    res.status(404);
    res.send('NO PUPPY!!!')
  }
});

app.listen(3000, function() {
  console.log('LISTENING TO PORT 3000');
});
