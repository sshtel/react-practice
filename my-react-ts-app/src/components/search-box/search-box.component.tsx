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

import './search-box.styles.css'

const SearchBox = (placeholder: string, handleChange: any) => {
  return (
    
    <input className='search'
      type='search'
      placeholder={ placeholder }
      onChange={ handleChange }
    />
  );
}

export default SearchBox;