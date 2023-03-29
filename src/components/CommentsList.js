import React from 'react';
import { useComments } from '../hooks/useComments';

export default function CommentsList() {
  const { dataComments } = useComments();
  return (
    <div className='w-75 mx-auto pt-5'>
      {
        dataComments.map((commentItem, index) => {
          return (
            <div key={index} className='p-2 my-2 bg-primary text-white rounded fw-bold'>
              <p>"{commentItem.Data.Comentario}"</p>
              <p>{commentItem.Data.Nombre} {commentItem.Data.Apellido}</p>
            </div>
          )
        })
      }
    </div>
  )
}
