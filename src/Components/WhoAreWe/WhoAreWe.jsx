import React from 'react'
import Title from '../Title/Title'
import Subtitle from '../Subtitle/Subtitle'
import Text from '../Text/Text'
import somos from "../../Assets/Pictures/burbuja.svg"
import './WhoAreWe.css'



export default function WhoAreWe() {
    return (
        <div id= "WhoAreWe" className="flex justify-center items-center flex-row flex-wrap gap-14 py-4">
            <div id= "imageWho" >
                <img src={somos} alt="imagen" />
            </div>
            <div id="textWho" className="text-justify" >
                <Subtitle subtitle="Es Tan Fácil" />
                <Title title="Quiénes somos" />
                <Text text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. But also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum." />
            </div>
        </div>
    )
}
