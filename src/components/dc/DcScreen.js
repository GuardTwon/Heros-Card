import { HeroesList } from "../heroes/HeroesList"
import React from 'react';


export const DCScreen = () => {
  return (
    <div>
        <h1>DCScreen</h1>
        <hr/>
        <HeroesList publisher={'DC Comics'}/>
    </div>
  )
}
