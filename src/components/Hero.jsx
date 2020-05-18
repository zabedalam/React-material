import React from 'react';

export default function Hero({heroName}) {
    if(heroName==="Jocker"){
        throw new Error('Not a Hero');
        
    }
  return (
    <>
    {heroName}
    </>
  );
}
