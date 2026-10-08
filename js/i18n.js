// ============ BehindTheReels — Arabic translation (EN text → AR html) ============
// Keys are matched against element text with all whitespace removed, so line breaks in the HTML don't matter.
const AR_PAIRS = [
  // nav / footer
  [`Home`, `الرئيسية`], [`Services`, `خدماتنا`], [`About`, `من نحن`], [`Join Us`, `انضم لنا`], [`Contact`, `تواصل معنا`],
  [`Become a Client`, `انضم كعميل`], [`Become our Client`, `انضم كعميل`], [`Become our client`, `انضم كعميل`],
  [`Sharing insights and stories behind the reels. Content that stops the scroll — made with intention.`, `بنشارك الأفكار والحكايات اللي ورا الريلز. محتوى بيوقّف السكرول — معمول بهدف.`],
  [`Explore`, `استكشف`], [`Work with us`, `اشتغل معانا`], [`Team Hiring`, `توظيف الفريق`], [`Models & UGC`, `موديلز و UGC`],
  [`WhatsApp`, `واتساب`], [`Instagram`, `إنستجرام`], [`TikTok`, `تيك توك`], [`Facebook`, `فيسبوك`],
  [`© ${new Date().getFullYear()} BehindTheReels. All rights reserved.`, `© ${new Date().getFullYear()} BehindTheReels. جميع الحقوق محفوظة.`],
  [`Made for the scroll ✦`, `معمول للسكرول ✦`],

  // home
  [`Reels & content studio`, `استوديو ريلز ومحتوى`],
  [`We make the reels people can't skip.`, `<span class="line">بنعمل <span class="hl-green">ريلز</span></span><span class="line">محدش يقدر</span><span class="line outline-text">يعدّيها.</span>`],
  [`BehindTheReels is a creative content team building short-form video, UGC and social stories that turn scrollers into followers — and followers into customers.`, `BehindTheReels فريق محتوى إبداعي بيعمل فيديوهات قصيرة ومحتوى UGC وقصص سوشيال ميديا بتحوّل اللي بيسكرول لمتابع — والمتابع لعميل.`],
  [`See what we do`, `شوف بنعمل إيه`], [`Follow along`, `تابعنا`],
  [`The story behind every frame 🎬`, `الحكاية ورا كل كادر 🎬`],
  [`From idea to viral — in one take ✨`, `من فكرة لتريند — في تيك واحد ✨`],
  [`REC · Shooting now`, `<span class="dot"></span> REC · <b>بنصوّر دلوقتي</b>`],
  [`🎥 Script → Shoot → Post`, `🎥 سكريبت ← تصوير ← <b>نشر</b>`],
  [`Reels`, `ريلز`], [`UGC`, `UGC`], [`Content Strategy`, `استراتيجية المحتوى`], [`Video Editing`, `المونتاج`],
  [`Models`, `موديلز`], [`Storytelling`, `حكي القصص`], [`Social Media`, `سوشيال ميديا`], [`Stories`, `ستوريز`], [`Ads`, `إعلانات`],
  [`What we do`, `بنعمل إيه`],
  [`Everything your brand needs to own the feed.`, `كل اللي البراند بتاعك محتاجه <span class="hl-pink">عشان يكسب الفيد.</span>`],
  [`From the first idea to the final cut, we handle the full content pipeline so you can focus on running your business.`, `من أول فكرة لحد آخر قطعة مونتاج، إحنا ماسكين المحتوى كله عشان تركّز إنت في البيزنس بتاعك.`],
  [`Reels Production`, `إنتاج الريلز`],
  [`Short-form vertical videos made to hook in the first second and keep people watching till the end.`, `فيديوهات قصيرة طولية بتشد من أول ثانية وبتخلي الناس تكمل للآخر.`],
  [`UGC & Models`, `UGC وموديلز`],
  [`Real faces, real voices. We connect your brand with creators and models who make content feel authentic.`, `وشوش حقيقية وأصوات حقيقية. بنوصّل البراند بتاعك بكريتورز وموديلز بيخلّوا المحتوى طبيعي وصادق.`],
  [`Ideas, scripts and posting plans built around your audience — so every reel has a reason to exist.`, `أفكار وسكريبتات وخطط نشر مبنية على جمهورك — عشان كل ريل يبقى ليه سبب.`],
  [`All services →`, `كل الخدمات ←`],
  [`Behind the scenes`, `ورا الكواليس`],
  [`How a reel is born.`, `إزاي الريل <span class="hl-green">بيتولد.</span>`],
  [`Brief`, `البريف`], [`Tell us about your brand, goals and audience through our client form.`, `احكيلنا عن البراند وأهدافك وجمهورك من خلال فورم العملاء.`],
  [`Concept`, `الفكرة`], [`We pitch hooks, scripts and visual ideas tailored to your niche.`, `بنقترح هوكس وسكريبتات وأفكار بصرية مناسبة لمجالك.`],
  [`Shoot`, `التصوير`], [`Our team and creators bring the ideas to life — on location or in studio.`, `فريقنا والكريتورز بيحوّلوا الأفكار لحقيقة — في اللوكيشن أو في الاستوديو.`],
  [`Edit & Post`, `مونتاج ونشر`], [`Fast-paced edits, captions, music and trends — ready to publish.`, `مونتاج سريع وكابشنز ومزيكا وتريندات — جاهز للنشر.`],
  [`Who we are`, `مين إحنا`],
  [`Every great reel has a story behind it. We're the people who tell it.`, `ورا كل ريل عظيم <span class="hl-yellow">حكاية.</span> وإحنا اللي بنحكيها.`],
  [`We're a team of creators, editors and storytellers obsessed with short-form video. We share the insights, tricks and stories behind the content you love — and we use them to grow brands like yours.`, `إحنا فريق من الكريتورز والمونتيرز والحكّائين مهووسين بالفيديو القصير. بنشارك الأفكار والتريكات والحكايات اللي ورا المحتوى اللي بتحبه — وبنستخدمها عشان نكبّر براندات زي براندك.`],
  [`Meet the studio`, `اتعرف على الاستوديو`],
  [`We're hiring`, `بنوظّف`], [`Join the team`, `انضم للفريق`],
  [`Editors, videographers, content creators and social media pros — we want to hear from you.`, `مونتيرز ومصورين وصناع محتوى ومحترفين سوشيال ميديا — عايزين نسمع منك.`],
  [`Apply now`, `قدّم دلوقتي`], [`Casting`, `كاستنج`], [`Models & UGC creators`, `موديلز وصناع UGC`],
  [`Want to be the face of the next viral reel? Apply to join our models & UGC talent network.`, `نفسك تبقى الوش اللي في الريل الجاي اللي هيكسّر الدنيا؟ قدّم وانضم لشبكة الموديلز وصناع الـ UGC بتاعتنا.`],
  [`Apply as talent`, `قدّم كموهبة`],
  [`Ready when you are`, `جاهزين وقت ما تبقى جاهز`],
  [`Let's make your next reel the one.`, `يلا نخلي <span class="hl-green">الريل</span> الجاي بتاعك هو اللي يفرق.`],
  [`Fill in our quick client form or message us directly on WhatsApp — we'll get back to you fast.`, `املا فورم العملاء السريع أو كلمنا على واتساب على طول — وهنرد عليك بسرعة.`],
  [`Chat on WhatsApp`, `كلمنا على واتساب`],

  // services
  [`Content that moves people.`, `محتوى <span class="hl-green">بيحرّك</span><br /><span class="outline-text">الناس.</span>`],
  [`One team for the whole journey — strategy, scripting, talent, shooting and editing. Pick what you need, or let us run it all.`, `فريق واحد للرحلة كلها — استراتيجية وسكريبت وموديلز وتصوير ومونتاج. اختار اللي محتاجه، أو سيبنا نمسك كل حاجة.`],
  [`Vertical short-form video made for Instagram, TikTok and Facebook.`, `فيديوهات قصيرة طولية معمولة لإنستجرام وتيك توك وفيسبوك.`],
  [`Hook-first concepts`, `أفكار مبنية على الهوك`], [`On-location & studio shoots`, `تصوير في اللوكيشن والاستوديو`], [`Trend-ready formats`, `فورمات جاهزة للتريند`],
  [`UGC Content`, `محتوى UGC`],
  [`Authentic creator-style videos that feel native to the feed — and convert.`, `فيديوهات بأسلوب الكريتورز طبيعية على الفيد — وبتبيع.`],
  [`Product reviews & unboxings`, `ريفيوهات وأنبوكسينج للمنتجات`], [`Testimonials`, `آراء العملاء`], [`Ad-ready variations`, `نسخ جاهزة للإعلانات`],
  [`Models & Talent`, `موديلز ومواهب`],
  [`Access to our network of models and UGC creators to front your brand.`, `وصول لشبكة الموديلز وصناع الـ UGC بتاعتنا عشان يمثّلوا البراند بتاعك.`],
  [`Casting to your brief`, `كاستنج حسب البريف بتاعك`], [`Diverse faces & styles`, `وشوش وستايلات متنوعة`], [`Ready-to-shoot talent`, `مواهب جاهزة للتصوير`],
  [`Fast, punchy edits with captions, sound design and motion that keep retention high.`, `مونتاج سريع وقوي بكابشنز وساوند ديزاين وموشن بيحافظوا على انتباه المشاهد.`],
  [`Subtitles & text overlays`, `ترجمة ونصوص على الفيديو`], [`Music & sound effects`, `مزيكا ومؤثرات صوتية`], [`Colour grading`, `كلر جريدنج`],
  [`A clear plan for what to post, when, and why — built around your audience.`, `خطة واضحة تنشر إيه وإمتى وليه — مبنية على جمهورك.`],
  [`Content pillars`, `محاور المحتوى`], [`Monthly calendars`, `كالندر شهري`], [`Performance reviews`, `مراجعة الأداء`],
  [`Scriptwriting`, `كتابة السكريبت`],
  [`Hooks, scripts and storyboards that turn your message into a story worth watching.`, `هوكس وسكريبتات وستوري بورد بيحوّلوا رسالتك لحكاية تستاهل تتشاف.`],
  [`Scroll-stopping hooks`, `هوكس بتوقّف السكرول`], [`Storytelling scripts`, `سكريبتات بأسلوب الحكي`], [`Arabic & English`, `عربي وإنجليزي`],
  [`FAQ`, `أسئلة شائعة`], [`Questions, answered.`, `أسئلتك، <span class="hl-yellow">ليها إجابة.</span>`],
  [`How do we start working together?`, `إزاي نبدأ نشتغل مع بعض؟`],
  [`Fill in our "Become our Client" form with your brand details and goals. Our team will review it and reach out to schedule a quick call.`, `املا فورم «انضم كعميل» بتفاصيل البراند وأهدافك. فريقنا هيراجعه ويكلمك عشان نحدد مكالمة سريعة.`],
  [`Do you provide models and creators?`, `بتوفّروا موديلز وكريتورز؟`],
  [`Yes. We have a growing network of models and UGC creators and can cast talent based on your brand and audience.`, `أيوه. عندنا شبكة بتكبر من الموديلز وصناع الـ UGC، وبنختار المواهب حسب البراند وجمهورك.`],
  [`Which platforms do you create for?`, `بتعملوا محتوى لأنهي منصات؟`],
  [`We create primarily for Instagram Reels, TikTok and Facebook — vertical short-form content that works across all of them.`, `أساساً لإنستجرام ريلز وتيك توك وفيسبوك — محتوى قصير طولي بيشتغل عليهم كلهم.`],
  [`Can I just order editing?`, `ينفع أطلب مونتاج بس؟`],
  [`Absolutely. Send us your raw footage and we'll turn it into polished, ready-to-post reels.`, `أكيد. ابعتلنا الفوتيج الخام وإحنا نحوّله لريلز متظبطة وجاهزة للنشر.`],
  [`How fast can you deliver?`, `بتسلّموا في قد إيه؟`],
  [`Timelines depend on the project size. Message us on WhatsApp with your needs and we'll give you a clear timeline.`, `المدة بتعتمد على حجم المشروع. ابعتلنا على واتساب اللي محتاجه وهنديك تايملاين واضح.`],
  [`Got a brand? Let's give it a story.`, `عندك براند؟ يلا نديله <span class="hl-pink">حكاية.</span>`],
  [`Tell us what you need and we'll build the right content plan for you.`, `قولنا محتاج إيه وإحنا نعملك خطة المحتوى المناسبة.`],
  [`WhatsApp us`, `كلمنا واتساب`],

  // about
  [`About us`, `من نحن`],
  [`The story behind the reels.`, `الحكاية <span class="hl-pink">اللي ورا</span><br /><span class="outline-text">الريلز.</span>`],
  [`We started by sharing the insights and stories behind the content everyone watches. Today we help brands create that content themselves.`, `بدأنا بإننا نشارك الأفكار والحكايات اللي ورا المحتوى اللي الكل بيتفرج عليه. النهارده بنساعد البراندات يعملوا المحتوى ده بنفسهم.`],
  [`A reel lasts 30 seconds. The impression it leaves should last a lot longer.`, `الريل مدته <span class="hl-green">٣٠ ثانية.</span> بس الأثر اللي بيسيبه لازم يعيش أطول بكتير.`],
  [`BehindTheReels is a creative content studio focused on short-form video. We combine strategy, storytelling and production with a network of talented creators and models.`, `BehindTheReels استوديو محتوى إبداعي متخصص في الفيديو القصير. بنجمع بين الاستراتيجية والحكي والإنتاج مع شبكة من الكريتورز والموديلز الموهوبين.`],
  [`Whether you're a growing local brand or an established business, we help you show up on the feed with content that feels real, looks great and actually gets results.`, `سواء إنت براند محلي لسه بيكبر أو بيزنس كبير، بنساعدك تظهر على الفيد بمحتوى حقيقي وشكله حلو وبيجيب نتايج فعلاً.`],
  [`What we believe`, `بنؤمن بإيه`], [`Our values.`, `قيمنا <span class="hl-yellow">الأساسية.</span>`],
  [`The principles behind every frame we shoot and every cut we make.`, `المبادئ اللي ورا كل كادر بنصوّره وكل قطعة بنمنتجها.`],
  [`Story first`, `الحكاية الأول`], [`Pretty visuals fade. Stories stick. Every reel starts with a reason to watch.`, `الصورة الحلوة بتتنسي، والحكاية بتفضل. كل ريل بيبدأ بسبب يخليك تتفرج.`],
  [`Authentic over perfect`, `الحقيقي أهم من المثالي`], [`Real people and real moments beat over-produced ads on social.`, `الناس الحقيقية واللحظات الحقيقية بتكسب الإعلانات المتكلّفة على السوشيال.`],
  [`Trend-aware`, `فاهمين التريند`], [`We live on the feed, so we know what's working right now — and what's next.`, `إحنا عايشين على الفيد، فعارفين إيه اللي شغال دلوقتي — وإيه اللي جاي.`],
  [`Results-driven`, `هدفنا النتايج`], [`Views are nice. Growth, engagement and sales are the goal.`, `المشاهدات حلوة، بس النمو والتفاعل والمبيعات هما الهدف.`],
  [`The crew`, `الفريق`], [`Creators, editors & storytellers.`, `كريتورز ومونتيرز <span class="hl-green">وحكّائين.</span>`],
  [`A growing team that works together to bring every idea to life.`, `فريق بيكبر وبيشتغل مع بعض عشان كل فكرة تتحول لحقيقة.`],
  [`Production`, `الإنتاج`], [`Videographers and directors who capture every shot with intention.`, `مصورين ومخرجين بيصوّروا كل لقطة بهدف.`],
  [`Post-production`, `ما بعد الإنتاج`], [`Editors who turn raw footage into fast, addictive reels.`, `مونتيرز بيحوّلوا الفوتيج الخام لريلز سريعة تدمن عليها.`],
  [`Talent`, `المواهب`], [`Models and UGC creators who give your brand a face and a voice.`, `موديلز وصناع UGC بيدّوا البراند بتاعك وش وصوت.`],
  [`Want to be part of the story?`, `عايز تبقى جزء من <span class="hl-green">الحكاية؟</span>`],
  [`Work with us as a client, or join the team behind the reels.`, `اشتغل معانا كعميل، أو انضم للفريق اللي ورا الريلز.`],

  // join
  [`Careers & casting`, `وظايف وكاستنج`],
  [`Get behind the reels.`, `خليك <span class="hl-green">ورا</span><br /><span class="outline-text">الريلز.</span>`],
  [`We're always looking for talented people — on camera and behind it. Pick your path and apply in a couple of minutes.`, `دايماً بندوّر على ناس موهوبة — قدام الكاميرا ووراها. اختار طريقك وقدّم في دقيقتين.`],
  [`Team hiring`, `توظيف الفريق`], [`Join the crew`, `انضم للكرو`],
  [`Help us create content for brands across Instagram, TikTok and Facebook.`, `ساعدنا نعمل محتوى لبراندات على إنستجرام وتيك توك وفيسبوك.`],
  [`Video editors`, `مونتيرز فيديو`], [`Videographers & photographers`, `مصورين فيديو وفوتوغرافيا`],
  [`Content creators & scriptwriters`, `صناع محتوى وكتّاب سكريبت`], [`Social media specialists`, `متخصصين سوشيال ميديا`],
  [`Apply to the team →`, `قدّم للفريق ←`], [`Be the face`, `خليك الوش`],
  [`Join our talent network and get booked for brand reels, ads and UGC campaigns.`, `انضم لشبكة المواهب بتاعتنا واتحجز لريلز وإعلانات وحملات UGC لبراندات.`],
  [`Models — all looks & styles`, `موديلز — كل الأشكال والستايلات`], [`UGC creators`, `صناع UGC`],
  [`Voice-over & presenters`, `فويس أوفر ومذيعين`], [`Beginners welcome`, `المبتدئين أهلاً بيهم`],
  [`Apply as talent →`, `قدّم كموهبة ←`],
  [`How it works`, `بتمشي إزاي`], [`From application to first shoot.`, `من التقديم لحد <span class="hl-pink">أول تصوير.</span>`],
  [`Apply`, `قدّم`], [`Fill in the form that matches your role — it only takes a few minutes.`, `املا الفورم المناسب لدورك — مش هياخد غير دقايق.`],
  [`Review`, `المراجعة`], [`Our team reviews your profile, portfolio or samples.`, `فريقنا بيراجع بروفايلك أو البورتفوليو أو النماذج بتاعتك.`],
  [`Chat`, `دردشة`], [`If it's a match, we reach out to get to know you better.`, `لو في توافق، هنكلمك عشان نتعرف عليك أكتر.`],
  [`Create`, `ابدأ`], [`Start working with us on real brand projects.`, `ابدأ تشتغل معانا على مشاريع حقيقية لبراندات.`],
  [`Questions before you apply?`, `عندك أسئلة قبل ما <span class="hl-green">تقدّم؟</span>`],
  [`Send us a message on WhatsApp and we'll be happy to help.`, `ابعتلنا رسالة على واتساب وهنكون مبسوطين نساعدك.`],

  // contact
  [`Let's talk reels.`, `يلا <span class="hl-green">نتكلم</span><br /><span class="outline-text">ريلز.</span>`],
  [`The fastest way to reach us is WhatsApp. You can also find us on all our socials — or start a project through our client form.`, `أسرع طريقة توصلنا بيها هي واتساب. وتقدر تلاقينا على كل السوشيال بتاعتنا — أو تبدأ مشروع من فورم العملاء.`],
  [`Brands`, `البراندات`], [`Tell us about your brand and goals.`, `احكيلنا عن البراند وأهدافك.`], [`Open form →`, `افتح الفورم ←`],
  [`Team`, `الفريق`], [`Hiring`, `التوظيف`], [`Editors, videographers & creatives.`, `مونتيرز ومصورين ومبدعين.`], [`Apply →`, `قدّم ←`],
  [`Join our talent network.`, `انضم لشبكة المواهب بتاعتنا.`],
];

const squash = (s) => s.replace(/\s+/g, "");
const AR = new Map(AR_PAIRS.map(([en, ar]) => [squash(en), ar]));
const SELECTOR = "h1,h2,h3,h4,h5,p,li,a,summary,small,.eyebrow,.tag,.cap,.floating-tag,.marquee-track span,.footer-bottom span";
const original = new WeakMap();

function applyLang(lang) {
  const ar = lang === "ar";
  document.documentElement.lang = ar ? "ar" : "en";
  document.documentElement.dir = ar ? "rtl" : "ltr";

  document.querySelectorAll(SELECTOR).forEach((el) => {
    if (!ar) {
      if (original.has(el)) el.innerHTML = original.get(el);
      return;
    }
    if (!original.has(el)) original.set(el, el.innerHTML);
    // a wrapper whose only content is one child element: let the child be translated instead
    if (el.children.length === 1 && squash(el.textContent) === squash(el.children[0].textContent) && !el.querySelector("svg")) return;
    const value = AR.get(squash(el.textContent));
    if (!value) return;
    if (el.querySelector("svg")) {
      // keep icons (e.g. arrow in buttons): replace only the text node
      const node = [...el.childNodes].find((n) => n.nodeType === 3 && n.textContent.trim());
      if (node) node.textContent = value + " ";
    } else if (el.children.length === 0 && !/[<>]/.test(value)) {
      el.textContent = value;
    } else {
      el.innerHTML = value;
    }
  });

  const btn = document.querySelector(".lang-toggle");
  if (btn) btn.textContent = ar ? "EN" : "عربي";
  try { localStorage.setItem("btr-lang", lang); } catch (e) {}
}

function initLang() {
  let lang = new URLSearchParams(location.search).get("lang");
  if (!lang) { try { lang = localStorage.getItem("btr-lang"); } catch (e) {} }
  if (lang === "ar") applyLang("ar");
  document.querySelector(".lang-toggle")?.addEventListener("click", () =>
    applyLang(document.documentElement.lang === "ar" ? "en" : "ar")
  );
}
