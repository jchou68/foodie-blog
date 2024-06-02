'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
    const [previewImage, setPreviewImage] = useState();
    const imageInput = useRef();
    const handleImageClick = function () {
        imageInput.current.click();
    };

    const handleImageChange = function (event) {
        const file = event.target.files[0];

        if (!file) {
            setPreviewImage(null);
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    };
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!previewImage && <p>No image selected</p>}
                    {previewImage && (
                        <Image
                            src={previewImage}
                            alt="Image picked by the user."
                            fill
                        />
                    )}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/jpg image/png"
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                    required
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={handleImageClick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    );
}
