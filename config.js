const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="billkip20@gmail.com"
global.location="Nairobi,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaaTBWh2phHOcjWOi92N";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaaTBWh2phHOcjWOi92N" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "" 


global.devs = "254718351815" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254718351815";




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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254718351815,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_41_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDg0LFxuICAgICAgICA3NixcbiAgICAgICAgNSxcbiAgICAgICAgODgsXG4gICAgICAgIDY4LFxuICAgICAgICA3OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQxLFxuICAgICAgICA5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyOSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI2LFxuICAgICAgICA1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3LFxuICAgICAgICA0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgwLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc2LFxuICAgICAgICA2MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIxLFxuICAgICAgICAzMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM5LFxuICAgICAgICA3NCxcbiAgICAgICAgNixcbiAgICAgICAgNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMzLFxuICAgICAgICA2NixcbiAgICAgICAgODYsXG4gICAgICAgIDUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInlrUDNJbHI2by9KTW5DQXdCTUVaMEhFRTRscXNLTFp5cVFTSmwzR1RoYUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTk3MjM1MTg2MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc2RUUwOEI3NzBGNUY1MDczOTZCOERGNzI3RTA2REIzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTM3MTI4OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJocGxWN0c1QVNBeUJxaHAwSjlBcktnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA0NmQyOGU2LWU3NjctNGM0ZS05NDNhLWNkN2VhNDU5MDBlN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAxNjEsXG4gICAgICA5MixcbiAgICAgIDI1MSxcbiAgICAgIDcsXG4gICAgICA2MCxcbiAgICAgIDE3MCxcbiAgICAgIDI0LFxuICAgICAgNSxcbiAgICAgIDEsXG4gICAgICA5NCxcbiAgICAgIDExNixcbiAgICAgIDE3NCxcbiAgICAgIDE3MCxcbiAgICAgIDE2NSxcbiAgICAgIDE0NixcbiAgICAgIDUxLFxuICAgICAgMjMwLFxuICAgICAgMTgyLFxuICAgICAgMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICA3OCxcbiAgICAgIDkzLFxuICAgICAgOTksXG4gICAgICAyMTMsXG4gICAgICAxNzUsXG4gICAgICAxNzgsXG4gICAgICAxNCxcbiAgICAgIDI0MCxcbiAgICAgIDIwNCxcbiAgICAgIDc3LFxuICAgICAgMTksXG4gICAgICAxNTgsXG4gICAgICAyMTAsXG4gICAgICA0MSxcbiAgICAgIDgxLFxuICAgICAgMTExLFxuICAgICAgMTIsXG4gICAgICAxMjcsXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYRUUzUFZGU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTk3MjM1MTg2MjA6ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg5Mzg3MzEyMzgyMDAwOjgyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04ybmh2VUVFSktWNkxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiekF4K2lHL0I0SzhhUkx2VzdCZHdwYXpVUEpGSCtlaEVnTWZrWWZmSE5rbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzMW05ZFFQRFpkMWJ1MHVMTVJmSkgvdFA5UStQUmYvSHZKZ0cwRnVCNGRQKzEvZmt5aFVxTXNWMkptMDd5czRoaDlVM0ZQcW9lRWZjb09ZcFVycGNBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0MkE5SjJDZ0ZKVFZJcTNTVHhuWHJMT2w2M2c5UUJlNmF3eC9LcUp0RnlRNnBmRHNTa1FTS2lFMFI1T2FFMU5zcDRodHM5OENXZVo2VHF5clppb3BBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxOTcyMzUxODYyMDo4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzcxMjg1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSkVKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKRUouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmK2s3L2cyLzc5NStFVktLZTJsaFB0YjdYamhSZFlGR1FXWHZSajc1bHZRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMTkyMTE5ODcsXCJjdXJyZW50SW5kZXhcIjoxOCxcImRldmljZUluZGV4ZXNcIjpbMTYsMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "₲ⱠɄ̈₵₭",
  packname: process.env.PACK_NAME || "₲ⱠɄ̈₵₭",
  botname : process.env.BOT_NAME  || "₲ⱠɄ̈₵₭",
  ownername:process.env.OWNER_NAME|| "₲ⱠɄ̈₵₭",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "₲ⱠɄ̈₵₭"  ).toUpperCase(),



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
