import React from 'react'
import Title from '../TextComponents/Title/Title'
import Text from '../TextComponents/Text/Text'
import './OurTrip.css'
import Map from '../../Assets/Pictures/mapa.svg'
import StainTitle from '../TextComponents/StainTitle/StainTitle'
import background from '../../Assets/Pictures/mapa_back.svg'


export default function OurTrip() {
    return (
        <div id="OurTrip" className=" md:justify-start flex justify-center items-center flex-row flex-wrap gap-20 md:py-4 md:h-[100vh] mt-12 md:ml-40">
            <div className="containerHome hidden md:block">
                <img data-testid="background-img" src={background} alt="imagen" />
            </div>
            <div id="imageTrip" className=" flex justify-center w-1/4 min-w-[55%] max-w-[55%] md:hidden ">
                <img src={Map} alt="imagen" className=" w-3/4 "/>
            </div>
            <div id="textTrip" className=" text-justify md:flex-row md:justify-start md:items-start">
                <Title title="Nuestro viaje"/>
                <StainTitle />
                <Text text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. But also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum." />
            </div>

        </div>
    )
}
