import React, { useCallback, useEffect, useState } from 'react'
import './uploadScreen.scss'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'

const UploadScreen = () => {

    const [file, setFile] = useState(null);
    const [files, setFiles] = useState([]);

    const handleFile = (e) => {
        if (e.target.files != null || e.target.files[0] != null) {
            setFile(e.target.files[0]);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file) {
            const fd = new FormData();

            fd.append("file", file);

            const res = await axios.post("https://youtube-clone-rajes.herokuapp.com/upload", fd);

            setFiles(files.concat(res.data));
            console.log(res.data);
        }
    }

    const fetchFiles = useCallback(async () => {
        const res = await axios.get("https://youtube-clone-rajes.herokuapp.com/files");
        setFiles(res.data);
    }, []);

    const removeFile = useCallback(
        async (filename, index) => {
            const res = await axios.delete(
                `https://youtube-clone-rajes.herokuapp.com/delete/${filename}`
            );
            if (res.status === 200) {
                let temp = [...files];
                console.log(temp);
                temp.splice(index, 1);

                setFiles(temp);
            }
        },
        [files]
    );

    useEffect(() => {
        fetchFiles();
    }, [fetchFiles]);

    return (
        <Container>
            <p className='h4 text-center'>Upload Content</p>
            <Row>
                <Col>
                    <form onSubmit={handleSubmit} encType='multipart/form-data'>
                        <input type='file' name='file' className='p-2 rounded' onChange={handleFile} required />
                        <button className='btn btn-primary ' type='submit'>
                            UPLOAD
                        </button>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col lg={3} md={3}>
                    {files.map((file, i) => (
                        <div key={file._id} className="Item">
                            <Row>
                                <Col  >
                                    <video width={320} height={240} controls>
                                        <source src={`https://youtube-clone-rajes.herokuapp.com/read/${file.filename}`} type='video/mp4' />
                                    </video>
                                    <p className='text-center'>{file.filename}</p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            removeFile(file.filename, i);
                                        }}
                                        className='upload__button'
                                    >
                                        remove
                                    </button>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default UploadScreen