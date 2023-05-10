import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import SchoolMaterial from '../../Assets/Pictures/SchoolMaterial.svg';
import { Card, CardBody, Typography } from "@material-tailwind/react";


export default function CardSchoolMaterial({ text }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (

        <Card onClick={handleOpen} className="mt-6 h-80 w-72 rounded-none rounded-tr-3xl rounded-bl-3xl border-solid border-2 border-[#38B5FF] cursor-pointer">
            <CardBody>
                <Typography variant="h5" color="black" className="mb-2 text-center">
                    Material escolar
                </Typography>
            </CardBody>
            <img id="HelpUsImg" src={SchoolMaterial} alt="School Material" />
            <Fragment>
                <Dialog
                    open={open}
                    handler={handleOpen}
                    className="!w-4/5 min-w-[60%] max-w-[60%]"
                >
                    <DialogHeader>Material escolar</DialogHeader>
                    <DialogBody divider>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</DialogBody>
                    <DialogFooter>
                        <div
                            className="absolute top-2 right-2 cursor-pointer"
                            onClick={handleOpen}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#000000"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                    </DialogFooter>
                </Dialog>
            </Fragment>
        </Card>

    );
}