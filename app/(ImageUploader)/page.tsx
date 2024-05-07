import { CardWrapper } from "@/components/card-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import  LinkSvg  from '@/public/Images/Link.svg'
import DownloadSvg from '@/public/Images/download.svg'

export default function ImageUploaderLayout() {
    return (
        <div className="flex justify-center items-center h-[86vh] w-full flex-col gap-4">
            <CardWrapper />
        </div>
    )
}