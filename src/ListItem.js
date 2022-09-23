import React, {Component} from 'react'

export default class ListItem extends Component{

    render(){
        return (
            <div class="innerDiv">
                <input type= 'radio' ></input>
                {(this.props.doThis)}
            </div>
        )
    }
}