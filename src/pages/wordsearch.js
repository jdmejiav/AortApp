import React,{Component} from 'react'
import WordSearch from '../components/wordsearch'
import NavBar from '../components/NavBar'

export default class WordSearchPage extends Component{

    render (){
        return(
            <div>
                <NavBar/>
                <WordSearch />
            </div>
            
        )
    }


}