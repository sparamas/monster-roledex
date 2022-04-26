import { Component } from 'react';

import './card-list-style.css'

import Card from '../card/card-component'

class CardList extends Component{
    render(){
        const { monsters } = this.props;
        //console.log(this.props)
        console.log("render");
        return (
            <div className='card-list'>
                {monsters.map(monster => {
                    return(
                        <Card monster={monster}/>
                )})}
            </div>

        )
     
    }

}

export default CardList;