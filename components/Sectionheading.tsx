import React from 'react'

type HeadingProp = {
  children:React.ReactNode; 
};

export const Sectionheading = ({children}:HeadingProp) => {
  return (
    <h2 className = 'text-3xl font-medium text-center capitalize mb-8'>{children}</h2>
  )
}
