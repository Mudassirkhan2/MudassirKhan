"use client"
import { Element } from 'react-scroll';
export  const ElementWrapper = ({children , nameOfTheElement}) => {
  return (
    <Element name={nameOfTheElement}>
        {children}
    </Element>
  )
}


