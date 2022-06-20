// const { sequelize } = require('../entity')
// const response = require('../entity/response')
// const myRouter = require('express').Router();

// let a = "col2"

// const addcol = async()=>
// {
//     // for(i=1;i<=20;i++){
//     //     let a = "col" + i;
//     // let candi = await sequelize.query("ALTER TABLE `responses` add column ("+a+" varchar(255))", {type:sequelize.QueryTypes.ALTER });
//     //}
// }
// const request = require('request');

// request('http://localhost:8080/api/candidate//getallcandidate', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }

//   console.log("in the request body to get api data.............")
//    console.log(res.body);
// //   console.log(res.explanation);
//    //console.log(res.body.result.id);
//    //console.log(res.body.result.email);
//    console.log(res.body.result.length);


// });

// module.exports=
// {
//     addcol
// }


// // // const queryInterface = sequelize.getQueryInterface();
// // // var queryInterfaceData = async(req ,res)=>{


// //     up: (queryInterface, Sequelize) => {
// //         return Promise.all([
// //           queryInterface.addColumn(
// //             'response',
// //             'que1',
// //             {
// //               type: Sequelize.STRING
// //             }
// //           ),
// //           queryInterface.addColumn(
// //             'response',
// //             'que2',
// //             {
// //               type: Sequelize.STRING
// //             }
// //           ),
// //         ]);
// //       }
    
// //       down: (queryInterface, Sequelize) => {
// //         return Promise.all([
// //           queryInterface.removeColumn('tableName', 'columnName1'),
// //           queryInterface.removeColumn('tableName', 'columnName2')
// //         ]);
// //       }





// // module.exports = queryInterface;