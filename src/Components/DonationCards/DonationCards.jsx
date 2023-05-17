import './DonationCards.css';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import CardMoreHelp from './CardMoreHelp';
import CardSchoolMaterial from './CardSchoolMaterial';
import CardSchool from './CardSchool';
import CardKM from './CardKM';
import { Button } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';


export default function DonationCards() {

    return (
        <div id="Collaborate" className="md:h-[100vh] flex justify-center items-center flex-col pb-10">
            <div className="flex justify-center items-center flex-col" >
                <Subtitle subtitle="Nuestra causa" />
                <Title title="Colabora con nosotros" />
            </div>
            <div className="flex justify-center flex-wrap mt-1.5 gap-14" >
                <CardKM />
                <CardSchool />
                <CardSchoolMaterial />
                <CardMoreHelp />
            </div>
            <NavLink to="/contact">
                <Button  title="Contacta con nosotros" size="lg" className='bg-[#51C8FC] mt-12 md:px-20'>Contacta</Button>
            </NavLink>
        </div>
    )
}