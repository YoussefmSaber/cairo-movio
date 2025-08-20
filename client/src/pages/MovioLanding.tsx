import { Download, Star, Search, Heart, Bell, Smartphone, ExternalLink, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FeatureCard } from "@/components/FeatureCard";

import { ScreenshotCarousel } from "@/components/ScreenshotCarousel";
import { LanguageToggle } from "@/components/LanguageToggle";
import heroBackground from "@/assets/hero-background.jpg";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function MovioLanding() {
  const { t } = useTranslation();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const githubReleaseUrl = "https://github.com/Cairo-Squad/Movio/releases";

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg">
                <img
                      src="/logo.png"
                      alt="App Logo"
                      className="h-10 w-10 object-contain"
                    />
              </div>
              <span className="text-2xl font-bold text-foreground">{t('appName')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              {t('heroTagline')}
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              {t('heroTitle')}
              <span className="bg-gradient-hero bg-clip-text text-transparent"> {t('heroTitleHighlight')}</span>
              {" "}{t('heroTitleEnd')}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('heroDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => window.open(githubReleaseUrl, "_blank")}>
                <Download className="h-5 w-5" />
                {t('downloadLatest')}
              </Button>
              
              <div className="text-sm text-muted-foreground">
                {t('downloadNote')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t('aboutTitle')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('aboutDescription')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover-lift">
                <CardContent className="p-6 text-center">
                  <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{t('comprehensiveSearch')}</h3>
                  <p className="text-muted-foreground">{t('comprehensiveSearchDesc')}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover-lift">
                <CardContent className="p-6 text-center">
                  <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{t('realTimeData')}</h3>
                  <p className="text-muted-foreground">{t('realTimeDataDesc')}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover-lift">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{t('personalLists')}</h3>
                  <p className="text-muted-foreground">{t('personalListsDesc')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                {t('featuresTitle')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('featuresDescription')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                icon={Search}
                title={t('exploreMovies')}
                description={t('exploreMoviesDesc')}
              />
              
              <FeatureCard
                icon={Star}
                title={t('realtimeTrending')}
                description={t('realtimeTrendingDesc')}
              />
              
              <FeatureCard
                icon={Heart}
                title={t('offlineAccess')}
                description={t('offlineAccessDesc')}
              />
              
              <FeatureCard
                icon={Bell}
                title={t('smartNotifications')}
                description={t('smartNotificationsDesc')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t('screenshotsTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('screenshotsDescription')}
            </p>
          </div>
          
          <ScreenshotCarousel />
        </div>
      </section>


      {/* Final Download Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t('finalDownloadTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('finalDownloadDescription')}
            </p>
            
            <div className="space-y-6">
              <Button 
                variant="default" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => window.open(githubReleaseUrl, "_blank")}>
                <Download className="h-5 w-5" />
                {t('downloadLatest')}
                <ExternalLink className="h-4 w-4" />
              </Button>
              
              <div className="text-sm text-muted-foreground">
                {t('downloadNote')}
              </div>
              
              <div className="flex justify-center items-center space-x-6 pt-4">
                <Badge variant="secondary" className="bg-secondary text-foreground">
                  {t('androidAvailable')}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg">
                  <img
                        src="/logo.png"   // ← replace with your image path
                        alt="App Logo"
                        className="h-10 w-10 object-contain"
                      />
                </div>
                <span className="text-xl font-bold text-foreground">{t('appName')}</span>
              </div>
              
              <div className="text-center md:text-right space-y-2">
                <p className="text-muted-foreground">
                  {t('poweredBy')}{" "}
                  <a 
                    href="https://www.themoviedb.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    The Movie DB API
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  {t('copyright')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-gradient-primary text-on-primary shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110"
          size="icon"
          aria-label={t('backToTop')}
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}