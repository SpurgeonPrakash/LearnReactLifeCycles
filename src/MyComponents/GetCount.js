import React, { Component } from 'react';

class GetCount extends Component {
    constructor(nextProps){
        super(nextProps);
        
        this.state = {
            value: nextProps.initialCount,
            message:"Hii.....",
            flag:false
        }
        // this.updateCount = this.updateCount.bind(this);
    }
    // updateCount(){
    //     console.log("In Update Count");
    //     let count = this.state.value;
    //     let finalValue = ++count;
    //     this.setState({value : finalValue});

    // }
    updateMessage(){
        // let msgFlag = t
        if(!this.state.flag){
            this.setState({message : "Helloooo..", flag :!this.state.flag});
        }
        else{
            this.setState({message : "Hii.....", flag :!this.state.flag});
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.initialCount);
        // console.log(prevProps.value);
        // console.log(prevProps.initialCount);
        console.log("----------------In Component Will Recieve Props---------------------");
        let fValue = nextProps.initialCount;
        this.setState({value : fValue});
    }
    componentWillUpdate(){
        console.log("In Component Will Update ---->We should Not Change the State"+this.state.value);
        // this.setState({
        //     value:250
        // });
    }
    componentWillMount(){
        // let eValue = this.state.value;
        // this.setState(
        //     {value:eValue}
        // );
        console.log("In Component Will mount"+this.state.value)
    }
    componentDidMount(){
        console.log("In Component Did mount"+this.state.value);
        this.timerId = setInterval(()=>this.updateMessage(),1000);
        // this.setState({
        //     value:100 
        // });
        console.log("In Component Did mount"+this.state.value);
    }
    // shouldComponentUpdate(){
    //     // this.setState({
    //     //     value:11
    //     // });
    //     console.log("In Component should update---> we Should Not Change The State"+this.state.value);
    //     if(this.state.message === "Helloooo.."){
    //         return true;
    //     }
    //     else{
    //         console.log(" Not Renderedd!!")
    //         return false;
    //     }
    // }
    
    componentWillUnmount(){
        console.log("In Component Will UnMount..");
        clearInterval(this.timerId);
    }
    componentDidUpdate(){
        // this.setState(
        //     {value:6}
        // );
        console.log("In Component Did Update---> we should not change the state"+this.state.value)
        // return true
    }
    render() {
        return(
            <div className = "main">
                <h1>Count:{this.state.value}</h1>
                {/* {console.log("In Component render"+this.state.value)} */}
                {console.log("Renderedd!!")}
                <p>Only Change in Child Props</p>
                <h2>{this.state.message}</h2>

            </div>
        );
    }
}

export default GetCount;