// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import DBconnect from '@/utils/dbconnect'
import Req5_1Model from '@/models/req5_1'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if ( req.method === 'POST' ) {
    await DBconnect()
    const reqad2 = new Req5_1Model({
      STATE: 'CA',
      year: 2017,
      month: 1,
      count: 1,
    })
    await reqad2.save();
    res.status(200).json(reqad2)
  } else if ( req.method === 'GET' ) {
    await DBconnect()
    const req1s = await Req5_1Model.find({})
    res.status(200).json(req1s)
  } else {
    res.status(400).json({ message: 'Bad Request' })
  }
}
