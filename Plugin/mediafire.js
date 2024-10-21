//==============   MEDIAFIRE DL   ==============//

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
    pattern: "mediafire",
    alias: ["mfire"],
    react: '🎗️',
    desc: "Download Google Mediafire files",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, q, pushname }) => {
    if (!q || !q.startsWith("https://")) {
        return conn.sendMessage(from, { text: "𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖦𝖽𝗋𝗂𝗏𝖾 𝖴𝗋𝗅` ❗" }, { quoted: mek });
    }

    const data = await fetchJson(`${baseUrl}/api/mediafiredl?url=${q}`);
    const fileInfo = data.data || data;
                                                  // Send the song info with context
                                                  const downloadingMsg = await conn.sendMessage(
                                                      from,
                                                      {
                                                          text: `*乂 SAHAS-MD MEDIAFIRE DOWNLOADER*

📁 𝖭𝖺𝗆𝖾 :${data.data.name}
🖇️ 𝖡𝖺𝗌𝖾 𝖴𝗋𝗅 : www.mediafire.com
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`,
                                                          contextInfo: {
                                                              forwardingScore: 999,
                                                              isForwarded: true,
                                                              forwardedNewsletterMessageInfo: {
                                                                  newsletterName: "👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ",
                                                                  newsletterJid: "120363296605464049@newsletter",
                                                              },
                                                              externalAdReply: {
                                                                  title: `SAHAS-MD Gdrive Downloader`,
                                                                  body: `${data.data.name || `Undifended`} : Powerd By SAHAS-MD Gdrive Information Search Engine`,
                                                                  thumbnailUrl: `https://files.catbox.moe/de82e3.jpg`,
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

        const data = await fetchJson(`${baseUrl}/api/mediafiredl?url=${q}`);
        const fileInfo = data.data || data;

        // Check if file size is available and handle accordingly
        const fileSize = fileInfo.fileSize || 0; // Default to 0 if fileSize is not present
        const MAX_DOWNLOAD_SIZE = 500 * 1024 * 1024; // 500 MB

        if (fileSize > MAX_DOWNLOAD_SIZE) {
            await conn.sendMessage(from, { text: `⚠️ The file size is too large. Maximum allowed size is 500 MB. The provided file is ${formatFileSize(fileSize)}.` }, { quoted: mek });
            return await conn.sendMessage(from, { react: { text: "⚠️", key: mek.key } });
        }

        const caption = `> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`;
        await conn.sendMessage(from, { 
        document: { url: data.data.link_1 }, fileName: data.data.name, mimetype: data.data.file_type, caption: capation }, { quoted: mek })                                                      

    



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
