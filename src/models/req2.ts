import { Document, Schema, model } from "mongoose";

interface IReq2 extends Document {
  STATE: string;
  month_year: number;
  Cargo: string;
}

const Req2Schema = new Schema<IReq2>({
  STATE: { type: String, required: true },
  month_year: { type: Number, required: true },
  Cargo: { type: String, required: true },
});

const Req2Model = model<IReq2>("req2_2017_1", Req2Schema);

export default Req2Model;

export type {IReq2}