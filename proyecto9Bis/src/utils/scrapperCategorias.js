const puppeteer = require('puppeteer')
const fs = require('fs')

const arrCategoria = []

const scrapper = async (url) => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--disable-setuid-sandbox'],
    ignoreHTTPSErrors: true
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1080, height: 1024 })
  await page.goto(url, { waitUntil: 'load' })
  getCategories(page, browser)
}

const getCategories = async (page, browser) => {
  const arrCategories = await page.$$('ul.genres-select > li')
  for (const cat of arrCategories) {
    let categoria = await cat.$eval('input', (el) => el.value)
    const objectCategoria = {
      categoria: categoria.trim().replace('-', ' ')
    }
    arrCategoria.push(objectCategoria)
  }

  write(arrCategoria)
  await browser.close()
}

const write = (arrCategoria) => {
  const objectResult = { result: '' }
  objectResult.result = arrCategoria
  fs.writeFile('animesCategorias.json', JSON.stringify(objectResult), () => {
    console.log('Archivo escrito')
  })
}

module.exports = { scrapper }
