import React, { useState } from "react";

interface UseMutationState {
	loading: boolean;
	data?: object;
	error?: object;
}
type UseMutationResult = [(data: any) => void, UseMutationState];

export default function useMutation(url: string): UseMutationResult {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<undefined | any>(undefined);
	const [error, setError] = useState<undefined | any>(undefined);
	function mutation(data: any) {
		setLoading(true);
		fetch(url, {
			method: "POST",
			headers: {
				"Content-TYpe": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json().catch(() => {}))
			//.then((json) => setData(json));
			.then(setData) //위의 코드의 축약형으로 이렇게 된단다..
			.catch(setError)
			.finally(() => setLoading(false));
	}
	return [mutation, { loading, data, error }];
}
