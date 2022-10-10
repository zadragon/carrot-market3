import React from "react";
import { useForm } from "react-hook-form";

export default function Forms() {
	const {} = useForm();
	return (
		<form>
			<input type="text" placeholder="text" />
			<input type="email" placeholder="email" />
			<input type="password" placeholder="Password" />
		</form>
	);
}
