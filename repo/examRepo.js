const { Console } = require('winston/lib/winston/transports');
const db = require('../entity')
const upcoming_exam = db.upcomingexam;

const addExam = async (req, res) => {
    try {
        let info = {
            examName: req.body.examName,
            examType: req.body.examType,
            startTime: req.body.startTime,
            startDate: req.body.startDate,
            duration: req.body.duration,
            status: req.body.status,
            candidateId: req.body.candidateId
        }
        const upcomingexam = await upcoming_exam.create(info);
        return upcomingexam;
    } catch (error) {
        throw new Error("incorrectdata")
    }

}
const getAllExam = async (req, res) => {
    let upcomingexam = await upcoming_exam.findAll({

    });
    if (!upcomingexam && upcomingexam.length <= 0) {
        throw new Error("notfound");
    }
    return upcomingexam;

}
const getExamById = async (req, res) => {
    let Id = req.params.id;
    let upcomingexam = await upcoming_exam.findOne({
        where: { id: Id }
    });
    if (!upcomingexam) {

        throw new Error("notfound");
    }
    return upcomingexam;
}
const updateExamById = async (req, res) => {

    try {
        let Id = req.params.id;
        let upcomingexam = await upcoming_exam.update(req.body, {
            where: { id: Id }
        })
        if (!upcomingexam[0]) {
            throw new Error("notfound");
        }
        return upcomingexam;
    } catch (error) {
        if (error.message === "notfound") {
            throw new Error("notfound");
        }
        throw new Error("ValidationError");
    }
}
const getAllExamByStatus = async (req, res) => {
    let sts = req.params.id;
    let upcomingexam = await upcoming_exam.findAll({
        where: { status: sts }

    });
    if (!upcomingexam) {
        throw new Error("notfound");
    }
    return upcomingexam;
}

const deleteExam = async (req, res) => {
    let Id = req.params.id;
    let upcomingexam = await upcoming_exam.destroy({
        where: { id: Id }
    });
    if (!upcomingexam) {
        throw new Error("notfound");
    }
    return upcomingexam;
}
const updateStatus = async (req, res) => {
    let Id = req.params.id;
    let uId = req.params.uId
    let exam = await upcoming_exam.update(req.body, {
        where: { id: Id, candidateId: uId }
    })
    if (!upcomingexam[0]) {
        throw new Error("notfound");
    }
    return exam;
}
const getAllUpcomingExamByUid = async (req, res) => {
    let Id = req.params.uId;
    let upcomingexam = await upcoming_exam.findAll({
        where: {
            candidateId: Id,
            status: 0
        }
    })
    if (!upcomingexam) {
        throw new Error("notfound");
    }
    return upcomingexam;
}
const getAllProcessingExambyUid = async (req, res) => {
    let Id = req.params.uId;
    let processingexam = await upcoming_exam.findAll({
        where: {
            candidateId: Id,
            status: 1
        }
    })
    if (!processingexam) {
        throw new Error("notfound");
    }
    return processingexam;
}
const getAllGivenExambyUid = async (req, res) => {
    let Id = req.params.uId;
    let givenexam = await upcoming_exam.findAll({
        where: {
            candidateId: Id,
            status: 2
        }
    })
    if (!givenexam) {
        throw new Error("notfound");
    }
    return givenexam;
}
module.exports = {
    addExam,
    getAllExam,
    getExamById,
    updateExamById,
    getAllExamByStatus,
    deleteExam,
    updateStatus,
    getAllUpcomingExamByUid,
    getAllProcessingExambyUid,
    getAllGivenExambyUid
}