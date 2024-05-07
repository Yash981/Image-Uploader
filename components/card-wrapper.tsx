"use client"

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import Image from "next/image";
import upload from '@/public/Images/exit.svg'
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { ProgressCard } from "./progress-card";
import UploadedImage from "./UploadedImage";
import { toast } from "sonner";



export const CardWrapper = () => {
    const [isDragOver, setIsDragOver] = useState(false)
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadUrl,setUploadUrl] = useState("")

    const { getRootProps, getInputProps } = useDropzone({
        onDropAccepted: (acceptedFiles) => {
            console.log("onDropAccepted", acceptedFiles)

            acceptedFiles.forEach(async (file) => {
                const formdata = new FormData();
                formdata.append("file", file);
                formdata.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

                try {
                    const response = await axios.post(process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL!, formdata, {
                        onUploadProgress: (progressEvent) => {
                            const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total!);
                            setUploadProgress(progress);
                        }
                    });
                    setUploadUrl(response.data.secure_url)
                    console.log(response.data.secure_url)
                    

                } catch (err) {
                    console.log(err)
                }
            })
        },
        onDropRejected: (fileRejections) => {
            toast.error("File size should be less than 2MB")
        },
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png', '.gif'],
        },
        maxSize: 2000000,
        maxFiles: 1,
        onDragEnter: () => setIsDragOver(true),
        onDragLeave: () => setIsDragOver(false),
    });

    return (
        <>
            {uploadProgress > 0 && uploadProgress < 100  ? (<ProgressCard progressStatus={uploadProgress} />) : uploadProgress >= 100 ? <UploadedImage uploadUrl={uploadUrl}/> : (<div {...getRootProps()} >
                <input {...getInputProps()} />
                <Card className={`w-[700px] h-[400px] shadow-lg p-2  border-dashed border-2 border-[#E5E7EB] flex justify-center items-center flex-col ${isDragOver ? 'border-blue-500' : 'border-[#E5E7EB]'}`}>
                    <CardHeader className="">
                        <CardTitle className="mx-auto">
                            <Image src={upload} alt="logo" />
                        </CardTitle>
                        <CardTitle>Drag & drop a file or <span className="text-[#3662E3] cursor-pointer"   >browse files</span></CardTitle>

                        <CardDescription>JPG, PNG or GIF - Max file size 2MB</CardDescription>
                    </CardHeader>
                </Card>
            </div>)}
        </>
    )
}


