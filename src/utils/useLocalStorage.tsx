"use client"
import { useState } from "react"
import { localStorageInitialValues } from "./localStorageInitialValues"

export const useLocalStorage = (key) => {
  const [state, setState] = useState(() => {
    // Initialize the state
    try {
      const value = typeof window !== 'undefined' && window.localStorage.getItem(key)
      // Check if the local storage already has any values,
      // otherwise initialize it with the passed initialValue
      return value ? JSON.parse(value) : localStorageInitialValues[key]
    } catch (error) {
      console.log(error)
    }
  })

  const setValue = value => {
    try {
      // If the passed value is a callback function,
      //  then call it with the existing state.
      const valueToStore = value instanceof Function ? value(state) : value
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
      setState(value)
    } catch (error) {
      console.log(error)
    }
  }

  return [state, setValue]
}

