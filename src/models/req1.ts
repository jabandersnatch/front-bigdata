import { Document, Schema, model } from "mongoose";

interface IReq1 extends Document {
  STATE: string;
  year: number;
  month: number;
  count: number;
}

const Req1Schema = new Schema<IReq1>({
  STATE: { type: String, required: true },
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  count: { type: Number, required: true },
});

const Req1Model = model<IReq1>("Req1_2017_1", Req1Schema);

export default Req1Model;

export type {IReq1}
