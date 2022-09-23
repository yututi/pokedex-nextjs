// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from "node-fetch"

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  proxy(req, res, "https://pokeapi.co")
}

const proxy = (
  req: NextApiRequest,
  res: NextApiResponse,
  proxyTo: string 
) => {
  fetch(`${proxyTo}${req.url}}`,{
    method: req.method
  })
  .then(res => res.json())
  .then(json => {
    res.status(200).json(json)
  })
}