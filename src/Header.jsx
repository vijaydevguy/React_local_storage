import React from 'react'

const Header = ({title}) => {
  return (
    <header>
      {title ?( <h1>{title}</h1>) : (<h1>Enter title</h1>)}
    </header>
  )
}

export default Header