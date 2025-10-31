'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import {
  Truck,
  Clock,
  Shield,
  MapPin,
  CheckCircle2,
  Phone,
  Package,
  Zap,
  Building2,
  HeartPulse,
  Scale,
  Radio,
  Star,
  ArrowRight,
  Users,
  Award,
  Target,
  Gauge,
  Globe,
  TrendingUp,
  PlayCircle,
  Quote,
  Calendar,
  MessageCircle,
  Sparkles,
  Rocket,
  Bolt,
  Crown,
  Medal,
  Flame,
  Eye,
  Heart,
  Briefcase,
  FileText,
  Calculator,
  Timer,
  Headphones,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { type Review } from '@/lib/supabase';

export default function HomePage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [stats, setStats] = useState({
    deliveries: 0,
    clients: 0,
    coverage: 0,
    satisfaction: 0
  });

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/review?published=true');
        if (response.ok) {
          const data = await response.json();
          setReviews(data.reviews?.slice(0, 6) || []);
        }
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    }

    fetchReviews();

    // Animate stats counter
    const animateStats = () => {
      const targets = { deliveries: 50000, clients: 2500, coverage: 100, satisfaction: 99 };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setStats({
          deliveries: Math.floor(targets.deliveries * progress),
          clients: Math.floor(targets.clients * progress),
          coverage: Math.floor(targets.coverage * progress),
          satisfaction: Math.floor(targets.satisfaction * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setStats(targets);
        }
      }, increment);
    };

    const timer = setTimeout(animateStats, 500);
    
    // Scroll animations
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (reviews.length > 0) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % reviews.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [reviews]);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: Zap, title: 'Same-Day Delivery', description: 'Urgent shipments collected and delivered within hours across the UK', price: 'From £15', popular: true },
    { icon: Clock, title: 'Next-Day Service', description: 'Guaranteed next-day delivery nationwide with tracking', price: 'From £8', popular: false },
    { icon: Package, title: 'Time-Critical', description: 'Dedicated vehicles for mission-critical consignments', price: 'From £25', popular: false },
    { icon: Building2, title: 'Contract Services', description: 'Tailored logistics solutions for your business needs', price: 'Custom', popular: false },
    { icon: HeartPulse, title: 'Healthcare Logistics', description: 'Secure, confidential medical and pharmaceutical delivery', price: 'From £20', popular: false },
    { icon: Scale, title: 'Legal Services', description: 'DBS-checked drivers for sensitive legal documents', price: 'From £18', popular: false },
    { icon: Shield, title: 'Police Logistics', description: 'Trusted partner for law enforcement transport needs', price: 'Quote', popular: false },
    { icon: Radio, title: 'Telecoms', description: 'Rapid equipment and parts delivery for telecoms sector', price: 'From £12', popular: false },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Birmingham NHS Trust',
      text: 'Nelly\'s Logistics has been our trusted partner for medical deliveries. Their reliability and professionalism are unmatched.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Michael Chen',
      company: 'Chen & Associates Law',
      text: 'Time-critical court filings are never a worry with Nelly\'s. They understand the urgency and deliver every time.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Emma Williams',
      company: 'TechFlow Solutions',
      text: 'Outstanding service! Same-day delivery across the UK with real-time tracking. Couldn\'t ask for more.',
      rating: 5,
      image: '/api/placeholder/60/60'
    }
  ];

  const industries = [
    { icon: HeartPulse, name: 'Healthcare', count: '500+ clients' },
    { icon: Scale, name: 'Legal', count: '300+ firms' },
    { icon: Building2, name: 'Corporate', count: '1000+ businesses' },
    { icon: Shield, name: 'Government', count: '50+ agencies' },
    { icon: Radio, name: 'Telecoms', count: '200+ companies' },
    { icon: Package, name: 'E-commerce', count: '800+ retailers' }
  ];

  const trustFeatures = [
    { icon: MapPin, title: 'UK & Europe Coverage', description: 'From Birmingham to anywhere in the UK and across Europe' },
    { icon: Clock, title: 'Live Tracking', description: 'Real-time updates on every delivery from collection to doorstep' },
    { icon: Shield, title: 'Fully Insured', description: 'Comprehensive insurance up to £100,000 for your peace of mind' },
    { icon: CheckCircle2, title: 'DBS-Checked Drivers', description: 'All drivers security vetted for sensitive deliveries' },
  ];

  return (
    <>
      {/* Ultimate Hero Section */}
      <Section className="relative bg-slate-900 py-16 md:py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex flex-col items-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
              <Badge className="bg-sky-500 hover:bg-sky-600 text-white border-0 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base font-semibold shadow-2xl shadow-sky-500/30 animate-bounce cursor-pointer transition-all duration-300 hover:scale-110">
                <Crown className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 inline animate-pulse" />
                <span className="whitespace-nowrap">🏆 Award-Winning Courier Service</span>
              </Badge>
              
              {/* Live Activity Ticker */}
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 text-white/90 text-xs sm:text-sm font-medium animate-pulse">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-ping"></div>
                  <span className="whitespace-nowrap">Live: 247 deliveries in progress</span>
                  <Bolt className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 text-amber-400 flex-shrink-0" />
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight tracking-tight px-2">
              <span className="block animate-fade-in-up">Lightning-Fast</span>
              <span className="block text-sky-400 mt-1 sm:mt-2 animate-fade-in-up delay-300">
                Courier Solutions
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto font-light animate-fade-in-up delay-500 px-4">
              From Birmingham to <span className="text-sky-400 font-semibold">anywhere in the UK & Europe</span>. 
              <br className="hidden sm:block" />
              Book in <span className="text-amber-400 font-semibold">60 seconds</span>—tracked, insured, guaranteed.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-10 md:mb-12 animate-fade-in-up delay-700 px-4">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white text-base sm:text-lg px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 shadow-2xl shadow-amber-500/40 border-0 hover:scale-110 transition-all duration-300 font-bold w-full sm:w-auto">
                <Link href="/contact" className="flex items-center justify-center">
                  <Calendar className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                  Get Instant Quote
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-4 sm:py-6 md:py-8 bg-white/10 backdrop-blur-sm border-2 sm:border-3 border-sky-400/50 text-white hover:bg-sky-500/20 hover:border-sky-400/70 hover:scale-110 transition-all duration-300 font-bold w-full sm:w-auto">
                <a href="tel:+44XXXXXXXXXX" className="flex items-center justify-center">
                  <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 animate-pulse" />
                  Call Now: 24/7
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-white/90 animate-fade-in-up delay-1000 px-2 sm:px-4">
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-sky-500 rounded-full flex items-center justify-center mb-2 sm:mb-3 group-hover:rotate-12 transition-transform duration-300">
                  <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <span className="font-bold text-sm sm:text-base md:text-lg text-center">Fully Insured</span>
                <span className="text-xs sm:text-sm text-gray-400 text-center">Up to £100k</span>
              </div>
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-amber-500 rounded-full flex items-center justify-center mb-2 sm:mb-3 group-hover:rotate-12 transition-transform duration-300">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <span className="font-bold text-sm sm:text-base md:text-lg text-center">Live Tracking</span>
                <span className="text-xs sm:text-sm text-gray-400 text-center">Real-time GPS</span>
              </div>
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-sky-500 rounded-full flex items-center justify-center mb-2 sm:mb-3 group-hover:rotate-12 transition-transform duration-300">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <span className="font-bold text-sm sm:text-base md:text-lg text-center">DBS Checked</span>
                <span className="text-xs sm:text-sm text-gray-400 text-center">Vetted drivers</span>
              </div>
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-amber-500 rounded-full flex items-center justify-center mb-2 sm:mb-3 group-hover:rotate-12 transition-transform duration-300">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <span className="font-bold text-sm sm:text-base md:text-lg text-center">24/7 Service</span>
                <span className="text-xs sm:text-sm text-gray-400 text-center">365 days/year</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Animated Stats Section */}
      <Section className="bg-sky-600 text-white py-12 sm:py-14 md:py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="group hover:scale-110 transition-transform duration-300 px-2">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 text-white">
                {stats.deliveries.toLocaleString()}+
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-sky-100">Deliveries Completed</div>
              <div className="text-xs sm:text-sm text-sky-200">This year alone</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300 px-2">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 text-white">
                {stats.clients.toLocaleString()}+
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-sky-100">Happy Clients</div>
              <div className="text-xs sm:text-sm text-sky-200">Across all sectors</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300 px-2">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 text-white">
                {stats.coverage}%
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-sky-100">UK Coverage</div>
              <div className="text-xs sm:text-sm text-sky-200">Plus Europe</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300 px-2">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 text-white">
                {stats.satisfaction}%
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-sky-100">Client Satisfaction</div>
              <div className="text-xs sm:text-sm text-sky-200">5-star rated</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Enhanced Services Section */}
      <Section className="bg-gray-50 py-12">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-sky-500 text-white px-6 py-2 text-sm font-semibold">
              <Package className="w-4 h-4 mr-2" />
              Premium Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              Lightning-Fast <span className="text-sky-600">Delivery Solutions</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From urgent same-day delivery to specialized logistics—we've got every business need covered
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.slice(0, 4).map((service, index) => {
              const isEven = index % 2 === 0;
              const colorScheme = isEven ? 'amber' : 'sky';
              return (
                <Card
                  key={index}
                  className={`group relative border-2 border-gray-200 hover:border-${colorScheme}-500 hover:shadow-2xl hover:shadow-${colorScheme}-500/20 transition-all duration-500 overflow-hidden bg-white hover:-translate-y-4 hover:rotate-1`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 z-20">
                      <Badge className="bg-amber-500 text-white px-3 py-1 text-xs font-bold shadow-lg">
                        🔥 POPULAR
                      </Badge>
                    </div>
                  )}
                  
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-${colorScheme}-500/10 rounded-bl-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700`}></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className={`w-18 h-18 bg-${colorScheme}-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-${colorScheme}-500/30`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className={`text-2xl font-bold text-gray-900 group-hover:text-${colorScheme}-600 mb-4 transition-all duration-300`}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-2xl font-black text-${colorScheme}-600`}>
                        {service.price}
                      </span>
                      <Button size="sm" className={`bg-${colorScheme}-500 hover:bg-${colorScheme}-600 text-white shadow-lg hover:scale-110 transition-all duration-300`}>
                        <Link href="/contact" className="flex items-center">
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white text-lg px-12 py-6 shadow-2xl shadow-sky-500/30 hover:scale-110 transition-all duration-300 font-bold">
              <Link href="/services">
                <Package className="mr-3 h-6 w-6" />
                View All Services
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* World-Class Interactive Pricing Calculator */}
      <Section className="bg-white py-20 border-t border-gray-200">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-amber-500 text-white px-6 py-2 text-sm font-semibold">
                <Calculator className="w-4 h-4 mr-2" />
                Instant Pricing
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                Get Your <span className="text-amber-500">Instant Quote</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                No hidden fees, no surprises. See exactly what your delivery will cost in seconds.
              </p>
            </div>

            <Card className="border-2 border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3">Service Type</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button className="p-4 border-2 border-sky-500 bg-sky-50 text-sky-700 rounded-xl font-semibold hover:bg-sky-100 transition-colors">
                          <Zap className="w-5 h-5 mx-auto mb-2" />
                          Same Day
                        </button>
                        <button className="p-4 border-2 border-gray-200 text-gray-600 rounded-xl font-semibold hover:border-sky-500 hover:text-sky-700 transition-colors">
                          <Clock className="w-5 h-5 mx-auto mb-2" />
                          Next Day
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3">Distance</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="From postcode" 
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-sky-500 focus:outline-none transition-colors"
                        />
                        <MapPin className="absolute right-4 top-4 w-5 h-5 text-gray-400" />
                      </div>
                      <div className="relative mt-3">
                        <input 
                          type="text" 
                          placeholder="To postcode" 
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-sky-500 focus:outline-none transition-colors"
                        />
                        <MapPin className="absolute right-4 top-4 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3">Package Size</label>
                      <div className="grid grid-cols-3 gap-2">
                        <button className="p-3 border-2 border-sky-500 bg-sky-50 text-sky-700 rounded-lg text-sm font-semibold">Small</button>
                        <button className="p-3 border-2 border-gray-200 text-gray-600 rounded-lg text-sm font-semibold hover:border-sky-500 hover:text-sky-700 transition-colors">Medium</button>
                        <button className="p-3 border-2 border-gray-200 text-gray-600 rounded-lg text-sm font-semibold hover:border-sky-500 hover:text-sky-700 transition-colors">Large</button>
                      </div>
                    </div>

                    <div className="bg-sky-50 p-6 rounded-xl border-2 border-sky-200">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-bold text-gray-900">Estimated Price</span>
                        <div className="text-3xl font-black text-sky-600">£24.50</div>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Base rate (Same day, 15 miles)</span>
                          <span>£18.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Insurance (up to £100)</span>
                          <span>£2.50</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fuel surcharge</span>
                          <span>£4.00</span>
                        </div>
                        <div className="border-t border-sky-300 pt-2 flex justify-between font-bold text-gray-900">
                          <span>Total</span>
                          <span>£24.50</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-sky-500 hover:bg-sky-600 text-white text-lg py-6 shadow-xl hover:scale-105 transition-all duration-300 font-bold">
                    <Calendar className="mr-3 h-6 w-6" />
                    Book This Delivery
                  </Button>
                  <Button variant="outline" className="flex-1 border-2 border-sky-500 text-sky-600 hover:bg-sky-50 text-lg py-6 hover:scale-105 transition-all duration-300 font-bold">
                    <FileText className="mr-3 h-6 w-6" />
                    Get Detailed Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Industries We Serve */}
      <Section className="bg-slate-900 py-20 text-white">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-500 text-white px-6 py-2 text-sm font-semibold">
              <Building2 className="w-4 h-4 mr-2" />
              Trusted Industries
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Powering <span className="text-amber-400">Every Industry</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From healthcare to legal, telecoms to e-commerce—we're the trusted logistics partner across all sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {industries.map((industry, index) => (
              <div key={index} className="group text-center hover:scale-110 transition-all duration-300">
                <div className="w-20 h-20 bg-sky-500/20 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-sky-500 transition-all duration-300">
                  <industry.icon className="w-10 h-10 text-sky-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">{industry.name}</h3>
                <p className="text-sm text-gray-400">{industry.count}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-12 py-6 shadow-2xl shadow-amber-500/30 hover:scale-110 transition-all duration-300 font-bold">
              <Link href="/about">
                <Users className="mr-3 h-6 w-6" />
                Learn About Our Expertise
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* World-Class Live Tracking Demo */}
      <Section className="bg-slate-800 py-20 text-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-sky-500 text-white px-6 py-2 text-sm font-semibold">
                <Eye className="w-4 h-4 mr-2" />
                Live Tracking Technology
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                Watch Your <span className="text-sky-400">Package Journey</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Real-time GPS tracking with live updates every 30 seconds. Never wonder where your package is again.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Mock Tracking Interface */}
              <div className="relative">
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-white">Tracking: NL240001234</h3>
                        <p className="text-sky-400">Birmingham → London</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 font-semibold">Live</span>
                      </div>
                    </div>

                    {/* Progress Steps */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-semibold">Package Collected</p>
                          <p className="text-gray-400 text-sm">Birmingham B1 1AA - 09:15</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center animate-pulse">
                          <Truck className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-semibold">In Transit</p>
                          <p className="text-sky-400 text-sm">M40 Junction 15 - ETA: 11:45</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-gray-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-400 font-semibold">Out for Delivery</p>
                          <p className="text-gray-500 text-sm">London SW1A 1AA</p>
                        </div>
                      </div>
                    </div>

                    {/* Live Map Placeholder */}
                    <div className="bg-slate-700 rounded-lg p-6 text-center">
                      <MapPin className="w-12 h-12 text-sky-400 mx-auto mb-3 animate-bounce" />
                      <p className="text-white font-semibold">Live GPS Location</p>
                      <p className="text-sky-400 text-sm">Updates every 30 seconds</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Features List */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Bolt className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Real-Time Updates</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Get instant notifications when your package is collected, in transit, and delivered. 
                      No more guessing games.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Timer className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Accurate ETAs</h3>
                    <p className="text-gray-300 leading-relaxed">
                      AI-powered delivery predictions that account for traffic, weather, and route optimization. 
                      Always know when to expect your delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">24/7 Support</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Questions about your delivery? Our support team is available around the clock 
                      to help with any concerns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Ultimate Trust Features */}
      <Section className="relative bg-sky-50 py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-sky-500 text-white px-6 py-2 text-sm font-semibold">
              <Award className="w-4 h-4 mr-2" />
              Why We're Different
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              The <span className="text-sky-600">Ultimate</span> Courier Experience
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We don't just deliver packages—we deliver peace of mind with every shipment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFeatures.map((feature, index) => {
              const colors = ['sky', 'amber', 'sky', 'amber'];
              const colorScheme = colors[index % colors.length];
              return (
                <Card
                  key={index}
                  className={`group relative border-2 border-gray-200 hover:border-${colorScheme}-500 hover:shadow-2xl hover:shadow-${colorScheme}-500/20 transition-all duration-500 overflow-hidden bg-white hover:-translate-y-6 hover:rotate-2`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${colorScheme}-500/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700`}></div>
                  
                  <CardContent className="p-8 relative z-10 text-center">
                    <div className={`w-20 h-20 bg-${colorScheme}-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-${colorScheme}-500/30`}>
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className={`text-2xl font-bold text-gray-900 group-hover:text-${colorScheme}-600 mb-4 transition-all duration-300`}>
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* World-Class Awards & Certifications */}
      <Section className="bg-white py-20 border-t border-gray-200">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-500 text-white px-6 py-2 text-sm font-semibold">
              <Medal className="w-4 h-4 mr-2" />
              Awards & Recognition
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              Industry <span className="text-amber-500">Recognition</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by industry leaders and recognized for excellence in logistics and customer service
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <Card className="border-2 border-gray-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">UK Courier Awards</h3>
                <p className="text-sm text-gray-600">Best Same-Day Service 2024</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-sky-500 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">ISO 9001:2015</h3>
                <p className="text-sm text-gray-600">Quality Management Certified</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Customer Choice</h3>
                <p className="text-sm text-gray-600">99% Satisfaction Rating</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-sky-500 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Business Excellence</h3>
                <p className="text-sm text-gray-600">Logistics Provider of the Year</p>
              </CardContent>
            </Card>
          </div>

          {/* Trust Logos */}
          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Trusted by Leading Organizations</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
                <div className="text-2xl font-black text-gray-700">NHS</div>
                <div className="text-xs text-gray-500">Healthcare</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
                <div className="text-2xl font-black text-gray-700">HMRC</div>
                <div className="text-xs text-gray-500">Government</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
                <div className="text-2xl font-black text-gray-700">BBC</div>
                <div className="text-xs text-gray-500">Media</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
                <div className="text-2xl font-black text-gray-700">BT</div>
                <div className="text-xs text-gray-500">Telecoms</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
                <div className="text-2xl font-black text-gray-700">TESCO</div>
                <div className="text-xs text-gray-500">Retail</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
                <div className="text-2xl font-black text-gray-700">LLOYDS</div>
                <div className="text-xs text-gray-500">Banking</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Ultimate Testimonials Section */}
      <Section className="bg-gray-900 py-20 text-white">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-500 text-white px-6 py-2 text-sm font-semibold">
              <Quote className="w-4 h-4 mr-2" />
              Client Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
              <span className="text-amber-400">Trusted</span> by Industry Leaders
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Don't just take our word for it—hear from the businesses who rely on us every day
            </p>
          </div>

          {/* Featured Testimonial Carousel */}
          {testimonials.length > 0 && (
            <div className="max-w-5xl mx-auto mb-16">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
                <CardContent className="p-12 text-center">
                  <div className="flex justify-center mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-amber-400 fill-amber-400 mx-1" />
                    ))}
                  </div>
                  
                  <blockquote className="text-3xl md:text-4xl font-light text-white mb-8 leading-relaxed italic">
                    "{testimonials[currentTestimonial]?.text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {testimonials[currentTestimonial]?.name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="text-xl font-bold text-white">{testimonials[currentTestimonial]?.name}</p>
                      <p className="text-sky-400">{testimonials[currentTestimonial]?.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Reviews Grid */}
          {reviews.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {reviews.slice(0, 3).map((review, index) => (
                  <Card
                    key={review.id}
                    className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6 gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 transition-all duration-300 ${
                              i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-500'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-200 mb-6 leading-relaxed italic">"{review.comment}"</p>
                      <div className="pt-4 border-t border-white/20">
                        <p className="font-bold text-white">{review.name}</p>
                        <p className="text-sm text-sky-400 mt-1">Verified Customer</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white text-lg px-12 py-6 shadow-2xl shadow-sky-500/30 hover:scale-110 transition-all duration-300 font-bold">
                  <Link href="/reviews">
                    <MessageCircle className="mr-3 h-6 w-6" />
                    Read All Reviews
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </Container>
      </Section>

      {/* Ultimate Final CTA Section */}
      <Section className="relative bg-slate-900 py-20 text-white overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-8 bg-sky-500 text-white px-8 py-3 text-base font-semibold shadow-2xl shadow-sky-500/30 animate-bounce">
              <Target className="w-5 h-5 mr-3 inline" />
              🎯 Ready to Ship? Let's Go!
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              <span className="block">Your Delivery</span>
              <span className="block text-sky-400">
                Starts Here
              </span>
            </h2>
            
            <p className="text-lg md:text-xl mb-12 text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
              Join <span className="text-amber-400 font-semibold">2,500+ businesses</span> who trust us with their most important deliveries.
              <br className="hidden md:block" />
              <span className="text-sky-400 font-semibold">Get your quote in 60 seconds</span> or speak to our team now.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white text-2xl px-16 py-10 shadow-2xl shadow-amber-500/40 border-0 hover:scale-110 transition-all duration-300 font-black rounded-2xl">
                <Link href="/contact">
                  <Calendar className="mr-4 h-8 w-8" />
                  Get Instant Quote
                  <ArrowRight className="ml-4 h-8 w-8" />
                </Link>
              </Button>
              <Button asChild size="lg" className="text-2xl px-16 py-10 bg-white/10 backdrop-blur-sm border-3 border-sky-400/50 text-white hover:bg-sky-500/20 hover:border-sky-400/70 hover:scale-110 transition-all duration-300 font-black rounded-2xl">
                <a href="tel:+44XXXXXXXXXX">
                  <Phone className="mr-4 h-8 w-8 animate-pulse" />
                  Call 24/7 Hotline
                </a>
              </Button>
            </div>

            {/* Urgency Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 text-white/80 group hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">Response in 30min</p>
                  <p className="text-sm text-gray-400">During business hours</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-white/80 group hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Gauge className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">Same-Day Pickup</p>
                  <p className="text-sm text-gray-400">Within 60 minutes</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-white/80 group hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">UK & Europe</p>
                  <p className="text-sm text-gray-400">Full coverage</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: "Nelly's Logistics",
            image: 'https://www.nellyslogistics.com/og-image.jpg',
            '@id': 'https://www.nellyslogistics.com',
            url: 'https://www.nellyslogistics.com',
            telephone: '+44XXXXXXXXXX',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Birmingham',
              addressCountry: 'GB',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 52.4862,
              longitude: -1.8904,
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '00:00',
              closes: '23:59',
            },
            areaServed: 'United Kingdom',
            priceRange: '££',
          }),
        }}
      />
    </>
  );
}
