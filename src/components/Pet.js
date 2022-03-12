import React from 'react'

class Pet extends React.Component {
  
  

  
  
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
  
            {this.props.data.gender==='female' ? '♀' : '♂'}
            PET NAME : {this.props.data.name}
            
          </a>
          <p>
          
            </p>
          <div className="meta">
            <span className="date">{this.props.data.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.data.age}</p>
            <p>Weight: {this.props.data.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className={this.props.data.isAdopted==false? "ui disabled button" : "ui primary button" }>Already adopted</button>
          <button className={this.props.data.isAdopted==true? "ui disabled button" : "ui primary button" }>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
