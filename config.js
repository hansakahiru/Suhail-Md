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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_08_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzksXG4gICAgICAgIDY4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDgyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQzLFxuICAgICAgICA0NixcbiAgICAgICAgMjAyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDMxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDc0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkzLFxuICAgICAgICA5MixcbiAgICAgICAgMjQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTczLFxuICAgICAgICA5OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjksXG4gICAgICAgIDU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDUzLFxuICAgICAgICA1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInd0REVmVHlIZDZIckFpbUV2dHRpdXNsSkVaQkFPbGhaa2NFMmpLZkxUUWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlJdGRfb0VjUkgyT1RoTG4zTGZLNUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTllYzgxNDQtYzAwMC00YWZkLTkxZDAtZGFjODQ5NzliZWIyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI4LFxuICAgICAgNDksXG4gICAgICAxMzIsXG4gICAgICA3OSxcbiAgICAgIDE2NixcbiAgICAgIDIwNixcbiAgICAgIDE2OCxcbiAgICAgIDcxLFxuICAgICAgNTgsXG4gICAgICAyNTEsXG4gICAgICAyMjgsXG4gICAgICAzMSxcbiAgICAgIDIzOSxcbiAgICAgIDE0NyxcbiAgICAgIDE2NyxcbiAgICAgIDAsXG4gICAgICAyMTYsXG4gICAgICAxNjUsXG4gICAgICAyMjMsXG4gICAgICAxOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgzLFxuICAgICAgMTg3LFxuICAgICAgMTQ5LFxuICAgICAgMTgsXG4gICAgICAxNzQsXG4gICAgICA4MCxcbiAgICAgIDE4OSxcbiAgICAgIDE0MyxcbiAgICAgIDE2OSxcbiAgICAgIDIxMixcbiAgICAgIDg2LFxuICAgICAgMjQ4LFxuICAgICAgMTg2LFxuICAgICAgMTcyLFxuICAgICAgMTUzLFxuICAgICAgNjQsXG4gICAgICA1NCxcbiAgICAgIDE1NixcbiAgICAgIDEyOSxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJNNTVBUjFOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcxNDc5Mzc2MDoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkhJUlVTSEFOXCIsXG4gICAgXCJsaWRcIjogXCI5MjY1NTY2NTA0MTU2MToxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKV0FrenNRNjl2ZHRBWVlCeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtod0ZBOXZDNzJZQmhXUVNPSlVub1NGREFzeWpnakRRY2daaTJjamJUaEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUVV4ZDdlVDI2NDhMbHU2b2ROc2ttTkYyTkluYzFGV1VjUjFKcGtZeTlBNGl6clU0dkNHUHloUWhqZ1V5Z3BBUEtVR0V2Y1BvWklEMVltS04ycHhpQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ1hBMkEya3Izdml6L1JoWFdhaVBmQ0xBcEtiMWczdXRta1dVMktXdVpWRlJiblQ1RjRocWd3aFdJT2dRaU5HUWsyczh4T0hrMmxNVDEwTmtUME9KaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTQ3OTM3NjA6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjAwMTEwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnFTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGcVMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6eDl0TEl1dWFNQUxoZkY5bWpvSE0zcm5BQlRhQi9rWWxaY3ZHVXk1d0YwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNDA0MzI4MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTUwNDM1MzAwNFwifSIKfQ=="  // PUT your SESSION_ID 


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
