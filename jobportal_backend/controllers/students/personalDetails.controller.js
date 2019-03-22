const express = require('express');
const router = express.Router();
const studentService = require('../../services/students/personalDetails.service');

// routes
router.post('/:sid/add', addStudent);
router.put('/student/:sid/update', updateStudent);
router.get('/student/:sid', getStudentDetailById);
router.delete('/student/:sid', deleteStudent);

module.exports = router;

function getStudentDetailById(req,res,next)
{
    studentService.getStudentDetailById(req.params.sid).then(job => res.json(personaldetails))
    .catch(err => next(err));
}
function addStudent(req, res, next) {
    studentService.create(req.params.sid, req.body)
        .then(() => res.status(200).json({
            status: "success"
        }))
        .catch(err => next(err));
}

function updateStudent(req, res, next) {
    studentService.update(req.params.sid, req.body)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}

function deleteStudent(req, res, next) {
    studentService.delete(req.params.sid)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}