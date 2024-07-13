const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "{"noiseKey":{"private":{"type":"Buffer","data":"mPQmJA6NtrpvhapellIgDterPmRiRO2W0/wIE8vydUw="},"public":{"type":"Buffer","data":"m6UghbZhX/jXvsG4v6SZrhTdSXrTCL9mAZkEV2T7fhA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"gEhBDXlD0vJTZTVz9KUGx4hAvjfBoT8yH6vaveO6f2g="},"public":{"type":"Buffer","data":"k4ntW0VF6KV4tWyeSxtByejDrDG/9jv+yijvWj4TRDw="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"0LrRIkGKB9Lo8FP3wb33xOfc7L+2OQdFEPfTCpNBTXI="},"public":{"type":"Buffer","data":"uVqOsPQmO5Xga6B4OKv+MLGRXhWtEkoYQEeu2gIc5DU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"0IWJhy41gpLv0JZeKrePTZ+yNbDQB0aNEsOVx1APkVI="},"public":{"type":"Buffer","data":"Ix6kp5ykPr3gv4JzwBeM/k+W8BzAYTr6vnkULbkUXEE="}},"signature":{"type":"Buffer","data":"2dgGAPp6jc6/izc1MQ52X5uUSMLPHn2Sp2jPr8h4NdnJU6Fd1rZAclS7sGF/NO46RV3CvYxCK0yX+hGmoI/6gw=="},"keyId":1},"registrationId":144,"advSecretKey":"bnFPcVmU+zZ8FY24IPStQL3HeE2I7xG/++Jbxf41X24=","processedHistoryMessages":[{"key":{"remoteJid":"212762569603@s.whatsapp.net","fromMe":true,"id":"F7255F6D56807754DE9F4BF79631AA43"},"messageTimestamp":1720875685},{"key":{"remoteJid":"212762569603@s.whatsapp.net","fromMe":true,"id":"9C7D40B7EC90066D27515B1C2891BA29"},"messageTimestamp":1720875685},{"key":{"remoteJid":"212762569603@s.whatsapp.net","fromMe":true,"id":"7A43641A9543C8449BCEE204679CA791"},"messageTimestamp":1720875691},{"key":{"remoteJid":"212762569603@s.whatsapp.net","fromMe":true,"id":"F12053B0AAAA1A0D82D1A45623CD45B0"},"messageTimestamp":1720875691}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"YbGPpn9xSSeHjYci9OTnWA","phoneId":"6143a3f2-32a7-4ade-96dc-39fde75cb6ab","identityId":{"type":"Buffer","data":"9IL+cipn5xiE5QXz7oBGj2SybpM="},"registered":true,"backupToken":{"type":"Buffer","data":"A7e7tuQx+7EymMeEJWWiCVA+LN0="},"registration":{},"pairingCode":"M21AFY4F","me":{"id":"212762569603:25@s.whatsapp.net","lid":"109002495135869:25@lid","name":"❤"},"account":{"details":"CJy/u5wEEKH1ybQGGAIgACgA","accountSignatureKey":"RlVDNfhPoCeRDryYOy801zHCTAwvJpXvr1q5yBcsjmE=","accountSignature":"vuya6QQA/olOCZFiMtH3BHymqqRUQcGCPQRx0ZmA43d9Wsk4xFhjzc1PdvvEN5C1nxWpDBPW3r7eahsnF7zCAA==","deviceSignature":"E3fdMxhElZxfezVpJvsvY2Jcunpz1fQLMT0ZPQOjiDTIRSimjLpdbvI9nF8oi8HqFTSHfVXm/a3jB/oHr3I5iw=="},"signalIdentities":[{"identifier":{"name":"212762569603:25@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUZVQzX4T6AnkQ68mDsvNNcxwkwMLyaV769aucgXLI5h"}}],"platform":"android","lastAccountSyncTimestamp":1720875683,"myAppStateKeyId":"AAAAAKRI"}"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
