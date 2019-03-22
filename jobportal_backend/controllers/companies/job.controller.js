const express = require('express');
const router = express.Router();
const jobService = require('../../services/companies/job.service');

// routes
router.post('/:cid/job/add', addJob);
router.put('/job/:jid',updateJob);
router.delete('/job/:jid', deleteJob);
router.get('/jobs', getJobs);
router.get('/:cid/job',getCompanyJobs);
router.get('/job/:id',getJobById);
router.get('/applicants/:jid',getApplicantsByJOB);

module.exports = router;

function getJobById(req, res, next) {
    jobService.getJobById(req.params.id).then(job => res.json(job))
    .catch(err => next(err));
}

function getApplicantsByJOB(req, res, next) {
    jobService.getApplicantsByJOB(req.params.jid)
        .then(job => res.json(job))
        .catch(err =>  (err));
}

function getJobs(req, res, next) {
    jobService.getJobs()
        .then(job => res.json(job))
        .catch(err => next(err));
}

function getCompanyJobs(req, res, next) {
    jobService.getCompanyJobs(req.params.cid)
        .then(job => res.json(job))
        .catch(err => next(err));
}

function addJob(req, res, next) {
    jobService.create(req.params.cid, req.body)
        .then(() => res.status(200).json({
            status: "success"
        }))
        .catch(err => next(err));
}

function updateJob(req, res, next) {
    jobService.update(req.params.jid, req.body)
        .then(() => res.status(200).json({
            status: "success"
        }))
        .catch(err => next(err));
}

function deleteJob(req, res, next) {
    jobService.delete(req.params.jid)
        .then(() => res.status(200).json({
            status: "success"
        }))
        .catch(err => next(err));
}