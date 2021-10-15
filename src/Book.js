import React from 'react'

const Book = ({ img, title, author }) => {
  const clickHandler = (e) => {
    console.log(e)
    //console.log(e.target)
  }
  // const { img, title, author } = props
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />

      <h1>{title}</h1>
      <h4
        style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}
      >
        {author}
      </h4>
      <button type='button' onClick={() => clickHandler(author)}>
        Reference
      </button>
    </article>
  )
}

export default Book





