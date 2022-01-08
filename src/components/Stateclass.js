import React, { Component } from 'react'

export default class Stateclass extends Component {
     
        constructor(props) {
            super(props)

            this.state = {
                Name : "hhh",
                count:0 
            }
        };
        render() {
            setTimeout(()=>{
                this.setState({
                    Name : "hahahha"
                })
            },2000);
        
        return (

            <div>
                <h1>{this.state.Name}</h1>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}
