const candidateService = require('../services/candidateService')
const candidateErrors = require('../error/errorMessages');
const logger = require('../loggerConfig/loggerConfig');

//create candidate
const addcandidate = async (req, res) => {
        try {
            let createdCord = await candidateService.create(req, res);
            logger.info('info', `record added successfuly.. :${createdCord}`)
            res.status(200).send(createdCord);
        } catch (error) {
            logger.error('Unable to add data',)
            next({ status: candidateErrors[error.message].Status, message: candidateErrors[error.message].Message });
        }
        
}
//get All candidate 
const getAllcandidate = async (req, res, next) => {
    try {
        let candidate = await candidateService.getall();
        logger.info('All Records Fetched Successfuly..')
        res.status(200).json({
            message: "success",
            result: candidate
        })
        
    } catch (error) {
        logger.error('Unable to fetch record , Not Found Error',)
        next({ status: candidateErrors[error.message].Status, message: candidateErrors[error.message].Message });
    }
}
const getAllcandidateWithExam = async (req, res,next) => {
    try {
        let candidate = await candidateService.getallWithExam();
        logger.info('All Records Fetched Successfuly..')
        res.status(200).json({
            message: "success",
            result: candidate
        })
    } catch (error) {
        logger.error('Unable to fetch record , Not Found Error',)
        next({ status: candidateErrors[error.message].Status, message: candidateErrors[error.message].Message });
    }
}

// get one candidate using id
const getCandidatebyId = async (req, res, next) => {
    try {
        let candidate = await candidateService.getOneById(req);
        logger.info('One Record Fetched Successfuly..')
        res.status(200).json({
            message: "success",
            result: candidate
        })
    } catch (error) {
        logger.error('unable to fetch record , Not Found Error')
        next({ status: candidateErrors[error.message].Status, message: candidateErrors[error.message].Message });
    }

}
const getCandidatebyIdWithExam = async (req, res, next) => {

    try {
        let candidate = await candidateService.getOneByIdWithExam(req);
        logger.info('One Record Fetched Successfuly..')
        res.status(200).send(candidate)
    } catch (error) {
        logger.error('unable to fetch record , Not Found Error')
        next({ status: candidateErrors[error.message].Status, message: candidateErrors[error.message].Message });
    }

}

//update candidate 
const updateCandidate = async (req, res, next) => {
    try {
        let candidate = await candidateService.updateById(req);
        logger.info('One Record Updated Successfuly..')
        res.status(200).send("update successfully at id = "+req.params.id)
    } catch (error) {
        logger.error('Unable to update record , Not Found Error')
        next({ status: candidateErrors[error.message].Status, message: candidateErrors[error.message].Message });
    }
}

//delete candidate using id 
const deleteCandidateByid = async (req, res , next) => {
    try {
        let candidate = await candidateService.deleteCandidate(req);
        logger.info('Record Deleted Successfuly..')
        res.status(200).send("candidate deletd successfully...")
    } catch (error) {
        logger.error('Unable to delete record , Not Found Error',)
         next({ status: candidateErrors[error.message].Status, message: candidateErrors[error.message].Message });
    }
}

const candidateByQuery = async (req, res , next) => {

        let candidate = await candidateService.getcandidateByquery(req);
        res.status(200).send( candidate)
}
const getByIdSts = async (req , res) =>{
    let candidate = await candidateService.getbyIDSts(req);
    res.status(200).send(candidate);
}

module.exports = {
    addcandidate,
    getAllcandidate,
    getCandidatebyId,
    updateCandidate,
    deleteCandidateByid,
    getCandidatebyIdWithExam,
    getAllcandidateWithExam,
    candidateByQuery,
    getByIdSts
}