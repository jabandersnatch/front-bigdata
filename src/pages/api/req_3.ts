// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import DBconnect from '@/utils/dbconnect'
import Req3Model from '@/models/req3'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if ( req.method === 'POST' ) {
    await DBconnect()
    const req1 = new Req3Model({
      STATE: "CA",
      month_year: 11,
      Cargo: "32",
    })
    await req1.save();
    res.status(200).json(req1)
  } else if ( req.method === 'GET' ) {
    await DBconnect()
    const req1s = await Req3Model.find({})
    res.status(200).json(req1s)
  } else {
    res.status(400).json({ message: 'Bad Request' })
  }
}
