require('dotenv').config()
let requests = require('unrecognized_requests')
const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)
const {Markup} = require('telegraf')
const SYMBOLS_VOCAB = require('./symbols/symbols')
const MATH_SYMBOLS = require('./symbols/math')
const FRACTIONS = require('./symbols/fractions')
const CIRCLES = require('./symbols/circles')
const ARROWS = require('./symbols/arrows')
const STARS = require('./symbols/stars')
const NOTES = require('./symbols/notes')
const SQUARES = require('./symbols/squares')
const SNOWFLAKES = require('./symbols/snowflakes')
const CURRENCIES = require('./symbols/currencies')
const CHESS = require('./symbols/chess')
const POINTERS = require('./symbols/pointers')
const CROSSES = require('./symbols/crosses')
const TRIANGLES = require('./symbols/triangles')
const SUITS = require('./symbols/suits')
const ZODIAC = require('./symbols/zodiacsigns')
const GREEK_LETTERS = require('./symbols/greekletters')

try{
    bot.start((ctx) => ctx.reply(`Привет, ${ctx.message.from.first_name}👋
Напиши название символа, чтобы я 
смог найти его для тебя🙂
/help - узнать подробнее.`,
    Markup.keyboard([        
        ['Математические символы'],
        ['Дроби', 'Круги'],
        ['Стрелки', 'Звёзды'],
        ['Ноты', 'Квадраты'],
        ['Снежинки', 'Валюты'],
        ['Шахматы', 'Указатели'],
        ['Крестики', 'Треугольники'],
        ['Карточные масти', 'Знаки зодиака'],
        ['Греческие буквы']
    ]).resize(),
    console.log('UserName: ' + ctx.message.from.first_name)))

    bot.hears('Привет',(ctx) => ctx.replyWithSticker('CAACAgIAAxkBAAECwRBhGTo7loZ3iVc43jfvYvFAB4hNUQACDgADr8ZRGrdbgux-ASf3IAQ'))
    bot.hears('привет',(ctx) => ctx.replyWithSticker('CAACAgIAAxkBAAECwRBhGTo7loZ3iVc43jfvYvFAB4hNUQACDgADr8ZRGrdbgux-ASf3IAQ'))
    bot.hears('Математические символы',(ctx) => ctx.reply(MATH_SYMBOLS))
    bot.hears('Дроби',(ctx) => ctx.reply(FRACTIONS))
    bot.hears('Круги',(ctx) => ctx.reply(CIRCLES))
    bot.hears('Стрелки',(ctx) => ctx.reply(ARROWS))
    bot.hears('Звёзды',(ctx) => ctx.reply(STARS))
    bot.hears('Ноты',(ctx) => ctx.reply(NOTES))
    bot.hears('Квадраты',(ctx) => ctx.reply(SQUARES))
    bot.hears('Снежинки',(ctx) => ctx.reply(SNOWFLAKES))
    bot.hears('Валюты',(ctx) => ctx.reply(CURRENCIES))
    bot.hears('Шахматы',(ctx) => ctx.reply(CHESS))
    bot.hears('Указатели',(ctx) => ctx.reply(POINTERS))
    bot.hears('Крестики',(ctx) => ctx.reply(CROSSES))
    bot.hears('Треугольники',(ctx) => ctx.reply(TRIANGLES))
    bot.hears('Карточные масти',(ctx) => ctx.reply(SUITS))
    bot.hears('Знаки зодиака',(ctx) => ctx.reply(ZODIAC))
    bot.hears('Греческие буквы',(ctx) => ctx.reply(GREEK_LETTERS))

    const stick = [
        {source: './stickers/sticker.png'},
        {source: './stickers/sticker1.png'},
        {source: './stickers/sticker2.png'},
        {source: './stickers/sticker3.png'},
    ]
    const stickersId = [
        'CAACAgEAAxkBAAECwF5hGGfQxMiyYMl1KKVRUH7gd4TiJwACIgADOA6CEd4wNMezt3dkIAQ',
        'CAACAgIAAxkBAAECwGBhGGibWyHjJ5mMkEBFLEU_qLGMQgAClQADMNSdET3bz5sVDcdXIAQ',
        'CAACAgEAAxkBAAECwGRhGGi763nUl2Y2DFtZo3eqagoVzwACKAADOA6CEeJAhB3GAAE0IiAE',
        'CAACAgIAAxkBAAECwGZhGGjN9Z899i3aKd3meX-2GUnXrQAC5QEAAsoDBgv53De4M5fp3SAE',
        'CAACAgIAAxkBAAECwGxhGGjdmXXc1Ob81y3xJ9exhZ1QFQAC-gEAAsoDBgshTqIuBniG0yAE',
        'CAACAgIAAxkBAAECwHhhGGk0ZZoq_jEKdxR7AAGj9rjZjCcAAogAAzDUnRFeG_Z7GidLASAE',
        'CAACAgIAAxkBAAECwPlhGReLVhEFOyl4yOg7-LtUnGKC-wACBQADr8ZRGpWJICJ8NGY0IAQ',
        'CAACAgIAAxkBAAECwGJhGGilHUy-5J1ndh_pmTsceXSWmwAClgADMNSdEZUMWC6l9JCyIAQ',
        'CAACAgIAAxkBAAECwGhhGGjSSCtRO8GeC7wfVqdOfBnh4gAC7gEAAsoDBgvfV0-V7BmYhiAE',
        'CAACAgIAAxkBAAECwGphGGjW7jav9-qfqL5FZiThCKdG3QAC7AEAAsoDBgtOCtB02_5FPiAE',
        'CAACAgIAAxkBAAECwG5hGGjwomac5naWnHP_Mna1_RUo1wAC1gADVp29Cgl1yQziLyEKIAQ',
        'CAACAgIAAxkBAAECwHBhGGjzeHoSygIx3rS7027pTe_b0gAC3AADVp29Cpy9Gm5Tg192IAQ',
        'CAACAgIAAxkBAAECwHJhGGj_6pyOHt0GB9r26UfrQjXMPQAC2gADVp29CnKcNxveBxs7IAQ',
        'CAACAgIAAxkBAAECwHphGGk3MKSmJ1PXtZex25tKgBM5zAACjgADMNSdEbaKJ1M7GR8YIAQ',
        'CAACAgIAAxkBAAECwPthGReRaYh-8VL3DYg_ok3jp4feygACFAADr8ZRGgu7XTT4sVnxIAQ',
        'CAACAgIAAxkBAAECwP1hGRfAkLO1h8Hj2Er2wI21QiDpLAACBAADr8ZRGhhqTEj6gDwaIAQ'
    ]
    let last = -1
    function getRandomInt(min, max) {
        let rd
        rd = Math.floor(Math.random() * (max - min + 1)) + min
        if(rd===last) {
            do {
                rd = Math.floor(Math.random() * (max - min + 1)) + min
    
            } while (rd===last); 
        }
        last = rd
        return rd
    }

    bot.on('voice', (ctx) => ctx.replyWithSticker(stickersId[getRandomInt(0,6)]))   
    bot.on('sticker', (ctx) => ctx.replyWithSticker(stickersId[getRandomInt(0,15)]))

    bot.help((ctx) => ctx.reply(`Что может этот бот? Он ищет символ 
по названию и прислает его тебе, чтобы
ты мог его использовать, где угодно!
Просто напиши название символа и бот
отправит его тебе. Или используй поиск
по категориям символов.`))

    bot.on('text', (ctx) => {
        let input = ctx.message.text.toLowerCase()
        let res = findSymbol(input)
        ctx.reply(res)
    })

    function findSymbol(input) {
        let vocab = SYMBOLS_VOCAB
        let value = vocab.get(input)
        if(value==undefined) {
            writeRequest(input)
            return `Такой символ не найден...🙁
Попробуй написать по-другому.`           
        } else
        return value
    }

    function writeRequest(message) {
            requests += `${message}\n`  
    }

    function readRequest() {
            console.log(requests)
        }

} catch {
    console.log('Ошибка')
}

bot.launch()
console.log('Бот запущен!')
readRequest()



