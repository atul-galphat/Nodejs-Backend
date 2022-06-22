const upcomingExamService = require('../services/CandidateExamService')
const ExamErrorMsg = require('../error/errorMessages')
const examRepo = require ('../repo/CandidateExamRepo')

//create upcomingexam 
const addExam = async (req, res,next) => {
    try {
        let  upcomingexam = await upcomingExamService.addUpcomingExam(req, res);
        res.status(200).send(upcomingexam);
    } catch (error) {
        next({ status: ExamErrorMsg[error.message].Status, message: ExamErrorMsg[error.message].Message });
    }   
}
const getAllExam = async (req, res, next) => {
    try {
        let upcomingexam = await upcomingExamService.getAllUpcomingExam(req, res);
        res.status(200).send(upcomingexam)
    } catch (error) {
        next({ status: ExamErrorMsg[error.message].Status, message: ExamErrorMsg[error.message].Message });
    }
}
const getExamById = async (req, res, next) => {
    try {
        let upcomingexam = await upcomingExamService.getById(req, res);
        res.status(200).send(upcomingexam);
    } catch (error) {
        next({ status: ExamErrorMsg[error.message].Status, message: ExamErrorMsg[error.message].Message });
    }
}
const updateStatusById = async (req, res, next) => {
    try {
        await upcomingExamService.updateStatusById(req, res);
        res.status(200).send("update successfuly at Id = " + req.params.id)
    } catch (error) {
        next({ status: ExamErrorMsg[error.message].Status, message: ExamErrorMsg[error.message].Message });
    }
}
const getAllUpcomingExamByStatus = async (req, res, next) => {
    try {
        let upcomingexam = await upcomingExamService.getAllUpcomingExamByStatus(req, res);
        res.status(200).send(upcomingexam)
    } catch (error) {
        next({ status: ExamErrorMsg[error.message].Status, message: ExamErrorMsg[error.message].Message });
    }
}
const deleteUpcomingExam = async(req ,res,next ) =>{
    try {
        await upcomingExamService.deleteUpcomingExamById(req , res);
        res.status(200).send("exam deletd successfully...")
    } catch (error) {
        next({ status: ExamErrorMsg[error.message].Status, message: ExamErrorMsg[error.message].Message });
    }
}
const getAllUpcomingExamByUId = async(req , res ,next)=>{
    try {
        let upcomingexam = await examRepo.getAllUpcomingExamByUid(req,res);
        res.status(200).send(upcomingexam)
    } catch (error) {
        next({ status: ExamErrorMsg[error.message].Status, message: ExamErrorMsg[error.message].Message }); 
    }
}
const getAllProcessingExam =async(req,res,next) =>{
    try {
        let proccesingexam = await examRepo.getAllProcessingExambyUid(req,res);
        res.status(200).send(proccesingexam);
    } catch (error) {
        next({ status: ExamErrorMsg[error.message].Status, message: ExamErrorMsg[error.message].Message });
    }
}
const getAllGivenExam =async(req,res,next) =>{
    try {
        let givenexam = await examRepo.getAllGivenExambyUid(req,res);
        res.status(200).send(givenexam);
    } catch (error) {
        next({ status: ExamErrorMsg[error.message].Status, message: ExamErrorMsg[error.message].Message });
    }
}
module.exports = {
    addExam,
    getAllExam,
    getExamById,
    updateStatusById,
    getAllUpcomingExamByStatus,
    deleteUpcomingExam,
    getAllUpcomingExamByUId,
    getAllProcessingExam,
    getAllGivenExam
}