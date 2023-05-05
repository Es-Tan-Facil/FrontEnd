import './DonationCards.css';
import Bus from '../../Assets/Pictures/Bus.png';
import SchoolBuilding from '../../Assets/Pictures/School.png';
import SchoolMaterial from '../../Assets/Pictures/School Material.png';
import Help from '../../Assets/Pictures/Help.png';
import { Card, CardBody, Typography } from "@material-tailwind/react";


export default function DonationCards() {
    return (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "5px", gap: "20px", fontFamily: "Poppins"}}>
            <Card className="mt-6 w-64 rounded-none rounded-tr-3xl rounded-bl-3xl border-solid border border-black" style={{height: "253px", width:"213px"}}>
                <CardBody style={{height:"7.5vh"}}>
                    <Typography variant="h5" color="blue-gray" className="mb-2" style={{ textAlign: "center" }}>
                        Compra KM
                    </Typography>
                </CardBody>
                <img src={Bus} alt="Bus" style={{width: "111px", height: "111px", margin: "auto" }} />
            </Card>
            <Card className="mt-6 w-64 rounded-none rounded-tr-3xl rounded-bl-3xl border-solid border border-black" style={{height: "253px", width:"213px"}}>
                <CardBody style={{height:"7.5vh"}}>
                    <Typography variant="h5" color="blue-gray" className="mb-2" style={{ textAlign: "center" }}>
                        Apadrina una escuela
                    </Typography>
                </CardBody>
                <img src={SchoolBuilding} alt="School" style={{width: "137px", height: "126px", margin: "auto"}} />
            </Card>
            <Card className="mt-6 w-64 rounded-none rounded-tr-3xl rounded-bl-3xl border-solid border border-black" style={{height: "253px", width:"213px"}}>
                <CardBody style={{height:"7.5vh"}}>
                    <Typography variant="h5" color="blue-gray" className="mb-2" style={{ textAlign: "center" }}>
                        Material escolar
                    </Typography>
                </CardBody>
                <img src={SchoolMaterial} alt="School Material" style={{width: "78px", height: "125px", margin: "auto"}} />
            </Card>
            <Card className="mt-6 w-64 rounded-none rounded-tr-3xl rounded-bl-3xl border-solid border border-black" style={{height: "253px", width:"213px"}}>
                <CardBody style={{height:"7.5vh"}}>
                    <Typography variant="h5" color="blue-gray" className="mb-2" style={{ textAlign: "center" }}>
                        Más ayuda
                    </Typography>
                </CardBody>
                <img src={Help} alt="Help Us" style={{width: "134px", height: "111px", margin: "auto"}} />
            </Card>
        </div>
    )
}