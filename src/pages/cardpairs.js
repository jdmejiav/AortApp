import React,{Component} from 'react'

import NavBar from '../components/NavBar'
import CardPairs from '../components/cardPairs'
export default class CardPage extends Component{

    render (){
        return(
            <div>
                <NavBar/>
                <CardPairs />
            </div>
            
        )
    }


}