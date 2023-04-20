import { Document, Schema, model } from "mongoose";

interface IReq4 extends Document {
    correlation: Number;
    htmlDocument: String;
}

const ReqAd2Schema = new Schema<IReq4>({
  correlation: { type: Number, required: true },
  htmlDocument: { type: String, required: true },
});

const Req4Model = model<IReq4>("req_ad2_2017_1", ReqAd2Schema);

const doc = await Req4Model.findOne({ correlation: 1234 }); // Replace 1234 with the correlation value you are searching for
const html = doc.htmlDocument;
console.log(html); // Do whatever you need with the HTML document
