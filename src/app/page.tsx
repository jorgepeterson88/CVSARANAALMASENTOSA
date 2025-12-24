'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Building,
  Users,
  Award,
  Target,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Shield
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Solusi Terpercaya untuk Bisnis Anda",
      subtitle: "CV SARANA ALMA SENTOSA - Mitra Andal dalam Pengadaan Barang dan Jasa",
      description: "Kami menyediakan berbagai solusi bisnis dengan kualitas terbaik dan harga kompetitif"
    },
    {
      title: "Profesional dan Berpengalaman",
      subtitle: "Lebih dari 10 tahun melayani klien dengan sepenuh hati",
      description: "Tim profesional yang siap membantu kebutuhan usaha Anda"
    },
    {
      title: "Kualitas Terjamin",
      subtitle: "Produk dan jasa berkualitas tinggi dengan standar terbaik",
      description: "Komitmen kami terhadap kepuasan pelanggan"
    }
  ]

  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Pengadaan Barang",
      description: "Menyediakan berbagai kebutuhan barang berkualitas untuk perusahaan Anda",
      features: ["Kualitas Terjamin", "Harga Kompetitif", "Pengiriman Tepat Waktu"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Jasa Konsultasi",
      description: "Konsultasi profesional untuk pengembangan bisnis Anda",
      features: ["Tim Ahli", "Solusi Custom", "Support 24/7"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Layanan Terpadu",
      description: "Solusi lengkap untuk kebutuhan usaha Anda",
      features: ["One Stop Service", "Efisien", "Terpercaya"]
    }
  ]

  const testimonials = [
    {
      name: "PT. Maju Bersama",
      role: "Manufacturing Company",
      content: "CV SARANA ALMA SENTOSA telah menjadi mitra bisnis yang sangat andal. Kualitas produk dan pelayanan yang luar biasa.",
      rating: 5
    },
    {
      name: "CV. Sejahtera Abadi",
      role: "Trading Company",
      content: "Profesionalisme dan ketepatan waktu menjadi nilai tambah dari kerja sama dengan CV SARANA ALMA SENTOSA.",
      rating: 5
    },
    {
      name: "PT. Karya Mandiri",
      role: "Construction Company",
      content: "Solusi yang diberikan selalu tepat sasaran dan membantu pertumbuhan bisnis kami secara signifikan.",
      rating: 5
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/company-logo.png" 
                alt="CV SARANA ALMA SENTOSA" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-blue-900">CV SARANA ALMA SENTOSA</h1>
                <p className="text-xs text-gray-600">Mitra Bisnis Terpercaya</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</Link>
              <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</Link>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Hubungi Kami
              </Button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</Link>
              <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang</Link>
              <Link href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Layanan</Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800 text-sm px-3 py-1">
                🏆 Terpercaya Sejak 2014
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-xl lg:text-2xl text-blue-600 font-semibold">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-lg text-gray-600">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Lihat Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl transform rotate-3"></div>
              <img 
                src="/company-logo.png" 
                alt="CV SARANA ALMA SENTOSA" 
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="text-blue-600">CV SARANA ALMA SENTOSA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perusahaan terpercaya yang bergerak di bidang pengadaan barang dan jasa dengan komitmen terhadap kualitas dan kepuasan pelanggan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visi Kami</h3>
              <p className="text-gray-600">
                Menjadi mitra bisnis utama yang terpercaya dalam menyediakan solusi pengadaan barang dan jasa berkualitas tinggi
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Misi Kami</h3>
              <p className="text-gray-600">
                Memberikan pelayanan terbaik dengan produk berkualitas, harga kompetitif, dan pengiriman tepat waktu
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nilai Kami</h3>
              <p className="text-gray-600">
                Integritas, profesionalisme, inovasi, dan komitmen terhadap kepuasan pelanggan
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Layanan Unggulan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi komprehensif untuk memenuhi kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 border-0 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Pelajari Lebih Lanjut
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Klien Kami
            </h2>
            <p className="text-xl text-gray-600">
              Testimoni dari mitra bisnis yang puas dengan layanan kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">10+</div>
              <p className="text-gray-600">Tahun Pengalaman</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <p className="text-gray-600">Pelanggan Puas</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">1000+</div>
              <p className="text-gray-600">Proyek Selesai</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">24/7</div>
              <p className="text-gray-600">Dukungan Teknis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-blue-600">CV SARANA ALMA SENTOSA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami memberikan nilai tambah yang nyata untuk bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kualitas Premium</h3>
              <p className="text-gray-600">
                Semua produk dan layanan kami melalui quality control ketat untuk memastikan standar tertinggi
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Harga Kompetitif</h3>
              <p className="text-gray-600">
                Harga yang bersaing tanpa mengorbankan kualitas, memberikan nilai terbaik untuk investasi Anda
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Garansi Kepercayaan</h3>
              <p className="text-gray-600">
                Jaminan kepuasan dan garansi untuk semua produk yang kami sediakan
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Siap Meningkatkan Bisnis Anda?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Hubungi kami hari ini untuk konsultasi gratis dan temukan solusi terbaik untuk kebutuhan bisnis Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="w-5 h-5 mr-2" />
              Kirim Email
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl opacity-90">
              Siap membantu kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Alamat</h3>
                  <p className="opacity-90">
                    Jl. Hunian Brantas Asri A-2, Desa/Kelurahan Pilang, Kec. Kademangan,
                    Kota Probolinggo, Provinsi Jawa Timur 67221
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Telepon</h3>
                  <p className="opacity-90">081931987647</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="opacity-90">info@saranaalmasentosa.com</p>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nama lengkap Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                  <textarea 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                    placeholder="Pesan Anda..."
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/company-logo.png" 
                  alt="CV SARANA ALMA SENTOSA" 
                  className="h-8 w-auto"
                />
                <h3 className="text-lg font-bold">CV SARANA ALMA SENTOSA</h3>
              </div>
              <p className="text-gray-400">
                Mitra bisnis terpercaya untuk pengadaan barang dan jasa berkualitas.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Pengadaan Barang</Link></li>
                <li><Link href="#" className="hover:text-white">Konsultasi Bisnis</Link></li>
                <li><Link href="#" className="hover:text-white">Layanan Terpadu</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Tentang Kami</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>081931987647</li>
                <li>info@saranaalmasentosa.com</li>
                <li>Probolinggo, Jawa Timur</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV SARANA ALMA SENTOSA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}