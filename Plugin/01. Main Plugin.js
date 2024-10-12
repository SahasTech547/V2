
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
        
          
          let desc = `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖲 𝖸 𝖲 𝖳 𝖤 𝖬  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

*⏰ 𝖴𝗉𝗍𝗂𝗆𝖾 :* ${uptime}
*📻 𝖯𝗅𝖺𝗍𝖿𝗈𝗋𝗆 :* ${platformName}
*⚙️ 𝖱𝖺𝗆 𝖴𝗌𝖺𝗀𝖾 :* ${memoryUsage} MB / ${totalMemory} MB
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ꜱɪᴍᴘʟᴇ ᴡᴀ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`

       

          

          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
          newsletterName: 'B H A S H I  M D  V 2  🧚🏻‍♀️',
          newsletterJid: "120363333519565664@newsletter",
          },
          externalAdReply: {
              title: `Bhashi System Information`,
              body: ``,
              thumbnailUrl: `https://scontent.xx.fbcdn.net/v/t39.30808-6/462774155_1070176318063260_7885626192293860753_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFHpxIrQXPw8SXlfe8Xb44sGU2VrzO6Mf4ZTZWvM7ox_sS4NyMz9II2k-BaztFb9Oh-DIGAgHLjSEs4X-LJd0w2&_nc_ohc=wQaDghBEzEoQ7kNvgHzAcrQ&_nc_ht=scontent.xx&_nc_gid=AhAHYpsLDmGLORxK9w4HVMX&oh=00_AYDSR96jMuAwO4oMUzD1HjWYKZdLRKzTQ0-K3Kkn85vCxg&oe=671019B4`,
              sourceUrl: `https://www.whatsapp.com`,
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
