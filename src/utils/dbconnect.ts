import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://juan:IWantToDieYoung@cluster0.ogdgx.mongodb.net/worksheet1?retryWrites=true&w=majority'
if (!MONGODB_URI) { throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function DBconnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default DBconnect;
