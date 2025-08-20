import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Header
      appName: 'Movio',
      
      // Hero Section
      heroTagline: 'Powered by TMDb API',
      heroTitle: 'Your Gateway to',
      heroTitleHighlight: 'Movies',
      heroTitleEnd: '& Series',
      heroDescription: 'Discover ratings, cast info, trailers, and more—all powered by The Movie DB API.',
      downloadLatest: 'Download Latest Version',
      downloadNote: 'Always fetches the latest version from Firebase App Distribution',
      
      // About Section
      aboutTitle: 'About Movio',
      aboutDescription: 'Movio brings movie & TV series details right at your fingertips. Discover ratings, cast info, trailers, and more—all powered by The Movie DB API.',
      comprehensiveSearch: 'Comprehensive Search',
      comprehensiveSearchDesc: 'Find any movie or TV series instantly with our powerful search engine.',
      realTimeData: 'Real-Time Data',
      realTimeDataDesc: 'Get the latest ratings, reviews, and information from TMDb\'s extensive database.',
      personalLists: 'Personal Lists',
      personalListsDesc: 'Create and manage your personal watchlists and favorite collections.',
      
      // Features Section
      featuresTitle: 'Amazing Features',
      featuresDescription: 'Everything you need to explore and discover your next favorite movie or TV series.',
      exploreMovies: '🎥 Explore Movies & TV Series',
      exploreMoviesDesc: 'Browse through an extensive catalog of movies and TV shows with detailed information, ratings, and reviews.',
      realtimeTrending: '🌟 Get Real-Time Trending Titles',
      realtimeTrendingDesc: 'Stay updated with the latest trending content, popular releases, and what\'s currently hot in entertainment.',
      offlineAccess: '💾 Offline Access & Favorite Lists',
      offlineAccessDesc: 'Save your favorite movies and shows for offline viewing and create personalized watchlists.',
      smartNotifications: '🔔 Smart Notifications for New Releases',
      smartNotificationsDesc: 'Get notified about new releases from your favorite actors, directors, or TV series.',
      
      // Screenshots Section
      screenshotsTitle: 'See Movio in Action',
      screenshotsDescription: 'Take a look at the beautiful and intuitive interface designed for movie enthusiasts.',
      discoverMoviesTv: 'Discover Movies & TV Series',
      discoverMoviesTvDesc: 'Browse through thousands of movies and TV shows with beautiful poster layouts.',
      detailedInfo: 'Detailed Information',
      detailedInfoDesc: 'Get comprehensive details including cast, ratings, and synopsis for every title.',
      trendingContent: 'Trending Content',
      trendingContentDesc: 'Stay updated with the latest trending movies and TV series worldwide.',
      
      // Testimonials Section
      testimonialsTitle: 'What Users Say',
      testimonialsDescription: 'Join thousands of satisfied movie enthusiasts using Movio.',
      testimonial1: 'Movio makes me feel like a movie buff! The interface is so smooth and finding new movies has never been easier. 🍿',
      testimonial2: 'Finally, an app that gets movie discovery right. The trending section keeps me updated with what\'s hot right now!',
      testimonial3: 'I love how detailed the information is. Cast, crew, ratings - everything I need to decide what to watch next.',
      
      // Final Download Section
      finalDownloadTitle: 'Get the App and Start Exploring Now!',
      finalDownloadDescription: 'Download Movio today and discover your next favorite movie or TV series. Available for Android with iOS coming soon.',
      androidAvailable: 'Android Available',
      iosComingSoon: 'iOS Coming Soon',
      
      // Footer
      poweredBy: 'Powered by',
      copyright: '© 2024 Movio. Your cinematic companion.',
      
      // Accessibility
      backToTop: 'Back to top',
      toggleTheme: 'Toggle theme',
      previousScreenshot: 'Previous screenshot',
      nextScreenshot: 'Next screenshot',
      goToSlide: 'Go to slide'
    }
  },
  ar: {
    translation: {
      // Header
      appName: 'موفيو',
      
      // Hero Section
      heroTagline: 'مدعوم بواجهة برمجة التطبيقات TMDb',
      heroTitle: 'بوابتك إلى',
      heroTitleHighlight: 'الأفلام',
      heroTitleEnd: 'والمسلسلات',
      heroDescription: 'اكتشف التقييمات ومعلومات الممثلين والإعلانات التشويقية والمزيد - كل ذلك مدعوم بواجهة برمجة التطبيقات من قاعدة بيانات الأفلام.',
      downloadLatest: 'تحميل أحدث إصدار',
      downloadNote: 'يحصل دائماً على أحدث إصدار من Firebase App Distribution',
      
      // About Section
      aboutTitle: 'حول موفيو',
      aboutDescription: 'يجلب موفيو تفاصيل الأفلام والمسلسلات التلفزيونية في متناول يدك. اكتشف التقييمات ومعلومات الممثلين والإعلانات التشويقية والمزيد - كل ذلك مدعوم بواجهة برمجة التطبيقات من قاعدة بيانات الأفلام.',
      comprehensiveSearch: 'بحث شامل',
      comprehensiveSearchDesc: 'ابحث عن أي فيلم أو مسلسل تلفزيوني فورياً بمحرك البحث القوي لدينا.',
      realTimeData: 'بيانات في الوقت الفعلي',
      realTimeDataDesc: 'احصل على أحدث التقييمات والمراجعات والمعلومات من قاعدة بيانات TMDb الواسعة.',
      personalLists: 'قوائم شخصية',
      personalListsDesc: 'أنشئ وأدر قوائم المشاهدة الشخصية ومجموعات المفضلة.',
      
      // Features Section
      featuresTitle: 'ميزات رائعة',
      featuresDescription: 'كل ما تحتاجه لاستكشاف واكتشاف فيلمك أو مسلسلك المفضل التالي.',
      exploreMovies: '🎥 استكشف الأفلام والمسلسلات التلفزيونية',
      exploreMoviesDesc: 'تصفح عبر كتالوج واسع من الأفلام والعروض التلفزيونية مع معلومات مفصلة وتقييمات ومراجعات.',
      realtimeTrending: '🌟 احصل على العناوين الرائجة في الوقت الفعلي',
      realtimeTrendingDesc: 'ابق محدثاً بأحدث المحتوى الرائج والإصدارات الشعبية وما هو ساخن حالياً في الترفيه.',
      offlineAccess: '💾 وصول غير متصل وقوائم المفضلة',
      offlineAccessDesc: 'احفظ أفلامك وعروضك المفضلة للمشاهدة غير المتصلة وأنشئ قوائم مشاهدة شخصية.',
      smartNotifications: '🔔 إشعارات ذكية للإصدارات الجديدة',
      smartNotificationsDesc: 'احصل على إشعارات حول الإصدارات الجديدة من ممثليك أو مخرجيك أو مسلسلاتك التلفزيونية المفضلة.',
      
      // Screenshots Section
      screenshotsTitle: 'شاهد موفيو في العمل',
      screenshotsDescription: 'ألق نظرة على الواجهة الجميلة والبديهية المصممة لعشاق الأفلام.',
      discoverMoviesTv: 'اكتشف الأفلام والمسلسلات التلفزيونية',
      discoverMoviesTvDesc: 'تصفح عبر آلاف الأفلام والعروض التلفزيونية مع تخطيطات ملصقات جميلة.',
      detailedInfo: 'معلومات مفصلة',
      detailedInfoDesc: 'احصل على تفاصيل شاملة تشمل الممثلين والتقييمات والملخص لكل عنوان.',
      trendingContent: 'المحتوى الرائج',
      trendingContentDesc: 'ابق محدثاً بأحدث الأفلام والمسلسلات التلفزيونية الرائجة عالمياً.',
      
      // Testimonials Section
      testimonialsTitle: 'ما يقوله المستخدمون',
      testimonialsDescription: 'انضم إلى آلاف عشاق الأفلام الراضين الذين يستخدمون موفيو.',
      testimonial1: 'موفيو يجعلني أشعر وكأنني خبير أفلام! الواجهة سلسة جداً وإيجاد أفلام جديدة لم يكن أسهل من ذلك. 🍿',
      testimonial2: 'أخيراً، تطبيق يفهم اكتشاف الأفلام بالطريقة الصحيحة. قسم الرائج يبقيني محدثاً بما هو ساخن الآن!',
      testimonial3: 'أحب مدى تفصيل المعلومات. الممثلون والطاقم والتقييمات - كل ما أحتاجه لأقرر ما أشاهده بعد ذلك.',
      
      // Final Download Section
      finalDownloadTitle: 'احصل على التطبيق وابدأ الاستكشاف الآن!',
      finalDownloadDescription: 'حمل موفيو اليوم واكتشف فيلمك أو مسلسلك المفضل التالي. متوفر لأندرويد مع قدوم iOS قريباً.',
      androidAvailable: 'متوفر لأندرويد',
      iosComingSoon: 'iOS قادم قريباً',
      
      // Footer
      poweredBy: 'مدعوم بواسطة',
      copyright: '© 2024 موفيو. رفيقك السينمائي.',
      
      // Accessibility
      backToTop: 'العودة إلى الأعلى',
      toggleTheme: 'تبديل المظهر',
      previousScreenshot: 'لقطة الشاشة السابقة',
      nextScreenshot: 'لقطة الشاشة التالية',
      goToSlide: 'الانتقال إلى الشريحة'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;