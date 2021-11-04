
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
const simple = require("./lib/simple.js");
const { virtex, vipi } = require("./lib/virtex.js"); //memans
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
} = require("./lib/functions");
const { color, bgcolor } = require("./lib/color");
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./lib/ytdl");
const { webp2mp4File } = require("./lib/webp2mp4");
const { fbdl } = require("./lib/fbdl");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js");
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const { addVote, delVote } = require("./lib/vote");
const setting = JSON.parse(fs.readFileSync('./lib/setting.json'));
const _limit = JSON.parse(fs.readFileSync('./lib/limit.json'));
const _nsfw = JSON.parse(fs.readFileSync('./lib/nsfw.json'));
const _jawa = JSON.parse(fs.readFileSync('./lib/jawa.json'));
const bucinrandom = JSON.parse(fs.readFileSync('./lib/bucin.json'))
const randomdilan = JSON.parse(fs.readFileSync('./lib/dilan.json'))
const hekerbucin = JSON.parse(fs.readFileSync('./lib/hekerbucin.json'))
const katailham = JSON.parse(fs.readFileSync('./lib/katailham.json'))
const _badword = JSON.parse(fs.readFileSync('./lib/badword.json'))
const bad = JSON.parse(fs.readFileSync('./lib/bad.json'))
const reminder = require("./lib/reminder");
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
