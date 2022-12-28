// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import * as Request from "request";

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === "POST") {
    const body = JSON.parse(req.body)
    Request(body.url, function (error:any, response:any, body:any) {
      res.status(response.statusCode).send(body)
    });
  }
}
