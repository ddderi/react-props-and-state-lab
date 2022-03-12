import React from 'react'

class Filters extends React.Component {
  constructor(){
    super()
    this.state = {value: 'all'}
  }


// handle select permet de update le state du component et d envoyer le select (event.target.value) au component parent

  handleSelect = (event) => {
    this.setState({value: event.target.value})
    this.props.onChangeType(event.target.value)

  }

  
  handleclick = () => {
    console.log('handle submit marche ' + this.state.value)
    this.props.onFindPetsClick(this.state.value)
  }
  
  
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.value} onChange={this.handleSelect}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.handleclick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
