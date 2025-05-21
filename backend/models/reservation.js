import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required."],
    minlength: [3, "First name must be at least 3 characters."],
    maxlength: [30, "First name cannot exceed 30 characters."],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required."],
    minlength: [3, "Last name must be at least 3 characters."],
    maxlength: [30, "Last name cannot exceed 30 characters."],
  },
  date: {
    type: String,
    required: [true, "Date is required."],
  },
  time: {
    type: String,
    required: [true, "Time is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    validate: [validator.isEmail, "Please provide a valid email address."],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required."],
    minlength: [10, "Phone number must be 10 digits."],
    maxlength: [10, "Phone number must be 10 digits."],
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
