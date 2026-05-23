import { useState, useRef, useEffect } from "react";

function Profile({}) {
	const [name, setName] = useState("");
	const [tools, setTools] = useState([""]);
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [location, setLocation] = useState("");

	function saveUser() {
		console.log("User info saved to database:", {
			name,
			email,
			phone,
			tools,
		});
	}

	const lastToolInput = useRef(null);

	useEffect(() => {
		if (lastToolInput.current) {
			lastToolInput.current.focus();
		}
	}, [tools.length]);

	return (
		// Card Wrapper Container
		<div className="max-w-md mx-auto my-8 p-6 bg-white rounded-xl shadow-md border border-gray-100">
			<h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
				User Profile
			</h1>
			<div className="mb-4">
				<label className="block text-sm font-semibold text-gray-700 mb-1">
					Name:
				</label>
				<input
					type="text"
					value={name}
					onChange={e => setName(e.target.value)}
					className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
					placeholder="John Doe"
				/>
			</div>
			<div className="mb-6">
				<label className="block text-sm font-semibold text-gray-700 mb-2">
					Your available tools to loan:
				</label>

				<div className="space-y-2 mb-3">
					{tools.map((tool, index) => {
						const isLastItem = index === tools.length - 1;
						return (
							<div
								key={index}
								className="flex items-center gap-2"
							>
								<input
									ref={isLastItem ? lastToolInput : null}
									type="text"
									value={tool}
									placeholder="e.g. Cordless Drill"
									className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
									onChange={e => {
										const toolCopy = [...tools];
										toolCopy[index] = e.target.value;
										setTools(toolCopy);
									}}
									onKeyDown={e => {
										if (e.key === "Enter") {
											e.preventDefault();
											setTools([...tools, ""]);
										}
									}}
								/>
								<button
									type="button"
									onClick={() => {
										if (tools.length > 1) {
											const toolCopy = [
												...tools.slice(0, index),
												...tools.slice(index + 1),
											];
											setTools(toolCopy);
										}
                    else{
                      const toolCopy = [...tools];
                      toolCopy[index] = "";
                      setTools(toolCopy);
                    }
									}}
									className="px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-medium text-sm rounded-md transition-colors border border-red-200"
								>
									Delete
								</button>
							</div>
						);
					})}
				</div>

				<button
					type="button"
					onClick={() => {
						setTools([...tools, ""]);
					}}
					className="text-sm text-indigo-600 font-semibold hover:text-indigo-800 flex items-center gap-1 transition-colors"
				>
					<span>+</span> Add Tool
				</button>
			</div>
			<div className="mb-4">
				<label className="block text-sm font-semibold text-gray-700 mb-1">
					Phone Number:
				</label>
				<input
					type="tel"
					value={phone}
					onChange={e => setPhone(e.target.value)}
					className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
					placeholder="(555) 000-0000"
				/>
			</div>
			<div className="mb-6">
				<label className="block text-sm font-semibold text-gray-700 mb-1">
					Email Address:
				</label>
				<input
					type="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
					placeholder="you@example.com"
				/>
			</div>
			<button
				onClick={() => saveUser()}
				className="w-full w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-150"
			>
				Save Profile
			</button>
		</div>
	);
}

export default Profile;
