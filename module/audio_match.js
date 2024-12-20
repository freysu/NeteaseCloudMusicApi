/*
 * @Author: freysu
 * @Date: 2024-12-19 08:04:31
 * @LastEditors: freysu
 * @LastEditTime: 2024-12-19 08:15:37
 * @Description: file content
 */
const axios = require('axios')

const createOption = require('../util/option.js')
module.exports = async (query, request) => {
  const res = await axios({
    method: 'get',
    url: `https://interface.music.163.com/api/music/audio/match?sessionId=0123456789abcdef&algorithmCode=shazam_v2&duration=${
      query.duration
    }&rawdata=${encodeURIComponent(query.audioFP)}&times=1&decrypt=1`,
    data: null,
  })
  return {
    status: 200,
    body: {
      code: 200,
      data: res.data.data,
    },
  }
}
