"use client";
import { AppContextProps, AppContextProviderProps } from '@/types/types';
import React, { useState, createContext } from 'react';


export const appContext = createContext<AppContextProps | undefined>(undefined);

export default function AppContextProvider({ children }: AppContextProviderProps) {
  const [selectedItem, setSelectedItem] = useState<string>("Home");

  const modifySelectedItem = (item: string) => {
    setSelectedItem(item);
  };

  const AppContextValues = {
    selectedItem,
    modifySelectedItem,
  };

  return (
    <appContext.Provider value={AppContextValues}>
      {children}
    </appContext.Provider>
  );
}
