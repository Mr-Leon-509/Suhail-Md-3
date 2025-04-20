const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,509xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,509xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "50944562059,509xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_53_04_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM0LFxuICAgICAgICA4MixcbiAgICAgICAgNzMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxMTksXG4gICAgICAgIDg0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NixcbiAgICAgICAgMjM2LFxuICAgICAgICA4NixcbiAgICAgICAgMjA5LFxuICAgICAgICA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUxLFxuICAgICAgICA4MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk1LFxuICAgICAgICA2NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDcsXG4gICAgICAgIDMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcyLFxuICAgICAgICA3NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDMsXG4gICAgICAgIDM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3OSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI2LFxuICAgICAgICA1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyLFxuICAgICAgICA5NixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk0LFxuICAgICAgICA0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgODgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgODEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUyLFxuICAgICAgICAzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA5LFxuICAgICAgICA3OCxcbiAgICAgICAgODAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTEtjeTR1L2srUmorUVpDdU9GSTN0WURpalNlNldMQWF0enc1MjFrdVNYdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ1hjenZVb2lSMS0xa1M1NmNiR2RvUVwiLFxuICBcInBob25lSWRcIjogXCI5YzliNDI2OC0yODZiLTRhNWItYWRkYS1jYTM0NGI3ZTZlYzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEzLFxuICAgICAgMjAzLFxuICAgICAgNzksXG4gICAgICA4MyxcbiAgICAgIDEwOSxcbiAgICAgIDI1LFxuICAgICAgMTU4LFxuICAgICAgOTQsXG4gICAgICAxMDAsXG4gICAgICAxMTcsXG4gICAgICAxOTEsXG4gICAgICAxNjUsXG4gICAgICAxOTIsXG4gICAgICAzNixcbiAgICAgIDQsXG4gICAgICAyMjIsXG4gICAgICA2MixcbiAgICAgIDUxLFxuICAgICAgMjA1LFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgNSxcbiAgICAgIDIyMCxcbiAgICAgIDAsXG4gICAgICAxNjcsXG4gICAgICA3NyxcbiAgICAgIDE4NCxcbiAgICAgIDI1MyxcbiAgICAgIDU5LFxuICAgICAgMTczLFxuICAgICAgMjA3LFxuICAgICAgNzAsXG4gICAgICAzMixcbiAgICAgIDE4NixcbiAgICAgIDE1MyxcbiAgICAgIDEyNyxcbiAgICAgIDU1LFxuICAgICAgNDgsXG4gICAgICAxNzcsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWVldZM1NaNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5NDQ1NjIwNTk6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZW48J2WhvCdlpfwnZab8J2WivCdlpPwnZaYIPCdlpHwnZaKIPCdlpvwnZaKzIHwnZaX8J2WjvCdlpnwnZaG8J2Wh/CdlpHwnZaKIPCdlorwnZaT8J2WiPCdlo3wnZaG8J2Wk/CdlpnwnZaK8J2WmvCdlpdcIixcbiAgICBcImxpZFwiOiBcIjE4NTM3MTQyNjAyOTU4MDoyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMblB5WWdHRVBUdWtNQUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFXbHBUcnBWMEFnZTZKSk9YRzNObkJrMFpPZ1R3V3cxdXNvRlJJSUlFMEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRExNSkluZno0aWtQQXpidFZPODE5UUZyRlg4TTJadHBQZHZaNk80ZWYvT3FFREowbDNHeGl4V1d5Rmg1dEx1YU9RdTVKL3FGWjhqcVMxMHZrS2lRQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiblE5akhteG1qNm9rRDNMczQxMkF5RG5DVlpGb09jbVZjanc0K28rdGVYM1RHODFrM2RmTU8vZ2FBRWRjSVhsTWVzci9QR0JLc0RySGY5RW9qcHhpaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNTA5NDQ1NjIwNTk6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDUxMDY4MDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHTHBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdMcC5qc29uIjogIntcImtleURhdGFcIjpcImIvN1JVcGRoc2ZyQ1pPSVhlNnVxaTlSd2lSdVV0NG9UaUZ6WGZUTFRmaE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYyODU5NjE1MyxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzLDRdfSxcInRpbWVzdGFtcFwiOlwiMTc0NTEwNjc2OTE5NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "🤤 Andromède 🤤",
  ownername:process.env.OWNER_NAME|| "Mr🥹Love",


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
