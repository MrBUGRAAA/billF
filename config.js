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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_46_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0LFxuICAgICAgICA0NixcbiAgICAgICAgMjExLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU0LFxuICAgICAgICA2NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1LFxuICAgICAgICAzNixcbiAgICAgICAgMjM4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MixcbiAgICAgICAgMTYsXG4gICAgICAgIDI5LFxuICAgICAgICA5NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjksXG4gICAgICAgIDczLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDksXG4gICAgICAgIDk1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NixcbiAgICAgICAgMTYwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzLFxuICAgICAgICA5MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDYsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE1LFxuICAgICAgICA3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODIsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM2LFxuICAgICAgICA4NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRERDSEQrZStVR0kvVHVvL2RXU2ZzQ3hhYS9CMU1nUFl3UEVGSWUyVUs5dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZTFRTjZqT2NRMFMyUU9KeEQ5NEkwd1wiLFxuICBcInBob25lSWRcIjogXCI4Y2VkNDdjMi0zYWQ4LTRiNjYtOWM5Yy1kOTI5NDRjZjQzMTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMixcbiAgICAgIDE1MSxcbiAgICAgIDE1NixcbiAgICAgIDI1MCxcbiAgICAgIDEyOCxcbiAgICAgIDE2NSxcbiAgICAgIDEwMCxcbiAgICAgIDIwMixcbiAgICAgIDQzLFxuICAgICAgMTA3LFxuICAgICAgMTksXG4gICAgICAxMixcbiAgICAgIDEzOCxcbiAgICAgIDIzMCxcbiAgICAgIDIwMCxcbiAgICAgIDcyLFxuICAgICAgMjM3LFxuICAgICAgMTI5LFxuICAgICAgMjQsXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgMjM2LFxuICAgICAgNjcsXG4gICAgICAxNzEsXG4gICAgICAxODcsXG4gICAgICAyMzAsXG4gICAgICAxNDIsXG4gICAgICAyLFxuICAgICAgMTE2LFxuICAgICAgMTkxLFxuICAgICAgMTk0LFxuICAgICAgMTk4LFxuICAgICAgMTg3LFxuICAgICAgMjM3LFxuICAgICAgMTI1LFxuICAgICAgMTkyLFxuICAgICAgMzAsXG4gICAgICAyMTAsXG4gICAgICAxMzgsXG4gICAgICAxMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUTI2UUtWVFRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjE5NzIzNTE4NjIwOjc4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4OTM4NzMxMjM4MjAwMDo3OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOU25odlVFRUs2NTVMUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInpBeCtpRy9CNEs4YVJMdlc3QmR3cGF6VVBKRkgrZWhFZ01ma1lmZkhOa289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK3lIRm50MmpPL0svSWJRVWtNZjZqOFhOWDVUY0lXcVFrSldRQzNObWo0Q1hsMmdaRmNZcXFUTlZPM1BYRlRiR1pINnA5VHlJejg4MnRiUkw0bG05QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRmkvWXRsbEJWSzBGaUZVUFFCM3JWVzdrcGtxdjJtR3Q3N0RaL3JmNDFsLzJxd3VPUk1JUkpoRGgyUjczSkZWZXhvaDdSSDRjdWlIV091RnpqSTlCQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTk3MjM1MTg2MjA6NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTMxMDM4NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpFSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkVKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZitrNy9nMi83OTUrRVZLS2UybGhQdGI3WGpoUmRZRkdRV1h2Umo3NWx2UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzE5MjExOTg3LFwiY3VycmVudEluZGV4XCI6MTgsXCJkZXZpY2VJbmRleGVzXCI6WzE2LDAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
