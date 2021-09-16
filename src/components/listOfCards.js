import axios from 'axios';
import React from 'react';

const url = 'http://localhost:5000/cards';

export default class getData extends React.Component {
    state = {
        listOfCards: []
      }
    
      componentDidMount() {
        axios.get(url)
          .then(res => {
            const listOfCards = res.data;
            this.setState({ listOfCards });
          })
      }
      render() {
        return (
            <div>{this.state.listOfCards}
          <ul>
            { this.state.listOfCards.map(listOfCards => <li className="cardsContainer">{listOfCards.name}</li>)}
          </ul>
          </div>
        )
      }
        
}

// export default Collection;