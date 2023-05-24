import React from 'react'
import Title from '../TextComponents/Title/Title'
import Text from '../TextComponents/Text/Text'
import './OurTrip.css'
import Map from '../../Assets/Pictures/mapa.svg'
import StainTitle from '../TextComponents/StainTitle/StainTitle'
import background from '../../Assets/Pictures/mapa_back.svg'


export default function OurTrip() {
    const description = <React.Fragment><br/>¡Bienvenidos a nuestra aventura!<br/>

    Aquí queremos compartir con ustedes la inspiradora historia de nuestro viaje anual, un viaje lleno de sueños, solidaridad y amor por los demás. Cada año, nos embarcamos en una aventura desde San Luis hasta Mar de Plata, acompañados de los maravillosos niños de las escuelas rurales de la zona de Bajo de Veliz.
    
    Este viaje no sería posible sin las donaciones desinteresadas de voluntarios y personas que desean colaborar.<br/> Gracias a su generosidad, logramos que estos increíbles chicos puedan conocer y disfrutar del mar. Para muchos de ellos, el mundo se limita a su región, pero esta travesía les permite abrir sus ojos a otras realidades y vivir experiencias inolvidables.
    
    Nuestro recorrido comienza en un autobús, atravesando más de 1175 km de distancia. En cada parada, sentimos que nuestro sueño está un paso más cerca de convertirse en realidad. Es emocionante ver cómo mucha gente ya conoce nuestra ruta y nos ofrece su apoyo. En estos momentos, nos acercan víveres para el resto del viaje, refrescos y todo tipo de gestos amables. Incluso los negocios locales de Mar de Plata, como restaurantes y hostels, colaboran con nosotros al brindarnos cenas y alojamiento para los chicos.<br/> Su generosidad nos llena de gratitud y nos motiva a seguir adelante.<br/>
    
    Nuestro sueño es que esta hermosa travesía nunca termine. Anhelamos continuar cumpliendo los sueños de estos niños año tras año. Por eso, queremos invitarte a que te sumes a esta maravillosa causa.<br/> 
    
    Juntos, podemos hacer posible que más chicos conozcan el mar, exploren nuevos horizontes y descubran un mundo lleno de posibilidades. Únete a nuestra familia de soñadores y hagamos que cada año sea una experiencia inolvidable.
    
    ¡Gracias por visitar nuestra web y por considerar ser parte de este viaje extraordinario!</React.Fragment>
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
                <Text text={description} />
            </div>

        </div>
    )
}
