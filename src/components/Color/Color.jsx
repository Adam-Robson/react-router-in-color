import React from 'react';
import { useParams, Outlet } from 'react-router-dom';

import '../../App.css';

export default function Color() {

  const { a, b, c } = useParams();
  
  return (
    <>
      
      <section id="color"
        style={ { backgroundColor: `#${a}${b}${c}` } }
      >{ `hex #${ a }${ b }${ c }` }
      </section>
    </>
  );
}
