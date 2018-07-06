import React,{Component} from 'react';
import Nav from '../Nav/Nav';


class Post extends Component{
    constructor(){
        super()
        this.state={
            title:'',
            img:'',
            content:'',
            author:'',
            authorPicture:'',
        }







        
    }
    render(){
        return(
            <div>
                <Nav/>
                Post
            </div>
        )
    }
}
export default Post;