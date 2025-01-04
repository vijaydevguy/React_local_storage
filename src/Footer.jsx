import React from 'react'

const Footer = ({items}) => {
    const year = new Date();

  return (
    <footer>
      <div style={{display: 'flex', alignItems: 'center',marginBottom:"5px"}}>
        {items.length} {items.length > 1 ? 'items' : 'item'}
      </div>
      <div>
        &copy; {year.getFullYear()}
      </div>
    </footer>
  )
}

export default Footer