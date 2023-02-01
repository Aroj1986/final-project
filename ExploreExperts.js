import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function ExploreExperts() {
   const expertsList = [
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
  //console.log(expertsLists[0].firstName)

  const [expertsLists, setExpertsLists] = useState([]);

  useEffect(() => {
    axios.get("https://cdn.contentful.com/spaces/4vkkg5zibka5/environments/master/entries?access_token=4b5sTh91sdtl3toDSfZUsxwMbaaFkegTOuADicqBLNM")
    .then((response) => {
      setExpertsLists(response.data.items)
      console.log(response.data.items)
    })
  }, [])

  return (
    <div>
      <h2 style={{paddingLeft:'2rem'}}>Discover SlimTeam experts at your location</h2>
      <div className='container-explore'>
        <input type="text" placeholder={"SlimTeam expert"}></input>
        <input type="text" placeholder={"Postal code"}></input>
        <button>Search</button>
      </div>
      <hr />
      <h3 style={{paddingLeft:'2rem'}}>Your search results:</h3> 
      <ol>
        {expertsList.map((expert, index) => <li key={index}><h4>{expert.firstName} {expert.lastName}: {expert.expertise}, Ratings from the past employers</h4><p>{expert.address}, {expert.postalCode}, {expert.city}</p><p> Expert's profile including price/hour or price/day, Book the appointment online</p></li>)}
        {expertsLists?.map((expert, index) => <li key={index}>
          <h4>{expert.fields.nameOfTheCity}</h4>
          {expert.fields.descriptionOfTheCity.map((content, ind)=><p key={ind}>{content.nodeType}</p>)}
          <button><NavLink to="/meet-us" className={"view-more-button"}>view more</NavLink></button></li>)}
      </ol>
    </div>
  )
}

export default ExploreExperts
