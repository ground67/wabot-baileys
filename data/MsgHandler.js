
process.on('uncaughtException', console.error) // safe log error

const sotoy = [
        '🍊 : 🍒 : 🍐 upss coba lagi',
        '🍒 : 🔔 : 🍊 upss coba lagi',
        '🍇 : 🍇 : 🍐 upss coba lagi',
        '🍊 : 🍋 : 🔔 upss coba lagi', 
        '🍓 : 🍓 : 🍓 selamat anda menang',
        ' 🌽: 🌽 : 🌽 selamat anda menang',
        '🔔 : 🍒 : 🍐 upss coba lagi',
        '🔔 : 🍒 : 🍊 upss coba lagi',
        '🍊 : 🍋 : 🔔 upss coba lagi',        
        '🍐 : 🍒 : 🍋 upss coba lagi',
        '🍐 : 🍐 : 🍐 selamat anda menang',
        '🍊 : 🍒 : 🍒 upss coba lagi',
        '🔔 : 🔔 : 🍇 upss coba lagi',
        '🍌 : 🍌 : 🔔 upss coba lagi',
        '🍐 : 🔔 : 🔔 upss coba lagi',
        '🍊 : 🍋 : 🍒 upss coba lagi',
        '🍋 : 🍋 : 🍋 selamat anda menang',
        '🔔 : 🔔 : 🍇 upss coba lagi',
        '🔔 : 🍇 : 🍇 upss coba lagi', 
        '🔔 : 🍐 : 🔔 upss coba lagi',
        '🍌 : 🍌 : 🍌 selamat anda menang'
        ]
        
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  WAMessageProto,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReclientectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
  prepareMessageFromContent, 
  relayWAMessage,
} = require("@adiwajshing/baileys");
const simple = require("./data/lib/simple.js");
const { virtex, vipi } = require("./data/lib/virtex.js");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const Math_js = require("mathjs")
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const ms = require("parse-ms");
const os = require("os");
const fetch = require("node-fetch");
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const brainly = require("brainly-scraper");
const yts = require("yt-search");
//const ms = require("parse-ms");
const toMs = require("ms");
const imgbb = require("imgbb-uploader");
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require(".data/lib/functions");
const { color, bgcolor } = require("./data/lib/color");
const { fetchJson, getBase64, kyun, createExif } = require("./data/lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./data/lib/ytdl");
const { webp2mp4File } = require("./data/lib/webp2mp4");
const { fbdl } = require("./data/lib/fbdl");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const { sleep, isAfk, cekafk, addafk } = require("./data/lib/offline");
const { cmdadd } = require("./data/lib/totalcmd.js");
const voting = JSON.parse(fs.readFileSync("./data/lib/voting.json"));
const { addVote, delVote } = require("./data/lib/vote");
const setting = JSON.parse(fs.readFileSync('./data/lib/setting.json'));
const _limit = JSON.parse(fs.readFileSync('./data/lib/limit.json'));
const _nsfw = JSON.parse(fs.readFileSync('./data/lib/nsfw.json'));
const _jawa = JSON.parse(fs.readFileSync('./data/lib/jawa.json'));
const bucinrandom = JSON.parse(fs.readFileSync('./data/random/bucin.json'))
const randomdilan = JSON.parse(fs.readFileSync('./data/random/dilan.json'))
const hekerbucin = JSON.parse(fs.readFileSync('./data/random/hekerbucin.json'))
const katailham = JSON.parse(fs.readFileSync('./data/random/katailham.json'))
const _badword = JSON.parse(fs.readFileSync('./data/lib/badword.json'))
const bad = JSON.parse(fs.readFileSync('./data/lib/bad.json'))
const reminder = require("./lib/reminder");
const { jadibot, stopjadibot, listjadibot } = require("./data/lib/jadibot");
const _reminder = JSON.parse(fs.readFileSync("./data/lib/reminder.json"));
