import axios from 'axios';
import React from 'react';
import Cards from './uniteCard';

const url = 'http://localhost:5000/cards';

export default class listOfCards extends React.Component {
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
            <div>
          <ul>PUEOIAHAOEINAKNDSQNDL
            { this.state.listOfCards.map(listOfCards => <li key={listOfCards.id } className="cardsContainer">TEST</li>)}
          </ul>
          </div>
        )
      }
        
}
