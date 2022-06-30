
import { HeroCard } from './HeroCard'
import { getHeroByPublisher } from '../../selectors/getHerosByPublisher'
import { useMemo } from 'react'
import React from 'react';


export const HeroesList = ({publisher}) => {

    const heroes= useMemo(()=> getHeroByPublisher(publisher),[publisher]) 
  return (
    <div className='row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
            {
                heroes.map(hero=>(
                    
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    
                    />
                        
                ))
            }
  
    </div>
  )
}

