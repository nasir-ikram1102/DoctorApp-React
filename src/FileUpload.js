import React, { useRef, useState } from 'react';
import axios from 'axios';
var config = require('dotenv').config();

function FileUpload({callback}) {
    // storing the recived file from backend
    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element
    const handleChange = (e) => {
        
        setProgess(0)
        const file = e.target.files[0]; // accesing file
        uploadFile(file);
    }
    const uploadFile = (file) => {

        const formData = new FormData();        
        formData.append('file', file); // appending file

        axios.post(`${process.env.REACT_APP_API_URL}cases/uploadFile`, formData,{
        }, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
                
            }
        }).then(res => {
            callback(res);
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <div className="file-upload">
                {/* Open upload window on image click like in design */}
                 <input style={{display: 'none'}} type="file" id="imgupload" ref={el} onChange={handleChange}  />
                <label htmlFor='imgupload'> <img src="/image/img-upload.jpg" className="img-fluid mb-3 img-upload  w-100" /></label> 
                {/* <div className="progessBar" style={{ width: progress }}>
                   {progress}
                </div> */}
            </div>
        </div>
    );
}
export default FileUpload;