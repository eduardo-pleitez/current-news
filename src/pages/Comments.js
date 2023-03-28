import React, { useEffect } from 'react';
import { collection, doc, getDocs } from 'firebase/firestore';
import {db} from '../firebase/Firebase';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Header from '../components/Layout/Header'

export default function Comments() {

  const {register, handleSubmit, setValue} = useForm({
    shouldUseNativeValidation : true,
  });
  useEffect(()=>{
    const coleccionCliente = collection(db, "news-comments");
    getDocs(coleccionCliente).then(response =>{
      const ob = response.docs.map((doc)=>({
        Id : doc.id,
        Data : doc.data(),
      }))
      console.log(ob);
    })
  },[]);
  return (
    <>
      <Header />
        <div className='w-75 mx-auto my-5 p-5 bg-primary text-white rounded'>
          <Form className='bg-primary'>
            <Form.Group className="mb-3" controlId="textInput1">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type="text" placeholder="Juan" {...register('nombre', {required:true})} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="textInput2">
              <Form.Label>Apellido:</Form.Label>
              <Form.Control type="text" placeholder="Pérez" {...register('apellido', {required:true})} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="textArea1">
              <Form.Label>Comment:</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Write a comment..." {...register('comment',   {required:true})} />
            </Form.Group>
            <Button type='submit' className='bg-dark text-white px-4 py-2'>Submit</Button>
          </Form>
        </div>
    </>
  )
}
