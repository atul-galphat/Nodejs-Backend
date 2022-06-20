const examController = require('../controller/examController')

const router = require('express').Router();

//  router for upcomingexam

router.get('/getallupcomingexam', examController.getAllExam);

router.post('/addupcomingexam', examController.addExam);

router.put('/updatestatus/:id', examController.updateStatusById);

router.get('/getallupcomingexambystatus/:id', examController.getAllUpcomingExamByStatus);

router.get('/getupcomingexambyid/:id', examController.getExamById);

router.delete('/deleteexambyid/:id',examController.deleteUpcomingExam);

router.put('/updateexam/:id/:uId',examController.updateSts);

router.get('/getupcomingexambyuid/:uId',examController.getAllUpcomingExamByUId);

router.get('/getprocessingexambyuid/:uId',examController.getAllProcessingExam)

router.get('/getgivenexambyuid/:uId',examController.getAllGivenExam)

module.exports = router;