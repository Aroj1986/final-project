import React from 'react'
import './landing.css'
import Carousel from 'react-bootstrap/Carousel';


function Landing() {
  return (
    <div className='flex flex-row'>
      <div className='col'>
        <div className="hr-sect"><h3>Our Top Rated Recipes</h3></div>
        <div>
          <Carousel variant="dark">
            <Carousel.Item>
              <div className='carousel-flex'>
                {recipes?.map((recipe) => {
                  if (recipe.fields.recipeRating === 5) {
                    return (
                      <div className="col col-md-4">
                        <img
                            className="image margin-bottom1"
                            src={recipe.fields.recipeImages[0].fields.file.url} />
                        <p>{recipe.fields.recipeTitle}</p>
                        <span className="ratingstars">
                          {Array(5)
                          .fill()
                          .map((_, i) => {
                          const ratingValue = i + 1;
                          if (ratingValue <= recipe.fields?.recipeRating) {
                              return <span key={i}>★</span>;
                          } else {
                              return <span key={i}>☆</span>;
                          }
                          })}
                        </span>
                        <br/>
                        <Link to={`/recipes/${recipe.sys.id}`}><button type="button" className="btn btn-dark">Learn more</button></Link>
                      </div>
                    );
                }
                return null;
                })}
              </div>
            </Carousel.Item>
            
            <Carousel.Item>
              <div className='carousel-flex'>
                {recipes?.map((recipe) => {
                  if (recipe.fields.recipeRating === 4) {
                    return (
                      <div className="col col-md-4">
                        <img
                            className="image margin-bottom1"
                            src={recipe.fields.recipeImages[0].fields.file.url} />
                        <p>{recipe.fields.recipeTitle}</p>
                        <span className="ratingstars">
                          {Array(5)
                          .fill()
                          .map((_, i) => {
                          const ratingValue = i + 1;
                          if (ratingValue <= recipe.fields?.recipeRating) {
                              return <span key={i}>★</span>;
                          } else {
                              return <span key={i}>☆</span>;
                          }
                          })}
                        </span>
                        <br/>
                        <Link to={`/recipes/${recipe.sys.id}`}><button type="button" className="btn btn-dark">Learn more</button></Link> 
                      </div>
                    );
                }
                return null;
                })}
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Landing


