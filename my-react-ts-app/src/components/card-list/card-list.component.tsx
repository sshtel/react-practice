import React from 'react';
import Card from '../card/card.component';

import './card-list.styles.css';

// export default class CardList extends React.Component {
//   constructor(props: any) {
//     super(props);
//     console.log(props);
//   }

//   render() {
//     return (
//       <div>Hello card  list</div>
//     )
//   }
// }

const CardList = (props: any) => {
  return (
  <div className='card-list'>
    {
      props.monsters.map( (monster: any) => {
        return( <Card key={monster.id} monster={monster}></Card> );
      })
    }
  </div>
  );
}

export default CardList;