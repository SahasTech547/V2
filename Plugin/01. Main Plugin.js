const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../DATABASE/functions')
const { checkAccess, isPremiumUser, blacklistedJIDs, premiumJIDs, dataLoaded } = require('../DATABASE/accessControl');
const mono = "```"

    function detectPlatform() {
      if (process.env.REPL_ID) return 'Replit';
      if (process.env.HEROKU_APP_NAME) return 'Heroku';
      if (process.env.KOYEB_PROJECT_ID) return 'Koyeb';
      if (process.env.AWS_LAMBDA_FUNCTION_NAME) return 'AWS Lambda';
      if (process.env.VERCEL) return 'Vercel';
      if (process.env.RENDER) return 'Render';
      if (process.env.NETLIFY) return 'Netlify';
      if (process.env.WORKFLOW) return 'Workflow';
      if (process.env.FLYIO_APP_NAME) return 'Fly.io';
      return 'Unknown Platform';
    }
    const platformName = detectPlatform();

    cmd({
      pattern: "system",
      alias: ["status", "botinfo"],
      desc: "Check uptime, RAM usage, CPU info, and more",
      category: "main",
      react: "🧬",
      filename: __filename
    }, async (conn, mek, m, { from, reply }) => {
      try {
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent
        
          
          let desc = `乂 SAHAS-MD SYSTEM INFORMATION*

*⏰ 𝖴𝗉𝗍𝗂𝗆𝖾 :* ${uptime}
*📻 𝖯𝗅𝖺𝗍𝖿𝗈𝗋𝗆 :* ${platformName}
*⚙️ 𝖱𝖺𝗆 𝖴𝗌𝖺𝗀𝖾 :* ${memoryUsage} MB / ${totalMemory} MB
*👨‍💻 Owner :* Sahas Tech 
*🤖 Version :* 1.0.0
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`

       

          

          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `SAHAS-MD System Information`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://files.catbox.moe/de82e3.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: false
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


















cmd({
      pattern: "alive",
      alias: ["online"],
      desc: "Chek Bot Alive",
      category: "main",
      react: "🧚🏻‍♀️",
      filename: __filename
    }, async (conn, mek, m, { from, reply }) => {
      try {
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `乂  𝖨 𝖬  𝖮 𝖭 𝖫 𝖨 𝖭 𝖤  ( 2 4 / 7  𝖠 𝖢 𝖳 𝖨 𝖵 𝖠 𝖳 𝖤 𝖣 ) 

𝖳𝗒𝗉𝖾 .𝗆𝖾𝗇𝗎 𝖦𝖾𝗍 𝖬𝗒 𝖢𝗈𝗆𝗆𝖺𝗇𝖽 𝖫𝗂𝗌𝗍. 𝖡𝗁𝖺𝗌𝗁𝗂 𝖬𝖣 𝗂𝗌 𝖺 𝖲𝗂𝗆𝗉𝗅𝗒 𝖵𝖾𝗋𝗒 𝖯𝗈𝗐𝖾𝗋𝖿𝗎𝗅𝗅 𝖶𝗁𝗍𝗌𝖺𝗉𝗉 𝖡𝗈𝗍. 𝖡𝖺𝗌𝖾 𝖱𝗎𝗇𝗂𝗇𝗀 𝖮𝗇 𝖡𝖺𝗅𝗂𝖾𝗒𝗌 𝖠𝗇𝖽 𝖵𝖺𝗋𝗂𝗈𝗎𝗌 𝖠𝖯𝖨𝗌. 𝖨𝗍 𝖮𝖿𝖿𝖾𝗋  𝖲𝖾𝖺𝗆𝗅𝖾𝗌𝗌 𝖥𝗎𝗇𝖼𝗍𝗂𝗈𝗇𝖺𝗅𝗂𝗍𝗒 𝖶𝗂𝗍𝗁𝗈𝗎𝗍 𝖡𝗎𝗍𝗍𝗈𝗇𝗌. 𝖣𝖾𝗅𝗂𝗏𝖾𝗋𝗂𝗇𝗀 𝖰𝗎𝗂𝖼𝗄 𝖠𝗇𝖽 𝖤𝖿𝖿𝗂𝖼𝗂𝖾𝗇𝗍 𝖯𝖾𝗋𝖿𝗈𝗋𝗆𝖺𝗇𝖼𝖾 𝖥𝗈𝗋 𝖠𝗎𝗍𝗈𝗆𝖺𝗍𝖾𝖽 𝖳𝖺𝗌𝗄𝗌 𝖠𝗇𝖽 𝖢𝗈𝗆𝗆𝖺𝗇𝖽𝗌. 𝖭𝗈𝗐 𝖸𝗈𝗎 𝖢𝖺𝗇 𝖦𝖾𝗍 𝖬𝗒 𝖲𝗒𝗌𝗍𝖾𝗆 𝖨𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇 𝖳𝗒𝗉𝖾 .𝗌𝗒𝗌𝗍𝖾𝗆 𝖠𝗇𝖽 𝖲𝖾𝗇𝖽 𝖨𝗍. 


> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ꜱɪᴍᴘʟᴇ ᴡᴀ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: 'B H A S H I  M D  V 2  🧚🏻‍♀️',
          newsletterJid: "120363333519565664@newsletter",
          },
          externalAdReply: {
              title: `I'm Alive Now 🧚🏻‍♀️`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://scontent.xx.fbcdn.net/v/t39.30808-6/462774155_1070176318063260_7885626192293860753_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFHpxIrQXPw8SXlfe8Xb44sGU2VrzO6Mf4ZTZWvM7ox_sS4NyMz9II2k-BaztFb9Oh-DIGAgHLjSEs4X-LJd0w2&_nc_ohc=wQaDghBEzEoQ7kNvgHzAcrQ&_nc_ht=scontent.xx&_nc_gid=AhAHYpsLDmGLORxK9w4HVMX&oh=00_AYDSR96jMuAwO4oMUzD1HjWYKZdLRKzTQ0-K3Kkn85vCxg&oe=671019B4`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: false
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });

















cmd({
      pattern: "menu",
      alias: ["panel"],
      desc: "Get Bot Menu",
      category: "main",
      react: "📁",
      filename: __filename
    }, async (conn, mek, m, { from, reply }) => {
      try {
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*This is Bhashi MD Version 2.0.0 Menu is Not Updated.*
          
*You Can Enjoi Version 1.0.0*
*Github Link :* https://github.com/vishwamihiranga/BHASHI-MD


> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ꜱɪᴍᴘʟᴇ ᴡᴀ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `SAHAS-MD Menu List`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://files.catbox.moe/de82e3.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: false
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });
