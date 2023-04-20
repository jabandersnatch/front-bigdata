import { Document, Schema, model } from "mongoose";

interface IReq5_1 extends Document {
  STATE: string;
  DiaSemana: number;
  Cargo: number;
  NumEmbarcaciones: number;
}

const Req5_1Schema = new Schema<IReq5_1>({
  STATE: { type: String, required: true },
  DiaSemana: { type: Number, required: true },
  Cargo: { type: Number, required: true },
  NumEmbarcaciones: { type: Number, required: true },
});

const Req5_1Model = model<IReq5_1>("req5_1_2017_1", Req5_1Schema);

export default Req5_1Model;
