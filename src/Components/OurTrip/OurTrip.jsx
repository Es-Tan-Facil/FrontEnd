import React from 'react'
import Title from '../Title/Title'
import Text from '../Text/Text'
import './OurTrip.css'

export default function OurTrip() {
    return (
        <div id="OurTrip" className="flex justify-center items-center flex-row flex-wrap gap-20 py-4">
            <div id="textTrip" className="text-justify">
                <Title title="Nuestro viaje" />
                <Text text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. But also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum." />
            </div>
            <div id="imageTrip" >
                
            </div>
        </div>
    )
}
