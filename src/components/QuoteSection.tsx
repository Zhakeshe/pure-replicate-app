import { useState } from "react";
import { QUOTE_AUTHOR_IMAGE_URL, SPEAKER_IMAGE_FALLBACK_URL } from "@/lib/constants";

const QuoteSection = () => {
  const [avatarSrc, setAvatarSrc] = useState(QUOTE_AUTHOR_IMAGE_URL);

  return (
    <section className="py-14 md:py-20 px-6 lg:px-16 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-[#e8e0d1] shadow-[0_24px_60px_rgba(0,0,0,0.08)] rounded-[32px] p-8 md:p-12 lg:p-14">
          

          <blockquote className="font-display text-lg md:text-xl lg:text-2xl text-[#2b1b15] leading-relaxed md:leading-[1.75] max-w-4xl">
            Бағдарламаларды көргеннен кейін, сенде басқаша таңдау жасауға мүмкіндік ашылады.
            Ол таңдау басқа болашаққа жетелейді. Ол болашақ сені басқа нәтижелерге апарады.
            Сен өміріңді сырттан емес, іштен өзгертуді бастайсың.
          </blockquote>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 lg:gap-8 text-[#2b1b15]">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-14 h-14 rounded-full bg-[#f7f3dc] border border-[#e6d9aa] shadow-inner overflow-hidden">
                <img
                  src={avatarSrc}
                  onError={() => setAvatarSrc(SPEAKER_IMAGE_FALLBACK_URL)}
                  alt="Құлан Мектепберген"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="leading-snug">
                <div className="text-base md:text-lg font-semibold">
                  Құлан Мектепберген
                </div>
                <div className="text-sm md:text-base text-[#8a0f27]">
                  коуч, тренер
                </div>
              </div>
            </div>

            <a
              href="https://www.instagram.com/kulanman"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#8a0f27] text-white font-semibold"
            >
              Инстаграмға өту
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
