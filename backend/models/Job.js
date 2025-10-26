// backend/models/Job.js
const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Please provide a company name'],
        minlength: [3, 'Company name must be at least 3 characters'],
        trim: true,
    },
    position: {
        type: String,
        required: [true, 'Please provide a position title'],
        trim: true,
    },
    status: {
        type: String,
        enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
        default: 'Applied',
    },
    dateApplied: {
        type: Date,
        required: [true, 'Please provide the application date'],
        max: [Date.now(), 'Application date cannot be in the future'],
    },
}, {
    timestamps: true // Adds createdAt and updatedAt timestamps
});

module.exports = mongoose.model('Job', JobSchema);