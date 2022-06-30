import { HeroesList } from "../heroes/HeroesList"
import React from 'react';


export const MarvelScreen = () => {
    return (
      <div>
          <h1>MarvelScreen</h1>
          <hr/>
          <HeroesList publisher={'Marvel Comics'}/>
      </div>
    )
  }
  