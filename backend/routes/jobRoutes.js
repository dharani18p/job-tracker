// backend/routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
} = require('../controllers/jobController');

// Routes for /api/jobs
router
    .route('/')
    .get(getAllJobs)
    .post(createJob);

// Routes for /api/jobs/:id
router
    .route('/:id')
    .get(getJob)
    .patch(updateJob) // Use PATCH for updates
    .delete(deleteJob);

module.exports = router;