import React, { useState, createContext } from 'react'

export const appContext = createContext(null)

export default function AppContext({ children }) {
  let [selectedItem, setSelectedItem] = useState("Home");

    let modifySelectedItem = (item) => {
        setSelectedItem(item)
    }
    let AppContextValues = {
      selectedItem,
      modifySelectedItem
  }
  return (
    <appContext.Provider value={AppContextValues}>
        {children}
    </appContext.Provider>
  )
}