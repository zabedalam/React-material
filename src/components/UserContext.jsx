import React from 'react'

const UserContext=React.createContext('Codeevaluation')

const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserConsumer,UserProvider}

export default UserContext
