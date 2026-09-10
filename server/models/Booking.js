import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  customerName: String,
  customerContact: String, // email or phone
  activity: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true,
    min: 1
  },
  location: {
    type: String,
    required: true
  },
  conversationPreference: {
    type: String,
    enum: ['talk', 'some', 'quiet'],
    default: 'talk'
  },
  notes: String,
  totalFee: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected', 'cancelled', 'completed'],
    default: 'pending'
  }
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
