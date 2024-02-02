// controllers/cryptoController.js
import axios from 'axios';
import CryptoData from '../models/hoblify.js';
import { asynchandler } from '../asynchandler/asynchandler.js';

const fetchCryptoData = async () => {
  try {
    // Fetch data from WazirX API
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const data = response.data;

    // Extracting top 10 results
    const top10Data = Object.values(data).slice(0, 10);

    // Transform data to the desired format
    const transformedData = top10Data.map(item => ({
      name: item.symbol,
      last: item.last,
      buy: item.buy,
      sell: item.sell,
      volume: item.volume,
      base_unit: item.baseAsset,
    }));

    return transformedData;
  } catch (error) {
    console.error('Error fetching data from WazirX API:', error.message);
    throw error;
  }
};

export default fetchCryptoData;
