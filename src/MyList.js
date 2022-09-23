import React, {Component} from 'react'
import ListItem from './ListItem'

export default class MyList extends Component{
  render(){
    const toDo = ['a','b','c']
    const allToDo = this.props.theList.map((value,ind)=>{
        return (
          <ListItem 
            doThis = {value}
            key = {`toDo${ind}`}
          />
        )
    })
    return (
      <div>
        <div class = "headerDiv" >
        <h1> Things I should stop procatinating :</h1>
        </div>
        <ul>
          <li>
            {allToDo}
          </li>
        </ul>
      </div>
    )
  }
}