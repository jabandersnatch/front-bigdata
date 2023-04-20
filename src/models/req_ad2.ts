import { Document, Schema, model } from "mongoose";

interface IReqAd2 extends Document {
    correlation: Number;
}

const ReqAd2Schema = new Schema<IReqAd2>({
  correlation: { type: Number, required: true },
});

const ReqAd2Model = model<IReqAd2>("req_ad2_2017_1", ReqAd2Schema);

export default ReqAd2Model;

export type {IReqAd2}
