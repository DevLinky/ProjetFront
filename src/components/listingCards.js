import React from "react";
import Cards from "./cards";
import listOfCards from "./listOfCards";

const ListingCards = () => {
    let finalReturn = '';
    for(let i=0;i<listOfCards.length;i++){
        finalReturn += '<li>'+<Cards />+'</li>';
    }
    return finalReturn;
}
export default ListingCards;