import React from 'react';
import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";
import { heroImages } from "../../helpers/heroImages";



export const HeroScreen = () => {
  
  const {heroId} = useParams();
  const hero=useMemo(()=>getHeroById(heroId),[heroId]);
  
  
  const navigate= useNavigate()

  if (!hero){
    return <Navigate to='/'/> 

  }
  const{
    
    superhero,
    alter_ego,
    characters,
    first_appearance,
    publisher
  }=hero
  
  // const imagPath=`/assets/${id}.jpg`

  const handleReturn=()=>{
    navigate(-1);
  }
  
  
  
  return (
    <div className="row mt-5">
        <div className="col-4">
            <img 
              // src={ imagPath }
              src={heroImages(`./${heroId}.jpg`)}
              alt={superhero}
              className='img-thumbnail animate__animated animate__fadeInLeft'
            />
        </div>
        <div className="col-8">
          <h3>{superhero}</h3>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item"><b>Alter ego:</b>{alter_ego}</li>
            <li className="list-group-item"><b>Publisher:</b>{publisher}</li>
            <li className="list-group-item"><b>First Appearance:</b>{first_appearance}</li>
          </ul>
          <h5 className="mt-3">Characters</h5>
          <p>{characters}</p>

          <button
            className=" btn btn-outline-info"
            onClick={handleReturn}
          >
            Regresar
          </button>
        </div>
        
    </div>
  )
}
