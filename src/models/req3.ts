import { Document, Schema, model } from "mongoose";

interface IReq3 extends Document {
  STATE: string;
  month_year: number;
  Cargo: string;
}

const Req3Schema = new Schema<IReq3>({
  STATE: { type: String, required: true },
  month_year: { type: Number, required: true },
  Cargo: { type: String, required: true },
});

const Req3Model = model<IReq3>("req3_2017_1", Req3Schema);

export default Req3Model;
