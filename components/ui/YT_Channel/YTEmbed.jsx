import { useState } from "react";
import { ArrowLeftIcon } from "../Icons/LeftArrow";
import { ArrowRightIcon } from "../Icons/RightArrow";

const VideoPlayer = () => {
	const videoList = [
		"XAIk6Qr8gUI",
		"B9MhwzCDZOI",
		"rMvrTTnAAGk",
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const nextVideo = () => {
		setCurrentIndex((prev) => (prev + 1) % videoList.length);
	};

	const prevVideo = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + videoList.length) % videoList.length
		);
	};

	return (
		<div className="flex items-center justify-center gap-4">
			<button
				onClick={prevVideo}
				className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold hover:bg-gray-400 transition"
			>
				<ArrowLeftIcon/>
			</button>
			<div className="w-[560px] h-[315px] relative">
				<iframe
					className="w-full h-full"
					src={`https://www.youtube.com/embed/${videoList[currentIndex]}`}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
			<button
				onClick={nextVideo}
				className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold hover:bg-gray-400 transition"
			>
				<ArrowRightIcon/>
			</button>
		</div>
	);
};

export default VideoPlayer;
