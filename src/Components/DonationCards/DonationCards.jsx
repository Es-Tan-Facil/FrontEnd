import './DonationCards.css';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import CardMoreHelp from './CardMoreHelp';
import CardSchoolMaterial from './CardSchoolMaterial';
import CardSchool from './CardSchool';
import CardKM from './CardKM';


export default function DonationCards() {

    return (
        <div id="card-container">
            <div id="Colabora" class="flex justify-center items-center flex-col" >
                <Subtitle subtitle="Nuestra causa" />
                <Title title="Colabora con nosotros" />
            </div>
            <div class="flex justify-center flex-wrap mt-1.5 gap-14" >
                <CardKM text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                <CardSchool text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                <CardSchoolMaterial text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                <CardMoreHelp text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
            </div>
        </div>
    )
}