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

// async / await
async function asyncGetthings (uid) {
  const primaryId = 7

  const dataPromise = await userData.findAll({
    raw: true,
    attributes: ['thingstodo'],
    where: {
      userid: primaryId
    }
  })

  return dataPromise
}

const res1 = asyncGetthings()
res1.then(data => {
  console.log('res1 result: ')
  console.log(data)
})

// promise
function promiseGetthings () {
  const primaryId = 7

  return userData.findAll({
    raw: true,
    attributes: ['thingstodo'],
    where: {
      userid: primaryId
    }
  })
}

const res2 = promiseGetthings()
res2.then(data => {
  console.log('res2 result: ')
  console.log(data)
})

// callback????? not sure
function callbackGetthings () {
  const uid = 7

  const resPromise = userData.findAll({
    raw: true,
    attributes: ['thingstodo'],
    where: {
      userid: uid
    }
  })

  setTimeout(function () {
    resPromise.then(data => {
      console.log('res3 result:')
      console.log(data)
    })
  })
}

callbackGetthings()
