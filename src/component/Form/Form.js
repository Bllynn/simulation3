import React,{Component} from 'react';
import Nav from '../Nav/Nav';


class Form extends Component{
    constructor(){
        super()
        this.state={
            title:'',
            img:'',
            content:'',
        }







        
    }
    render(){
        return(
            <div>
                <Nav/>
                Form
            </div>
        )
    }
}
export default Form;