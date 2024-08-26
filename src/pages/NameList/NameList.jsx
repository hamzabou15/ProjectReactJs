// on import useState from react // on appelle les dependences 
import React, { useState } from 'react';
// on importe le style
import './style.css';

// on creer le component NameList
const NameList = () => {
  // on utlise le hook de react UseState pour pouvoir gerer l'etat du tableau 
  const [names, setNames] = useState(['Said', 'Brayn', 'Hamza', 'David']);

  return (
    <div className='container'>
      <ul className="name-list">
        {/* on display le tableau a l'aide la méthode map et on donne le key pour chasue element du tableau */}
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
// on export le component pour pouvoir l'appeler par la suite dans le fichier app.jsx 
export default NameList;
