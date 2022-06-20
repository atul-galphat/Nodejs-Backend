const candidateController = require('../controller/candidateController')


const router = require('express').Router();

router.get('/getallcandidate', candidateController.getAllcandidate);

router.post('/addcandidate', candidateController.addcandidate);

router.get('/getcandidatebyid/:id', candidateController.getCandidatebyId);

router.put('/updatecandidate/:id', candidateController.updateCandidate);

router.delete('/deletecandidate/:id', candidateController.deleteCandidateByid);

router.get('/getallcandidatewithexam', candidateController.getAllcandidateWithExam);

router.get('/getcandidatebyidwithexam/:id', candidateController.getCandidatebyIdWithExam);

router.get('/getbyquery',candidateController.candidateByQuery);

module.exports = router;