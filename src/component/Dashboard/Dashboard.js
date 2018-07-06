import React,{Component} from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';

class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            posts:[],
            search:'',
            userPosts:true
        }

    }
    componentDidMount(){
        console.log('somthing')
        axios.get('/api/user').then(response=>{
            this.setState({
                username:response.data.username
            })
        })
    }








    
    render(){
        return(
            <div>
                <Nav/>
                {this.state.username}
                Dashboard
            </div>
        )
    }
}
export default Dashboard;