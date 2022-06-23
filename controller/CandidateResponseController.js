const candidateResponseService = require('../services/CandidateResponseService')
const ErrorMessage = require('../error/errorMessages')

const addResponse = async(req,res,next) =>{
    try {
        let  candiadteResponse = await candidateResponseService.addResponse(req, res);
        res.status(200).send(candiadteResponse);
    } catch (error) {
        next({ status: ErrorMessage[error.message].Status, message: ErrorMessage[error.message].Message });
    }   
}
const getAllResponseByCandidateId = async(req,res,next)=>{
    try {
        console.log("in the controller.................")
        let candiadteResponse = await candidateResponseService.getAllResponseByCandidateId(req,res);
        res.status(200).send(candiadteResponse);
    } catch (error) {
        next({ status: ErrorMessage[error.message].Status, message: ErrorMessage[error.message].Message });
    }
}
const getResponseByCandidateIdQueId = async(req,res,next)=>{
    try {
        let candiadteResponse = await candidateResponseService.getResponseByCandidateIdQueId(req,res);
        res.status(200).send(candiadteResponse);
    } catch (error) {
        next({ status: ErrorMessage[error.message].Status, message: ErrorMessage[error.message].Message });
    }
}
const updateResponseByCandidateIdQueId = async(req,res,next)=>{
    try {
        await candidateResponseService.updateResponseByCandidateIdQueId(req,res);
        res.status(200).send("Response update Successfuly at candiadteId = "+(req.params.uId)+" and QueId = "+(req.params.qId))
    } catch (error) {
        next({ status: ErrorMessage[error.message].Status, message: ErrorMessage[error.message].Message });
    }
}
const deleteAllResponse = async(req,res,next)=>{
    try {
        await candidateResponseService.deleteAllResponse(req ,res);
        res.status(200).sens("Delete All Response Successfuly..")
    } catch (error) {
        next({ status: ErrorMessage[error.message].Status, message: ErrorMessage[error.message].Message });
    }
}
const deleteAllResponseByCandidateId = async(req,res,next)=>{
    try {
        await candidateResponseService.deleteAllResponseByCandidateId(req ,res);
        res.status(200).sens("Delete All Response Successfuly of CandidateId = "+(req.params.uId))
    } catch (error) {
        next({ status: ErrorMessage[error.message].Status, message: ErrorMessage[error.message].Message });
    }
}
const deleteSingleResponseByCandidateIdQueId = async(req,res,next)=>{
    try {
        await candidateResponseService.deleteSingleResponseByCandidateIdQueId(req,res);
        res.status(200).send("Delete Response At candidateId = "+(req.params.uId)+"and queId ="+(eq.params.qId))
    } catch (error) {
        next({ status: ErrorMessage[error.message].Status, message: ErrorMessage[error.message].Message });
    }
}

module.exports={
    addResponse,
    getAllResponseByCandidateId,
    getResponseByCandidateIdQueId,
    updateResponseByCandidateIdQueId,
    deleteAllResponse,
    deleteAllResponseByCandidateId,
    deleteSingleResponseByCandidateIdQueId
}