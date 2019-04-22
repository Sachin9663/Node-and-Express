import React, { Component } from 'react';
import './style/aboutus.css';

class About extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:"",
            error:false
        }
        
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/about')
        .then(res=>{
            if(res.ok){
                return res.text();
            } else{
                throw new Error('Something went wrong');
            }
        })
        .then(data=>this.setState({data:data}))
        .catch(error=>this.setState({Error:true}));
    }
    
    render() {
        const {data,error}=this.state;
        if(error){
            return <p>{error.message}</p>
        }
        return (
            <div className='about'>
            <h2>About us</h2>
            <p>{data}</p>
            </div>
        );
    }
}

export default About;