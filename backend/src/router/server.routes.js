import express from 'express';
import CryptoData from '../models/CryptoData';
import fetchCryptoData from '../controllers/cryptocontroller';

const router = express.Router();

//  router.get('/top10results', async (req, res) => {
//   try {
//     // Fetch new crypto data
//     const newCryptoData = await fetchCryptoData();

//     // Clear existing data
//     await CryptoData.deleteMany({});

//     // Create new CryptoData instances and save them individually
//     for (const dataItem of newCryptoData) {
//       const cryptoData = new CryptoData(dataItem);
//       await cryptoData.save();
//     }

//     res.json({ message: 'Crypto data updated successfully' });
//   } catch (error) {
//     console.error('Error updating crypto data:', error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
router.get('/top10results', async (req, res) => {
    try {
      // Fetch all crypto data from the database
      const cryptoData = await CryptoData.find({}).exec();
  
      // Respond with the fetched data
      res.json(cryptoData);
    } catch (error) {
      console.error('Error fetching crypto data:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

export default router;
