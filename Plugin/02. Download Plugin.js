// 01. Song DL |       0006
// 02. Video DL |      0140



//==============   SONG DL   ==============//

const { cmd, commands } = require('../command');
const fg = require('api-dylux');
const yts = require('yt-search');
const pdfUrl = 'https://i.ibb.co/2PLgSdj/Picsart-24-09-16-17-49-35-655.jpg';

// Function to extract the video ID from youtu.be or YouTube links
function extractYouTubeId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

// Function to convert any YouTube URL to a full YouTube watch URL
function convertYouTubeLink(q) {
    const videoId = extractYouTubeId(q);
    if (videoId) {
        return "https://www.youtube.com/watch?v=${videoId}";
    }
    return q;
}

cmd({
    pattern: "song",
    desc: "To download songs.",
    react: "🎧",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply(`𝖴𝗇𝖽𝗂𝖿𝖾𝗇𝖽𝖾𝖽. ❗
𝖯𝗅𝖾𝖺𝗌𝖾 𝖤𝗇𝗍𝖾𝗋 𝖵𝖺𝗅𝗂𝖽 𝖳𝖺𝗍𝗂𝗅𝖾 𝖮𝗋 𝖴𝗋𝗅. ❗`);

        q = convertYouTubeLink(q);
        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖲 𝖮 𝖭 𝖦  𝖣 𝖫  𝖮 𝖯 𝖳 𝖨 𝖮 𝖭
        
*1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 :* 𝖠𝗎𝖽𝗂𝗈 𝖳𝗒𝗉𝖾.
*2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 :* 𝖣𝗈𝖼𝗎𝗆𝖾𝗇𝗍 𝖳𝗒𝗉𝖾.


> ʙʜᴀꜱʜɪ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪᴛʜᴀ ᴀɴᴅ ᴠɪꜱʜᴀᴡᴀ ㋛`;

        // Send the song info with context
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
                title: data.title,
                body: data.author.name,
                thumbnailUrl: data.thumbnail,
                sourceUrl: data.url,
                mediaType: 1,
                renderLargerThumbnail: false
                }
                    }
                }, { quoted: mek });

            

        const messageID = sentMsg.key.id; // Save the message ID for later reference

                // Listen for the user's response
                conn.ev.on('messages.upsert', async (messageUpdate) => {
                    const mek = messageUpdate.messages[0];
                    if (!mek.message) return;
                    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
                    const from = mek.key.remoteJid;
                    const sender = mek.key.participant || mek.key.remoteJid;

                    // Check if the message is a reply to the previously sent message
                    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

                    if (isReplyToSentMsg) {
                        // React to the user's reply (the "1" or "2" message)
                        await conn.sendMessage(from, { react: { text: '📥', key: mek.key } });

                        if (messageType === '1' || messageType === '2') {
                            const down = await fg.yta(url);
                            const downloadUrl = down.dl_url;

                            // React to the upload (sending the file)
                            await conn.sendMessage(from, { react: { text: '📤', key: mek.key } });

                            if (messageType === '1') {
                                // Handle option 1 (Audio File)
                                await conn.sendMessage(from, { audio: { url: downloadUrl }, mimetype: "audio/mpeg", caption: `> ʙʜᴀꜱʜɪ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪᴛʜᴀ ᴀɴᴅ ᴠɪꜱʜᴀᴡᴀ ㋛` }, { quoted: mek });
                            } else if (messageType === '2') {
                                // Handle option 2 (Document File)
                                await conn.sendMessage(from, {
                                    document: { url: downloadUrl },
                                    mimetype: "audio/mpeg",
                                    fileName: `ʙʜᴀꜱʜɪ v2.0.0 | ${data.title}.mp3`,
                                    caption: `> ʙʜᴀꜱʜɪ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪᴛʜᴀ ᴀɴᴅ ᴠɪꜱʜᴀᴡᴀ ㋛`
                                }, { quoted: mek });
                            }

                            // React to the successful completion of the task
                            await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });

                            console.log("Response sent successfully");
                        } else {
                            // Handle invalid input (not 1 or 2)
                            await conn.sendMessage(from, { react: { text: '❓', key: mek.key } });
                            reply(`𝖴𝗇𝖽𝗂𝖿𝖾𝗇𝖽𝖾𝖽. ❗
𝖯𝗅𝖾𝖺𝗌𝖾 𝖤𝗇𝗍𝖾𝗋 𝖵𝖺𝗅𝗂𝖽 𝖮𝗉𝗍𝗂𝗈𝗇. ❗`);
                        }
                    }
                });

} catch (e) {
        console.log(e);
        reply(`An Error Occurred: ${e.message}`);
    }
});


//==============   VIDEO DL   ==============//

        cmd({
            pattern: "video",
            desc: "To download videos.",
            react: "🎬",
            category: "download",
            filename: __filename
        },
        async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
            try {
                if (!q) return reply(`𝖴𝗇𝖽𝗂𝖿𝖾𝗇𝖽𝖾𝖽. ❗
𝖯𝗅𝖾𝖺𝗌𝖾 𝖤𝗇𝗍𝖾𝗋 𝖵𝖺𝗅𝗂𝖽 𝖳𝖺𝗍𝗂𝗅𝖾 𝖮𝗋 𝖴𝗋𝗅. ❗`);

                q = convertYouTubeLink(q);
                const search = await yts(q);
                const data = search.videos[0];
                const url = data.url;

                let desc = `乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖵 𝖨 𝖣 𝖤 𝖮  𝖣 𝖫  𝖮 𝖯 𝖳 𝖨 𝖮 𝖭
        
*1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 :* 𝖵𝗂𝖽𝖾𝗈 𝖳𝗒𝗉𝖾.
*2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 :* 𝖣𝗈𝖼𝗎𝗆𝖾𝗇𝗍 𝖳𝗒𝗉𝖾.


> ʙʜᴀꜱʜɪ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪᴛʜᴀ ᴀɴᴅ ᴠɪꜱʜᴀᴡᴀ ㋛`;

                // Send the song info with context
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
                        title: data.title,
                        body: data.author.name,
                        thumbnailUrl: data.thumbnail,
                        sourceUrl: data.url,
                        mediaType: 1,
                        renderLargerThumbnail: false
                        }
                            }
                        }, { quoted: mek });

                const messageID = sentMsg.key.id; // Save the message ID for later reference

                // Listen for the user's response
                conn.ev.on('messages.upsert', async (messageUpdate) => {
                    const mek = messageUpdate.messages[0];
                    if (!mek.message) return;
                    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
                    const from = mek.key.remoteJid;
                    const sender = mek.key.participant || mek.key.remoteJid;

                    // Check if the message is a reply to the previously sent message
                    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

                    if (isReplyToSentMsg) {
                        // React to the user's reply (the "1" or "2" message)
                        await conn.sendMessage(from, { react: { text: '📥', key: mek.key } });

                        if (messageType === '1' || messageType === '2') {
                            const down = await fg.yta(url);
                            const downloadUrl = down.dl_url;

                            // React to the upload (sending the file)
                            await conn.sendMessage(from, { react: { text: '📤', key: mek.key } });

                            if (messageType === '1') {
                                // Handle option 1 (Audio File)
                                await conn.sendMessage(from, { video: { url: downloadUrl }, mimetype: "video/mp4", caption: `> ʙʜᴀꜱʜɪ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪᴛʜᴀ ᴀɴᴅ ᴠɪꜱʜᴀᴡᴀ ㋛` }, { quoted: mek });
                            } else if (messageType === '2') {
                                // Handle option 2 (Document File)
                                await conn.sendMessage(from, {
                                    document: { url: downloadUrl },
                                    mimetype: "video/mp4",
                                    fileName: `ʙʜᴀꜱʜɪ v2.0.0 | ${data.title}.mp4`,
                                    caption: `> ʙʜᴀꜱʜɪ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪᴛʜᴀ ᴀɴᴅ ᴠɪꜱʜᴀᴡᴀ ㋛`
                                }, { quoted: mek });
                            }

                            // React to the successful completion of the task
                            await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });

                            console.log("Response sent successfully");
                        } else {
                            // Handle invalid input (not 1 or 2)
                            await conn.sendMessage(from, { react: { text: '❓', key: mek.key } });
                            reply(`𝖴𝗇𝖽𝗂𝖿𝖾𝗇𝖽𝖾𝖽. ❗
𝖯𝗅𝖾𝖺𝗌𝖾 𝖤𝗇𝗍𝖾𝗋 𝖵𝖺𝗅𝗂𝖽 𝖮𝗉𝗍𝗂𝗈𝗇. ❗`);
}
                    }
                });

} catch (e) {
        console.log(e);
        reply(`An Error Occurred: ${e.message}`);
    }
});
