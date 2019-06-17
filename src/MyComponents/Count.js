import React, { Component } from 'react';
import GetCount from './GetCount';
import './Count.css';
// Program that counts the number of clicks on a button.
class Count extends Component {
    constructor(props){
        super(props);
        this.state = {
            changeStateValue : "Hi",
            count : 1,
            flag:false
        }
    }

    newFunction = (c,f) => e => {
        // let flag = !f
        if(!f){
            console.log("In If..");
            this.setState({
                count : ++c,
                changeStateValue : "Hello",
                flag : !f
            });
        }
        else {
            console.log("In else..");
            this.setState({
                count : ++c,
                changeStateValue : "Hi",
                flag : !f
            });
        }
        
        console.log("---------->"+this.state.count);
    }

    render(){
        return(
            <div>
                {console.log("--->In Render "+this.state.count)}
                <button onClick = {this.newFunction(this.state.count,this.state.flag)}>{this.state.changeStateValue}</button>
                <GetCount initialCount = {this.state.count}/>
                {/* <div>
                    
                </div> */}
                
            
            </div>
        );      
    } 
}
export default Count;