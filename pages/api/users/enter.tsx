import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { phone, email } = req.body;
	const payload = phone ? { phone: +phone } : { email };
	const token = await client.token.create({
		data: {
			payload: "1234",
			user: {
				connectOrCreate: {
					where: {
						...payload,
					},
					create: {
						name: "Anonymous",
						...(phone && { phone: +phone }),
						...payload,
					},
				},
			},
		},
	});
	console.log(token);

	res.status(200).end();
}

export default withHandler("POST", handler);
