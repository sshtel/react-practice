import React from 'react';

// export default class SearchBox extends React.Component {
//   constructor(props: { onSearchChange: }) {
//     super(props);
//     console.log(props);
//   }

//   render() {
//     return (
//       <div>Hello card  list</div>
//     )
//   }
// }

export const SearchBox = (props: any) => {
  console.log(props);
  return <div>{ props.children }</div>
}