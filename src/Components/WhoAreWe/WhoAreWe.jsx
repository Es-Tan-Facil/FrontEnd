import React from 'react'
import Title from '../Title/Title'
import Subtitle from '../Subtitle/Subtitle'
import Text from '../Text/Text'

export default function WhoAreWe() {
    return (
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div style={{ width: "31rem" }}>
                <Subtitle subtitle="Nuestra causa" />
                <Title title="Quiénes somos" />
                <Text text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. But also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum." />
            </div>
        </div>
    )
}
