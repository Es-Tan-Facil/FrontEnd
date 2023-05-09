import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import SchoolBuilding from '../../Assets/Pictures/SchoolBuilding.svg';
import { Card, CardBody, Typography } from "@material-tailwind/react";


export default function CardSchool({ text }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (

        <Card onClick={handleOpen} className="mt-6 h-80 w-72 rounded-none rounded-tr-3xl rounded-bl-3xl border-solid border-2 border-[#38B5FF] cursor-pointer">
            <CardBody>
                <Typography variant="h5" color="black" className="mb-2 text-center">
                    Apadrina una escuela
                </Typography>
            </CardBody>
            <img id="HelpUsImg" src={SchoolBuilding} alt="School Building" />
            <Fragment>

                <Dialog
                    open={open}
                    handler={handleOpen}
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                    }}
                >
                    <DialogHeader>Its a simple dialog.</DialogHeader>
                    <DialogBody divider>
                        {text}
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={handleOpen}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>
                        <Button variant="gradient" color="green" onClick={handleOpen}>
                            <span>Confirm</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            </Fragment>
        </Card>

    );
}