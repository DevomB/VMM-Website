function TeamCard({ name, role, image, github, linkedin, email }) {
	return (
		<div className="bg-white shadow-md rounded-lg overflow-hidden w-72 mx-auto transition-transform hover:scale-105">
			<div className="relative group">
				<img
					src={image}
					alt={name}
					className="w-full h-80 object-cover group-hover:brightness-75 transition duration-300"
				/>
			</div>
			<div className="p-4 text-center">
				<h3 className="text-lg font-bold text-gray-900">{name}</h3>
				<p className="text-gray-700">{role}</p>
				<div className="flex justify-center space-x-4 mt-4">
					<a href={github} target="_blank" rel="noopener noreferrer">
						<i className="fab fa-github text-gray-500 hover:text-gray-700"></i>
					</a>
					<a
						href={linkedin}
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-linkedin-in text-gray-500 hover:text-gray-700"></i>
					</a>
					<a
						href={`mailto:${email}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="far fa-envelope text-gray-500 hover:text-gray-700"></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default TeamCard;
