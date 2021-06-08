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
async function asyncGetthings () {
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

function wrapAnotherPromise(res2){
  return new Promise(function(resolve){
    resolve(res2);
  })
}

var res2 = promiseGetthings();
res2 = wrapAnotherPromise(res2);

res2.then(data => {
  console.log('res2 result: ')
  console.log(data)
})

//callback func
function callbackGetthings (cb) {
  const uid = 7

  const resPromise = userData.findAll({
    raw: true,
    attributes: ['thingstodo'],
    where: {
      userid: uid
    }
  })

  resPromise.then(data => cb(data));
}


function getData(data){
  console.log(data)
}


callbackGetthings(getData);
