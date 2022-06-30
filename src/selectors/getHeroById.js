// import { heroes } from "../data/heroes"

import { heroes } from "../data/heroes"


// export const getHeroById=(id)=>{
// return heroes.filter(id=heroes.id===id)
// }

export const getHeroById=(id='')=>{
    return heroes.find(hero=> hero.id === id)
}