import express from 'express';
import connectDB from './db/index.js'; // Update the path to your MongoDB connection file
import fetchCryptoData from './controllers/cryptocontroller.js';
import CryptoData from './models/hoblify.js'; // Import your CryptoData model
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());


// Connect to MongoDB
connectDB();

// Fetch data from WazirX API and store in MongoDB
app.get('/top10retosults', async (req, res) => {
  try {
    const newCryptoData = await fetchCryptoData();

    // Clear existing data
    await CryptoData.deleteMany({});

    // Insert new data using the mongoose model
    await CryptoData.insertMany(newCryptoData);

    res.json({ message: 'Crypto data updated successfully' });
  } catch (error) {
    console.error('Error updating crypto data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export { app };
