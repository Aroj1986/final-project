import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './exploreExperts.css'

function ExploreExperts() {

  const [expertsLists, setExpertsLists] = useState([]);

  /* setup and create a client that is using the contentful apis to 
     fetch data from contentful that can be consumed in react application */
  const contentful = require('contentful')
  const client = contentful.createClient({
    space: '4vkkg5zibka5',
    environment: 'master', // defaults to 'master' if not set
    accessToken: '26xbc_CeJC1JHQUTA6mUFJu1bS5VWXBibUVa0YN8BDA'
  })

  useEffect(() => {
    client.getEntries({
      content_type: "experts"
    })
    .then((response) => {
      setExpertsLists(response.items)
      console.log(response.items)
    })
    .catch(console.error)
  }, [])

  return (
    <>
      <h2 style={{paddingLeft:'2rem'}}>Discover SlimTeam experts at your location</h2>
      <div className='container-search-field'>
        <input type="text" placeholder={"SlimTeam expert"}></input>
        <input type="text" placeholder={"Postal code"}></input>
        <input type="text" placeholder={"City"}></input>
        <button className='button-expert'>Search</button>
      </div>
      <hr /> 
      <div className='expert-list-container'>
        {expertsLists.map((expert, index) =>
          <div className="card-container">
            <img src={expert.fields.profileImage.fields.file.url} key={expert.fields.profileImage.sys.id} alt="Expert image" style={{height: 100, width: 100}}/>
            <p className='card-name'><b>{expert.fields.expertName}</b></p>
            <div className='star-review-container'>
              <span className="rating-stars">
                {Array(5)
                  .fill()
                  .map((_, i) => {
                    const ratingValue = i + 1;
                    if (ratingValue <= expert.fields.starsRating) {
                      return <span key={i}>★</span>;
                    } else {
                      return <span key={i}>☆</span>;
                    }
                  })}
              </span>
              <p className='number-reviews'>{expert.fields.numberOfReviewers} reviews</p>
            </div>
            <p className='card-expertise'>{expert.fields.expertise}</p>
            <p className='card-address'>{expert.fields.address}</p>
            <button><NavLink to={`/explore-experts/${expert.fields.profileImage.sys.id}`} className="view-details-button">view details</NavLink></button>
          </div>
           )}
      </div>

    </>
  )
}

export default ExploreExperts

//          {expert.fields.importantLandmarks?.map((imageUrl, ind)=><p>{imageUrl.fields?.file.url}</p>)}

/* const expertsList = [
  {
      "firstName": "Aroj",
      "lastName": "Bhattarai",
      "expertise": "Civil Engineer",
      "address": "Soerser Weg 11b",
      "postalCode": 52070,
      "city": "Aachen"
  },
  {
      "firstName": "Mark",
      "lastName": "Henry",
      "expertise": "Doctor",
      "address": "Bongard Str. 02",
      "postalCode": 52428,
      "city": "Jülich"
  }
]

  {expertsList.map((expert, index) => <li key={index}>
    <h4>{expert.firstName} {expert.lastName}: {expert.expertise}, Ratings from the past employers</h4>
    <p>{expert.address}, {expert.postalCode}, {expert.city}</p>
    <p> Expert's profile including price/hour or price/day, Book the appointment online, Online/offline visibility</p></li>)} */
