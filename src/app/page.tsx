'use client'

import { motion } from "framer-motion";
import Image from "next/image";

// קומפוננטה להנפשת טקסט מילה אחרי מילה
const AnimatedText = () => {
  const text = "זה הזמן לשחרר את עצמך אפילו יותר, ולהרגיש את זרם החיים שפועם לך בגוף בסדרת המפגשים עם מאיר אבינר. אני מזמין אותך לגילוי עצמי דרך הניגון: נרגיש מקומות עמוקים בנפש, נתעורר בלייב טראנס, נכיל ונלעס את ההפכים שבתוכנו, ננפץ פרות קדושות, נתפלל יחד, נבטא ונשחרר, נצחק עד שיכאב.";
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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-center text-primary-dark/80 max-w-md mx-auto mb-8"
        >
          כל מפגש שלוש שעות
          <br />
          650 ש&quot;ח
        </motion.p>
      </div>
    </section>
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

      {/* פוטר משודרג */}
      <footer className="bg-gradient-to-b from-accent-cream to-accent-orange py-8 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
            מאיר אבינר
          </p>
          <a 
            href="tel:052-6518168" 
            className="text-3xl md:text-4xl font-bold text-primary hover:text-primary-dark transition-colors"
          >
            052-6518168
          </a>
        </div>
      </footer>
    </div>
  );
}