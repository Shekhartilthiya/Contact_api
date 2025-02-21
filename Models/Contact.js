import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"]
    },
    type: {
        type: String,
        required: [true, "Type is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "contact", // ✅ Reference to User collection
    }
});

// ✅ Export the model
export const Contact = mongoose.model("Contact", contactSchema);
