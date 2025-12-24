'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, FileText, Users, Package, CreditCard, Shield, AlertCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', title: 'Ringkasan', icon: <FileText className="w-5 h-5" /> },
    { id: 'services', title: 'Layanan', icon: <Package className="w-5 h-5" /> },
    { id: 'obligations', title: 'Kewajiban', icon: <Users className="w-5 h-5" /> },
    { id: 'payment', title: 'Pembayaran', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'liability', title: 'Tanggung Jawab', icon: <Shield className="w-5 h-5" /> },
    { id: 'termination', title: 'Berakhirnya Kontrak', icon: <AlertCircle className="w-5 h-5" /> }
  ]

  const content = {
    overview: {
      title: 'Syarat dan Ketentuan Umum',
      content: `
        <p class="mb-4">Syarat dan Ketentuan ini ("Ketentuan") mengatur penggunaan layanan yang disediakan oleh CV SARANA ALMA SENTOSA ("Kami", "Perusahaan"). Dengan menggunakan layanan Kami, Anda setuju untuk terikat oleh Ketentuan ini.</p>
        
        <h3 class="text-lg font-semibold mt-6 mb-3">Penerimaan Ketentuan</h3>
        <p class="mb-4">Dengan mengakses atau menggunakan layanan Kami, Anda menyatakan bahwa:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Anda telah membaca, memahami, dan menyetujui Ketentuan ini</li>
          <li>Anda memiliki kapasitas hukum untuk terikat oleh kontrak</li>
          <li>Anda akan mematuhi semua hukum dan peraturan yang berlaku</li>
          <li>Informasi yang Anda berikan adalah akurat dan lengkap</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Perubahan Ketentuan</h3>
        <p class="mb-4">Kami berhak untuk mengubah Ketentuan ini kapan saja. Perubahan akan berlaku efektif setelah:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Publikasi di website Kami</li>
          <li>Pemberitahuan langsung kepada Anda</li>
          <li>Persetujuan Anda terhadap perubahan tersebut</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Definisi</h3>
        <p class="mb-4">Dalam Ketentuan ini, istilah-istilah berikut memiliki arti:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>"Layanan"</strong> - Semua produk dan jasa yang Kami sediakan</li>
          <li><strong>"Pelanggan"</strong> - Individu atau entitas yang menggunakan layanan Kami</li>
          <li><strong>"Kontrak"</strong> - Perjanjian antara Pelanggan dan Kami</li>
          <li><strong>"Intellectual Property"</strong> - Hak kekayaan intelektual milik Kami atau pihak ketiga</li>
        </ul>
      `
    },
    services: {
      title: 'Keterangan Layanan',
      content: `
        <h3 class="text-lg font-semibold mt-6 mb-3">Jenis Layanan</h3>
        <p class="mb-4">CV SARANA ALMA SENTOSA menyediakan berbagai layanan, termasuk:</p>
        
        <h4 class="font-semibold mt-4 mb-2">1. Pengadaan Barang</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Penyediaan barang kualitas premium</li>
          <li>Konsultasi kebutuhan barang</li>
          <li>Pengiriman dan instalasi (jika diperlukan)</li>
          <li>Garansi produk sesuai ketentuan pabrik</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">2. Jasa Konsultasi Bisnis</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Analisis kebutuhan bisnis</li>
          <li>Rekomendasi solusi</li>
          <li>Perencanaan strategis</li>
          <li>Monitoring dan evaluasi</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">3. Layanan Terpadu</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Solusi end-to-end untuk kebutuhan bisnis</li>
          <li>Integrasi sistem</li>
          <li>Dukungan teknis</li>
          <li>Training dan pengembangan</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Ketersediaan Layanan</h3>
        <p class="mb-4">Kami berusaha untuk menyediakan layanan yang:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Tersedia 24/7 untuk layanan digital</li>
          <li>Jam operasional 08:00 - 17:00 WIB untuk layanan langsung</li>
          <li>Respons cepat untuk permintaan darurat</li>
          <li>Pemeliharaan terjadwal dengan pemberitahuan sebelumnya</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Standar Kualitas</h3>
        <p class="mb-4">Semua layanan Kami memenuhi standar:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Sertifikasi ISO 9001:2015 untuk manajemen mutu</li>
          <li>Kepatuhan terhadap regulasi industri</li>
          <li>Best practice internasional</li>
          <li>Kontinu improvement</li>
        </ul>
      `
    },
    obligations: {
      title: 'Kewajiban Pihak-Pihak',
      content: `
        <h3 class="text-lg font-semibold mt-6 mb-3">Kewajiban CV SARANA ALMA SENTOSA</h3>
        <p class="mb-4">Kami berkomitmen untuk:</p>
        
        <h4 class="font-semibold mt-4 mb-2">1. Penyediaan Layanan</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Menyediakan layanan sesuai spesifikasi yang disepakati</li>
          <li>Memastikan kualitas layanan sesuai standar industri</li>
          <li>Memberikan dukungan teknis yang diperlukan</li>
          <li>Melakukan pemeliharaan berkala</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">2. Konfidensialitas</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Melindungi informasi rahasia Pelanggan</li>
          <li>Tidak membagikan data tanpa persetujuan</li>
          <li>Menerapkan keamanan data yang memadai</li>
          <li>Mematuhi regulasi perlindungan data</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">3. Transparansi</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Memberikan informasi yang jelas tentang layanan</li>
          <li>Menjelaskan biaya dan biaya tambahan</li>
          <li>Memberikan update status layanan</li>
          <li>Menyediakan dokumentasi yang lengkap</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Kewajiban Pelanggan</h3>
        <p class="mb-4">Sebagai Pelanggan, Anda wajib:</p>
        
        <h4 class="font-semibold mt-4 mb-2">1. Kerjasama</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Memberikan informasi yang akurat dan lengkap</li>
          <li>Menyediakan akses yang diperlukan untuk pelaksanaan layanan</li>
          <li>Merespons komunikasi Kami secara tepat waktu</li>
          <li>Memfasilitasi pelaksanaan layanan</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">2. Pembayaran</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Melakukan pembayaran sesuai kesepakatan</li>
          <li>Memberikan informasi pembayaran yang valid</li>
          <li>Menginformasikan kendala pembayaran</li>
          <li>Mematuhi syarat pembayaran yang ditetapkan</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">3. Penggunaan Layanan</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Menggunakan layanan sesuai tujuan yang disepakati</li>
          <li>Tidak melanggar hukum atau peraturan</li>
          <li>Tidak merusak atau mengganggu layanan</li>
          <li>Menghormati hak kekayaan intelektual</li>
        </ul>
      `
    },
    payment: {
      title: 'Syarat Pembayaran',
      content: `
        <h3 class="text-lg font-semibold mt-6 mb-3">Struktur Harga</h3>
        <p class="mb-4">Harga layanan Kami mencakup:</p>
        
        <h4 class="font-semibold mt-4 mb-2">1. Komponen Harga</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Biaya produk atau jasa dasar</li>
          <li>Biaya instalasi dan konfigurasi (jika ada)</li>
          <li>Biaya pelatihan dan dokumentasi</li>
          <li>Pajak yang berlaku (PPN 11%)</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">2. Biaya Tambahan</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Biaya transportasi untuk lokasi di luar area</li>
          <li>Biaya akomodasi untuk layanan luar kota</li>
          <li>Biaya material tambahan</li>
          <li>Biaya perpanjangan layanan</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Metode Pembayaran</h3>
        <p class="mb-4">Kami menerima berbagai metode pembayaran:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Transfer bank (BCA, Mandiri, BNI)</li>
          <li>Virtual account</li>
          <li>E-wallet (OVO, Gopay, Dana)</li>
          <li>Kartu kredit/debit</li>
          <li>Cek atau giro (untuk perusahaan)</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Jadwal Pembayaran</h3>
        
        <h4 class="font-semibold mt-4 mb-2">1. Pembayaran di Muka</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Minimum 30% dari total nilai kontrak</li>
          <li>Dibayarkan saat penandatanganan kontrak</li>
          <li>Sebagai syarat mulainya pekerjaan</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">2. Pembayaran Progress</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Dibayarkan sesuai milestone yang disepakati</li>
          <li>Berdasarkan penyelesaian tahapan pekerjaan</li>
          <li>Dokumentasi progress disertakan</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">3. Pelunasan</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Sisa pembayaran setelah pekerjaan selesai</li>
          <li>Maksimal 14 hari setelah invoice diterbitkan</li>
          <li>Syarat penyerahan dokumen lengkap</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Keterlambatan Pembayaran</h3>
        <p class="mb-4">Jika pembayaran terlambat:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Denda 0.5% per hari dari total tagihan</li>
          <li>Maksimal denda 5% dari total kontrak</li>
          <li>Hak untuk menunda layanan berikutnya</li>
          <bi>Tindakan hukum jika perlu</bi>
        </ul>
      `
    },
    liability: {
      title: 'Batasan Tanggung Jawab',
      content: `
        <h3 class="text-lg font-semibold mt-6 mb-3">Tanggung Jawab CV SARANA ALMA SENTOSA</h3>
        <p class="mb-4">Tanggung jawab Kami dibatasi sebagai berikut:</p>
        
        <h4 class="font-semibold mt-4 mb-2">1. Garansi Layanan</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Garansi produk sesuai ketentuan pabrik</li>
          <li>Garansi layanan selama 30 hari setelah penyelesaian</li>
          <li>Perbaikan gratis untuk cacat produksi</li>
          <li>Support teknis selama periode garansi</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">2. Batasan Tanggung Jawab</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Maksimal tanggung jawab sebesar nilai kontrak</li>
          <li>Tidak bertanggung jawab atas kerugian tidak langsung</li>
          <li>Tidak bertanggung jawab atas kehilangan keuntungan</li>
          <li>Tidak bertanggung jawab atas kerusakan data pihak ketiga</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">3. Force Majeure</h4>
        <p class="mb-4">Kami tidak bertanggung jawab atas kegagalan layanan yang disebabkan oleh:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Bencana alam (gempa, banjir, tsunami)</li>
          <li>Perang, terorisme, kerusuhan</li>
          <li>Kebijakan pemerintah yang berubah</li>
          <li>Pemogokan atau lockout</li>
          <li>Gangguan jaringan komunikasi</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Indemnifikasi</h3>
        <p class="mb-4">Pelanggan setuju untuk mengganti rugi Kami dari:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Klaim pihak ketiga yang timbul dari penggunaan layanan</li>
          <li>Pelanggaran hak kekayaan intelektual oleh Pelanggan</li>
          <li>Kerugian yang disebabkan oleh kelalaian Pelanggan</li>
          <li>Biaya hukum yang diperlukan untuk pembelaan</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Asuransi</h3>
        <p class="mb-4">Kami memiliki asuransi untuk:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Asuransi tanggung jawab umum</li>
          <li>Asuransi profesional</li>
          <li>Asuransi properti dan peralatan</li>
          <li>Asuransi karyawan</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Penyelesaian Sengketa</h3>
        <p class="mb-4">Sengketa akan diselesaikan melalui:</p>
        <ol class="list-decimal pl-6 mb-4 space-y-2">
          <li>Negosiasi damai antara kedua belah pihak</li>
          <li>Mediasi dengan mediator netral</li>
          <li>Arbitrase di Badan Arbitrase Nasional Indonesia (BANI)</li>
          <li>Pengadilan Negeri Probolinggo sebagai yurisdiksi terakhir</li>
        </ol>
      `
    },
    termination: {
      title: 'Berakhirnya Kontrak',
      content: `
        <h3 class="text-lg font-semibold mt-6 mb-3">Penyelesaian Kontrak</h3>
        <p class="mb-4">Kontrak dapat berakhir melalui:</p>
        
        <h4 class="font-semibold mt-4 mb-2">1. Berakhirnya Waktu</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Kontrak berakhir secara otomatis setelah periode yang disepakati</li>
          <li>Perpanjangan memerlukan persetujuan tertulis</li>
          <li>Opsi perpanjangan harus dikomunikasikan 30 hari sebelum berakhir</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">2. Terminasi oleh Pelanggan</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Dapat dilakukan dengan pemberitahuan 30 hari</li>
          <li>Harus membayar semua layanan yang telah diberikan</li>
          <li>Biaya terminasi mungkin berlaku</li>
          <li>Pengembalian dana untuk layanan yang belum digunakan</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">3. Terminasi oleh CV SARANA ALMA SENTOSA</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Jika Pelanggan melanggar ketentuan material</li>
          <li>Jika Pelanggan gagal melakukan pembayaran</li>
          <li>Jika Pelanggan melakukan aktivitas ilegal</li>
          <li>Dengan pemberitahuan 14 hari untuk perbaikan</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">4. Terminasi Sepakat</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Kedua belah pihak setuju untuk mengakhiri kontrak</li>
          <li>Syarat dan ketentuan terminasi disepakati bersama</li>
          <li>Proses handover dilaksanakan secara profesional</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Obligasi Setelah Terminasi</h3>
        
        <h4 class="font-semibold mt-4 mb-2">1. Pembayaran Akhir</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Pelunasan semua tagihan yang belum dibayar</li>
          <li>Pembayaran untuk layanan hingga tanggal terminasi</li>
          <li>Biaya terminasi yang berlaku</li>
          <li>Pajak dan biaya administrasi</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">2. Pengembalian Aset</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Pengembalian semua peralatan dan dokumen</li>
          <li>Deletion data Pelanggan dari sistem Kami</li>
          <li>Penyerahan hasil pekerjaan yang telah selesai</li>
          <li>Dokumentasi penyerahan</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">3. Konfidensialitas</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Kewajiban konfidensial tetap berlaku setelah terminasi</li>
          <li>Informasi rahasia tetap dilindungi</li>
          <li>Hak kekayaan intelektual tetap dihormati</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Efek Terminasi</h3>
        <p class="mb-4">Setelah terminasi:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Hak akses ke layanan akan dihentikan</li>
          <li>Akun Pelanggan akan dinonaktifkan</li>
          <li>Backup data dapat disediakan atas permintaan</li>
          <li>Referensi dapat diberikan jika diminta</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Survival Clause</h3>
        <p class="mb-4">Ketentuan berikut tetap berlaku setelah terminasi:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Kewajiban konfidensialitas</li>
          <li>Hak kekayaan intelektual</li>
          <li>Klausul penyelesaian sengketa</li>
          <li>Batasan tanggung jawab</li>
          <li>Ketentuan indemnifikasi</li>
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
            <FileText className="w-12 h-12" />
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold">Syarat dan Ketentuan</h1>
              <p className="text-blue-100 mt-2">Terakhir diperbarui: 15 Januari 2024</p>
            </div>
          </div>
          <p className="text-lg opacity-90 max-w-3xl">
            Syarat dan Ketentuan ini mengatur penggunaan layanan yang disediakan oleh CV SARANA ALMA SENTOSA. 
            Dengan menggunakan layanan Kami, Anda setuju untuk terikat oleh ketentuan ini.
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
                <h3 className="text-xl font-semibold mb-4">Pertanyaan tentang Syarat dan Ketentuan?</h3>
                <p className="text-gray-700 mb-6">
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini atau membutuhkan klarifikasi, 
                  silakan hubungi tim legal Kami.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Email Legal</h4>
                    <p className="text-blue-600">legal@saranaalmasentosa.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Kontak Utama</h4>
                    <p className="text-blue-600">081931987647</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Agreement Checkbox */}
            <Card className="mt-8 bg-green-50 border-green-200">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Persetujuan Elektronik</h3>
                    <p className="text-gray-700 mb-4">
                      Dengan melanjutkan penggunaan layanan Kami, Anda menyatakan telah membaca, 
                      memahami, dan menyetujui Syarat dan Ketentuan ini secara elektronik.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <p className="text-sm text-gray-600">
                        <strong>Tanggal persetujuan:</strong> {new Date().toLocaleDateString('id-ID', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>Versi:</strong> 1.0
                      </p>
                    </div>
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