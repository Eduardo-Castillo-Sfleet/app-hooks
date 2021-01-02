import React, { useState } from 'react';

function App() {
   // Declara una nueva variable de estado, que llamaremos "count".
   const [count, setCount] = useState(0);
   const [fruit] = useState('manzana');
   const [libros] = useState([{ titulo: 'La vuelta al mundo en 80 dias'}, {titulo: '100 años de soledad'}])
   const [titulo, setTitulo] = useState('');

   return (
     <div>
       <h2>{titulo}</h2>
       <p>You clicked {count} times</p>
       <button onClick={() => setCount(count + 1)}>
         Click me
       </button>
       <p>{fruit} {libros.map((libro) => <span>{libro.titulo}</span>)}</p>
       <input type="text" onChange={e => setTitulo(e.target.value)}/>
     </div>
   );
}

export default App;
