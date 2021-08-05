import React, { useEffect, useState } from 'react'
import axios from 'axios';

import "../App.css"
import { API_KEY } from '../apis/API_KEY';
import CardComponent from './Card'
import NotLoaded from '../components/NotLoaded';


const InfiniteList = ({ initialData, earthDate, today }) => {


 const [photos, setPhotos] = useState(initialData)
 const [isFetching, setFetching] = useState(false)
 const [page, setPage] = useState(1)

 useEffect(() => {
  //Resetting Photos when date change
  setPhotos(initialData)
 }, [initialData])


 useEffect(() => {
  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
  // eslint-disable-next-line 
 }, [])

 useEffect(() => {
  if (!isFetching) return
  fetchMoreData()
  // eslint-disable-next-line 
 }, [isFetching])

 const fetchMoreData = async () => {
  // Fetching More data with ++page and combining with 
  setPage(page + 1)
  const checkDate = earthDate === today ? "sol=1000" : `earth_date=${earthDate}`

  const MARS_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${checkDate}&api_key=${API_KEY}&page=${page}`

  try {
   const response = await axios.get(MARS_URL)
   setPhotos([...photos, ...response.data.photos])

  }
  catch (error) {
   // console.error(errorMessage)
   console.error("Something Went Wrong! Please Try Again")
  }
  setFetching(false)
 }

 const handleScroll = () => {
  if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
  console.log('Fetching  more list items!')

  setFetching(true)
 }


 if (!photos) {
  return <NotLoaded />
 }
 if (photos.length === 0)
  return <h3 style={{ textAlign: "center" }} >No Data Found in this Date! :) Try Another date</h3>
 return (
  <div className="list" >
   {photos.map((item) => <div key={item.id + Math.random(Math.floor(1))}  ><CardComponent data={item} /></div>)}
   {isFetching && <NotLoaded />}
  </div>
 )
}

export default InfiniteList
