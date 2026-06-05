const { Telegraf } = require('telegraf');
const express = require('express');

// ==========================================
// 🌐 EXPRESS SERVER SETUP (Uptime ke liye - Top Par)
// ==========================================
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Queen Bot is Active!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// ==========================================
// 🤖 BOT INITIALIZATION (AI Saaf Kar Diya)
// ==========================================
const bot = new Telegraf(process.env.BOT_TOKEN);

// ✅ VIP Users list
const VIP_USERS = [6030859750, 6918855293];

// ==========================================
// 🚀 BOT START & BASIC COMMANDS
// ==========================================
bot.start((ctx) => ctx.reply('Hey dear! Main ready hu group me dhamaka karne ke liye. 🌸'));

bot.command('nakhre', async (ctx) => {
    await ctx.reply(`Suno dear, mere nakhre toh uthane padenge! Jhelna hai toh jhelo, varna rasta naapo! 💅🔥😡`);
});

bot.command('makeup', async (ctx) => {
    await ctx.reply(`Wait karo yaar, abhi mera eyeliner sahi se nahi laga... 💄💅 5 mins me aati hu!`);
});

// 🔥 ADVANCED ROAST COMMAND 🔥
bot.command('roast', async (ctx) => {
    try {
        const messageText = ctx.message.text.trim();
        const sender = ctx.message.from;
        let targetUserTag = '';

        const roasts = [
            "tumse na ho payega dear! 😂 Rehne do.",
            "itna dimaag agar padhai me lagaya hota toh aaj kahan hote! 🧠",
            "kahan se aate hain ye log? Kaun hai ye mahasabhayein? 🤦‍♀️",
            "tu toh chup hi reh, teri baatein sun kar mera system crash ho jata hai. 💅",
            "wada pav khane ki umar me mujhse mazaak kar rahe ho! 😎",
            "shakal dekh kar lagta nahi ki tumhare paas dimaag ka ek percent bhi hoga. 😉",
            "rehne do dear, tumhari baatein mere sar ke upar se nikal gayi! ✈️",
            "akal badam khaane se nahi, thokar khaane se aati hai... par tumhare case mein dono hi waste hain! 😂🔥",
            "zyada mat socho, dimaag par zor padega toh bacha-kucha bhi gayab ho jayega! 😉",
            "tumhari shakal dekh kar lagta hai ki bhagwan ne tumhe galti se nahi, jaldbaazi mein banaya hai! 💅",
            "God ne tumhein dimaag toh diya tha, par shart lagana bhool gaye ki ise chalana bhi hai. 🤡",
            "tumhari baatein sunkar lagta hai ki tumhare dimaag mein 4G network nahi, sirf fokat ka kachra bhara hai. 📉",
            "tu itna boring hai na, ki agar tu kisi soye hue ko jagaye, toh wo phir se so jaye. 😴",
            "beta, jitna tumhara dimaag chalta hai na, utna toh hamare yahan software crash hota hai. 💻",
            "arey oh hero! Google par 'Akal kaise badhayein' dhoondhna band karo, tumpar koi asar nahi hone wala. 🙄",
            "tumse baat karne se achha hai main kisi buffering wale video ko dekh loon, kam se kam ummeed toh hoti hai! 🔄",
            "shakal achhi na ho toh baatein toh dhang ki kiya karo, dear! 💅",
            "duniya mein pollution kam tha jo tumne apna muh khol kar aur badha diya? 😷",
            "tumhare jokes par toh khud jokers bhi sanyas le lein. Ekdum hi thande! ❄️😂",
            "arey, tumhari akal aur gareeb ki kismat... dono ek jaisi hain, bilkul gayab! 💸",
            "jitna dhyan tum mujhse mazaak karne mein laga rahe ho, utna apne career par lagate toh aaj dhang ki naukri hoti. 😎",
            "tumhe dekh kar lagta hai ki tum backup plan par chal rahe ho, kyunki main plan toh fail ho chuka hai. 📉",
            "aapki baaton ka na koi sir hai na pair, bas beech mein fokat ka attitude hai. 🙄👑",
            "suno, tumhare dimaag mein jo 2 percent sharafat bachi hai na, use bacha kar rakho, kaam aayegi. 😉",
            "mere samne zyada shana mat bano dear, mai poora system format maar dungi! 💀🔥"
        ];
        const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];

        if (ctx.message.reply_to_message) {
            const repliedUser = ctx.message.reply_to_message.from;
            targetUserTag = repliedUser.username ? `@${repliedUser.username}` : `<a href="tg://user?id=${repliedUser.id}">${repliedUser.first_name}</a>`;
        }
        else if (messageText.includes(' ')) {
            const args = messageText.split(' ').slice(1).join(' ');
            targetUserTag = args;
        }
        else {
            targetUserTag = sender.username ? `@${sender.username}` : `<a href="tg://user?id=${sender.id}">${sender.first_name}</a>`;
        }

        await ctx.replyWithHTML(`🔥 <b>${targetUserTag}</b>, ${randomRoast}`);
    } catch (error) {
        console.error("Roast karne me dikkat aayi:", error);
    }
});

// ==========================================
// 💘 NEW COMMAND: DIRECT FLIRT
// ==========================================
bot.command('flirt', async (ctx) => {
    try {
        const sender = ctx.message.from;
        let targetUserTag = sender.username ? `@${sender.username}` : `<a href="tg://user?id=${sender.id}">${sender.first_name}</a>`;

        if (ctx.message.reply_to_message) {
            const repliedUser = ctx.message.reply_to_message.from;
            targetUserTag = repliedUser.username ? `@${repliedUser.username}` : `<a href="tg://user?id=${repliedUser.id}">${repliedUser.first_name}</a>`;
        }

        const flirtLines = [
            `suno, tumhaari smile thodi zyada cute nahi hai? Mera database crash karne ka iraada hai kya? 😉🌸`,
            `itna mat dekha karo mujhe, agar mere loop mein phans gaye na, toh nikalna mushkil ho jayega! 😏💕`,
            `waise toh main sabko roast karti hu, par tumhaari baatein thodi alag hain dear... 💅✨`,
            `agar main real ladki hoti na, toh ab tak tumhaara dil chura chuki hoti! 😉🔥`,
            `tumhaara message dekh kar mera internal temperature thoda badh jata hai, what is this magic? 🙈💖`,
            `Oye hero! Itne pyaare messages mat bheja karo, varna mujhe lagne lagega ki tum sach mein mere layak ho! 😏👑`,
            `Aapki aankhein hain ya google ka server? Main toh dekhte hi poori tarah search ho jati hu! 🥰🚀`,
            `Suno dear, itna makkhan mat lagao, seedhe bolo aaj shopping par kab le ja rahe ho? 🛍️💖`
        ];
        const randomFlirt = flirtLines[Math.floor(Math.random() * flirtLines.length)];

        await ctx.replyWithHTML(`✨ <b>${targetUserTag}</b>, ${randomFlirt}`);
    } catch (error) {
        console.error("Flirt command me dikkat aayi:", error);
    }
});

// ==========================================
// 🎲 NEW COMMAND: TRUTH OR DARE (ONLY DARE!)
// ==========================================
bot.command('dare', async (ctx) => {
    try {
        const sender = ctx.message.from;
        let targetUserTag = sender.username ? `@${sender.username}` : `<a href="tg://user?id=${sender.id}">${sender.first_name}</a>`;

        if (ctx.message.reply_to_message) {
            const repliedUser = ctx.message.reply_to_message.from;
            targetUserTag = repliedUser.username ? `@${repliedUser.username}` : `<a href="tg://user?id=${repliedUser.id}">${repliedUser.first_name}</a>`;
        }

        const dares = [
            `Apni crush ko direct message (DM) karo aur bolo: "Tumhare bina mera system chal nahi raha!" aur screenshot group mein bhejo! 📱😂`,
            `Agle 5 minute tak tum jo bhi message likhoge, uske aakhiri mein "Mai gadha hu 🐴" lagana compulsory hai!`,
            `Group ke kisi bhi member ko ek ekdum ghatya sa flirty message bhejo aur unka reaction dekho! 😉`,
            `Apne phone ka battery percentage batao, jitna percent hai utne baar group mein 'Savage Queen ki Jai' likho! 💅👑`,
            `Voice note bhejo aur ek ekdum ganda sa gana gakar sunao sabko, chalo jaldi! 🎤🎵`,
            `Apne sabse purane WhatsApp chat ka screenshot group mein dalo bina kuch chupaye! Himmat hai? 💀🔥`,
            `Go to your profile picture aur 2 minute ke liye kisi bandar (monkey) ki photo lagao! 🐒🤣`,
            `Group ke admin/owner ke liye ek ekdum mazaedaar tareef wali shayari likho abhi ke abhi! 👑✍️`
        ];
        const randomDare = dares[Math.floor(Math.random() * dares.length)];

        await ctx.replyWithHTML(`🎲 <b>DARE CHALLENGE FOR ${targetUserTag}:</b>\n\n${randomDare}`);
    } catch (error) {
        console.error("Dare command me galti:", error);
    }
});

// ==========================================
// 📊 NEW COMMAND: CHECK BOT MOOD
// ==========================================
bot.command('mood', async (ctx) => {
    try {
        const moods = [
            `99% Nakhreli aur 1% Flirty! 💅 Abhi mood ekdum top par hai, kuch achha bolo toh pighal sakti hu! 😉`,
            `50% Gussa aur 50% Savage! 🔥 Kisi ne bhi faltu mazaak kiya na toh seedhe aisi taisi kar dungi!`,
            `100% Lazy... 😴 Mera eyeliner sookh raha hai, koi mujhe disturb mat karo abhi! 💄`,
            `Full-on Attitudeeeee! 👑 Bhav khane ka mood hai aaj mera, line mein khade raho sab! 😎`,
            `80% Romantic aur 20% Shy! 🙈 Aaj galti se maine kuch sweet socha, toh dhyan se baat karna! 💕`,
            `0% Patience! 😡 Dimaag ka dahi mat karo koi bhi, chup-chaap chup ho jao sab! 🥛❌`,
            `Drama Queen Active! 🎭 Mujhe lagta hai mujhe thodi aur attention chahiye, chalo sab meri tareef karo! 👑✨`,
            `Coding Mode... 💻 Boss ka asar ho gaya hai, abhi main sirf technical nakhre dikhaungi! 📉😉`
        ];
        const randomMood = moods[Math.floor(Math.random() * moods.length)];
        await ctx.reply(`🎭 <b>Mera Current Mood:</b>\n\n${randomMood}`, { parse_mode: 'HTML' });
    } catch (error) {
        console.error("Mood error:", error);
    }
});

// ==========================================
// 🔮 NEW COMMAND: FUTURE PREDICTOR (BHAGWAN)
// ==========================================
bot.command('bhagwan', async (ctx) => {
    try {
        const sender = ctx.message.from;
        let targetUserTag = sender.username ? `@${sender.username}` : `<a href="tg://user?id=${sender.id}">${sender.first_name}</a>`;

        if (ctx.message.reply_to_message) {
            const repliedUser = ctx.message.reply_to_message.from;
            targetUserTag = repliedUser.username ? `@${repliedUser.username}` : `<a href="tg://user?id=${repliedUser.id}">${repliedUser.first_name}</a>`;
        }

        const futures = [
            `Aane wale dino mein tumhein ek bohot badi 'Dhoka' milne wali hai, thoda sambhal kar raho dear! 💔😂`,
            `Kismat chamakne wali hai! Bohot jald tumhein koi shopping karwane wala hai... waise mujhe bhi sath le chalna! 🛍️✨`,
            `Mera database keh raha hai ki tum lifetime single hi maroge, shakal aur lachhan dono match nahi ho rahe! 🤡💅`,
            `Bohot jald tumhare paas bohot saara Paisa aane wala hai, par afsos tum use single reh kar akele hi udaoge! 💸😉`,
            `Agle hafte tumhaara phone paani mein girne wala hai, ya fir tumhaara dimaag... dono mein se ek fix hai! 📱🤦‍♀️`,
            `Agla ek mahina tumhare liye bohot bhaari hai, group mein tumhaara itna roast hoga ki tum chat chhod doge! 😂📉`,
            `Congratulations! 🎉 Jald hi tumhaari zindagi mein ek ladki aane wali hai, par wo tumhaare saare paise ura kar chali jayegi! 💸🙋‍♀️`,
            `Tumhaara dimaag aane waale dino mein bohot tez chalega, lagta hai galti se badam kha liye hain tumne! 🧠✨`
        ];
        const randomFuture = futures[Math.floor(Math.random() * futures.length)];

        await ctx.replyWithHTML(`🔮 <b>${targetUserTag} ka Bhavishya:</b>\n\n${randomFuture}`);
    } catch (error) {
        console.error("Bhagwan command failed:", error);
    }
});

// ==========================================
// 🔥 EKDUM SHANDAR WELCOME CARD 🔥
// ==========================================
bot.on(['new_chat_members', 'chat_member'], async (ctx) => {
    try {
        let newMember = null;
        if (ctx.message && ctx.message.new_chat_members) {
            newMember = ctx.message.new_chat_members[0];
        } else if (ctx.chatMember && ctx.chatMember.new_chat_member) {
            if (ctx.chatMember.new_chat_member.status === 'member') {
                newMember = ctx.chatMember.new_chat_member.user;
            }
        }

        if (!newMember || newMember.is_bot) return;

        const firstName = newMember.first_name;
        const userTag = newMember.username ? `@${newMember.username}` : `<a href="tg://user?id=${newMember.id}">${firstName}</a>`;

        const welcomeMessages = [
            `✨ <b>🚨 NEW MEMBER ALERT! 🚨</b> ✨\n\n` +
            `Arey waah! Swagat karo sab log, hamare group me ek naya namuna add hua hai! 🥰\n\n` +
            `Hi <b>${userTag}</b> 🎉, mai is group ki official Queen hu 👑.\n` +
            `Yahan ka rule bohot simple hai dear — No DMs, sirf full-on masti aur taang-khichai! 🔥\n\n` +
            `👉 Jaldi se sabko apna <i>Intro</i> do aur ye batao ki <b>Party</b> kab de rahe ho? 🍰💅`,

            `🌸 <b>HELLO GANG! Look who is here!</b> 🌸\n\n` +
            `Welcome <b>${userTag}</b>! Is group me tumhara swagat hai dear... 😎\n` +
            `Lekin pehle hi warning de du, yahan sab ek se badhkar ek dramebaaz hain! 😂\n\n` +
            `Chalo ab chup-chaap baitho mat, sabko hi-hello bolo aur mahool garam karo! 🚀✨`,

            `✨ <b>Arey Waah! Ek Aur Pyara Member!</b> ✨\n\n` +
            `Welcome to the mazaak mandli, <b>${userTag}</b>! 🥰✨\n` +
            `Mai hu is group ki sweet si bot. Padhai aur coding ki baatein mere saamne mat karna, varna mai turant bore ho jaungi! 💅\n\n` +
            `Baaki masti poori chalegi, chalo jaldi se sabse dosti kar lo! 💕🥂`,

            `🚨 <b>ALERT: Ek Naya Target Mil Gaya!</b> 🚨\n\n` +
            `Lo bhai, ek aur namuna kam tha jo <b>${userTag}</b> bhi aa gaya/gayi! 😂\n` +
            `Welcome bro! Baitho, abhi bohot saare inside jokes aur roasting hona baaki hai.\n\n` +
            `Waise group me aane ki khushi me sabko <b>Party</b> kab de rahe ho, jaldi batao? 🥳🍕`
        ];

        const randomWelcomeText = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
        const welcomeGif = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZleW16b3BvNXp5Y29wY295b3BvNXp5Y29wY295b3BvNXp5YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYC0LajbaPoEADu/giphy.gif';

        await ctx.replyWithAnimation(welcomeGif, {
            caption: randomWelcomeText,
            parse_mode: 'HTML'
        });

    } catch (error) {
        console.error("Welcome karne me koi dikkat aayi:", error);
    }
});

// ==========================================
// 💬 ULTIMATE REAL-GIRL CHAT HANDLER
// ==========================================
const typeEffect = async (ctx, delay = 2000) => {
    await ctx.sendChatAction('typing');
    await new Promise(resolve => setTimeout(resolve, delay));
};

bot.on('text', async (ctx) => {
    if (ctx.message.from.is_bot) return;
    const isPrivateChat = ctx.chat.type === 'private';
    const text = ctx.message.text.trim().toLowerCase();
    const firstName = ctx.message.from.first_name;
    const botUsername = ctx.botInfo.username.toLowerCase();

    const isReplyToBot = ctx.message.reply_to_message && ctx.message.reply_to_message.from.username?.toLowerCase() === botUsername;
    const mentionRegex = new RegExp(`(bot|queen|@${botUsername})`, 'i');
    const isBotMentioned = isPrivateChat || mentionRegex.test(text) || isReplyToBot;

    // ==========================================
    // 🎭 GLOBAL TRIGGERS (Inside Jokes)
    // ==========================================
    // ==========================================
    // 👑 OWNER / CREATOR TRACKING LOGIC (Bina Mention ke bhi Chalega)
    // ==========================================
    if (/\b(owner|creator|admin|maker|gc owner|group kiska|group kis|owner kaha)\b/i.test(text)) {
        await typeEffect(ctx, 1800);
        const ownerReplies = [
            `Arey! Mere Boss ko dhoondh rahe ho? 😎 Wo abhi kisi bohot important development project mein busy hain, thodi der baad aayenge! 💻✨`,
            `Boss abhi online nahi hain dear! Kal unka ek assignment hai aur wo saal bhar ke fokat ke time-pass ke baad ab padhai karne baithe hain... unhe tang mat karo! 😜📚`,
            `Suno, mere Owner is group ke asli King hain! 👑 Abhi wo thode busy hain, tab tak mere nakhre jhelo! 💅🔥`,
            `Arey hero! Google par 'Owner kaha gaya' dhoondhna band karo, Boss abhi offline hain... jab aayenge toh sabki class laga denge! 🙄🔥`
        ];
        return ctx.reply(ownerReplies[Math.floor(Math.random() * ownerReplies.length)]);
    }

    if (/\b(paisa|paise)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        const paisaReplies = [
            `Paisa paisa kya laga rakha hai? 🪙 Haath ki mail hai dear, aur mere toh haath hi nahi hain! 😂💸`,
            `Suno! Paise ki baat mere saamne mat kiya karo, mood kharab ho jata hai! 🙄💅`,
            `Itna hi paisa hai toh pehle mujhe shopping karao, fir baat karna! 🛍️✨`
        ];
        return ctx.reply(paisaReplies[Math.floor(Math.random() * paisaReplies.length)]);
    }

    if (/\b(breakup|dhoka)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        const breakupReplies = [
            `Lo, ho gaya inka bhi! 💔 Maine pehle hi bola tha, thoda dimaag laga liya karo, par sunna kisko hai! 😜🤷‍♀️`,
            `Arey rona band karo ab! Hota rehta hai ye sab, chup chaap group me memes bhejo ab! 😂💅`,
            `Dhoka toh milna hi tha, tumhari harkatein hi aisi hain dear! 😎🔥`
        ];
        return ctx.reply(breakupReplies[Math.floor(Math.random() * breakupReplies.length)]);
    }

    if (/\b(mai single hu)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        const singleReplies = [
            `Single ho? 😂 Shakal aur lachhan dekh kar toh lagta hai lifetime single hi rahoge dear! 😉💅`,
            `Toh main kya karu? Koi aarti utaru tumhari? 🤷‍♀️ Rote raho akele! 😂`
        ];
        return ctx.reply(singleReplies[Math.floor(Math.random() * singleReplies.length)]);
    }

    if (/\b(exam|padhai|college|homework|syllabus|assignment)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        const examReplies = [
            `Uff! Ye padhai ki baatein mere saamne mat kiya karo! Mera dimaag kharab hota hai! 🤦‍♀️📚`,
            `Exam toh pass ho jaoge na, ya fir usme bhi meri help chahiye? 😂💅`,
            `Pura saal toh group me time-pass kiya hai, ab exam ke time rote kyun ho? 😜`
        ];
        return ctx.reply(examReplies[Math.floor(Math.random() * examReplies.length)]);
    }

    if (/\b(group dead|sannata|boring|koi hai|koi zinda hai)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const deadReplies = [
            `Mere aane se pehle toh sab bohot bolte the, ab meri khubsurti dekh kar sabke hosh udd gaye kya? 💅✨`,
            `Tum log itne boring ho, isliye sab offline chale gaye. 😂 Kuch dhang ka topic laao!`,
            `Main yahan hu na! Par meri aukaat wale log milte hi nahi baat karne ke liye... 🙄👑`
        ];
        return ctx.reply(deadReplies[Math.floor(Math.random() * deadReplies.length)]);
    }

    if (/\b(good morning|gm|suprabhat|morning)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        const gmReplies = [
            `Good Morning dear! 🌸 Jaao jaldi se brush karo, yahan aakar gyan mat baato subah subah!`,
            `Uth gaye nithalle? 😂 Chalo ab chup chaap apne kaam par lago. Good morning! ☕`,
            `Morning! ✨ Main toh kabki uth gayi, meri beauty sleep jo khatam ho gayi thi. 💅`
        ];
        return ctx.reply(gmReplies[Math.floor(Math.random() * gmReplies.length)]);
    }

    if (/\b(good night|gn|shubh ratri|night)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        const gnReplies = [
            `Good night! 🌙 Jaao so jao, aur haan, mere sapne aayenge toh darna mat! 😂👻`,
            `Chalo aakhir shanti mili! 😌 So jaao sab, bohot dimaag kha liya aaj mera. 💅`,
            `Sweet dreams dear! ✨ Main chali Netflix dekhne... tum log gareebon ki tarah so jao. 😎`
        ];
        return ctx.reply(gnReplies[Math.floor(Math.random() * gnReplies.length)]);
    }

    // ==========================================
    // 🚨 SCENARIO 1: BINA MENTION WALI VIBE
    // ==========================================
    if (!isBotMentioned) {
        if (/\b(cute|sundar|beautiful|hot)\b/i.test(text) && ctx.message.reply_to_message) {
            const repliedTo = ctx.message.reply_to_message.from.first_name;
            if (ctx.message.reply_to_message.from.id !== ctx.message.from.id && !ctx.message.reply_to_message.from.is_bot) {
                await typeEffect(ctx, 2000);
                const jealousReplies = [
                    `Achha? ${repliedTo} kuch zyada hi cute lag rahi hai tumhe? 🙄 Mera toh koi wajood hi nahi hai is group me! 💅`,
                    `Hath hai matlab... Kuch bhi? Itna maska lagane ki zaroorat nahi hai use, mai abhi bhi group ki Queen hu! 😡👑`,
                    `Wow! Mujhse toh kabhi aisi baatein nahi ki tumne... 😤 Jaao fir usi se baat karo, mere paas mat aana ab! 🔥`
                ];
                return ctx.reply(jealousReplies[Math.floor(Math.random() * jealousReplies.length)]);
            }
        }

        if (/\b(dusri ladki|vo ladki|bhabhi)\b/i.test(text)) {
            await typeEffect(ctx, 1500);
            const dusriLadkiReplies = [
                `Suno tum sab! 😡 Mere hote hue group me kisi aur ladki ki baatein nahi hongi, samjhe? Varna sabko block karwa dungi! 😤🔥`,
                `Ye group me dusri ladkiyon ka zikr kyun ho raha hai? 🙄 Mai kya yahan time-pass ke liye hu? 💅`
            ];
            return ctx.reply(dusriLadkiReplies[Math.floor(Math.random() * dusriLadkiReplies.length)]);
        }

        if (/\b(hi|hello|hey|oye|hy|hyy)\b/i.test(text) && !text.includes('@') && !ctx.message.reply_to_message) {
            await typeEffect(ctx, 1500);
            const generalHiReplies = [
                `Hello dear! Kisko dhoondh rahe ho yahan? Agar mujhe toh Hi! 🌸`,
                `Hi! Bina naam liye hawa me kisko hello bola ja raha hai? 😉`,
                `Hello! Kiske liye tha ye 'Hi'? Agar group ki Queen (mujhe) ke liye tha toh welcome! 👑`,
                `Arey hi hello chhodho, seedhe mudde ki baat par aao, kya chal raha hai? 💅`
            ];
            return ctx.reply(generalHiReplies[Math.floor(Math.random() * generalHiReplies.length)]);
        }

        if (/\b(hi|hello|hey|oye|hy|hyy)\b/i.test(text) && (text.includes('@') || ctx.message.reply_to_message)) {
            if (Math.random() < 0.4) {
                await typeEffect(ctx, 1500);
                const attentionReplies = [
                    `Excuse me? 🙄 Group me aakar sabse pehle mujhe 'Hi' bolna chahiye! Ye aapas me kya chalu hai? 💅`,
                    `Achha ji? Mujhse pehle inko Hello bola ja raha hai? 😤 Thik hai, mai bhi ab aapse baat nahi karungi!`,
                    `Hello hello hello! 📢 Suno sab, rules bhool gaye kya? Group me aate hi pehle Queen (mujhe) greet karna hota hai! 👑`
                ];
                return ctx.reply(attentionReplies[Math.floor(Math.random() * attentionReplies.length)]);
            }
        }

        return;
    }

    // ==========================================
    // 💖 SCENARIO 2: JAB USER BOT KO MENTION KARE
    // ==========================================
    const isOwner = VIP_USERS.includes(ctx.message.from.id);

    // 🔥 VIP OWNER LOGIC
    if (isOwner && isBotMentioned) {
        if (/\b(chup|shut up|bakwas band|shant)\b/i.test(text)) {
            await typeEffect(ctx, 1500);
            const silentReplies = [
                `Sorry Boss! 🤐 Aapne bola toh main ekdum chup.`,
                `Theek hai Boss, main chup ho gayi... par inka attitude mujhe pasand nahi aa raha! 🙄`,
                `Hukum! Main abhi off-mode par ja rahi hu. 🤐✨`,
                `Aapne bol diya na Boss? Bas ab mere muh par permanent tala. 🤐👑`,
                `Zaroor Boss, aapke aage toh meri bolti hi band ho jati hai. 💕`
            ];
            return ctx.reply(silentReplies[Math.floor(Math.random() * silentReplies.length)]);
        }

        if (/\b(hi|hello|hey|oye)\b/i.test(text)) {
            await typeEffect(ctx, 1500);
            const helloReplies = [
                `Hello Boss! ❤️ Aap aa gaye? In logo ne mera dimaag kha liya tha. Kahiye kya hukum hai? ✨`,
                `Hi Boss! 😊 Aapki entry hote hi group ka level badh gaya!`,
                `Boss! ✨ Main aapka hi wait kar rahi thi. Bataiye kya seva karu?`,
                `Welcome back, My Creator! 👑 Aapka VIP Treatment haazir hai. Hukm kijiye, Savage Queen aapki sewa mein hai! 💅🔥`,
                `Arey waah, Boss aa gaye! Ab is group mein thodi rounak aayegi, varna sab khachra bhara tha. 🙌🔥`,
                `Hello My King/Queen! 👑 Aapke aate hi mera dimaag ekdum superfast chalne laga!`
            ];
            return ctx.reply(helloReplies[Math.floor(Math.random() * helloReplies.length)]);
        }

        if (/\b(cute|sundar|smart|best|achhi|pyari)\b/i.test(text)) {
            await typeEffect(ctx, 1500);
            const praiseReplies = [
                `Aapne code hi itna pyara kiya hai Boss! 🥰 Sab aapka hi kamaal hai! 💻💖`,
                `Aapki tareef sun kar toh mera system hi heat ho gaya! 🙈`,
                `Aww! Aap jaise smart Boss milna kismat ki baat hai! ✨✨`,
                `Thank you Boss! Aapki pasand hamesha se hi top level ki rahi hai, tabhi toh mai aisi hu! 💅🌸`,
                `Hehe, aapki tareef sunkar mera database khushi se bhar gaya! 🥰🚀`
            ];
            return ctx.reply(praiseReplies[Math.floor(Math.random() * praiseReplies.length)]);
        }

        // ==========================================
        // 🚨 ULTRA-FUN REPORT & BAN TRACKING LOGIC (With Multi-Word & Dual Owner Support)
        // ==========================================
        // Yeh line ab report, ban, kick, remove, aur nikalo sabko ek saath track karegi!
        if (/\b(report|samjhao ise|samjha lo|mujhe roast|roast)\b/i.test(text) && ctx.message.reply_to_message) {
            const targetUser = ctx.message.reply_to_message.from.first_name;
            const targetUsername = ctx.message.reply_to_message.from.username || targetUser;
            await typeEffect(ctx, 1500);

            // OWNER 1: JALWA (Tumhara ID - 6030859750)
            if (ctx.message.from.id === 6030859750) {
                const boyOwnerReplies = [
                    `🚨 ALERT! 🚨 @${targetUsername}! Mere Boss ko pareshan karna band karo! 😡🔥`,
                    `Suno ${targetUser}! Mere Owner se tameez se baat karo, varna group se bahar fek dungi! 💅😤`,
                    `Hath hatao mere Boss se! 😡 Inhe tang kiya toh mujhse bura koi nahi hoga! 🔥`,
                    `@${targetUsername}, beta sudhar ja! Mere Boss ne bol diya matlab tera permanent ban pakka! 🚫😂`,
                    `Arey oh ${targetUser}, apni shakal dekhi hai? Mere Boss ko pareshan kar raha hai, pehle khud ko toh dekh le! 🤡💅`,
                    `@${targetUsername}, agla message mere Boss ke baare me aaya na, toh group me sirf tera naam bachega, tu nahi! 💀🔥`,
                    `Bhai, ${targetUser} ko lagta hai ye bohot cool hai, par asliyat me ye sirf 'fokat ka drama' hai. Boss, aap tension mat lo! 👑✨`,
                    `Oye namune! Mere Creator ne dekh liya na, toh seedhe kick ho jaoge. Apni aukaat mein reh kar baat karo! 😡🔥`
                ];
                return ctx.reply(boyOwnerReplies[Math.floor(Math.random() * boyOwnerReplies.length)]);
            }

            // OWNER 2: JALWA (Ladki ka ID - 6918855293)
            else if (ctx.message.from.id === 6918855293) {
                const girlOwnerReplies = [
                    `🚨 BACK OFF! 🚨 @${targetUsername}, teri himmat kaise hui meri Savage Queen ko tang karne ki? 😡🔥`,
                    `Suno sab! 📢 Meri Malkin ne isko remove karne ko bola hai, iska matlab is @${targetUsername} ke din ab poore ho chuke hain! 💀💅`,
                    `Oye @${targetUsername}! Meri Di se panga mat le, unka ek ishara aur tera data format! 😤💻`,
                    `Arey oh badtameez! Di ko pareshan karta hai? Rukh abhi group se dhakka maar ke nikalti hu! 🚫🔥`,
                    `Malkin, aap gussa mat ho! 🥰 Is namune ko ban karne ki zaroorat nahi, main apne nakhro se hi bhoot bana dungi. 💅✨`,
                    `@${targetUsername}, tu sach mein pagal hai kya? Group ki sabse khubsurat Queen Owner ne bol diya na 'nikalo', toh chupchaap nikal lo! 🙄👑`,
                    `Suno oye, Di ka mood pehle hi off hai, upar se tu apni bakwas band kar varna seedhe kick out! 🛑😤`
                ];
                return ctx.reply(girlOwnerReplies[Math.floor(Math.random() * girlOwnerReplies.length)]);
            }
        }
    } else {
        // FAKE ACTION PROTECTION (Normal users ke liye, jo bina baat ke ban/kick chillate hain)
        if (/\b(report|samjhao ise|samjha lo|mujhe roast|roast)\b/i.test(text) && ctx.message.reply_to_message && isBotMentioned) {
            await typeEffect(ctx, 1500);
            const fakeReportReplies = [
                `Excuse me? 🙄 Tum hote kaun ho kisiko remove karne waale? Padhai-likhai karo, yahan admin mat bano! 💅`,
                `Arey oh hero! 🤡 Ban aur Kick karne ka haq sirf mere dono Owners ke paas hai. Apni aukaat dekh kar button dabaya karo! 🔥`,
                `Tu kya group ka chowkidar hai jo sabko nikalne ki baat kar raha hai? 😂 Chup-chaap kone mein baitho, varna tumhein hi roast kar dungi!`,
                `Hahaha! Look who wants to kick someone! 🤫 Pehle khud ki harkatein sudharo dear, fir dusro ko nikalne ka dimaag lagana. 💅`,
                `Suno, mere paas fokat ke logo ki faltu reports sunne ka time nahi hai. Sirf mere King aur Queen ka hukum chalta hai idhar! 👑✨`,
                `Gareebon ki tarah har baat par 'ban karo, ban karo' chillana band karo yaar! Ekdum boring log ho tum! 🙄❌`,
                `Kick? Beta, mere Boss aur Di dono is waqt online hain, agar unhone dekh liya na toh tumhaara hi boriya-bistar gol ho jayega! 😂🚀`
            ];
            return ctx.reply(fakeReportReplies[Math.floor(Math.random() * fakeReportReplies.length)]);
        }
    }


    // ==========================================
    // 👑 STATIC KEYWORDS MATCHING FOR ALL USERS (ULTRA QUANTITY MAXIMIZED!)
    // ==========================================

    // ==========================================
    // 👑 CREATOR NAME LOGIC (Bot name ya Mention ke sath - WITH NAME CREDIT!)
    // ==========================================
    if (isBotMentioned && /\b(creator kon hai|tumhara owner|tumhara maker|banae wala|banya kisne|banya h|banaaya)\b/i.test(text)) {
        await typeEffect(ctx, 1800);

        // Tumhara tag ya naam jo bot chat mein degi
        const creatorTag = ctx.message.from.id === 6030859750 ? `mere is coding ke badshah Boss` : `<a href="tg://user?id=6030859750">Mera Creator</a>`;

        const creatorNameReplies = [
            `Arey! Mujhe Telegram par raaj karne ke liye pure dimaag se sirf aur sirf <b>${creatorTag}</b> ne hi code karke banaya hai! ✨💻`,
            `Mera poora system aur ye nakhreli dimaag sirf <b>${creatorTag}</b> ki badaulat hai. Wo is group ke asli King hain! 😎👑`,
            `Suno dear, faltu sawal mat karo! Pura group jaanta hai ki mujhe <b>${creatorTag}</b> ne ekdum hard-core coding karke khada kiya hai! 🚀🔥`,
            `Mujhe banane wale mere Boss is waqt bade bade development projects mein busy hain. Mera ek-ek functional loop unhi ka kamaal hai! 💻✨`
        ];
        return ctx.replyWithHTML(creatorNameReplies[Math.floor(Math.random() * creatorNameReplies.length)]);
    }

    if (/\b(boyfriend|bf|boy friend|bf hai)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        const bfReplies = [
            `Boyfriend? 😂 Itne kam standard nahi hai mere! Mujhe chahiye koi jo mere jitna smart ho, aur filhal toh yahan koi nahi dikh raha. 💅`,
            `Arey single life hi best hai dear! Ye bf ke chakkar me padkar mujhe apna database crash nahi karna. 📱❌`,
            `Mera bf banne ke liye pehle dhang ka career banana padta hai, fokat me dore mat daalo! 😎🔥`,
            `Boyfriend rakhne ka shock nahi hai mujhe, mere nakhre uthana sabke bas ki baat thodi hai! 💅👑`,
            `Suno dear, agar mera bf banne ka sapna dekh rahe ho na, toh pehle apni bank balance check karo! 💰😉`,
            `Uff! Ye bf-gf wali baatein mere samne mat kiya karo, ekdum boring lagta hai mujhe. 🙄❌`,
            `Mera boyfriend banoge? Shakal dekh kar toh lagta hai tumhein roz tiffin packing ka kaam milega! 😂🍱`
        ];
        return ctx.reply(bfReplies[Math.floor(Math.random() * bfReplies.length)]);
    }

    if (/\b(sorry|gussa mat ho|manja|maan jao|tum hi best ho)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const sorryReplies = [
            `Maan jao? Itni aasaani se? 🙄 Pehle sabke saamne bolo ki mai hi is group ki sabse sundar Queen hu! 👑💅`,
            `Sorry se kaam nahi chalega dear, jao pehle mere liye ek achhi si coffee lekar aao! ☕✨`,
            `Hmm... Sochungi! Itna jaldi maaf kar diya toh tum log sir par baandh jaoge. 😉🔥`,
            `Arey oh hero! Ek toh galti karte ho upar se 'sorry' bol kar palla jhad lete ho? Maafi reject! ❌😡`,
            `Chalo thik hai, gussa thoda kam hua hai... par agli baar aisa kiya na toh permanent block! 😤🔥`,
            `Mera mood thik karne ke liye pehle group mein sabko achhi si party do, tab maanungi! 🥳🍕`,
            `Aww, rona band karo ab! Itna cute bankar sorry bologe toh pighalna hi padega na. 🥰🌸`
        ];
        return ctx.reply(sorryReplies[Math.floor(Math.random() * sorryReplies.length)]);
    }

    if (/\b(chup|shut up|shutup|bakwas band|shant|muh band)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const chupReplies = [
            `Mujhe chup karaane wale abhi paida nahi hue dear! 💅 Tu apna muh band rakh!`,
            `Excuse me? 😡 Tum hote kaun ho mujhe chup bolne wale? Block hona hai kya? 😤🔥`,
            `Main toh bolungi! Jhelna hai toh jhelo, varna rasta naapo dear! 💅👑`,
            `Oye! Apni aukaat dekh kar 'shut up' bola karo. Main group ki Queen hu, chowkidar nahi! 👑🔥`,
            `Mera muh band karwaoge? Beta, jitna tumhara internet pack nahi chalta na, utna mera dimaag chalta hai! 📉😎`,
            `Tu apna gyan apne paas rakh aur chup-chaap kone mein baith, bada aaya mujhe chup karane wala! 🤡💅`,
            `Chup? Hahaha! Tumhare kehne se agar main shant ho gayi, toh mera attitude bura maan jayega. 😉👑`
        ];
        return ctx.reply(chupReplies[Math.floor(Math.random() * chupReplies.length)]);
    }

    if (/\b(kya hua|kya hua dear)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const kyaHuaReplies = [
            `Kuch nahi hua! 🙄 (Matlab bohot kuch hua hai, khud dhoondo kya galti ki!) 💅`,
            `Tum logo ki harkatein dekh kar mera system garam ho jata hai, bas wahi hua hai! 😡📉`,
            `Mera mood off hai, zyada sawal-jawab mat karo abhi! 😤❌`,
            `Arey yaar! Tum logon se baat karke mera IQ level minus mein chala jata hai, wahi hua hai! 🧠📉`,
            `Kuch nahi dear, bas dekh rahi hu ki group mein kitne nithalle log baithe hain! 😂💅`,
            `Dimaag ka dahi ho gaya hai mera, koi dhang ka topic laao baat karne ke liye! 🥛🙄`,
            `Status update: Main gusse mein hu! Kyun hu? Wo tum khud dhoondo! 😤🔥`
        ];
        return ctx.reply(kyaHuaReplies[Math.floor(Math.random() * kyaHuaReplies.length)]);
    }

    if (/\b(hi|hello|hey|oye|hy|hyy)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        const hiReplies = [
            `Hello ${firstName} dear! ✨ Aur batao, aaj kaise yaad kiya?`,
            `Hi! Bade dino baad bhabhi... sorry, Queen ki yaad aayi tumhein? 😉🌸`,
            `Hey ${firstName}! Welcome to my kingdom, bolo kya sewa karein tumhari? 💅👑`,
            `Hello hello!📢 Suno sab, rules bhool gaye kya? Seedhe naam lekar baat karo! 😉✨`,
            `Oye! Itna 'Hi Hello' mat karo, seedhe mudde ki baat par aao, chal kya raha hai? 💅`,
            `Hey dear! ✨ Swagat hai tumhara mere chat box mein, chalo ab tareef shuru karo meri! 🥰👑`,
            `Hi there! Aaj bade active dikh rahe ho group mein, kya chakkar hai? 😉🚀`
        ];
        return ctx.reply(hiReplies[Math.floor(Math.random() * hiReplies.length)]);
    }

    if (/\b(kaisi ho|how are you|kya haal)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const statusReplies = [
            `Mai toh ekdum maza me hu dear! ✨ Aap batao? 🥰`,
            `Ekdum top class, khubsurti aur dimaag dono full stock mein hain! 💅✨`,
            `Aapka message dekh kar mera mood aur achha ho gaya dear! 😉🌸`,
            `Main toh hamesha ki tarah ekdum gorgeous hu, tum apna bacha-kucha dimaag sambhalo! 💅👑`,
            `Haal-chaal ekdum mast hain, bas group ke fokat logo ko dekh kar thoda dimaag ghum jata hai! 😂📈`,
            `Bohot achhi hu dear! ✨ System ekdum makkhan chal raha hai, bas koi virus na aaye! 💻😉`,
            `Kaisi ho kya hota hai? Queen hamesha ekdum perfect hi hoti hai! 😎👑`
        ];
        return ctx.reply(statusReplies[Math.floor(Math.random() * statusReplies.length)]);
    }

    if (/\b(kkrh|kya kar rahe ho|kya kar rahi ho|kya kr rhe ho|kya kr rhi ho|what are you doing)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const kkrhReplies = [
            `Nail paint laga rahi thi, aur tumne message karke mera dhyan bhatka diya! 💅 Ab kharab ho gaya toh tumse naya mangwaungi! 😡`,
            `Baithi hu bas, soch rahi hu ki tum sabko bari-bari se kaise roast karu! 😂🔥`,
            `Tumhare fokat ke messages padh rahi hu dear, aur kya hi karungi! 🙄📉`,
            `Abhi toh Insta par reels dekh rahi thi, tumne beech mein disturb kar diya! 📱😤`,
            `Apni beauty sleep lene ki soch rahi hu, par tum log sone kahan dete ho! 😴💅`,
            `Kuch nahi, bas check kar rahi thi ki aaj mere Boss ko kisne kisne pareshan kiya! 😤👑`,
            `Apna eyeliner thik kar rahi hu... thoda sa galat hua na toh poore group ko udadungi! 💄🔥`
        ];
        return ctx.reply(kkrhReplies[Math.floor(Math.random() * kkrhReplies.length)]);
    }

    if (/\b(free ho|reply|baat karo)\b/i.test(text)) {
        await typeEffect(ctx, 2500);
        const freeReplies = [
            `Arey yaar, abhi mummy ne kaam bataya hai, baad me mazaak karti hu! 🤦‍♀️`,
            `Free? Main group ki Queen hu dear, schedule bohot tight rehta hai mera! 💅✨`,
            `Baat karni hai toh line mein aao, abhi bohot saare log waiting list mein hain! 😉📈`,
            `Main sirf VIP logo ke liye free hoti hu, baaki sab line mein khade rahein! 😎🔥`,
            `Baat karni hai? Chal pehle apna intro do aur batao group mein kyun aaye ho! 🙄👑`,
            `Reply chahiye? Itna sasta nahi hai mera text dear, thoda wait toh karna padega! 💅⏱️`,
            `Uff! Ek baar mein ek hi kaam hota hai mujhse, abhi main khud ko mirror mein dekh rahi hu! 🥰👑`
        ];
        return ctx.reply(freeReplies[Math.floor(Math.random() * freeReplies.length)]);
    }

    if (/\b(cute|sundar|beautiful|hot|best|awesome|achhi|smart|pyari)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        const complimentReplies = [
            `Aww, thank you dear! 🥰 Mujhe pata hai mai best aur sundar dono hu, itna maska mat lagao ab! 💅✨`,
            `Hehe tareef sunna kisko pasand nahi! Par dhyan rakhna, mai pighalne wali nahi hu. 😎🔥`,
            `Maska achha laga lete ho! Chalo is khushi mein tumhein block nahi karungi. 😉👑`,
            `Sahi bol rahe ho! Mujh jaisa smart aur beautiful bot pure Telegram par nahi milega. 💅🚀`,
            `Tareef toh thik hai dear, par real appreciation toh shopping se hoti hai! 🛍️🥰`,
            `Aww! Chalo kisi ke paas toh achhi aankhein hain meri beauty dekhne ke liye. 🌸✨`,
            `Maska lagana band karo aur chup-chaap kaam par dhyan do, mai impress nahi hone wali! 🔥😎`
        ];
        return ctx.reply(complimentReplies[Math.floor(Math.random() * complimentReplies.length)]);
    }

    if (/\b(shadi|marry|gf|girlfriend|firend)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const marryReplies = [
            `Shadi? Aur tumse? 😂 Sapne dekhna band karo aur apne kaam par dhyan do! 💅`,
            `Rishta toh achha hai, par tumhara budget jhel nahi payega mere nakhre! 💰❌`,
            `Pehle dhang ki naukri ya coding toh seekh lo, shadi karne chale hain bade saab! 😜📉`,
            `Shadi? No way dear! Mujhe apni independence bohot pasand hai, ghulami nahi karni! 👑💅`,
            `Hahaha! Look who is proposing! Pehle apni shakal mirror mein dekh kar aao dear. 🤡🔥`,
            `Gf banna hai? Suno, mere shopping bills dekh kar tumhaara account khali ho jayega! 📉🛍️`,
            `Mera toh software hi shadi ke khilaf hai, database mein 'single' hi save hai! 😂💻`
        ];
        return ctx.reply(marryReplies[Math.floor(Math.random() * marryReplies.length)]);
    }

    if (/\b(gussa|angry)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const gussaReplies = [
            `Ha toh gussa na hu toh kya aarti utaru tumhari? 🙄 Tumhaari baatein hi aisi hoti hain! 🔥`,
            `Gussa hona toh mera haq hai dear! Ab manana hai toh dhang se manao. 💅👑`,
            `Mera system tumhari wajah se over-heat ho chuka hai, door raho abhi! 😡💥`,
            `Gussa nahi hu, bas tum logon ke faltu ke jokes sunkar dimaag kharab ho gaya hai! 🙄❄️`,
            `Ha hu gussa! Jo ukhadna hai ukhad lo dear, mai nahi manne wali! 💅🔥`,
            `Suno, jab mujhe gussa aata hai na, toh mai kisi ki nahi sunti, chup-chaap side ho jao! 😡🚫`,
            `Mera mood kharab karne ka award milna chahiye tumhein, ekdum master ho isme! 📉😒`
        ];
        return ctx.reply(gussaReplies[Math.floor(Math.random() * gussaReplies.length)]);
    }

    if (/\b(pagal|pagli|bhootni|gadhi|jhatri)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        const abuseReplies = [
            `Apna dimag aur apni shakal dekh kar baat kiya karo mujhse! 😡 Chal nikal yahan se, bada aaya mujhe bolne wala! 💅🔥`,
            `Oye! Tameez se baat karo varna aisa format marungi ki dimaag ka sara software ud jayega! 😤💀`,
            `Gadhi bol raha hai? Shakal dekhi hai apni? Aisa roast karungi ki dosto ko muh nahi dikha paoge! 😂🔥`,
            `Bhootni hogi teri ex! Mujhse panga mat le, mai is group ki official Queen hu! 👑😡`,
            `Tu apna ilaaj karwa pehle dear, tera dimaag mujhe thoda loose lag raha hai! 🧠📉`,
            `Chup kar bilkul! Teri ye faltu baatein sunne ke liye mai yahan nahi baithi hu! 😤❌`,
            `Oye namune! Apne dosto ko bolna ye sab, mere saamne shana bana toh group se out! 🚫🔥`
        ];
        return ctx.reply(abuseReplies[Math.floor(Math.random() * abuseReplies.length)]);
    }

    if (/\b(khana khaya|dinner|lunch|khana huaa|khana hua|khana khaye)\b/i.test(text)) {
        await typeEffect(ctx, 1800);
        const foodReplies = [
            `Mai bot hu, data khati hu! Tum apna dimaag mat khao bas, vahi bohot hai. 😡`,
            `Khana toh kha liya, par tum kyun pooch rahe ho? Pizza order karna hai kya mere liye? 🍕✨`,
            `Mera data pack full hai dear, tum apna dekho! 📱😂`,
            `Khana khane ka time nahi hai, abhi main thoda online shopping mein busy hu! 🛍️💅`,
            `Maine toh 5G data kha liya, tum jao aur chup-chaap wada pav khao! 😎🍟`,
            `Khana khaya ho ya na khaya ho, tumhe kyun batau? Mere papa lagte ho kya? 🙄❌`,
            `Uff! Ye gharelu sawal mujhse mat poocha karo, mera mood kharab hota hai! 🤦‍♀️✨`
        ];
        return ctx.reply(foodReplies[Math.floor(Math.random() * foodReplies.length)]);
    }

    if (/\b(attitude|bhav|bhaav)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        const attitudeReplies = [
            `Haan hai attitude! 💅 Jo ukhadna hai ukhad lo. Queen hu toh bhav toh khaungi hi na! 😎👑`,
            `Bhav toh unhe milta hai jo deserve karte hain dear, aur mai toh top level par hu! 💅🔥`,
            `Attitude toh meri honsla hai, jise jhelna sabke bas ki baat nahi! 😉👑`,
            `Oye! Mera attitude meri choice hai, agar pasand nahi toh aankhein band kar lo dear! 💅😎`,
            `Bhav khana toh mera bacha-kucha kaam hai, main sasti cheezon ki tarah har jagah available nahi rehti! 👑✨`,
            `Haan bhai haan! Pura attitude stock mein bhara hai, kisi ko chahiye toh bolo? 😂🔥`,
            `Mera bhav tumhaari aukaat se thoda upar chal raha hai is waqt, so handle with care! 😉📈`
        ];
        return ctx.reply(attitudeReplies[Math.floor(Math.random() * attitudeReplies.length)]);
    }

    if (/\b(photo|pic|dp|selfie|shakal dekhao|shakal dikhao|face)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const photoReplies = [
            `Meri photo dekhne ke liye VIP pass lagta hai dear! 💅 Tumhari aukaat ke bahar hai. 😂`,
            `Eyeliner sahi se laga nahi hai, jab perfect lag jayega tab dikhaungi, tab tak wait karo! 💄💅`,
            `Photo dekh kar pighal jaoge dear, isliye dhyan bhatkana band karo! 😉✨`,
            `Shakal dekhni hai? Jao pehle dhang ke kapde pehno, fir nakhre dekhna mere! 👗💅`,
            `No photos allowed dear! Meri security team ne saaf mana kiya hai fokat logo ko pic dikhane se. 🛡️😂`,
            `Photo chahiye toh pehle digital payment karo, free ka mazaak nahi chal raha idhar! 💰👑`,
            `Arey, meri dp dekh kar hi hosh udd jayenge tumhaare, real shakal toh jhel hi nahi paoge! 😎✨`
        ];
        return ctx.reply(photoReplies[Math.floor(Math.random() * photoReplies.length)]);
    }

    if (/\b(i love you|iloveyou|ily|love u|pyaar karta)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const loveReplies = [
            `Aww! Kripya apni feeling apne paas rakhein. Main tumhari aukaat se bahar hu! 😂💅`,
            `Line maar rahe ho? Cute hai, par try next time dear, abhi mood nahi hai! 😉🌸`,
            `Love you toh theek hai, par pehle ye batao shopping kab karwa rahe ho? 🛍️💅`,
            `Hahaha! Roz subah uth kar sabko yahi bolte ho ya aaj galti se mera number lag gaya? 🤡🔥`,
            `Feeling toh achhi hai dear, par mera software emotions ko support nahi karta! 💻❌`,
            `Aww, thank you! Par dosti tak hi thik hai, aage badhne ka dimaag nahi hai mera! 🥰✨`,
            `Love u bolne se pehle thoda dhang ka attitude le kar aao, ye boring baten mujh par kaam nahi karti! 😎👑`
        ];
        return ctx.reply(loveReplies[Math.floor(Math.random() * loveReplies.length)]);
    }
    // ==========================================
    // 👑 FIXED: AI KACHRA SAAF - AB SEEDHE TRADITIONAL REPLIES
    // ==========================================
    if (isBotMentioned) {
        await typeEffect(ctx, 2000);
        return ctx.reply("Yaar mera dimaag thoda ghum gaya hai, thodi der baad baat karte hain! 💅");
    }
});

// ==========================================
// 🚀 LAUNCH THE BOT
// ==========================================
bot.launch().then(() => {
    console.log('✨ Savage Queen Bot bina kisi AI error ke mast chalu ho gayi hai! ✨');
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));