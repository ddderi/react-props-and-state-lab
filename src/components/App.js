import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

setTypeAnimal = (newtype) => {
  this.setState({filters: {type: newtype}})

}


fetchanimal = (value) => {
  value = this.state.filters.type

if(value==='all'){fetch(`/api/pets`)
.then(resp => resp.json())
.then(json => this.setState({pets: json}))
}else{fetch(`/api/pets?type=${this.state.filters.type}`)
.then(resp => resp.json())
.then(json => this.setState({pets: json}))
}}


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.setTypeAnimal} onFindPetsClick={this.fetchanimal}/>
              
            </div>
            <div className="twelve wide column">
              <PetBrowser fetching={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
