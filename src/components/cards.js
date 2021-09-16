import React from 'react';
import listOfCards from './listOfCards';

const Card = () => {
    
        return( 
            <div className="cardsContainer">
                <div className="cardsContent">{listOfCards}</div>
            </div>
        );
    }  

export default Card;