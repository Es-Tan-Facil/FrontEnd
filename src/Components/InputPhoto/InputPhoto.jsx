import React, { useState, useEffect} from 'react';

function InputPhoto({setUrlImg, value}) {
    const [file, setFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [base64, setBase64] = useState('');

    

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
       
    };
    

    useEffect(() => {
        if (imagePreview) {
            const canvas = document.createElement("canvas");
            const image = new Image();
            image.src = imagePreview;
            image.onload = () => {
                canvas.width = image.naturalWidth;
                canvas.height = image.naturalHeight;
                const context = canvas.getContext("2d");
                context.drawImage(image, 0, 0);
                const base64 = canvas.toDataURL();
                setBase64(base64);
                setUrlImg(base64);
                
            };
            
        }
    }, [imagePreview,setUrlImg,setBase64]);
    
    

    return (
        <div>
            <textarea onChange={(e)=> setUrlImg(e.target.value)} name= "urlImg" value={value || base64} required className="form-control" placeholder="Añade una foto"
                                id="photo"/>
        <input type="file" onChange={handleFileChange} />
        </div>
    );
}

export default InputPhoto;