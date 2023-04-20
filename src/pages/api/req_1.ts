import type { NextApiRequest, NextApiResponse } from 'next'
import DBconnect from '@/utils/dbconnect'
import Req1Model from '@/models/req1'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if ( req.method === 'POST' ) {
    await DBconnect()
    const req1 = new Req1Model({
      STATE: 'CA',
      year: 2020,
      month: 1,
      count: 1,
    })
    await req1.save();
    res.status(200).json(req1)
  } else if ( req.method === 'GET' ) {
    await DBconnect()

    const initialYear = req.query.initialYear as string;
    const initialMonth = req.query.initialMonth as string;
    const finalYear = req.query.finalYear as string;
    const finalMonth = req.query.finalMonth as string;

    const initialDate = new Date(parseInt(initialYear), parseInt(initialMonth) - 1);
    const finalDate = new Date(parseInt(finalYear), parseInt(finalMonth) - 1);

    const req1s = await Req1Model.find({
      year: { $gte: initialDate.getFullYear(), $lte: finalDate.getFullYear() },
      $and: [
        {
          $or: [
            { year: initialDate.getFullYear(), month: { $gte: initialDate.getMonth() + 1 } },
            { year: finalDate.getFullYear(), month: { $lte: finalDate.getMonth() + 1 } },
          ]
        }
      ]
    })

    res.status(200).json(req1s)
  } else {
    res.status(400).json({ message: 'Bad Request' })
  }
}
