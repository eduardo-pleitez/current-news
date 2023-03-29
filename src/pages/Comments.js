import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import {db} from '../firebase/Firebase';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Header from '../components/Layout/Header';
import { CommentContext } from '../hooks/CommentContext';
import  CommentList from '../components/CommentsList';

export default function Comments() {
  const [dataComments, setDataComments] = useState([]);
  const {register, handleSubmit} = useForm({
    shouldUseNativeValidation : true,
  });
  useEffect(()=>{
    const coleccionCliente = collection(db, "news-comments");
    getDocs(coleccionCliente).then(response =>{
      const ob = response.docs.map((doc)=>({
        Id : doc.id,
        Data : doc.data(),
      }))
      setDataComments(ob);
    })
  }, []);
  
  const agregarComentario = (nuevoComentario)=>{
    const coleccionCommentario = collection(db, "news-comments");
    addDoc(coleccionCommentario, nuevoComentario)
    .then(response =>{
      const nuevoOb = {
        Id : response._key.path.segments[1],
        Data : nuevoComentario,
      }
      setDataComments([...dataComments, nuevoOb]);
    })
    .catch(err => console.log(err));
  }

  const onSubmit = (data, e) =>{
    agregarComentario(data);
  }

  return (
    <>
      <Header />
        <CommentContext.Provider value={{ dataComments, setDataComments }}>
          <CommentList />
          <div className='w-75 mx-auto my-5 p-5 bg-primary text-white rounded'>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="textInput1">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control type="text" placeholder="Juan" {...register('Nombre', {required:true})} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="textInput2">
                <Form.Label>Apellido:</Form.Label>
                <Form.Control type="text" placeholder="Pérez" {...register('Apellido', {required:true})} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="textArea1">
                <Form.Label>Comment:</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Write a comment..." {...register('Comentario',     {required:true})} />
              </Form.Group>
              <Button type='submit' className='bg-dark text-white px-4 py-2'>Submit</Button>
            </Form>
          </div>
        </CommentContext.Provider>
    </>
  )
}
