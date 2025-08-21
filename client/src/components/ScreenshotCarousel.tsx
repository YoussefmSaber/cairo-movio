import { useTranslation } from "react-i18next";
import phoneMockup1 from "@/assets/phone-mockup-1.png";
import phoneMockup2 from "@/assets/phone-mockup-2.png";
import phoneMockup3 from "@/assets/phone-mockup-3.png";
import phoneMockup4 from "@/assets/phone-mockup-4.png";

export function ScreenshotCarousel() {
  const { t } = useTranslation();

  const screenshots = [
    {
      id: 1,
      image: phoneMockup1,
      title: t('discoverMoviesTv'),
      description: t('discoverMoviesTvDesc')
    },
    {
      id: 2,
      image: phoneMockup2,
      title: t('detailedInfo'),
      description: t('detailedInfoDesc')
    },
    {
      id: 3,
      image: phoneMockup3,
      title: t('exploreMovies'),
      description: t('exploreMoviesDesc')
    },
    {
      id: 4,
      image: phoneMockup4,
      title: t('offlineAccess'),
      description: t('offlineAccessDesc')
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Grid Layout - 3x2 on desktop, 2x3 on tablets, 1x6 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {screenshots.map((screenshot) => (
          <div key={screenshot.id} className="space-y-6">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={screenshot.image}
                alt={screenshot.title}
                className="w-64 h-auto hover-lift rounded-2xl"
              />
            </div>
            {/* Text Content */}
            <div className="text-center space-y-3">
              <h3 className="text-xl font-bold text-foreground">
                {screenshot.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {screenshot.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}