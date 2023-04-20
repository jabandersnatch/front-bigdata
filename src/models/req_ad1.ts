import { Document, Schema, model } from "mongoose";

interface IReqAd1 extends Document {
  STATE: string;
  YEAR: number;
  POPESTIMATE2017: number;
  NETMIG2017: number;
  count: number;
}

const ReqAd1Schema = new Schema<IReqAd1>({
  STATE: { type: String, required: true },
  YEAR: { type: Number, required: true },
  POPESTIMATE2017: { type: Number, required: true },
  NETMIG2017: { type: Number, required: true },
  count: { type: Number, required: true },
});

const ReqAd1Model = model<IReqAd1>("req_ad1_2017_1", ReqAd1Schema);

export default ReqAd1Model;

export type {IReqAd1}