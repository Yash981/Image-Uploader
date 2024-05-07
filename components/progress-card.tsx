"use client"
import { useTheme } from 'next-themes';
import type { FC } from 'react';

type ProgressCardProps = {
	progressStatus: number;
};

export const ProgressCard: FC<ProgressCardProps> = ({ progressStatus }) => {
	const width = progressStatus.toString().concat('%');
	console.log(progressStatus,width)
	const { theme } = useTheme();
	return (
		<div className={`w-[602px] h-[144px] px-8 flex flex-col gap-8 justify-center items-center  rounded-xl shadow-lg  ${theme === 'dark' ? 'bg-[#4D5562] ':'bg-white border-slate-200 border-2'}`}>
			<h2 className={`w-full capitalize text-xl text-center text-gray-600 font-semibold ${theme === 'dark' ? 'text-white':'text-gray-600'}`}>Uploading, <span className='text-md font-light'>Please wait...</span></h2>
			<div className='relative w-full h-2 bg-red-50 rounded'>
				<div className='absolute inset-y-0 h-full bg-blue-500 transition-[width] rounded' style={{ width }} />
			</div>
		</div>
	);
};