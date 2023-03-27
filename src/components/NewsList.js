import React from 'react'

export default function NewsList({ data }) {
  return (
    data.map((newsItem, index) => {
      return (<div key={index}>
        <p>{newsItem.title}</p>
        <img src={newsItem.media} alt={newsItem.title}/>
        </div>)
    })
  )
}
