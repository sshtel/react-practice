import React, { ChangeEvent } from 'react';

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

import './search-box.styles.css'
type HandleChange = (event: ChangeEvent<HTMLInputElement>) => void

const SearchBox = ( param: { placeholder: string, handleChange: HandleChange }) => {
  return (
    
    <input className='search'
      type='search'
      placeholder={ param.placeholder }
      onChange={ param.handleChange }
    />
  );
}

export default SearchBox;