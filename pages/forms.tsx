import React from "react";
import { useForm } from "react-hook-form";

interface LoginForm {
	username: string;
	password: string;
	email: string;
}
export default function Forms() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginForm>({
		mode: "onChange",
		defaultValues: {},
	});
	const onValid = (data: LoginForm) => {
		console.log("im valid bby");
	};
	const onInvalid = (errors: FieldErrors) => {
		//console.log(errors);
	};
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onValid, onInvalid)}>
			<input
				{...register("username", {
					required: "usename is required",
				})}
				type="text"
				placeholder="text"
			/>
			{errors.username?.message}
			<input
				{...register("email", {
					required: "이메일 누락누락",
					validate: {
						notGmail: (value) => !value.includes("@gmail.com") || "지메일은 안됩니다.",
					},
				})}
				className={`${Boolean(errors.email?.message) ? "border-red-500" : ""}`}
				type="email"
				placeholder="email"
			/>
			{errors.email?.message}
			<input
				{...register("password", {
					required: "비번 누락 누락",
				})}
				type="password"
				placeholder="Password"
			/>
			{errors.password?.message}
			<input type="submit" />
		</form>
	);
}
