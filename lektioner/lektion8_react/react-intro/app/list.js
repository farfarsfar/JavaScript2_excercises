import React from 'react';


class List extends React.Component {
  
  render() {
    return (
      <ul>
        {this.props.list.map((item, i) => 
          <li key={i}>
            {item.name}
          </li>
        )}
      </ul>
    )}
}

export default List;