import React from 'react';


class List extends React.Component {
  
  render() {
    return (
      <ul>
        {this.props.list.map(function(item, i){
          return <li key={i}>
                  <p>{item.name}</p>
                 </li>
        })}
      </ul>
    )}
}

export default List;