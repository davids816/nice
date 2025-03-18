// TODO: Import mongoose
import mongoose from 'mongoose';
import express from 'express';
const router = express.Router();
// TODO: Create a user schema with the following fields:
// - firstName (String, required)
// - lastName (String, required)
// - email (String, required, unique)
// - password (String, required)
// - address:
//   - street (String, required)
//   - apartment (String, optional)
//   - city (String, required)
//   - state (String, required)
//   - zipCode (String, required)
const userSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    emailName: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
     street: { 
        type: String, 
        required: true 
    },
   apartment: { 
        type: String, 
        required: true 
    },
    city: { 
        type: String, 
        required: true 
    },
    state: { 
        type: String, 
        required: true 
    },
   zipCode: { 
        type: String, 
        required: true 
    }
});
const User = mongoose.model('User', userSchema);

// TODO: Create and export the User model
