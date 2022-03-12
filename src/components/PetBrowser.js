import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
 
  
// map pets [] and return proper JSX <pet /> 

 generateUI = () => {
   
  console.log(this.props.fetching)
  return this.props.fetching.map((elem) => <Pet key={elem.id} data={elem}/>)
  
  }
   

  render() {
     return (<div className="ui cards">{this.generateUI()}</div>)
  }
}

export default PetBrowser
