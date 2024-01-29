const puppeteer = require('puppeteer')
const fs = require('fs')

const arrAnimes = []

const scrapper = async (url) => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--disable-setuid-sandbox'],
    ignoreHTTPSErrors: true
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1080, height: 1024 })
  await page.goto(url, { waitUntil: 'load' })

  repeat(page, browser)
}

const repeat = async (page, browser) => {
  const arrayAnime = await page.$$('ul.ListAnimes > li > article')
  try {
    for (const animeAr of arrayAnime) {
      let desc = await animeAr.$$eval(
        'div.Description > p',
        (el) => el[1].textContent
      )
      let title = await animeAr.$eval('h3.Title', (el) => el.textContent)
      let img = await animeAr.$eval('img', (el) => el.src)

      const anime = {
        title,
        img,
        desc
      }
      arrAnimes.push(anime)
    }

    await page.$eval("[rel='next']", (el) => el.click())
    await page.waitForNavigation()
    repeat(page, browser)
  } catch (error) {
    write(arrAnimes)
    await browser.close()
  }
}

const write = (arrAnimes) => {
  const objectResult = { result: '' }
  objectResult.result = arrAnimes
  fs.writeFile('animes.json', JSON.stringify(objectResult), () => {
    console.log('Archivo escrito')
  })
}

module.exports = { scrapper }
