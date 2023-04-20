import { Document, Schema, model } from "mongoose";

interface IReq2 extends Document {
    correlation: Number;
}

const ReqAd2Schema = new Schema<IReq2>({
  correlation: { type: Number, required: true },
});

const ReqAd2Model = model<IReq2>("req_ad2_2017_1", ReqAd2Schema);

export default ReqAd2Model;
