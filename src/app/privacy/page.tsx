'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', title: 'Ringkasan', icon: <FileText className="w-5 h-5" /> },
    { id: 'collection', title: 'Pengumpulan Data', icon: <Database className="w-5 h-5" /> },
    { id: 'usage', title: 'Penggunaan Data', icon: <Eye className="w-5 h-5" /> },
    { id: 'protection', title: 'Perlindungan Data', icon: <Lock className="w-5 h-5" /> },
    { id: 'rights', title: 'Hak Pengguna', icon: <UserCheck className="w-5 h-5" /> }
  ]

  const content = {
    overview: {
      title: 'Ringkasan Kebijakan Privasi',
      content: `
        <p class="mb-4">CV SARANA ALMA SENTOSA ("Kami") berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana Kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika Anda menggunakan layanan Kami.</p>
        
        <h3 class="text-lg font-semibold mt-6 mb-3">Informasi yang Kami Kumpulkan</h3>
        <p class="mb-4">Kami dapat mengumpulkan berbagai jenis informasi dari Anda, termasuk:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Informasi identifikasi pribadi (nama, alamat email, nomor telepon)</li>
          <li>Informasi kontak (alamat, nomor telepon, email)</li>
          <li>Informasi bisnis (nama perusahaan, jabatan, kebutuhan layanan)</li>
          <li>Informasi penggunaan (data penggunaan website, cookies, log aktivitas)</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Mengapa Kami Mengumpulkan Data</h3>
        <p class="mb-4">Kami mengumpulkan data untuk:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Menyediakan layanan yang Anda minta</li>
          <li>Memproses transaksi dan pesanan</li>
          <li>Menghubungi Anda mengenai layanan Kami</li>
          <li>Meningkatkan kualitas layanan Kami</li>
          <li>Mematuhi kewajiban hukum dan peraturan</li>
        </ul>
      `
    },
    collection: {
      title: 'Pengumpulan Data Pribadi',
      content: `
        <h3 class="text-lg font-semibold mt-6 mb-3">Metode Pengumpulan</h3>
        <p class="mb-4">Kami mengumpulkan informasi pribadi melalui berbagai metode:</p>
        
        <h4 class="font-semibold mt-4 mb-2">1. Formulir Kontak dan Pendaftaran</h4>
        <p class="mb-4">Ketika Anda mengisi formulir kontak atau mendaftar untuk layanan Kami, Kami mengumpulkan:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Nama lengkap</li>
          <li>Alamat email</li>
          <li>Nomor telepon</li>
          <li>Nama perusahaan</li>
          <li>Pesan atau permintaan spesifik</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">2. Data Penggunaan Website</h4>
        <p class="mb-4">Kami secara otomatis mengumpulkan informasi teknis ketika Anda mengunjungi website Kami:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Alamat IP</li>
          <li>Jenis browser dan sistem operasi</li>
          <li>Halaman yang dikunjungi</li>
          <li>Waktu dan durasi kunjungan</li>
          <li>Informasi perangkat</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">3. Cookies dan Teknologi Pelacakan</h4>
        <p class="mb-4">Kami menggunakan cookies untuk:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Mengingat preferensi Anda</li>
          <li>Menganalisis penggunaan website</li>
          <li>Menyediakan konten yang relevan</li>
          <li>Meningkatkan pengalaman pengguna</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Kewajiban Hukum</h3>
        <p class="mb-4">Dalam beberapa kasus, Kami diwajibkan secara hukum untuk mengumpulkan informasi tertentu untuk tujuan:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Kepatuhan perpajakan</li>
          <li>Regulasi bisnis</li>
          <li>Perlindungan konsumen</li>
          <li>Penegakan hukum</li>
        </ul>
      `
    },
    usage: {
      title: 'Penggunaan Data Pribadi',
      content: `
        <h3 class="text-lg font-semibold mt-6 mb-3">Tujuan Penggunaan Data</h3>
        <p class="mb-4">Kami menggunakan informasi pribadi Anda untuk:</p>
        
        <h4 class="font-semibold mt-4 mb-2">1. Penyediaan Layanan</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Memproses permintaan layanan Anda</li>
          <li>Menyediakan konsultasi bisnis</li>
          <li>Mengatur pengiriman produk</li>
          <li>Memberikan dukungan pelanggan</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">2. Komunikasi</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Mengirim konfirmasi pesanan</li>
          <li>Memberikan update layanan</li>
          <li>Menjawab pertanyaan Anda</li>
          <li>Mengirim informasi promosi (dengan persetujuan)</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">3. Peningkatan Layanan</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Menganalisis pola penggunaan</li>
          <li>Mengidentifikasi area perbaikan</li>
          <li>Mengembangkan produk baru</li>
          <li>Mempersonalisasi pengalaman pengguna</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">4. Kepatuhan Hukum</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Memenuhi kewajiban hukum</li>
          <li>Merespons permintaan penegakan hukum</li>
          <li>Melindungi hak-hak hukum Kami</li>
          <li>Mencegah aktivitas ilegal</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Basis Hukum Penggunaan</h3>
        <p class="mb-4">Penggunaan data Anda didasarkan pada:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Konsentimen (persetujuan) Anda</li>
          <li>Kontrak antara Anda dan Kami</li>
          <li>Kewajiban hukum</li>
          <li>Kepentingan sah Kami</li>
        </ul>
      `
    },
    protection: {
      title: 'Perlindungan Data Pribadi',
      content: `
        <h3 class="text-lg font-semibold mt-6 mb-3">Keamanan Data</h3>
        <p class="mb-4">Kami menerapkan berbagai langkah keamanan untuk melindungi informasi pribadi Anda:</p>
        
        <h4 class="font-semibold mt-4 mb-2">1. Teknologi Keamanan</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Enkripsi data saat transit dan penyimpanan</li>
          <li>Firewall dan sistem deteksi intrusi</li>
          <li>Authentication multi-faktor</li>
          <li>Regular security updates dan patches</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">2. Kontrol Akses</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Akses terbatas untuk data sensitif</li>
          <li>Principle of least privilege</li>
          <li>Regular access reviews</li>
          <li>Secure password policies</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">3. Monitoring dan Audit</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Continuous security monitoring</li>
          <li>Regular security audits</li>
          <li>Incident response procedures</li>
          <li>Breach notification protocols</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Retensi Data</h3>
        <p class="mb-4">Kami menyimpan data pribadi Anda hanya selama diperlukan untuk:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Memenuhi tujuan pengumpulan awal</li>
          <li>Memenuhi kewajiban hukum dan peraturan</li>
          <li>Menyelesaikan perselisihan</li>
          <li>Melaksanakan perjanjian</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Transfer Data Internasional</h3>
        <p class="mb-4">Data Anda dapat ditransfer ke luar negeri hanya jika:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Negara tujuan memiliki perlindungan data yang memadai</li>
          <li>Ada jaminan kontraktual yang sesuai</li>
          <li>Anda memberikan persetujuan eksplisit</li>
          <li>Diperlukan untuk pelaksanaan kontrak</li>
        </ul>
      `
    },
    rights: {
      title: 'Hak Privasi Pengguna',
      content: `
        <h3 class="text-lg font-semibold mt-6 mb-3">Hak-Hak Anda</h3>
        <p class="mb-4">Sebagai pemilik data, Anda memiliki hak-hak berikut:</p>
        
        <h4 class="font-semibold mt-4 mb-2">1. Hak Akses</h4>
        <p class="mb-4">Anda berhak untuk:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Meminta salinan data pribadi Anda</li>
          <li>Mengetahui apakah data Anda sedang diproses</li>
          <li>Mendapatkan informasi tentang tujuan penggunaan</li>
          <li>Mengetahui pihak yang menerima data Anda</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">2. Hak Koreksi</h4>
        <p class="mb-4">Anda berhak untuk:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Memperbaiki data yang tidak akurat</li>
          <li>Melengkapi data yang tidak lengkap</li>
          <li>Memperbarui informasi yang sudah berubah</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">3. Hak Penghapusan</h4>
        <p class="mb-4">Anda berhak meminta penghapusan data jika:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Data tidak lagi diperlukan untuk tujuan awal</li>
          <li>Anda menarik persetujuan</li>
          <li>Data diproses secara ilegal</li>
          <li>Ada kewajiban hukum untuk menghapus</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">4. Hak Pembatasan</h4>
        <p class="mb-4">Anda berhak membatasi pemrosesan jika:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Keakuratan data sedang dipertanyakan</li>
          <li>Pemrosesan ilegal tapi Anda tidak ingin penghapusan</li>
          <li>Data tidak lagi diperlukan tapi diperlukan untuk klaim hukum</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Cara Melaksanakan Hak Anda</h3>
        <p class="mb-4">Untuk melaksanakan hak-hak Anda, silakan:</p>
        <ol class="list-decimal pl-6 mb-4 space-y-2">
          <li>Hubungi Kami melalui email: privacy@saranaalmasentosa.com</li>
          <li>Sertakan identitas yang jelas</li>
          <li>Jelaskan permintaan Anda secara spesifik</li>
            <li>Berikan dokumen pendukung jika diperlukan</li>
        </ol>

        <h3 class="text-lg font-semibold mt-6 mb-3">Waktu Respons</h3>
        <p class="mb-4">Kami akan merespons permintaan Anda dalam:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>30 hari untuk permintaan standar</li>
          <li>60 hari untuk permintaan kompleks</li>
          <li>Kami akan memberitahu Anda jika ada penundaan</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Hak Mengajukan Keluhan</h3>
        <p class="mb-4">Jika Anda tidak puas dengan respons Kami, Anda berhak:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Mengajukan keluhan kepada otoritas perlindungan data</li>
          <li>Mencari solusi hukum</li>
          <li>Menghubungi organisasi perlindungan konsumen</li>
        </ul>
      `
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/company-logo.png" 
                alt="CV SARANA ALMA SENTOSA" 
                className="h-8 w-auto"
              />
              <h1 className="text-lg font-bold text-blue-900">CV SARANA ALMA SENTOSA</h1>
            </div>
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <Shield className="w-12 h-12" />
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold">Kebijakan Privasi</h1>
              <p className="text-blue-100 mt-2">Terakhir diperbarui: 15 Januari 2024</p>
            </div>
          </div>
          <p className="text-lg opacity-90 max-w-3xl">
            Kebijakan Privasi ini menjelaskan bagaimana CV SARANA ALMA SENTOSA mengumpulkan, 
            menggunakan, melindungi, dan membagikan informasi pribadi Anda.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Navigasi Cepat</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                        activeSection === section.id
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {section.icon}
                      <span>{section.title}</span>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: content[activeSection].content }}
                />
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mt-8 bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Pertanyaan tentang Privasi?</h3>
                <p className="text-gray-700 mb-6">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau cara Kami menangani data pribadi Anda, 
                  silakan hubungi tim privasi Kami.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Email Privasi</h4>
                    <p className="text-blue-600">privacy@saranaalmasentosa.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Kontak Utama</h4>
                    <p className="text-blue-600">081931987647</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img 
                src="/company-logo.png" 
                alt="CV SARANA ALMA SENTOSA" 
                className="h-6 w-auto"
              />
              <span className="text-sm">© 2024 CV SARANA ALMA SENTOSA. All rights reserved.</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-blue-400">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}