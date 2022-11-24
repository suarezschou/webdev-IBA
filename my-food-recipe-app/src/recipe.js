import React from 'react';

//pass down the props into the component.... essentlially state->props->component
const Recipe = ({title,calories,image,ingredients}) =>{
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients =>(
                    <li>
                        {ingredients.text}
                    </li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt='the dish'></img>
        </div>
    );
}

export default Recipe;