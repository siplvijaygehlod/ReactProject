import React from 'react';

class SearchBar extends React.Component {
  state = {term : '',inputHolder:'Search Video'};
  onInputChange = (event) =>{
      this.setState({term:event.target.value});
  };

  onSearchSubmit = event =>{
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

    render () {
    return (<div className=' search-bar ui segment'>
    <form onSubmit={this.onSearchSubmit} className='ui form'>
      <div className='field'>
        <label>Video Search</label>
        <input type="text" 
        value={this.state.term} 
        placeholder={this.state.inputHolder}
        onChange={this.onInputChange} />
      </div>
    </form>
  </div>);
  }
};
export default SearchBar;
