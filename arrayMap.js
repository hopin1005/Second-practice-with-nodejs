const Sequelize = require('sequelize')
const sequelize = require('./orm_config')

const userData = sequelize.define('user_datas', {

  id: {
    type: Sequelize.STRING(100),
    primaryKey: true
  },

  userid: Sequelize.INTEGER,
  thingstodo: Sequelize.STRING(100)

}, {
  timestamps: false
})


//single promise;
// userData.create({
//     userid: 7,
//     thingstodo: thing,
// });

var thingsTodoArray = ['eat dinner', 'eat lunch', 'sleep'];

// Promise.all(thingsTodoArray.map(things => {
//     return userData.create({
//         userid: 7,
//         thingstodo: things
//     })
// })).then(function data(res){
//   console.log(res)
// }).catch(function reject(rej){
//   console.log(rej);
// })

// Promise.all(thingsTodoArray.map(things => {
//   return new Promise(function(resolve, reject){
//       userData.create({
//         userid: 7,
//         thingstodo: things
//       }).then(data => {
//         resolve(data.dataValues.thingstodo);
//       }).catch(warn => {
//         reject(warn);
//       })
//   })
// })).then(function data(res){
//   console.log(res)
// }).catch(function reject(rej){
//   console.log(rej);
// })

console.log(thingsTodoArray.map(things => {
  return new Promise(function(resolve, reject){
      userData.create({
        userid: 7,
        thingstodo: things
      }).then(data => {
        resolve(data.dataValues.thingstodo);
      }).catch(warn => {
        reject(warn);
      })
  })
}))


