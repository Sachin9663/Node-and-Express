import React, { Component } from 'react';
import './style/home.css';

class Home extends Component {
constructor(props) {
    super(props);
    this.state={
        userList:[],
        Error:false
    }
}

componentDidMount(){
    fetch('http://localhost:5000/api/getlist')
    .then(res=>{
        if(res.ok){
            return res.json();
        } else{
            throw new Error('Something went wrong');
        }
    })
    .then(data=>this.setState({userList:data}))
    .catch(error=>this.setState({Error:true}));
}


    render() {
        const {userList,error}=this.state;
        console.log(userList);
        if(error){
            return <p>{error.message}</p>
        }

        return (

            <div className='user'>
        
                {
                    userList.map((item,index)=>{
                        return(
                            <div key={index} className='card'>
                                <li >Name  :  {item.name}</li>
                                <li >Username  :  {item.username}</li>
                                <li >Email  :  {item.email}</li>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Home;