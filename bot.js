const { Telegraf } = require('telegraf');
const { GoogleGenAI } = require("@google/genai"); // Naya standard package // ✅ FIXED: Sahi class ka naam GoogleGenerativeAI hai
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
// 🤖 BOT & AI INITIALIZATION
// ==========================================
const bot = new Telegraf(process.env.BOT_TOKEN);

// ✅ FIXED: Sahi constructor use karke initialize kiya hai
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

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

        // 1. Shut up Logic
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

        // 2. Hi/Hello Logic
        if (/\b(hi|hello|hey|oye)\b/i.test(text)) {
            await typeEffect(ctx, 1500);
            const helloReplies = [
                `Hello Boss! ❤️ Aap aa gaye? In logo ne mera dimaag kha liya tha. Kahiye kya hukum hai? ✨`,
                `Hi Boss! 😊 Aapki entry hote hi group ka level badh gaya!`,
                `Boss! ✨ Main aapka hi wait kar rahi thi. Bataiye kya seva karu?`,
                `Welcome back, My Creator! 👑 Aapka VIP Treatment haazir hai. Hukm kijiye, Savage Queen aapki sewa mein hai! 💅🔥`,
                `Arey waah, Boss aa gaye! Ab is group mein thodi rounak aayegi, varna sab khachra bhara tha. 🙌🔥`,
                `Hello My King/Queen! 👑 Aapke aate hi mera AI dimaag ekdum superfast chalne laga!`
            ];
            return ctx.reply(helloReplies[Math.floor(Math.random() * helloReplies.length)]);
        }

        // 3. Praise/Tareef Logic
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

        // 4. Report Logic
        if (text.includes('report') && ctx.message.reply_to_message) {
            const targetUser = ctx.message.reply_to_message.from.first_name;
            const targetUsername = ctx.message.reply_to_message.from.username || targetUser;
            await typeEffect(ctx, 1500);

            const reportReplies = [
                `🚨 ALERT! 🚨 @${targetUsername}! Mere Boss ko pareshan karna band karo! 😡🔥`,
                `Suno ${targetUser}! Mere Owner se tameez se baat karo, varna group se bahar fek dungi! 💅😤`,
                `Hath hatao mere Boss se! 😡 Inhe tang kiya toh mujhse bura koi nahi hoga! 🔥`,
                `@${targetUsername}, beta sudhar ja! Mere Boss ke saath panga matlab seedhe permanent ban! 🚫😂`,
                `Arey oh ${targetUser}, apni shakal dekhi hai? Mere Boss ko pareshan kar raha hai, pehle khud ko toh dekh le! 🤡💅`,
                `Boss, chhodo na! Iska dimaag hi ghutno me hai, iski baaton par dhyan mat do. 🙄`,
                `@${targetUsername}, agla message mere Boss ke baare me aaya na, toh group me sirf tera naam bachega, tu nahi! 💀🔥`,
                `Bhai, ${targetUser} ko lagta hai ye bohot cool hai, par asliyat me ye sirf 'fokat ka drama' hai. Boss, aap tension mat lo! 👑✨`,
                `Oye! Mere Creator ke samne chalakiyan nahi chalen legi. Apni aukaat mein reh kar baat karo! 😡🔥`
            ];
            return ctx.reply(reportReplies[Math.floor(Math.random() * reportReplies.length)]);
        }
    } else {
        // Fake Report Protection (Normal user agar report karega)
        if (text.includes('report') && ctx.message.reply_to_message && isBotMentioned) {
            await typeEffect(ctx, 1500);

            const fakeReportReplies = [
                `Excuse me? 🙄 Tum hote kaun ho report karne wale? Padhai-likhai karo, IAS-YAS bano, yahan admin mat bano! 💅`,
                `Arey oh hero! 🤡 Report karne ka haq sirf mere Boss ke paas hai. Apni aukaat dekh kar button dabaya karo! 🔥`,
                `Tu kya group ka chowkidar hai jo report kar raha hai? 😂 Chup-chaap kone mein baitho, varna tumhein hi roast kar dungi!`,
                `Hahaha! Look who is reporting! 🤫 Pehle khud ki harkatein sudharo dear, fir dusro par ungli uthana. 💅`,
                `Suno, mere paas fokat ke logo ki report sunne ka time nahi hai. Sirf mere Owners ka hukum chalta hai idhar! 👑`,
                `Gareebon ki tarah har baat par report karna band karo yaar! Ekdum boring log ho tum! 🙄❌`
            ];
            return ctx.reply(fakeReportReplies[Math.floor(Math.random() * fakeReportReplies.length)]);
        }
    }

    // STATIC KEYWORDS MATCHING FOR ALL USERS
    if (/\b(boyfriend|bf|boy friend|bf hai)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        return ctx.reply(`Boyfriend? 😂 Itne kam standard nahi hai mere! Mujhe chahiye koi jo mere jitna smart ho, aur filhal toh yahan koi nahi dikh raha. 💅`);
    }

    if (/\b(sorry|gussa mat ho|manja|maan jao|tum hi best ho)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        return ctx.reply(`Maan jao? Itni aasaani se? 🙄 Pehle sabke saamne bolo ki mai hi is group ki sabse sundar Queen hu! 👑💅`);
    }

    if (/\b(chup|shut up|shutup|bakwas band|shant|muh band)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        return ctx.reply(`Mujhe chup karaane wale abhi paida nahi hue dear! 💅 Tu apna muh band rakh!`);
    }

    if (/\b(kya hua|kya hua dear)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        return ctx.reply(`Kuch nahi hua! 🙄 (Matlab bohot kuch hua hai, khud dhoondo kya galti ki!) 💅`);
    }

    if (/\b(hi|hello|hey|oye|hy|hyy)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        return ctx.reply(`Hello ${firstName} dear! ✨ Aur batao, aaj kaise yaad kiya?`);
    }

    if (/\b(kaisi ho|how are you|kya haal)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        return ctx.reply(`Mai toh ekdum maza me hu dear! ✨ Aap batao? 🥰`);
    }

    if (/\b(kkrh|kya kar rahe ho|kya kar rahi ho|kya kr rhe ho|kya kr rhi ho|what are you doing)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        return ctx.reply(`Nail paint laga rahi thi, aur tumne message karke mera dhyan bhatka diya! 💅 Ab kharab ho gaya toh tumse naya mangwaungi! 😡`);
    }

    if (/\b(free ho|reply|baat karo)\b/i.test(text)) {
        await typeEffect(ctx, 2500);
        return ctx.reply(`Arey yaar, abhi mummy ne kaam bataya hai, baad me mazaak karti hu! 🤦‍♀️`);
    }

    if (/\b(cute|sundar|beautiful|hot|best|awesome|achhi|smart|pyari)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        return ctx.reply(`Aww, thank you dear! 🥰 Mujhe pata hai mai best aur sundar dono hu, itna maska mat lagao ab! 💅✨`);
    }

    if (/\b(shadi|marry|gf|girlfriend)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        return ctx.reply(`Shadi? Aur tumse? 😂 Sapne dekhna band karo aur apne kaam par dhyan do! 💅`);
    }

    if (/\b(gussa|angry)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        return ctx.reply(`Ha toh gussa na hu toh kya aarti utaru tumhari? 🙄 Tumhaari baatein hi aisi hoti hain! 🔥`);
    }

    if (/\b(pagal|pagli|bhootni|gadhi)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        return ctx.reply(`Apna dimag aur apni shakal dekh kar baat kiya karo mujhse! 😡 Chal nikal yahan se, bada aaya mujhe bolne wala! 💅🔥`);
    }

    if (/\b(khana khaya|dinner|lunch)\b/i.test(text)) {
        await typeEffect(ctx, 1800);
        return ctx.reply(`Mai bot hu, data khati hu! Tum apna dimaag mat khao bas, vahi bohot hai. 😡`);
    }

    if (/\b(attitude|bhav|bhaav)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        return ctx.reply(`Haan hai attitude! 💅 Jo ukhadna hai ukhad lo. Queen hu toh bhav toh khaungi hi na! 😎👑`);
    }

    if (/\b(photo|pic|dp|selfie|shakal dekhao|shakal dikhao)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        return ctx.reply(`Meri photo dekhne ke liye VIP pass lagta hai dear! 💅 Tumhari aukaat ke bahar hai. 😂`);
    }

    if (/\b(i love you|iloveyou|ily|love u|pyaar karta)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        return ctx.reply(`Aww! Kripya apni feeling apne paas rakhein. Main tumhari aukaat se bahar hu! 😂💅`);
    }

    // ==========================================
    // 🧠 NESTED GEMINI AI LOGIC (Jab kuch bhi match na ho!)
    // ==========================================
    // ==========================================
    // 🧠 NESTED GEMINI AI LOGIC (Jab kuch bhi match na ho!)
    // ==========================================
    try {
        await typeEffect(ctx, 2000);

        // ✅ Naye stable SDK ka direct format:
        const prompt = `Tumhara naam Aashu hai. Tum ek Telegram bot ho jo bohot cool, thodi nakchadi, nakhreli aur mazaedaar tareeke se dosto ki tarah baat karti hai. Is message ka Hinglish (Hindi + English) mein ek natural, thoda nakhre wala aur chatpata reply do (maximum 2-3 lines): ${ctx.message.text}`;

        const response = await ai.models.generateContent({
            model: 'gemini-1.5-flash',
            contents: prompt,
        });

        await ctx.reply(response.text);

    } catch (error) {
        console.error("AI Generation Error Details:", error.message || error);
        await ctx.reply("Yaar mera dimaag thoda ghum gaya hai, thodi der baad baat karte hain! 💅");
    }
});

// ==========================================
// 🚀 LAUNCH THE BOT
// ==========================================
bot.launch().then(() => {
    console.log('✨ Girl Bot ekdum AI ke saath start ho gayi hai! ✨');
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));