// practice use promise/async to parallel
// sequelize promise
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

function promiseMethod () {
  const promises = []

  const promiseSequelize = userData.findAll({
    raw: true,
    attributes: ['thingstodo'],
    where: {
      userid: 7
    }
  })

  promises.push(promiseSequelize)

  // promise fs
  const { readFile } = require('fs').promises
  const promiseReadFile = readFile('./test.txt', { encoding: 'utf8' })

  promises.push(promiseReadFile)

  // promise setTimeout
  function timeOut () {
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve('setTimeout func gogogo')
      })
    })
  }

  const promiseTimeout = timeOut()
  promises.push(promiseTimeout)

  // promise axios
  const axios = require('axios')
  const promiseAxios = axios.get('http://www.google.com')
  promises.push(promiseAxios)

  // console result
  Promise.all(
    promises
  ).then(res => {
    console.log(res)
  })
}

function asyncMethod () {
  // seqeulize
  const promises = []
  async function asyncSeq () {
    const primaryId = 7

    return await userData.findAll({
      raw: true,
      attributes: ['thingstodo'],
      where: {
        userid: primaryId
      }
    })
  }

  const seqRes = asyncSeq()
  promises.push(seqRes)

  // fs async
  const { readFile } = require('fs').promises
  async function fs () {
    return await readFile('./test.txt', { encoding: 'utf8' })
  }

  const fsRes = fs()
  promises.push(fsRes)

  // setTimeout
  function timeOut () {
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve('setTimeout func gogogo')
      })
    })
  }

  async function sleep () {
    return await timeOut()
  }

  const timeOutRes = sleep()
  promises.push(timeOutRes)

  // axios
  const axios = require('axios')
  async function request () {
    return await axios.get('http://www.google.com')
  }

  const axiosRes = request()
  promises.push(axiosRes)

  Promise.all(
    promises
  ).then(res => {
    console.log(res)
  })
}

asyncMethod()
promiseMethod()
