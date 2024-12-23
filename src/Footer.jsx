import React from 'react'

const Footer = () => {
    const year = new Date();

  return (
    <>
        <footer>
            Copyright &amp; {year.getFullYear()}
        </footer>
    </>
  )
}

export default Footer