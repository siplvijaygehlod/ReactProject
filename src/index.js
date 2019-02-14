import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return ( 
  <div className = "ui container comments" >
    <ApprovalCard>
      <CommentDetail author="Sam" timeAgo="Today at 4:45AM" commentText="Very Good" avatar={Faker.image.avatar()}/> 
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail author="jame" timeAgo="Today at 2:45AM" commentText="Nice One" avatar={Faker.image.avatar()}/>
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail author="jan"timeAgo="Yesterday at 1:45PM" commentText="Easy to understand" avatar={Faker.image.avatar()}  />
    </ApprovalCard>
  </div>
  );
};

ReactDOM.render( < App / > , document.querySelector('#root'));











































/** 
function getButtonData() {
  return 'clicke here 1';
}
const App = () => {
  //const buttonText = 'Click here';
  return ( <div >
    <label className="label" htmlFor="name"> Name: </label> <input id = "name"
    type = "text" / >
    <button style = {
      {
        backgroundColor: 'red',
        color: 'white'
      }
    } > {
      getButtonData()
    } </button> </div>
  );
};

ReactDOM.render( <App /> ,
  document.querySelector('#root')
);




//function transform(offset) {
//   const cos = Math.cos(offset);
//   const sin = Math.sin(offset);
//   return {transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)`};
// }

// class App extends React.Component {
//   state = {styleOne: {}, styleTwo: {}};

//   onMouseMove = (event) => {
//       this.setState({
//           styleOne: transform(-event.clientX / event.clientY),
//           styleTwo: transform(event.clientX / event.clientY)
//       });
//   }


//   render() {
//       return ( 
//           <div onMouseMove={this.onMouseMove}>
//               <div className="panel" style={this.state.styleOne}/>
//               <div className="panel" style={this.state.styleTwo}/>
//           </div>
//       )
//   }
// }

// ReactDOM.render(
//   <App/>,
//   document.querySelector('#root')
// );

*/