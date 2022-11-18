import React from 'react';

//pass down the props into the component.... essentlially state->props->component
const Recipe = ({title,calories,image}) =>{
    return(
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt=''></img>
        </div>
    );
}

export default Recipe;