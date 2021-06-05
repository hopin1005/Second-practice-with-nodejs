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

Promise.all(thingsTodoArray.map(things => {
    userData.create({
        userid: 7,
        thingstodo: things
    })
}))
