// 01. Song DL |       0006
// 02. Video DL |      0140

const axios = require("axios");
const fs = require("fs").promises; // Use fs.promises for async file operations
const whois = require("whois");
const { tiktokdl } = require("tiktokdl");
const path = require("path");
const config = require("../config");
const zxcvbn = require("zxcvbn");
const crypto = require("crypto");
const dyluxApi = require("api-dylux");
const cheerio = require("cheerio");
const https = require("https");
const { pipeline } = require("stream");
const { promisify } = require("util");
const streamPipeline = promisify(pipeline);
const NineGag = require("9gag");
const Scraper = NineGag.Scraper;
const { Buffer } = require("buffer");
const os = require("os");
const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    fetchJson,
    runtime,
    sleep,
} = require("../DATABASE/functions");
const mysteryItems = [
    "A shiny new toy!",
    "A magical potion!",
    "A golden coin!",
    "A rare gem!",
    "An ancient scroll!",
    "A secret message!",
    "A beautiful flower!",
    "A cute plushie!",
    "A special key!",
    "A futuristic gadget!",
];
const morseCodeMap = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    " ": "/",
};
const math = require("mathjs");
const PASTEBIN_API_KEY = config.PASTEBIN_API_KEY;
const dns = require("dns");
const {
    Sticker,
    createSticker,
    StickerTypes,
} = require("wa-sticker-formatter");
const gsmarena = require("gsmarena-api");
const {
    checkAccess,
    isPremiumUser,
    blacklistedJIDs,
    premiumJIDs,
    dataLoaded,
} = require("../DATABASE/accessControl");
const mono = "```";
const sai = "6467ad0b29";
const fetch = require("node-fetch");
const API_URL = "https://api.polygon.io/v2/reference/news";
const API_KEY = "Y4iTYoJANwppB8I3Bm4QVWdV5oXlvc45";
const API2_URL = "https://api.polygon.io/v1/marketstatus/now";
const CRIC_URL = "https://api.cricapi.com/v1/currentMatches";
const CRIC_KEY = "f68d1cb5-a9c9-47c5-8fcd-fbfe52bace78";
const API_BASE_URL = "https://api.memegen.link";
const Esana = require("@sl-code-lords/esana-news");
const api = new Esana();
const { IOSNEWS } = require("ios-news");
const apisg = "https://prabath-md-api.up.railway.app/api/";

//==============   SONG DL   ==============//

const { cmd, commands } = require("../command");
const fg = require("api-dylux");
const yts = require("yt-search");
const pdfUrl = "https://i.ibb.co/2PLgSdj/Picsart-24-09-16-17-49-35-655.jpg";

// Function to extract the video ID from youtu.be or YouTube links
function extractYouTubeId(url) {
    const regex =
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
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

cmd(
    {
        pattern: "song",
        desc: "To download songs.",
        react: "🎧",
        category: "download",
        filename: __filename,
    },
    async (
        conn,
        mek,
        m,
        {
            from,
            quoted,
            body,
            isCmd,
            command,
            args,
            q,
            isGroup,
            sender,
            senderNumber,
            botNumber2,
            botNumber,
            pushname,
            isMe,
            isOwner,
            groupMetadata,
            groupName,
            participants,
            groupAdmins,
            isBotAdmins,
            isAdmins,
            reply,
        },
    ) => {
        try {
            if (!q)
                return reply("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖲𝗈𝗇𝗀 𝖳𝖺𝗍𝗂𝗅𝖾 𝖮𝗋 𝖴𝗋𝗅` ❗");

            q = q;
            const search = await yts(q);
            const data = search.videos[0];
            const url = data.url;

            let desc = `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖲 𝖮 𝖭 𝖦  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 𝖢𝗁𝖺𝗇𝖾𝗅 : ${data.author.name}
⏰ 𝖣𝗎𝗋𝖺𝗍𝗂𝗈𝗇 : ${data.timestamp}
📆 𝖴𝗉𝗅𝗈𝖺𝖽𝖾𝖽 𝖮𝗇 : ${data.ago}
  
乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖣 𝖮 𝖶 𝖭 𝖫 𝖮 𝖠 𝖣  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖠𝗎𝖽𝗂𝗈 𝖳𝗒𝗉𝖾.
2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖣𝗈𝖼𝗎𝗆𝖾𝗇𝗍 𝖳𝗒𝗉𝖾.
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`;

            // Send the song info with context
            const sentMsg = await conn.sendMessage(
                from,
                {
                    text: desc,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: false,
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "B H A S H I  M D  V 2  🧚🏻‍♀️",
                            newsletterJid: "120363333519565664@newsletter",
                        },
                        externalAdReply: {
                            title: `Bhashi Song Downloader`,
                            body: `${data.title} : Powerd By Bhashi Song Information Search Engine`,
                            thumbnailUrl: data.thumbnail,
                            sourceUrl: ``,
                            mediaType: 1,
                            renderLargerThumbnail: false,
                        },
                    },
                },
                { quoted: mek },
            );

            const messageID = sentMsg.key.id; // Save the message ID for later reference

            // Listen for the user's response
            conn.ev.on("messages.upsert", async (messageUpdate) => {
                const mek = messageUpdate.messages[0];
                if (!mek.message) return;
                const messageType =
                    mek.message.conversation ||
                    mek.message.extendedTextMessage?.text;
                const from = mek.key.remoteJid;
                const sender = mek.key.participant || mek.key.remoteJid;

                // Check if the message is a reply to the previously sent message
                const isReplyToSentMsg =
                    mek.message.extendedTextMessage &&
                    mek.message.extendedTextMessage.contextInfo.stanzaId ===
                        messageID;

                if (isReplyToSentMsg) {
                    // React to the user's reply (the "1" or "2" message)
                    await conn.sendMessage(from, {
                        react: { text: "", key: mek.key },
                    });

                    if (messageType === "1" || messageType === "2") {
                        const down = await fg.yta(url);
                        const downloadUrl = down.dl_url;

                        // React to the upload (sending the file)
                        await conn.sendMessage(from, {
                            react: { text: "", key: mek.key },
                        });

                        if (messageType === "1") {
                            // Handle option 1 (Audio File)
                            await conn.sendMessage(
                                from,
                                {
                                    audio: { url: downloadUrl },
                                    mimetype: "audio/mpeg",
                                    caption: `> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`,
                                },
                                { quoted: mek },
                            );
                        } else if (messageType === "2") {
                            // Handle option 2 (Document File)
                            await conn.sendMessage(
                                from,
                                {
                                    document: { url: downloadUrl },
                                    mimetype: "audio/mpeg",
                                    fileName: `ʙʜᴀꜱʜɪ v2.0.0 | ${data.title}.mp3`,
                                    caption: `> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`,
                                },
                                { quoted: mek },
                            );
                        }

                        // React to the successful completion of the task
                        await conn.sendMessage(from, {
                            react: { text: "", key: mek.key },
                        });

                        console.log("Response sent successfully");
                    } else {
                        // Handle invalid input (not 1 or 2)
                        await conn.sendMessage(from, {
                            react: { text: "❓", key: mek.key },
                        });
                        reply("𝖯𝗅𝖾𝖺𝗌𝖾 𝖤𝗇𝗍𝖾𝗋 `𝖵𝖺𝗅𝗂𝖽 𝖮𝗉𝗍𝗂𝗈𝗇 1 𝖮𝗋 2` ❗");
                    }
                }
            });
        } catch (e) {
            console.log(e);
            reply("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖲𝗈𝗇𝗀 𝖳𝖺𝗍𝗂𝗅𝖾 𝖮𝗋 𝖴𝗋𝗅` ❗");
        }
    },
);

//==============   VIDEO DL   ==============//

cmd(
    {
        pattern: "video",
        desc: "To download songs.",
        react: "🎬",
        category: "download",
        filename: __filename,
    },
    async (
        conn,
        mek,
        m,
        {
            from,
            quoted,
            body,
            isCmd,
            command,
            args,
            q,
            isGroup,
            sender,
            senderNumber,
            botNumber2,
            botNumber,
            pushname,
            isMe,
            isOwner,
            groupMetadata,
            groupName,
            participants,
            groupAdmins,
            isBotAdmins,
            isAdmins,
            reply,
        },
    ) => {
        try {
            if (!q)
                return reply("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖵𝗂𝖽𝖾𝗈 𝖳𝖺𝗍𝗂𝗅𝖾 𝖮𝗋 𝖴𝗋𝗅` ❗");

            q = q;
            const search = await yts(q);
            const data = search.videos[0];
            const url = data.url;

            let desc = `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖵 𝖨 𝖣 𝖤 𝖮  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 𝖢𝗁𝖺𝗇𝖾𝗅 : ${data.author.name}
⏰ 𝖣𝗎𝗋𝖺𝗍𝗂𝗈𝗇 : ${data.timestamp}
📆 𝖴𝗉𝗅𝗈𝖺𝖽𝖾𝖽 𝖮𝗇 : ${data.ago}


乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖣 𝖮 𝖶 𝖭 𝖫 𝖮 𝖠 𝖣  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖵𝗂𝖽𝖾𝗈 𝖳𝗒𝗉𝖾.
2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖣𝗈𝖼𝗎𝗆𝖾𝗇𝗍 𝖳𝗒𝗉𝖾.
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`;

            // Send the song info with context
            const sentMsg = await conn.sendMessage(
                from,
                {
                    text: desc,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: false,
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "B H A S H I  M D  V 2  🧚🏻‍♀️",
                            newsletterJid: "120363333519565664@newsletter",
                        },
                        externalAdReply: {
                            title: `Bhashi Video Downloader`,
                            body: `${data.title} : Powerd By Bhashi Song Information Search Engine`,
                            thumbnailUrl: data.thumbnail,
                            sourceUrl: ``,
                            mediaType: 1,
                            renderLargerThumbnail: false,
                        },
                    },
                },
                { quoted: mek },
            );

            const messageID = sentMsg.key.id; // Save the message ID for later reference

            // Listen for the user's response
            conn.ev.on("messages.upsert", async (messageUpdate) => {
                const mek = messageUpdate.messages[0];
                if (!mek.message) return;
                const messageType =
                    mek.message.conversation ||
                    mek.message.extendedTextMessage?.text;
                const from = mek.key.remoteJid;
                const sender = mek.key.participant || mek.key.remoteJid;

                // Check if the message is a reply to the previously sent message
                const isReplyToSentMsg =
                    mek.message.extendedTextMessage &&
                    mek.message.extendedTextMessage.contextInfo.stanzaId ===
                        messageID;

                if (isReplyToSentMsg) {
                    // React to the user's reply (the "1" or "2" message)
                    await conn.sendMessage(from, {
                        react: { text: "", key: mek.key },
                    });

                    if (messageType === "1" || messageType === "2") {
                        const down = await fg.ytv(url);
                        const downloadUrl = down.dl_url;

                        // React to the upload (sending the file)
                        await conn.sendMessage(from, {
                            react: { text: "", key: mek.key },
                        });

                        if (messageType === "1") {
                            // Handle option 1 (Audio File)
                            await conn.sendMessage(
                                from,
                                {
                                    video: { url: downloadUrl },
                                    mimetype: "video/mp4",
                                    caption: `‎ ‎𝖸 𝖳  𝖲 𝖣  𝖵 𝖨 𝖣 𝖤 𝖮  ( 4 8 0 𝗉  )
                            ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`,
                                },
                                { quoted: mek },
                            );
                        } else if (messageType === "2") {
                            // Handle option 2 (Document File)
                            await conn.sendMessage(
                                from,
                                {
                                    document: { url: downloadUrl },
                                    mimetype: "video/mp4",
                                    fileName: `ʙʜᴀꜱʜɪ v2.0.0 | ${data.title}.mp4`,
                                    caption: `> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`,
                                },
                                { quoted: mek },
                            );
                        }

                        // React to the successful completion of the task
                        await conn.sendMessage(from, {
                            react: { text: "", key: mek.key },
                        });

                        console.log("Response sent successfully");
                    } else {
                        // Handle invalid input (not 1 or 2)
                        await conn.sendMessage(from, {
                            react: { text: "❓", key: mek.key },
                        });
                        reply("𝖯𝗅𝖾𝖺𝗌𝖾 𝖤𝗇𝗍𝖾𝗋 `𝖵𝖺𝗅𝗂𝖽 𝖮𝗉𝗍𝗂𝗈𝗇 1 𝖮𝗋 2` ❗");
                    }
                }
            });
        } catch (e) {
            console.log(e);
            reply("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖵𝗂𝖽𝖾𝗈 𝖳𝖺𝗍𝗂𝗅𝖾 𝖮𝗋 𝖴𝗋𝗅` ❗");
        }
    },
);


//==============   FACEBOOK DL   ==============//

const baseUrl = "https://prabath-md-api.up.railway.app";

async function socialMediaDownload(url) {
    let endpoint;
    if (url.includes("facebook.com") || url.includes("fb.watch")) {
        endpoint = `${baseUrl}/api/fdown?url=${encodeURIComponent(url)}`;
        } else if (url.includes("mediafire.com")) {
            endpoint = `${baseUrl}/api/mediafiredl?url=${encodeURIComponent(url)}`;
        } else if (url.includes("twitter.com")) {
            endpoint = `${baseUrl}/api/twitter/dl?url=${encodeURIComponent(url)}`;
        } else {
        throw new Error("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄 𝖴𝗋𝗅` ❗");
    }
    const response = await axios.get(endpoint);
    return response.data;
}

cmd(
    {
        pattern: "fb",
        alias: ["facebook"],
        react: "🔎",
        desc: "Download Facebook videos",
        category: "download",
        use: ".fb <facebook link>",
        filename: __filename,
    },
    async (
        conn,
        mek,
        m,
        { from, quoted, args, q, isGroup, sender, pushname, reply },
    ) => {
        try {
            const senderNumber = m.sender;
            const isGroup = m.isGroup || false;

            // Check access permissions
            if (!checkAccess(senderNumber, isGroup)) {
                if (blacklistedJIDs.includes(senderNumber)) {
                    return reply("*🚫 You are blacklisted. Access denied.*");
                } else {
                    return reply(
                        "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*",
                    );
                }
            }

            if (!q)
                return await reply("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄 𝖴𝗋𝗅` ❗");


            const response = await socialMediaDownload(q);

            if (response.status === "success ✅" && response.data) {
                const { hd, sd, audio } = response.data;

                if (hd || sd) {

                    // Prompt user to select HD or SD
                    const videoMessage = `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖥 𝖡  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 𝖳𝖺𝗍𝗂𝗅𝖾 : Undifended
🖇️ 𝖡𝖺𝗌𝖾 𝖴𝗋𝗅 : www.facebook.com


乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖣 𝖮 𝖶 𝖭 𝖫 𝖮 𝖠 𝖣  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖵𝗂𝖽𝖾𝗈 𝖧𝖣 𝖳𝗒𝗉𝖾.
2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖵𝗂𝖽𝖾𝗈 𝖲𝖣 𝖳𝗒𝗉𝖾.
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`;



                    const sentMessage = await conn.sendMessage(
                        from,
                        {
                            text: videoMessage,
                            contextInfo: {
                                forwardingScore: 999,
                                isForwarded: false,
                                forwardedNewsletterMessageInfo: {
                                    newsletterName: "B H A S H I  M D  V 2  🧚🏻‍♀️",
                                    newsletterJid:
                                        "120363333519565664@newsletter",
                                },
                                    externalAdReply: {
                                          title: `Bhashi FB Downloader`,
                                          body: `Undifended : Powerd By Bhashi Apk Information Search Engine`,
                                          thumbnailUrl: `https://scontent.xx.fbcdn.net/v/t39.30808-6/462764198_1069447598136132_2931618262689600288_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHF_DdTFVKCMk4o9b4moBmBfO2n9KL2AN187af0ovYA3S3rE6-rviTKj0Xs3E2cDLPFIUL9Qempb874fyKOG9SS&_nc_ohc=mhCTkQH4HkoQ7kNvgEIPxAj&_nc_ht=scontent.xx&_nc_gid=AdAH9nyr7KupSEtPvuZ6p5q&oh=00_AYDDfmktwQmVzMPqB5v7E0rmaz0Jy1Vo27yDRm1BzgAURg&oe=670ED604`,

                                          sourceUrl:  ``,
                                          mediaType: 1,
                                          renderLargerThumbnail: false
                                },
                            },
                        },
                        { quoted: mek },
                    );

                    conn.ev.on("messages.upsert", async (messageUpsert) => {
                        const msg = messageUpsert.messages[0];
                        if (!msg.message || !msg.message.extendedTextMessage)
                            return;

                        const userReply =
                            msg.message.extendedTextMessage.text.trim();
                        const messageContext =
                            msg.message.extendedTextMessage.contextInfo;

                        if (
                            messageContext &&
                            messageContext.stanzaId === sentMessage.key.id
                        ) {
                            // Send the selected video quality
                            if (userReply === "1" && hd) {
                                await conn.sendMessage( 
                                    from,
                                    {

                                        video: { url: hd },
                                        caption: `‎ ‎𝖥 𝖡  𝖧 𝖣  𝖵 𝖨 𝖣 𝖤 𝖮  ( 7 2 0 𝗉 )
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`,

                                    },
                                    { quoted: mek },
                                );
                            } else if (userReply === "2" && sd) {
                                await conn.sendMessage(
                                    from,
                                    {
                                        video: { url: sd },
                                        caption: `‎ ‎𝖥 𝖡  𝖲 𝖣  𝖵 𝖨 𝖣 𝖤 𝖮  ( 4 8 0 𝗉 )
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`,
                                    },
                                    { quoted: mek },





                                );
                            } else {
                                reply(
                                    "𝖯𝗅𝖾𝖺𝗌𝖾 𝖤𝗇𝗍𝖾𝗋 𝖵𝖺𝗅𝗂𝖽 𝖮𝗉𝗍𝗂𝗈𝗇 `1 𝖮𝗋 2` ❗",
                                );
                            }
                        }
                    });
                } else {
                    reply("No Video URL Found in the Response.");


                }
            } else {
                reply("Failed to Fetch Video Data.");
                }



        } catch (e) {
            console.error("Detailed Error:", e);
            reply(
                "𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄 𝖴𝗋𝗅` ❗",
            );
        }
    },
);


























//==============   TIK TOK DL   ==============//

cmd({
    pattern: "tt",
    alias: ["tiktok"],
    react: '🎵',
    desc: "Download TikTok videos",
    category: "download",
    use: '.tt <tiktok link>',
    filename: __filename
}, async (conn, mek, m, { from, args, reply, pushname }) => {
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

        // Get the TikTok URL from args
        const q = args.join(" ");
        if (!q) return await reply("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖳𝗂𝗄𝗍𝗈𝗄 𝖴𝗋𝗅` ❗");

        // Watermark message
        let wm = `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖳 𝖨 𝖪 𝖳 𝖮 𝖪  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 𝖳𝖺𝗍𝗂𝗅𝖾 : Undifended
🖇️ 𝖡𝖺𝗌𝖾 𝖴𝗋𝗅 : www.tiktok.com


乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖣 𝖮 𝖶 𝖭 𝖫 𝖮 𝖠 𝖣  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖵𝗂𝖽𝖾𝗈 𝖧𝖣 𝖳𝗒𝗉𝖾. ( 𝖶𝗂𝗍𝗁𝗈𝗎𝗍 𝖶𝖺𝗍𝖾𝗋𝗆𝖺𝗋𝗄 )
2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖠𝗎𝖽𝗂𝗈 𝖳𝗒𝗉𝖾.
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 
> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`;

        const sentMessage = await conn.sendMessage(
            from,
            {
                text: wm,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: false,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: "B H A S H I  M D  V 2  🧚🏻‍♀️",
                        newsletterJid:
                            "120363333519565664@newsletter",
                    },
                        externalAdReply: {
                              title: `Bhashi Tik Tok Downloader`,
                              body: `Undifended : Powerd By Bhashi Tiktok Information Search Engine`,
                              thumbnailUrl: `https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/348570787_801138717799708_4000097968399646220_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFVo3ExKnIkdIMrPA_un_HuEk2BiKbs4nESTYGIpuzicYhb7_P8-kYhfxc2j0FvSZ_qoE-he8h7cvy1JgbnqlrZ&_nc_ohc=nBzkctrHeFcQ7kNvgGcWRzd&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=AzVht253vu44kuofBwyas_z&oh=00_AYBQ3zecilTzgE1G1S4NXq5VcjDlLYw1PRzI5Wi8jVuAjw&oe=6711DE54`,

                              sourceUrl:  ``,
                              mediaType: 1,
                              renderLargerThumbnail: false
                    },
                    },
                        },
                        { quoted: mek },
                    );




        // Perform TikTok download using a hypothetical tiktokdl function
        let response = await tiktokdl(q);
        let { video, music } = response;

        // Send initial message with options



        // Listen for user's reply
        conn.ev.on("messages.upsert", async (messageUpsert) => {
            const msg = messageUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            // Check if the reply is to the previously sent prompt
            if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
                if (userReply === '1') {
                    // Send the video
                    await conn.sendMessage(from, { 
                        video: { url: video }, 
                        caption: `‎ ‎𝖳 𝖨 𝖪 𝖳 𝖮 𝖪  𝖧 𝖣  𝖵 𝖨 𝖣 𝖤 𝖮  ( 7 2 0 𝗉  )
                            ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`

                    }, { quoted: msg });
                } else if (userReply === '2') {
                    // Send the audio
                    await conn.sendMessage(from, { 
                        audio: { url: music }, 
                        mimetype: "audio/mpeg" 
                    }, { quoted: msg });
                } else {
                    await conn.sendMessage(from, { 
                        text: "𝖯𝗅𝖾𝖺𝗌𝖾 𝖤𝗇𝗍𝖾𝗋 𝖵𝖺𝗅𝗂𝖽 𝖮𝗉𝗍𝗂𝗈𝗇 `1 𝖮𝗋 2` ❗" 
                    }, { quoted: msg });
                }
            }
        });

        // Send a reaction

                    } catch (e) {
console.error("Error", e);
                    reply(
                        "𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖳𝗂𝗄𝗍𝗈𝗄 𝖴𝗋𝗅` ❗",

);
        }
    },
);





        




//==============   GDRIVE DL   ==============//

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Google Drive Downloader with size limit (e.g., 100MB limit)
const MAX_DOWNLOAD_SIZE = 500 * 1024 * 1024; // 100 MB

cmd({
    pattern: "gdrive",
    alias: ["googledrive"],
    react: '🎗️',
    desc: "Download Google Drive files",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, q, pushname }) => {
    if (!q || !q.startsWith("https://")) {
        return conn.sendMessage(from, { text: "𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖦𝖽𝗋𝗂𝗏𝖾 𝖴𝗋𝗅` ❗" }, { quoted: mek });
    }

    const data = await fetchJson(`${baseUrl}/api/gdrivedl?url=${encodeURIComponent(q)}`);
    const fileInfo = data.data || data;
                                                  // Send the song info with context
                                                  const downloadingMsg = await conn.sendMessage(
                                                      from,
                                                      {
                                                          text: `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖦 𝖣 𝖱 𝖨 𝖵 𝖤  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

📁 𝖥𝗂𝗅𝖾 𝖲𝗂𝗓𝖾 : ${fileInfo.fileSize}
🖇️ 𝖡𝖺𝗌𝖾 𝖴𝗋𝗅 : www.gdrive.com
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`,
                                                          contextInfo: {
                                                              forwardingScore: 999,
                                                              isForwarded: false,
                                                              forwardedNewsletterMessageInfo: {
                                                                  newsletterName: "B H A S H I  M D  V 2  🧚🏻‍♀️",
                                                                  newsletterJid: "120363333519565664@newsletter",
                                                              },
                                                              externalAdReply: {
                                                                  title: `Bhashi Gdrive Downloader`,
                                                                  body: `${fileInfo.fileName || fileInfo.title || `Undifended`} : Powerd By Bhashi Gdrive Information Search Engine`,
                                                                  thumbnailUrl: `https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/463015953_1071579474589611_6711394064225755201_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHSbKBeAwrlZZhwPktYS9CL0HE2HwPk2MbQcTYfA-TYxm4MsnyFIrqekTg-Qi64dnaAhSVS1JvKwoWZT9LTk7rN&_nc_ohc=w7f7ObhjbGgQ7kNvgFle47F&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=AEV-oItO4u1kBKqgS87-VBu&oh=00_AYClrCG_4lM7Ua3OBD9hzyHH4fI__jNkFv5DFCUCNhmxYQ&oe=6712948F`,
                                                                  sourceUrl: ``,
                                                                  mediaType: 1,
                                                                  renderLargerThumbnail: false, 
        


          },
          },
              },
              { quoted: mek },
          );
 
        
        

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

        const data = await fetchJson(`${baseUrl}/api/gdrivedl?url=${encodeURIComponent(q)}`);
        const fileInfo = data.data || data;

        // Check if file size is available and handle accordingly
        const fileSize = fileInfo.fileSize || 0; // Default to 0 if fileSize is not present
        const MAX_DOWNLOAD_SIZE = 500 * 1024 * 1024; // 500 MB

        if (fileSize > MAX_DOWNLOAD_SIZE) {
            await conn.sendMessage(from, { text: `⚠️ The file size is too large. Maximum allowed size is 500 MB. The provided file is ${formatFileSize(fileSize)}.` }, { quoted: mek });
            return await conn.sendMessage(from, { react: { text: "⚠️", key: mek.key } });
        }

        const caption = `> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`;
        await conn.sendMessage(from, { 
            document: { url: fileInfo.download || fileInfo.link || fileInfo.url }, 
            fileName: fileInfo.fileName || fileInfo.title, 
            mimetype: fileInfo.mimeType || fileInfo.file_type,
            caption: caption
        }, { quoted: mek });

    



        await conn.sendMessage(from, { react: { text: "✅", key: mek.key } });
                                    
    } catch (error) {
        console.error('❌ Error in Google Drive downloader:', error);
        const errorMessage = error.response && error.response.status === 404 
            ? '❌ Error: The requested file could not be found. Please check the URL and try again.'
            : `❌ An error occurred: ${error.message}`;


await conn.sendMessage(from, { text: errorMessage }, { quoted: mek });
        await conn.sendMessage(from, { react: { text: "❌", key: mek.key } });

 }
});















cmd({
    pattern: "apk",
    desc: "Fetch APK details and send APK file.",
    category: "apk",
    react: "🔎",
    filename: __filename
},
async (conn, mek, m, { from, reply, q, pushname }) => {
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

        if (!q) {
            return reply("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖠𝗉𝗉𝗅𝗂𝖼𝖺𝗍𝗂𝗈𝗇 𝖭𝖺𝗆𝖾` ❗");
        }

        const apkurl = `https://prabath-md-api.up.railway.app/api/apkdl?q=${q}&apikey=${sai}`;
        const response = await axios.get(apkurl);
        const data = response.data;

        if (!data || !data.data) {
            return reply("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖠𝗉𝗉𝗅𝗂𝖼𝖺𝗍𝗂𝗈𝗇 𝖭𝖺𝗆𝖾` ❗");
        }

        const apkData = data.data;
        const apkIcon = apkData.icon;
        const apkName = apkData.name;
        const apkPackage = apkData.package;
        const apkLastUpdate = apkData.lastup;
        const apkSize = apkData.size;
        const apkDownloadLink = apkData.dllink;

        await conn.sendMessage(from, {
            image: { url: apkIcon },





                text: `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖠 𝖯 𝖪  𝖣 𝖮 𝖶 𝖭 𝖫 𝖮 𝖠 𝖣 𝖤 𝖱

📁 𝖭𝖺𝗆𝖾 : ${apkName}
📻 𝖥𝗂𝗅𝖾 𝖲𝗂𝗓𝖾 : ${apkSize} MB
📆 𝖫𝖺𝗌𝗍 𝖴𝗉𝖽𝖺𝗍𝖾 : ${apkLastUpdate}
🖇️ 𝖡𝖺𝗌𝖾 𝖴𝗋𝗅 : www.playstore.com
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: false,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: "B H A S H I  M D  V 2  🧚🏻‍♀️",
                        newsletterJid: "120363333519565664@newsletter",
                    },
                    externalAdReply: {
                        title: `Bhashi Application Downloader`,
                        body: `${apkName} : Powerd By Bhashi Apk Information Search Engine`,
                        thumbnailUrl: apkData.icon,
                        sourceUrl: ``,
                        mediaType: 1,
                        renderLargerThumbnail: false,

        },
                },
            },
            { quoted: mek },
        );







        const filePath = path.join(__dirname, `${apkPackage}.apk`);

        const apkResponse = await axios({
            url: apkDownloadLink,
            method: 'GET',
            responseType: 'stream'
        });

        const writer = fs.createWriteStream(filePath);

        apkResponse.data.pipe(writer);

        writer.on('error', (err) => {
            console.error(`File write error: ${err.message}`);
            reply(`Error: ${err.message}`);
        });

        await new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });

        await conn.sendMessage(from, {
            document: { url: filePath },
            mimetype: 'application/vnd.android.package-archive',
            fileName: `${apkName}.apk`,
            caption: `ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ ㋛`,
            footer: 'ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ ㋛'
        }, { quoted: mek });

        fs.unlinkSync(filePath);

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
