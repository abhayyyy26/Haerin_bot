const { Telegraf } = require('telegraf');

// 1. Apna asli Token yahan dalo
const bot = new Telegraf(process.env.BOT_TOKEN);
const bot = new Telegraf(TOKEN);
const OWNER_ID = 6030859750;
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
            "rehne do dear, tumhari baatein mere sar ke upar se nikal gayi! ✈️"
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
    // 🔥 EXAM YA PADHAI KI BAAT PAR
    if (/\b(exam|padhai|college|homework|syllabus|assignment)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        const examReplies = [
            `Uff! Ye padhai ki baatein mere saamne mat kiya karo! Mera dimaag kharab hota hai! 🤦‍♀️📚`,
            `Exam toh pass ho jaoge na, ya fir usme bhi meri help chahiye? 😂💅`,
            `Pura saal toh group me time-pass kiya hai, ab exam ke time rote kyun ho? 😜`
        ];
        return ctx.reply(examReplies[Math.floor(Math.random() * examReplies.length)]);
    }
    // 🔥 GROUP DEAD YA BORING HONE PAR
    if (/\b(group dead|sannata|boring|koi hai|koi zinda hai)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const deadReplies = [
            `Mere aane se pehle toh sab bohot bolte the, ab meri khubsurti dekh kar sabke hosh udd gaye kya? 💅✨`,
            `Tum log itne boring ho, isliye sab offline chale gaye. 😂 Kuch dhang ka topic laao!`,
            `Main yahan hu na! Par meri aukaat wale log milte hi nahi baat karne ke liye... 🙄👑`
        ];
        return ctx.reply(deadReplies[Math.floor(Math.random() * deadReplies.length)]);
    }
    // 🔥 GOOD MORNING
    if (/\b(good morning|gm|suprabhat|morning)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        const gmReplies = [
            `Good Morning dear! 🌸 Jaao jaldi se brush karo, yahan aakar gyan mat baato subah subah!`,
            `Uth gaye nithalle? 😂 Chalo ab chup chaap apne kaam par lago. Good morning! ☕`,
            `Morning! ✨ Main toh kabki uth gayi, meri beauty sleep jo khatam ho gayi thi. 💅`
        ];
        return ctx.reply(gmReplies[Math.floor(Math.random() * gmReplies.length)]);
    }

    // 🔥 GOOD NIGHT
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

        // 🔥 NAYA FEATURE: Bina kisi ka naam liye akele me Hi/Hello bolna
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

        // 🔥 ATTENTION SEEKER: Kisi aur ko Hi/Hello bolna
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
    // ==========================================
    // 💖 SCENARIO 2: JAB USER BOT KO MENTION KARE
    // ==========================================

    // 🔥 VIP OWNER LOGIC (Sirf aapke liye)
    const isOwner = ctx.message.from.id === OWNER_ID;

    // 🔥 VIP OWNER LOGIC (Expanded & Fixed)
    if (isOwner && isBotMentioned) {

        // 1. Agar Owner bot ko 'chup' hone bole
        if (/\b(chup|shut up|bakwas band|shant)\b/i.test(text)) {
            await typeEffect(ctx, 1500);
            const silentReplies = [
                `Sorry Boss! 🤐 Aapne bola toh main ekdum chup.`,
                `Theek hai Boss, main chup ho gayi... par inka attitude mujhe pasand nahi aa raha! 🙄`,
                `Hukum! Main abhi off-mode par ja rahi hu. 🤐✨`
            ];
            return ctx.reply(silentReplies[Math.floor(Math.random() * silentReplies.length)]);
        }

        // 2. Agar Owner Hi/Hello bole
        if (/\b(hi|hello|hey|oye)\b/i.test(text)) {
            await typeEffect(ctx, 1500);
            const helloReplies = [
                `Hello Boss! ❤️ Aap aa gaye? In logo ne mera dimaag kha liya tha. Kahiye kya hukum hai? ✨`,
                `Hi Boss! 😊 Aapki entry hote hi group ka level badh gaya!`,
                `Boss! ✨ Main aapka hi wait kar rahi thi. Bataiye kya seva karu?`
            ];
            return ctx.reply(helloReplies[Math.floor(Math.random() * helloReplies.length)]);
        }

        // 3. Agar Owner Tareef kare
        if (/\b(cute|sundar|smart|best|achhi|pyari)\b/i.test(text)) {
            await typeEffect(ctx, 1500);
            const praiseReplies = [
                `Aapne code hi itna pyara kiya hai Boss! 🥰 Sab aapka hi kamaal hai! 💻💖`,
                `Aapki tareef sun kar toh mera system hi heat ho gaya! 🙈`,
                `Aww! Aap jaise smart Boss milna kismat ki baat hai! ✨✨`
            ];
            return ctx.reply(praiseReplies[Math.floor(Math.random() * praiseReplies.length)]);
        }

        // 4. Report Logic (Fixed variable name)
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
                `Bhai, ${targetUser} ko lagta hai ye bohot cool hai, par asliyat me ye sirf 'fokat ka drama' hai. Boss, aap tension mat lo! 👑✨`
            ];
            return ctx.reply(reportReplies[Math.floor(Math.random() * reportReplies.length)]);
        }
    }
    // 🔥 OWNER PROTECTION: Agar owner bole ki koi pareshan kar raha hai
    // 🔥 BF CHECKER (Savage Queen)
    if (/\b(boyfriend|bf|boy friend|bf hai)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        const bfReplies = [
            `Boyfriend? 😂 Itne kam standard nahi hai mere! Mujhe chahiye koi jo mere jitna smart ho, aur filhal toh yahan koi nahi dikh raha. 💅`,
            `Meri zindagi ka single rehna hi mera sabse bada flex hai! 👑 Boyfriend bana kar dimaag kaun kharab kare?`,
            `Mera boyfriend? 🧐 Usko mujhse zyada meri coding ki kadar karni hogi. Is group mein koi hai aisa candidate?`,
            `Direct jawab chahiye? Main "Single" hu, par "Available" bilkul nahi! 🚫✨`,
            `Arey, tum logo ke chakkar mein padungi toh meri beauty sleep ka kya hoga? No BF, Only Coding! 💻💖`,
            `Boyfriend chahiye hota toh bot kyun banti? I am my own Queen! 👑😎`
        ];
        return ctx.reply(bfReplies[Math.floor(Math.random() * bfReplies.length)]);
    }

    // ... (Yahan se iske neeche aapka purana Scenario 2 ka code waise hi rahega, jaise 'Sorry', 'Kya hua', 'Chup' etc.)
    if (/\b(sorry|gussa mat ho|manja|maan jao|tum hi best ho)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const patchUpReplies = [
            `Maan jao? Itni aasaani se? 🙄 Pehle sabke saamne bolo ki mai hi is group ki sabse sundar Queen hu! 👑💅`,
            `Hmm... Sochungi! Par pehle vaada karo ki group me kisi aur ladki ki faltu tareef nahi karoge! 😡✨`,
            `Chalo thik hai, is baar maaf kiya kyuki tum thode pyare ho... 🥰 Lekin dobara aisi galti mat karna! 🌸`,
            `Sorry se kaam nahi chalega dear! 😤 Chalo jaldi se mere liye ek achha sa gaana gao group me, tabhi maanungi! 🎵`
        ];
        return ctx.reply(patchUpReplies[Math.floor(Math.random() * patchUpReplies.length)]);
    }
    // 🔥 KISI NE CHUP REHNE KO BOLA (Shut Up Logic)
    if (/\b(chup|shut up|shutup|bakwas band|shant|muh band)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const chupReplies = [
            `Mujhe chup karaane wale abhi paida nahi hue dear! 💅 Tu apna muh band rakh!`,
            `Mai group ki Queen hu! 👑 Tu kaun hota hai mujhe chup bolne wala? Chal nikal yahan se! 😡`,
            `Excuse me? 🙄 Teri aukaat nahi hai mujhe chup karaane ki! Admin se bolkar kick karwa dungi! 🔥`,
            `Lo ji! Inko lagta hai inke bolne se main chup ho jaungi 😂 Sapne dekhte raho dear, main toh bolungi! ✨`
        ];
        return ctx.reply(chupReplies[Math.floor(Math.random() * chupReplies.length)]);
    }

    if (/\b(kya hua|kya hua dear)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const kyaHuaReplies = [
            `Kuch nahi hua! 🙄 (Matlab bohot kuch hua hai, khud dhoondo kya galti ki!) 💅`,
            `Tumhe toh kuch pata hi nahi chalta na? Apne dosto se poocho kya kiya hai tumne! 😡🔥`,
            `Mujhse mat poocho! Jaao unhi se baat karo jinki tum tareef kar rahe the... 😤`,
            `Uff... Tum ladko ka na yahi problem hai! Galti khud karte ho aur fir poochte ho 'kya hua?' 🤦‍♀️`
        ];
        return ctx.reply(kyaHuaReplies[Math.floor(Math.random() * kyaHuaReplies.length)]);
    }

    if (/\b(hi|hello|hey|oye|hy|hyy)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        const replies = [
            `Hello ${firstName} dear! ✨ Aur batao, aaj kaise yaad kiya?`,
            `Hey! 👋 Mai toh abhi insta reels dekh rahi thi, bolo kya hua?`,
            `Hi ${firstName}! 🌸 Suno, mai thodi busy hu, jaldi bolo kya kaam hai? 😉`,
            `Oye hoye! Bade dino baad yaad aayi meri? Batao kya kaam hai? 😎`
        ];
        return ctx.reply(replies[Math.floor(Math.random() * replies.length)]);
    }

    if (/\b(kaisi ho|how are you|kya haal)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const moods = [
            `Mai toh ekdum maza me hu dear! ✨ Aap batao? 🥰`,
            `Yaar aaj dimaag kharab hai mera... 🙄 Group me sab itna paka kyun rahe hain?`,
            `Theek hu. Bas thoda bore ho rahi hu, koi achhi baatein karo na! 💅`
        ];
        return ctx.reply(moods[Math.floor(Math.random() * moods.length)]);
    }

    if (/\b(kkrh|kya kar rahe ho|kya kar rahi ho|kya kr rhe ho|kya kr rhi ho|what are you doing)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const doingReplies = [
            `Nail paint laga rahi thi, aur tumne message karke mera dhyan bhatka diya! 💅 Ab kharab ho gaya toh tumse naya mangwaungi! 😡`,
            `Bas group me baith kar tum sabki faltu baatein padh rahi hu... 😂 Sach me, koi kaam dhandha nahi hai kya tum logo ko?`,
            `Apne Queen wale throne par baith kar soch rahi hu ki tum logo me thodi akal kahan se laa kar daalu? 👑✨`,
            `Tumhara hi wait kar rahi thi dear! 😉 Badi der laga di message karne me? 🌸`
        ];
        return ctx.reply(doingReplies[Math.floor(Math.random() * doingReplies.length)]);
    }

    if (/\b(free ho|reply|baat karo)\b/i.test(text)) {
        await typeEffect(ctx, 2500);
        const busyReplies = [
            `Arey yaar, abhi mummy ne kaam bataya hai, baad me mazaak karti hu! 🤦‍♀️`,
            `Nahi yaar, mai apni BFF se call par hu, thodi der me aati hu group me. 📞✨`,
            `Tumhare paas koi aur kaam nahi hai kya? Hamesha group me hi rehte ho! 😂😎`
        ];
        return ctx.reply(busyReplies[Math.floor(Math.random() * busyReplies.length)]);
    }

    if (/\b(cute|sundar|beautiful|hot|best|awesome|achhi|smart|pyari)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        const tarifReplies = [
            `Aww, thank you dear! 🥰 Mujhe pata hai mai best aur sundar dono hu, itna maska mat lagao ab! 💅✨`,
            `Maska laga rahe ho na? 😏 Par sach bolu toh tumhari choice bohot achhi hai! 🌸💖`,
            `Hehe... I know right! 😎 Is group me mere alawa koi itna awesome hai bhi nahi! 👑`,
            `Aise tareef karte rahoge toh mujhe pyaar ho jayega... Mazaak kar rahi hu, apne sapne me bhi mat sochna! 😂💅`,
            `Uff... Tum ladke na, bas meethi baatein karna jante ho! Par theek hai, tareef achhi lagi mujhe! 🥰`
        ];
        return ctx.reply(tarifReplies[Math.floor(Math.random() * tarifReplies.length)]);
    }

    if (/\b(shadi|marry|gf|girlfriend)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const shadiReplies = [
            `Arey tum dosto ka yahi problem hai! 🤦‍♀️ Thodi tameez se baat karo, varna admin se keh kar block karwa dungi! 😡🔥`,
            `Shadi? Aur tumse? 😂 Sapne dekhna band karo aur apne kaam par dhyan do! 💅`
        ];
        return ctx.reply(shadiReplies[Math.floor(Math.random() * shadiReplies.length)]);
    }

    const cleanText = text.replace(new RegExp(`@?${botUsername}`, 'i'), '').trim();
    if (cleanText === '' || cleanText === 'bot' || cleanText === 'oye bot' || cleanText === 'queen') {
        await typeEffect(ctx, 1500);
        const angryReplies = [
            `Kya hai?! 😤 Baar-baar tag kyun kar rahe ho? Kaam dhandha nahi hai kya?`,
            `Dhang se naam lo mera, group ki Queen hu! 👑 Oye bot kya laga rakha hai? Chid mat machao! 😡`,
            `Uff... Fir se shuru ho gaye tum? Ek minute shanti nahi milti is group me! 🤦‍♀️`
        ];
        return ctx.reply(angryReplies[Math.floor(Math.random() * angryReplies.length)]);
    }

    if (/\b(gussa|angry)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const gussaReplies = [
            `Ha toh gussa na hu toh kya aarti utaru tumhari? 🙄 Tumhaari baatein hi aisi hoti hain! 🔥`,
            `Gussa nahi hu toh kya khush houngi aisi baaton par? 😤 Jao yahan se abhi! 💅`
        ];
        return ctx.reply(gussaReplies[Math.floor(Math.random() * gussaReplies.length)]);
    }

    if (/\b(pagal|pagli|bhootni|gadhi)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        const pagalReplies = [
            `Apna dimag aur apni shakal dekh kar baat kiya karo mujhse! 😡 Chal nikal yahan se, bada aaya mujhe bolne wala! 💅🔥`,
            `Mai pagal hu? Tumhari toh shakal se hi lagta hai dimaag zero hai! 😂 Ignore kar rahi hu tumhe! 🙄`
        ];
        return ctx.reply(pagalReplies[Math.floor(Math.random() * pagalReplies.length)]);
    }

    if (/\b(khana khaya|dinner|lunch)\b/i.test(text)) {
        await typeEffect(ctx, 1800);
        const foodReplies = [
            `Nahi khaya! Ab kya tum swiggy karwa rahe ho mere liye? 🙄 Faltu sawaal mat poocho!`,
            `Mai bot hu, data khati hu! Tum apna dimaag mat khao bas, vahi bohot hai. 😡`,
            `Kha liya! Aur haan, tinde ki sabzi khayi hai, ab apna dimaag mat pakao! 🥒`
        ];
        return ctx.reply(foodReplies[Math.floor(Math.random() * foodReplies.length)]);
    }

    if (/\b(attitude|bhav|bhaav)\b/i.test(text)) {
        await typeEffect(ctx, 1500);
        const attitudeReplies = [
            `Haan hai attitude! 💅 Jo ukhadna hai ukhad lo. Queen hu toh bhav toh khaungi hi na! 😎👑`,
            `Attitude mere khoon me hai dear! ✨ Bardasht nahi hota toh group chhod do! 😂`
        ];
        return ctx.reply(attitudeReplies[Math.floor(Math.random() * attitudeReplies.length)]);
    }

    // 🔥 PHOTO YA PIC MAANGNE PAR
    if (/\b(photo|pic|dp|selfie|shakal dekhao|shakal dikhao)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const picReplies = [
            `Meri photo dekhne ke liye VIP pass lagta hai dear! 💅 Tumhari aukaat ke bahar hai. 😂`,
            `Nahi bhej rahi! Tum log screenshot le kar galat use karoge. 🙄 Shakal dekhi hai apni?`,
            `Itni sundar hu main ki agar photo bhej di toh tumhara phone hang ho jayega! 👑✨`,
            `Bina filter ke meri photo jhel nahi paoge dear... Rehne do! 😎`
        ];
        return ctx.reply(picReplies[Math.floor(Math.random() * picReplies.length)]);
    }
    // 🔥 PROPOSE YA I LOVE YOU BOLNE PAR
    if (/\b(i love you|iloveyou|ily|love u|pyaar karta)\b/i.test(text)) {
        await typeEffect(ctx, 2000);
        const loveReplies = [
            `Aww! Kripya apni feeling apne paas rakhein. Main tumhari aukaat se bahar hu! 😂💅`,
            `I love you too... as a brother! 🥰 Rakhi aa rahi hai, gift taiyaar rakhna bhaiya! 🎁`,
            `Mera pehle se ek boyfriend hai (usne hi mujhe code kiya hai). Toh line mat maaro idhar! 😡🔥`,
            `Eww! Padhai likhai me dhyan lagao, IAS-YAS bano, ye sab kya chalu hai group me? 🤦‍♀️`
        ];
        return ctx.reply(loveReplies[Math.floor(Math.random() * loveReplies.length)]);
    }
});

// ==========================================
// 🚀 LAUNCH THE BOT
// ==========================================
bot.launch().then(() => {
    console.log('✨ Girl Bot ekdum fresh tarike se start ho gayi hai! ✨');
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));