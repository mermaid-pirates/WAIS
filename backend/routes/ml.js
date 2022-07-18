const express = require('express');
const axios = require('axios');
const router = express.Router();
const fs = require('fs');
const request = require('request');
const cheerio = require("cheerio");
const path = require('path');

async function downloadImage (url) {
    const p = path.resolve(__dirname, 'tmp', 'tmp.png')
    // TODO 파일 이름 각각 생성해야됨. 위치도 수정해야됨. 지금은 모든 사진이 tmp/tmp.png로 저장됨.
    const writer = fs.createWriteStream(p)
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })
    response.data.pipe(writer)

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve)
      writer.on('error', reject)
    })
  }

router.get('/', async function(req, res) {
    const url = req.query.url;
    if (!url) res.render('help');
    delete req.headers.host;
    try {
        // 사이트 html 불러오기
        const result = await axios.get(url, {
            headers: {...req.headers}
        });
        const $ = cheerio.load(result.data);
        const tagSelector = 'img';
        // img 태그만 추출
        $(tagSelector).each((i, elem) => {
            const title = $(elem).attr('src');
            // TODO img 태그 중 다운받아야 하는 태그만 필터링 해야됨.
            if(title&&title[0]=='h'){
                downloadImage(title.replace(/\?.*$/, ''));
            }
            // TODO ml 결과값 도출
            // TODO 결과값 각 위치에 삽입
        });
        res.end(result.data);
    } catch (e) {
        console.error(e);
    }
});
module.exports = router;
