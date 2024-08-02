const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://hndrxx333:hndrxx@hndrxx.vkqrre8.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Kerroumisoufian/silana-bot";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Jltjdk1ciAoLKZogIH7kju";
global.website=process.env.GURL || "https://chat.whatsapp.com/Jltjdk1ciAoLKZogIH7kju" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/v1j1R4R.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ SOUFIAN KERROUMI /²²¹-ᴍᴅ" 


global.devs = "212680025992" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212680025992";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '6'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/v1j1R4R.jpeg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "{"noiseKey":{"private":{"type":"Buffer","data":"eKG7BgfUEdf8IRLmrfx5Puyi4MQpw8ZV/f9FgGQpe2A="},"public":{"type":"Buffer","data":"uMfPY+jOB/Yye2kiX4zuTWeQEYGluqaVngOq1cFgEyc="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"QLSdZUGx4v+zmQsJosAYsovLE5ePKj/tREO3H3NcNH4="},"public":{"type":"Buffer","data":"wBiy/8JZaLSbvA10E0iECqFoNM209tkZfzW7NlbeLWU="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"KKzDjxtVMa6e69Ta5Uhe1+ryY8r9Qmsh5DAd5espKGU="},"public":{"type":"Buffer","data":"OKSmpMix+ZGzki2YqnA9jn8v4qTTDomeGbZTYW1r+QU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"OEP8q3L2FNft8BjEPGmODtvz251YKEhA91F9vk8Gx1U="},"public":{"type":"Buffer","data":"bvzly1/P0s9QDX6wYRsMH+KP/t+Evk640XTrL6nDHB8="}},"signature":{"type":"Buffer","data":"2rKDyiNZWZiX0a2MoSsSplf+OxlCehvhq7gjgfsCrcam1iUeZzHv8/H137K3UQCLq/lbp2FGYFTCDed2t8HUAg=="},"keyId":1},"registrationId":1,"advSecretKey":"EeiGoJpGQwaXvMYd/jKgef2tXausbKjkpahrvKI9Cc0=","processedHistoryMessages":[{"key":{"remoteJid":"212762569603@s.whatsapp.net","fromMe":true,"id":"7685E90436F11FECD224492B5BFAEBB4"},"messageTimestamp":1722586019},{"key":{"remoteJid":"212762569603@s.whatsapp.net","fromMe":true,"id":"5B2ADF720766341E0732182F536EAF47"},"messageTimestamp":1722586019},{"key":{"remoteJid":"212762569603@s.whatsapp.net","fromMe":true,"id":"678C3199380DAD46CDC61B7CAB7F4D0D"},"messageTimestamp":1722586025},{"key":{"remoteJid":"212762569603@s.whatsapp.net","fromMe":true,"id":"5D6795069FC04EA8C1BAFC23EB94351F"},"messageTimestamp":1722586028}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"ZSQyvMyaSD2F-lo_AXwQWQ","phoneId":"2a92151d-73c3-47a4-9417-1fe7620ccaef","identityId":{"type":"Buffer","data":"svLxU429bJPOf4Y+w9i/0Or6N1Q="},"registered":true,"backupToken":{"type":"Buffer","data":"kIYCMsUVJemZ/dqzrJPSKTjEQio="},"registration":{},"pairingCode":"2ZMNRH1F","me":{"id":"212762569603:29@s.whatsapp.net","lid":"109002495135869:29@lid","name":"❤️"},"account":{"details":"CJy/u5wEEJ6nsrUGGAYgACgA","accountSignatureKey":"RlVDNfhPoCeRDryYOy801zHCTAwvJpXvr1q5yBcsjmE=","accountSignature":"uJMCm9dujJBqEJv2F/ls9ApsPtxCMvbKE7LE19tQJ13rL3QCsTGbj5qxhWoCiFoI3LRgW27aupLHWEoQ/io5DA==","deviceSignature":"lVyfD1A0MQhz9/PB6Ucb/RlVHrOIHgaLs7t6Lu5neciD9S0gfzm43L5Bdh394YGAxrje28EdKYLZaA6YHQqxAg=="},"signalIdentities":[{"identifier":{"name":"212762569603:29@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUZVQzX4T6AnkQ68mDsvNNcxwkwMLyaV769aucgXLI5h"}}],"platform":"android","lastAccountSyncTimestamp":1722586018,"myAppStateKeyId":"AAAAAKRI"}"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: soufian bot Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ SOUFIAN KERROUMI /²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • SOUFIAN 』*\n instagram.com/soufian_k23"),
 
  author : process.env.PACK_AUTHER|| "SOUFIAN KERROUMI />𝐾𝑅𝑜𝑧❦︎",
  packname: process.env.PACK_NAME || "SOUFIAN KERROUMI />𝐾𝑅𝑜𝑧❦︎",
  botname : process.env.BOT_NAME  || "SOUFIAN KERROUMI ",
  ownername:process.env.OWNER_NAME|| "SOUFIAN KERROUMI ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "free",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_fb266f5bf996c8a44798faf303948221ed3cf3d23f428a09";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
