import React from 'react'
import { createContext, useState } from 'react'

export const UserContext = createContext()


const UserContext = ({children}) => {

    const [user, setUser] = useState({
        fullName:{
            firstName:'',
            lastName:''
        },
        email:'',
        password:''
    })

  return (
    <div>
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export default UserContext
