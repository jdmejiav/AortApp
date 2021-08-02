import React, { Component } from "react";

import "./ahorcadito.css"


import base from "./images/base.png"
import cabeza from "./images/cabeza.png"
import cuerpo from "./images/cuerpo.png"


import brazoDerecho from "./images/brazo derecho.png"
import brazoIzquierdo from "./images/brazo izquierdo.png"

import piernaDerecha from "./images/pierna derecha.png"
import piernaIzquierda from "./images/pierna izquierda.png"






export default class Ahorcadito extends Component {
  constructor() {
    super();
    this.state ={
        palabras : ["palabra","palabra2","palabra3"],
        currentWordIndex: 0,
        currentImg: base,
        input:"",
        wordToShow: "",

    }

  }

  componentDidMount(){
    const temp = Math.floor(Math.random() * (this.state.palabras.length));
    for (let i = 0 ; i<this.state.palabras[temp].length;i++){
      this.state.wordToShow+=" "
    }
    
    this.setState({currentWordIndex: temp})
    
  }


  render() {
    const onClick = (e) =>{
      e.preventDefault();
      
      for (let i = 0; i<this.state.palabras[this.state.currentWordIndex].length;i++){
        if (this.state.input.charAt(i) == this.state.palabras[this.state.currentWordIndex].charAt(i)){
          let temp = "";
          for(let j = 0; j<this.state.palabras[this.state.currentWordIndex].length;j++){
            if (j==i){  
              temp+=this.state.input[j]
            }else{
              temp+=this.state.wordToShow[j]
            }
          }  
          this.setState({wordToShow:temp});
        }


      }
    }
    return (
      
        <div className="container-ahorcadito"> 
              <img src={this.state.currentImg} className="img-progress"></img>
                  <div className="container-palabras">
                <div className="letras">{this.state.wordToShow.split("").map((i)=>{return(<input className="letra" value={i} style = {{"backgroud":"#fff"}} disabled/>)})}</div>
                  <input type="text" placeHolder="escriba acá una palabra" onChange={(e)=>{this.setState({input:e.target.value})}}/>
                  <a className="btn-check" onClick={onClick}>Check</a>
              </div>
        </div>
      
    )
  }
}
