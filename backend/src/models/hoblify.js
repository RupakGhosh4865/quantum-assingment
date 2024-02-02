// models/CryptoData.js
import mongoose from 'mongoose';

const cryptoDataSchema = new mongoose.Schema({
  name: String,
  last: String,
  buy: String,
  sell: String,
  volume: String,
  base_unit: String,
});

const CryptoData = mongoose.model('CryptoData', cryptoDataSchema);

export default CryptoData;
