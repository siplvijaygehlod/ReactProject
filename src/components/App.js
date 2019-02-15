import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/YouTube';

class App extends React.Component {
    
    onTermSubmit = term => {
        //console.log(youtube);
        youtube.get('/search', {
            params:{
                q: term
            }
        });
    };
  render () {
    return (<div className='ui container'>
             <SearchBar onFormSubmit={this.onTermSubmit}/>
           </div>);
  }
}

export default App;
