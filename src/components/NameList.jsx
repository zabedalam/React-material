import React from 'react';
import PersonList from "../components/PersonList"

export default function NameList() {
    // const names=["alam","zaif","Tonni"]
    const persons=[{
        name:"alam",
        age:42,
        sex:"Male"
    },
    {
        name:"zaif",
        age:4,
        sex:"Male"
    },
    {
        name:"Tonni",
        age:32,
        sex:"Female"
    }]
    // const nameList=names.map(name=><h1>{name}</h1>)
const personList=persons.map(person=><PersonList key={person.name} person={person}></PersonList>)
  return (
    <>
    {personList}
    {/* {personList} */}
    {/* {nameList} */}
    {/* {names.map(name=><h1>{name}</h1>)} */}
    {/* <h1>{names[0]}</h1>
    <h1>{names[1]}</h1>
    <h1>{names[2]}</h1> */}
    </>
  );
}

