import React from 'react';

export default function PersonList({person}) {
  return (
    <>
    <h1>I 'm {person.name} I m {person.age} I m {person.sex}</h1>
    </>
  );
}
