import "./UserProfile.css";
import { useState, useRef, useEffect } from "react";

function UserProfile({}) {
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
		<>
			<h1>User Profile</h1>
			<div>
				Your available tools to loan:
				<div className="tool-input">
					{tools.map((tool, index) => {
						const isLastItem = index === tools.length - 1;
						return (
							<div key={index}>
								<input
									ref={isLastItem ? lastToolInput : null}
									type="text"
									value={tool}
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
										const toolCopy = [
											...tools.slice(0, index),
											...tools.slice(index + 1),
										];
										setTools(toolCopy);
									}}
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
				>
					+ Add Tool
				</button>
			</div>

			<div>
				<label>Phone Number:</label>
				<input onChange={e => setPhone(e.target.value)} />
			</div>

			<div>
				<label>Email Address:</label>
				<input onChange={e => setEmail(e.target.value)} />
			</div>

			<button onClick={() => saveUser()}>Save Profile</button>
		</>
	);
}

export default UserProfile;
