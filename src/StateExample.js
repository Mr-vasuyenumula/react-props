import React from 'react'
class StateExample extends React.Component{
	state={
		name:"react",
		year:2014
	}
	render(){
		return(
             <div>
              <p>{this.state.name}</p>
              <p>{this.state.year}</p>
             </div>
			)
	}
}

export default StateExample