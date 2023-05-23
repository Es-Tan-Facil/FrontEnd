import React from 'react'
import Title from '../Title/Title'
import Subtitle from '../Subtitle/Subtitle'
import Text from '../Text/Text'
import somos from "../../Assets/Pictures/burbuja.svg"
import './WhoAreWe.css'
import StainTitle from '../Stain/StainTitle'



export default function WhoAreWe() { 
    const description = <React.Fragment><br/>Somos un grupo de amigos, que aunando voluntades, tenemos como objetivo llevar a chicos de parajes rurales (Valle del Conlara, Provincia de San Luis), por medio de sus escuelas a que conozcan el mar.<br/>

    NO somos una ONG, NO somos una Fundación, NO tenemos personería jurídica, NO respondemos a ninguna entidad política, ni nos identificamos con ellas.
    Todo es a base de voluntad, a base de confianza.<br/>
    
    Llevamos desde 2006 cumpliendo sueños; ya son 12 los viajes que hemos realizado gracias a la participación de tantos.
    Nuestra página de Facebook “Campaña Es tan Fácil“, es el testimonio fiel de todo lo que fuimos concretando.<br/>
    
    La campaña es de todos aquellos que suman su voluntad.
    Sin formas, somos un espíritu de voluntades.
    
    Por eso...
    
    SIEMPRE GRACIAS.</React.Fragment>
    return (
        <div id= "WhoAreWe" className=" h-auto md:h-[100vh] flex justify-center items-center flex-row flex-wrap gap-14 py-4">
            <div id= "imageWho" >
                <img src={somos} alt="imagen" />
            </div>
            <div id="textWho" className="text-justify md:flex-row md:justify-start md:items-start flex-col justify-center items-center" >
                <Subtitle subtitle="Es Tan Fácil" />
                <Title title="Quiénes somos" />
                <StainTitle />
                <Text text={description} />
            </div>
        </div>
    )
}
