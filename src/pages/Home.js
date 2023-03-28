import React, {useState, useEffect} from 'react'
import Header from '../components/Layout/Header';
import NewsList from '../components/NewsList';

export default function Home() {
  const [data, setData] = useState([]);
  const url = process.env.REACT_APP_URL;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_APIKEY,
      'X-RapidAPI-Host': process.env.REACT_APP_APIHOST,
    }
  };
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(url, options);
        const jsonResponse = await response.json();
        setData(jsonResponse.articles);
      } catch (error) {
        console.log(error);
      } 
    }
    fetchNews()
  }, []);

  return (
    <>
      <Header />
      <NewsList data={data} />
    </>
  );
}
