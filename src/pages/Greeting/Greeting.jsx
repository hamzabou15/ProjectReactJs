import React from 'react'
// on crrer le component Greeting avec le concetp du propos dans ce cas name 
const Greeting = ({ name }) => {
    // on affiche le resulat
    return (
        <div className='container'>
            <h1>Hello, {name}!</h1>
        </div>
    );
}

export default Greeting

// Exemple d'utilisation
// <Greeting name="John" />
