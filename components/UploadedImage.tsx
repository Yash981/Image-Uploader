"use client"

import Image from "next/image"
import { Card } from "./ui/card"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import LinkSvg from '@/public/Images/Link.svg'
import DownloadSvg from '@/public/Images/download.svg'
import axios from "axios"
import { toast } from "sonner"

export default function UploadedImage({ uploadUrl }: { uploadUrl: string }) {
    const { theme } = useTheme()
    const shareImage = () => {
        navigator.clipboard.writeText(uploadUrl);
        toast.success('Image URL copied to clipboard!');
    };
    const downloadImage = async () => {
        try {
            const response = await axios.get(uploadUrl, {
                responseType: 'blob',
            });
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const blobUrl = window.URL.createObjectURL(blob);


            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = `ImageUpload-${Date.now()}.jpg`;


            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };
    return (
        <>
            <Card className={`w-[700px] h-[400px] shadow-lg p-4 px-2   flex justify-center items-center flex-col  ${theme === 'dark' ? 'bg-[#4D5562] ' : 'bg-white border-slate-200 border-2'}`}>
                <Image src={uploadUrl} width={700} height={400} className="rounded-md w-[700px] h-[400px] object-contain " alt="logo" 
                 priority={true}/>
            </Card>
            <div className="flex gap-4">
                <Button className="bg-[#3662E3] !text-white hover:bg-[#3662E3]" onClick={shareImage}><Image src={LinkSvg} alt="logo" width={20} height={20} className="rounded-lg" />&ensp; Share </Button>
                <Button className="bg-[#3662E3] !text-white hover:bg-[#3662E3]" onClick={downloadImage}><Image src={DownloadSvg} alt="logo" width={20} height={20} className="rounded-md" />&ensp; Download </Button>
            </div>
        </>
    )
}