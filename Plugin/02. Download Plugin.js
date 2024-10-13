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

            let desc = `乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖲 𝖮 𝖭 𝖦  𝖣 𝖮 𝖶 𝖭  𝖮 𝖯 𝖳 𝖨 𝖮 𝖭

1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖠𝗎𝖽𝗂𝗈 𝖳𝗒𝗉𝖾.
2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖣𝗈𝖼𝗎𝗆𝖾𝗇𝗍 𝖳𝗒𝗉𝖾.
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ꜱɪᴍᴘʟᴇ ᴡᴀ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`;

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
                            body: data.title,
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
> ꜱɪᴍᴘʟᴇ ᴡᴀ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`,
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
> ꜱɪᴍᴘʟᴇ ᴡᴀ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`,
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
            reply(`An Error Occurred: ${e.message}`);
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

            let desc = `乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖵 𝖨 𝖣 𝖤 𝖮  𝖣 𝖮 𝖶 𝖭  𝖮 𝖯 𝖳 𝖨 𝖮 𝖭

*1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 :* 𝖵𝗂𝖽𝖾𝗈 𝖳𝗒𝗉𝖾.
*2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 :* 𝖣𝗈𝖼𝗎𝗆𝖾𝗇𝗍 𝖳𝗒𝗉𝖾.
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ꜱɪᴍᴘʟᴇ ᴡᴀ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`;

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
                            body: data.title,
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
                                    caption: `> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ꜱɪᴍᴘʟᴇ ᴡᴀ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`,
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
                                    fileName: `ʙʜᴀꜱʜɪ v2.0.0 | ${data.title}.mp3`,
                                    caption: `> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ꜱɪᴍᴘʟᴇ ᴡᴀ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`,
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
            reply(`An Error Occurred: ${e.message}`);
        }
    },
);

//==============   NOT WORKING   ==============//

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
                    const videoMessage = `乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖥 𝖡  𝖣 𝖮 𝖶 𝖭  𝖮 𝖯 𝖳 𝖨 𝖮 𝖭

1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖧𝖣 𝖵𝗂𝖽𝖾𝗈 𝖳𝗒𝗉𝖾.
2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖲𝖣 𝖵𝗂𝖽𝖾𝗈 𝖳𝗒𝗉𝖾.
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> ʙʜᴀꜱʜɪ ᴍᴅ v2.0.0
> ꜱɪᴍᴘʟᴇ ᴡᴀ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ʙʜᴀꜱʜɪ ᴄᴏᴅᴇʀꜱ ㋛`;

                

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
                                          body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
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
                                        caption: `‎ ‎𝖧 𝖣  𝖵 𝖨 𝖣 𝖤 𝖮  *( 4 8 0* 𝗉 *)*
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
                                        caption: `‎ ‎𝖲 𝖣  𝖵 𝖨 𝖣 𝖤 𝖮  *( 7 2 0* 𝗉 *)*
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
                `${e.message}`,
            );
        }
    },
);

//==============   TIK TOK DL   ==============//
