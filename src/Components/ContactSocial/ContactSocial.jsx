import React from 'react'
import Title from '../Title/Title'
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function ContactSocial() {
    return (
        <div className="flex flex-col items-center mt-12 w-4/5 mx-auto md:w-3/5 mx-auto mb-[20vh]">
            <Title title="Contacto" />
            <h2 className="text-[2rem] mt-7 text-center">
                ¿Te gustaría participar en la Campaña es Tan Fácil?{" "}
                <span className="text-[black] font-bold">Súmate a la movida.</span>
            </h2>
            <h3 className="text-[2rem] mt-7 text-center">
                Si tienes interés por{" "}
                <span className="text-[#51C8FC] font-bold">apoyar</span> nuestra causa puedes ponerte en{" "}
                <span className="text-[#FFDE59] font-bold">contacto</span> con nosotros a través de nuestras redes sociales.
            </h3>
            <div className="flex justify-center flex-wrap mt-10 gap-14">
                <a
                    href="https://www.facebook.com/people/Campa%C3%B1a-Es-tan-f%C3%A1cil/100064523596866/"
                    target="_blank"
                    rel="noopener noreferrer" >
                    <Card
                        className="mt-6 h-60 w-72 rounded-none rounded-tr-3xl rounded-bl-3xl border-solid border-2 border-[#38B5FF] cursor-pointer"
                        title="Ir a Facebook"
                    >
                        <CardBody>
                            <Typography variant="h3" color="black" className="mb-2 text-center">
                                Facebook
                            </Typography>
                        </CardBody>
                        <BsFacebook className="text-[7vh] text-black mx-auto" />
                    </Card>
                </a>
                <a
                    href="https://www.instagram.com/campanaestanfacil/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Card
                        className="mt-6 h-60 w-72 rounded-none rounded-tr-3xl rounded-bl-3xl border-solid border-2 border-[#38B5FF] cursor-pointer"
                        title="Ir a Instagram"
                    >
                        <CardBody>
                            <Typography variant="h3" color="black" className="mb-2 text-center">
                                Instagram
                            </Typography>
                        </CardBody>
                        <BsInstagram className="text-[7vh] text-black mx-auto" />
                    </Card>
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=005492664566290"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Card
                        className="mt-6 h-60 w-72 rounded-none rounded-tr-3xl rounded-bl-3xl border-solid border-2 border-[#38B5FF] cursor-pointer"
                        title="Ir a WhatsApp"
                    >
                        <CardBody>
                            <Typography variant="h3" color="black" className="mb-2 text-center">
                                WhatsApp
                            </Typography>
                        </CardBody>
                        <BsWhatsapp className="text-[7vh] text-black mx-auto" />
                    </Card>
                </a>
            </div>
        </div>

    )
}
