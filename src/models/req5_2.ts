import { Document, Schema, model } from "mongoose";

interface IReq5_2 extends Document {
  STATE: string;
  Año: number;
  DiaSemana: number;
  Cargo: number;
  NumEmbarcaciones: number;
}

const Req5_2Schema = new Schema<IReq5_2>({
  STATE: { type: String, required: true },
  Año: { type: Number, required: true },
  DiaSemana: { type: Number, required: true },
  Cargo: { type: Number, required: true },
  NumEmbarcaciones: { type: Number, required: true },
});

const Req5_2Model = model<IReq5_2>("req5_2_2017_1", Req5_2Schema);

export default Req5_2Model;
