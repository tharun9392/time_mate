import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic MongoDB Connection (Commented out until URI is provided)
/*
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/timemate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});
*/

// Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'TimeMate API is running' });
});

// A dummy endpoint to save booking request
app.post('/api/bookings', async (req, res) => {
  try {
    const data = req.body;
    // Here you would typically save to MongoDB:
    // const newBooking = new Booking(data);
    // await newBooking.save();
    
    // Simulate real-time logic check for availability
    
    res.status(201).json({ message: 'Booking request received successfully', data });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
