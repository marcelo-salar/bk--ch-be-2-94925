import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        title: { type: String, require: true, trim: true },
        description: { type: String, default: '' },
        date: { type: Date, require: true },
        location: { type: String, require: true },
        capacity: { type: Number, require: true, min: 1 },
        status: {
            type: String,
            enum: ['draft', 'published', 'cancelled', 'finished'],
            default: 'draft',
        }
    },
    { timestamps: true }
);

export const Event = mongoose.model('Event', eventSchema);