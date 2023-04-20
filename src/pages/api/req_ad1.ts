// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import DBconnect from '@/utils/dbconnect'
import ReqAd1Model from '@/models/req_ad1'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if ( req.method === 'POST' ) {
    await DBconnect()
    const reqad2 = new ReqAd1Model({
      STATE: "ALASKA",
      YEAR: 2017,
      POPESTIMATE2017: 45,
      NETMIG2017: 13,
      count: 213,
    })
    await reqad2.save();
    res.status(200).json(reqad2)
  } else if ( req.method === 'GET' ) {
    await DBconnect()
    const req1s = await ReqAd1Model.find({})
    res.status(200).json(req1s)
  } else {
    res.status(400).json({ message: 'Bad Request' })
  }
}
