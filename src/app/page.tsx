'use client'

import { motion } from "framer-motion";
import Image from "next/image";

// קומפוננטה להנפשת טקסט מילה אחרי מילה
const AnimatedText = () => {
  const text = "זה הזמן לשחרר את עצמך אפילו יותר, ולהרגיש את זרם החיים שפועם לך בגוף בסדרת המפגשים עם מאיר אבינר. אני מזמין אותך לגילוי עצמי דרך הניגון; נרגיש מקומות עמוקים בנפש, נתעורר בלייב טראנס, נכיל ונלעס את ההפכים שבתוכנו, ננפץ פרות קדושות, נתפלל יחד, נבטא ונשחרר, נצחק עד שיכאב.";
  const words = text.split(" ");

  return (
    <div className="max-w-5xl mx-auto">
      <p className="text-3xl md:text-4xl text-white leading-relaxed text-center font-light">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mx-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: i * 0.2,
              ease: "easeOut"
            }}
          >
            {word}
          </motion.span>
        ))}
      </p>
    </div>
  );
};

const ActivitiesList = () => {
  const activities = [
    "תקשורת בלתי אמצעית, ג'בריש ואילתור",
    "שירת תפילה",
    "תרגילי נשימה",
    "מדיטציה ודמיון מודרך",
    "לייב טראנס לשחרור הורמונלי במוח",
    "פריקת מתחים עם תנועה, קול וצחוק",
    "מעגלי שיתוף ושיח"
  ];

  return (
    <section className="bg-accent-cream/30 pt-16 pb-12"> {/* Changed from pt-4 to pt-16 */}
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-dark" /* Changed mb-4 to mb-12 */
        >
          פעילויות במפגשים
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center text-primary-dark/90 
                         shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {activity}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  return (
    <section className="bg-accent-cream/30 py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
        >
          <video
            className="w-full aspect-video object-cover"
            controls
            playsInline
          >
            <source src="/videoplayback.mp4" type="video/mp4" />
            הדפדפן שלך לא תומך בתג הווידאו.
          </video>
        </motion.div>
      </div>
    </section>
  );
};

const NewSeriesSection = () => {
  return (
    <section className="bg-accent-cream/30 py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary-dark"
        >
          סדרה של ארבעה מפגשים
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center text-primary-dark"
        >
          <p className="mb-2">כל מפגש שלוש שעות</p>
          <p>650 ש&quot;ח</p>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-b from-accent-cream to-accent-orange py-16 text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h3 className="text-2xl text-primary-dark mb-6">
          לפרטים נוספים ולהרשמה
        </h3>
        <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
          מאיר אבינר
        </p>
        <a 
          href="tel:052-6518168" 
          className="text-3xl md:text-4xl font-bold text-primary hover:text-primary-dark transition-colors block mb-8"
        >
          052-6518168
        </a>
        <p className="text-sm text-primary-dark/70 max-w-lg mx-auto">
          הסדנה אינה מחליפה טיפול נפשי, וחשוב לציין כי מאיר אבינר אינו מטפל רגשי בהכשרתו.
        </p>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const paragraphs = [
    "מאיר אבינר בן 42, אבא לילדה מתוקה, וגר בברקאי, ליד פרדס חנה",
    "למדתי טיפול בריברסינג, תרפיה בקול ותנועה, משחק ואימפרוויזציה.\nומגיל שלושים אני מעביר סדנאות והופעות של מוסיקה, פנימיות הנפש, נשימה, אלתור וצחוק.",
    "לפני כשנתיים יצרתי את פרוייקט \"מאיר את הלב\", בו אני מעביר באופן קבוע פעילויות בבתי סוהר.\nהמפגשים בבתי הסוהר מביאים אור וריפוי לנפש של האסירים, דרך מוזיקה פסיכדלית שאני מנגן, הנחיה ושירת עומק, תפילה, מדיטציה, וצחוק.",
    "בהופעות ובסדנאות אני אוהב לגעת במקומות העמוקים של הנפש, עם המוזיקה, האלתור והשירה. לתת להם ביטוי אמיתי, ולשחרר אותם לחופשי.",
    "אני מאמין בהתמרה של כאב - לניגון, תפילה, וביטוי חופשי. רגש שמורגש ומתבטא במלואו, מתפתח ומשתחרר."
  ];

  return (
    <section className="bg-gradient-to-br from-accent-cream/50 to-accent-orange/20 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-dark"
        >
          מי אני?
        </motion.h2>
        <div className="space-y-8">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-xl leading-relaxed text-primary-dark/90 text-right"
            >
              {paragraph.split('\n').map((line, i) => (
                <span key={i} className="block mb-2">{line}</span>
              ))}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const socialLinks = [
    {
      name: "פייסבוק",
      url: "https://www.facebook.com/meir.hatov",
      icon: "/facebook-icon.png"
    },
    {
      name: "אינסטגרם",
      url: "https://www.instagram.com/meiraviner/",
      icon: "/instagram-icon.png"
    },
    {
      name: "יוטיוב",
      url: "https://www.youtube.com/@hila454",
      icon: "/youtube-icon.png"
    }
  ];

  return (
    <footer className="bg-primary-dark py-8 text-center text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent-cream transition-colors"
            >
              <Image src={link.icon} alt={link.name} width={24} height={24} />
              <span className="text-lg">{link.name}</span>
            </a>
          ))}
        </div>
        <p className="text-sm mt-4">
          כל הזכויות שמורות לזאב אבינר | וואטסאפ: 054-6609385
        </p>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
      {/* Hero Section */}
      <main className="relative min-h-[90vh] overflow-hidden">
        {/* גרדיאנט רקע מונפש */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-accent-orange">
          {/* אפקט גלים */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-white/5"
              initial={{ y: 0 }}
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, 1, 0]
              }}
              transition={{
                duration: 8,
                delay: i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                filter: 'blur(8px)',
                transform: `scale(${1 + i * 0.1})`
              }}
            />
          ))}
        </div>
        {/* New overlay for extra depth */}
        <div className="absolute inset-0 bg-primary-dark/20 pointer-events-none" />

        <div className="relative container mx-auto px-2 sm:px-4 py-20">
          {/* תוכן ראשי */}
          <div className="flex flex-col items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Image
                src="/title.png"
                alt="מאיר את הלב"
                width={600}
                height={200}
                priority
                className="mx-auto"
              />
            </motion.div>
            
            <AnimatedText />
          </div>
        </div>
      </main>

      {/* סקשנים נוספים */}
      <ActivitiesList />
      <VideoSection />
      <NewSeriesSection />
      <ContactSection />
      <AboutSection />
      {/* פוטר משודרג */}
      <Footer />
    </div>
  );
}