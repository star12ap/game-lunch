import React from 'react'
import './css/Card.css';

// class Card extends React.Component {
//   render() {
//     return (
//       <div className="food-card" onClick = {(e) => {

//           console.warn(e);
        
//         this.props.onClick(); 
//       }}> 
//         <div className='front'></div>
//         <div className='back'>{this.props.value}</div>
//       </div>
//     );
//   }
// }

function Card(props) {
  const state = { front: true}
  if (props.status) {

    return (
        <div className="card" onClick = {(e) => {
          props.onClick();
        }}> 
          <div className='back'></div>
        </div>
    );
  } else {
    return (
        <div className="card-select" onClick = {(e) => {
          let target =  e.target.parentNode;
          target.classList.toggle('active');
        }}> 
          <div className='front' /*style={{color: "red"}}*/>{props.value}</div>
          <div className='back'></div>
        </div>
    );
  }
}

export default Card;