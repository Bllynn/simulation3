import React,{Component} from 'react';
import axios from 'axios';


class Auth extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
    }
handleChange=(e)=>{
    this.setState({
        username:e.target.value
    })

}
handleChange2=(e)=>{
    this.setState({
        password:e.target.value
    })
    console.log(this.state)
}


login=()=>{
    axios.post('/api/login',{
        username:this.state.username, 
        password:this.state.password}).then(response =>{
            if(response.data.error){
                alert(response.data.error);

            }else{
                this.props.history.push('/dashboard')
            }
        })
    }
    
    
    
register=()=>{
        axios.post('/api/register',{
            username:this.state.username, 
            password:this.state.password}).then(response =>{
                if(response.data.error){
                    alert(response.data.error);
    
                }else{
                    this.props.history.push('/dashboard')
                }
            })
        }





    render(){
        return(
            <div>
                Auth
                <button onClick={this.login}>Login</button>
                <input type="text"placeholder='Name' name='username'
                onChange={this.handleChange} value={this.state.username}/>
                <input type="text" placeholder='Password' name='password'
                onChange={this.handleChange2}/>
                <button
                 onClick={this.register}>Register
                </button>
            </div>
        )
    }
}
export default Auth;