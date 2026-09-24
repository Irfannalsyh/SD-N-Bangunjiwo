// ============================================================
// data.js — PUSAT DATA WEBSITE SD NEGERI BANGUNJIWO
// Edit array di bawah ini untuk mengubah isi Guru, Berita, dan
// Prestasi yang tampil di seluruh halaman website.
// ============================================================

// ⚠️ FOTO SLIDESHOW HERO BERANDA
// Ini foto latar besar di bagian paling atas index.html (yang bertuliskan
// "Belajar Ceria, Tumbuh Berprestasi"). Foto akan berganti otomatis setiap
// 5 detik secara berurutan.
// Cara ganti: ubah nilai "image" dengan path foto kamu sendiri, misalnya
// "img/hero/foto-sekolah-1.jpg" (taruh file fotonya di folder img/hero/).
// Tambah atau kurangi baris untuk menambah/mengurangi jumlah foto yang berganti.
const heroPhotosData = [
  { image: "tampak-depan.jpeg" },
  { image: "latar-belakang-2.jpeg" },
  { image: "latar-belakang-3.jpeg" },
  { image: "latar-belakang-4.jpeg" },
  { image: "latar-belakang-5.jpeg" },
];

// ⚠️ DATA GURU & KARYAWAN
// Duplikasi objek di dalam array ini untuk menambah guru baru.
// "photo" bisa diisi path gambar, contoh: "img/guru/nama-guru.jpg"
const teachersData = [
  { name: "Agus Kuncoro, S.Pd.", role: "Kepala Sekolah", photo: "https://placehold.co/300x300/4EA8DE/ffffff?text=Foto" },
  { name: "Ima Saraswati, S.Pd..", role: "Guru Kelas", photo: "https://placehold.co/300x300/FFD166/1D3557?text=Foto" },
  { name: "Ardi Widiarto, S.Pd.", role: "Guru Kelas", photo: "https://placehold.co/300x300/EF476F/ffffff?text=Foto" },
  { name: "Saminem, S.Pd", role: "Guru Kelas", photo: "https://placehold.co/300x300/06D6A0/1D3557?text=Foto" },
  { name: "Noviastri Herdinawati, S.Pd.", role: "Guru Batik", photo: "noviastri.png" },
  { name: "Indri Wulandari, S.Pd.", role: "Guru Kelas", photo: "https://placehold.co/300x300/FFD166/1D3557?text=Foto" },
  { name: "Fatimah, S.Pd.", role: "Guru Kelas", photo: "https://placehold.co/300x300/EF476F/ffffff?text=Foto" },
  { name: "Annisa Ayu Dewanti, S.E.", role: "Guru Pendidikan Agama", photo: "https://placehold.co/300x300/06D6A0/1D3557?text=Foto" },
  { name: "Rizky Fauzi Novia Huda, S.Pd.", role: "Guru Kelas", photo: "https://placehold.co/300x300/4EA8DE/ffffff?text=Foto" },
  { name: "Anggun Satriani, S.Pd.", role: "Guru Kelas", photo: "https://placehold.co/300x300/FFD166/1D3557?text=Foto" },
  { name: "Jamzam Widarningsih, S.Pd.", role: "Guru Kelas", photo: "https://placehold.co/300x300/EF476F/ffffff?text=Foto" },
  { name: "Siti Nurjanah, S.Pd.", role: "Guru Kelas", photo: "https://placehold.co/300x300/06D6A0/1D3557?text=Foto" },
  { name: "Kasiono, S.Pd.I.", role: "Guru Pendidikan Agama Islam", photo: "https://placehold.co/300x300/4EA8DE/ffffff?text=Foto" },
  { name: "Nala Pati Fatahhilah, S.Or.", role: "Guru Penjaskores", photo: "https://placehold.co/300x300/FFD166/1D3557?text=Foto" },
  // ⬇️ Tambahkan guru lain di sini mengikuti format di atas
];

// ⚠️ DATA BERITA SEKOLAH
// "id" harus unik untuk tiap berita (dipakai di URL baca-berita.html?id=...)
const newsData = [
  {
    id: 1,
    title: "Perayaan Hari Kemerdekaan RI ke-81 di SD Negeri Bangunjiwo",
    date: "17 Agustus 2026",
    image: "https://placehold.co/600x400/EF476F/ffffff?text=Berita+1",
    excerpt: "Seluruh siswa dan guru mengikuti upacara bendera serta berbagai lomba tradisional yang meriah.",
    content:
      "Seluruh siswa dan guru SD Negeri Bangunjiwo mengikuti upacara bendera dengan khidmat pada pagi hari, dilanjutkan dengan berbagai lomba tradisional seperti balap karung, makan kerupuk, dan tarik tambang. Acara ini bertujuan menumbuhkan rasa cinta tanah air sekaligus mempererat kebersamaan antar siswa dari berbagai kelas."
  },
  {
    id: 2,
    title: "Juara 1 Lomba Cerdas Cermat Tingkat Kabupaten Bantul",
    date: "2 September 2026",
    image: "https://placehold.co/600x400/06D6A0/1D3557?text=Berita+2",
    excerpt: "Tim cerdas cermat SD Negeri Bangunjiwo berhasil meraih juara 1 tingkat Kabupaten Bantul.",
    content:
      "Tim cerdas cermat SD Negeri Bangunjiwo yang beranggotakan tiga siswa kelas 6 berhasil meraih Juara 1 dalam Lomba Cerdas Cermat tingkat Kabupaten Bantul. Prestasi ini merupakan hasil dari latihan intensif yang dibimbing langsung oleh guru-guru pembina selama dua bulan terakhir."
  },
  {
    id: 3,
    title: "Kegiatan Belajar di Luar Kelas: Kunjungan ke Museum",
    date: "10 September 2026",
    image: "https://placehold.co/600x400/4EA8DE/ffffff?text=Berita+3",
    excerpt: "Siswa kelas 4 dan 5 melakukan kunjungan edukatif ke museum untuk memperkaya wawasan sejarah.",
    content:
      "Sebagai bagian dari program pembelajaran tematik, siswa kelas 4 dan 5 SD Negeri Bangunjiwo melakukan kunjungan edukatif ke museum daerah. Kegiatan ini bertujuan memberikan pengalaman belajar langsung di luar kelas agar siswa lebih memahami materi sejarah dan budaya secara nyata."
  },
  {
    id: 4,
    title: "Pembukaan Ekstrakurikuler Pramuka Semester Baru",
    date: "15 September 2026",
    image: "https://placehold.co/600x400/FFD166/1D3557?text=Berita+4",
    excerpt: "Kegiatan ekstrakurikuler Pramuka resmi dibuka untuk siswa kelas 3 hingga 6.",
    content:
      "SD Negeri Bangunjiwo resmi membuka kembali kegiatan ekstrakurikuler Pramuka untuk semester baru. Kegiatan ini diikuti oleh siswa kelas 3 hingga kelas 6 dan bertujuan untuk membentuk karakter disiplin, kemandirian, serta jiwa kepemimpinan sejak dini."
  },
];

// ⚠️ DATA PRESTASI SISWA
const achievementsData = [
  {
    studentName: "Wiguna Bagus Prayogo",
    competition: "Karate DIY OPEN 2 Karate International Championship 2026",
    level: "Nasional",
    year: "2026",
    result: "Juara 1",
    image: "wiguna-bagus-prayogo.png",
  },
  {
    studentName: "Ainun Zahratu",
    competition: "Olimpiade Sains Nasional (OSN) Tingkat Provinsi 2026",
    level: "Provinsi",
    year: "2026",
    result: "Juara 2",
    image: "ainun-zahratu.png",
  },
  {
    studentName: "Alzam Wafiy",
    competition: "kejuaraan Pencak Silat Baja Cup 2026",
    level: "Kabupaten",
    year: "2026",
    result: "Juara 1",
    image: "alzam-wafiy.png",
  },
  {
    studentName: "Maliq Zhafran",
    competition: "Kejuaraan Renang 50 Meter Gaya Dada - Fun Swimming 2026",
    level: "Kabupaten",
    year: "2026",
    result: "Juara 3",
    image: "maliq-zhafran.png",
  },
  {
    studentName: "Tigo Sandu",
    competition: "Liga Fun Game SSB SE-DIY 2026",
    level: "Provinsi",
    year: "2026",
    result: "Juara 3",
    image: "tigo-sandu.png",
  },
  {
    studentName: "Bintang Jaya Kusuma Javanese",
    competition: "Genyar Anak Sholeh MTS Muhammadiyah Kasihan",
    level: "Kabupaten",
    year: "2026",
    result: "Juara 2",
    image: "https://placehold.co/300x300/4EA8DE/ffffff?text=Foto",

  },
  {
    studentName: "Aqilla Andhara Putri Biyan",
    competition: "Gebyar Anak Sholeh MTS Muhammadiyah Kasihan",
    level: "Kabupaten",
    year: "2026",
    result: "Juara 3",
    image: "https://placehold.co/300x300/4EA8DE/ffffff?text=Foto",
  
  },
  {
    studentName: "Ni Kadek Ayu Shree Laksmi Priya",
    competition: "Utsama Story Telling Anutsawa Dharma Gita",
    level: "Daerah",
    year: "2026",
    result: "Juara 1",
    image: "https://placehold.co/300x300/4EA8DE/ffffff?text=Foto",
  
  },
  {
    studentName: "Naima Arsyakayla Wibowo",
    competition: "Lomba Tari Kreasi Nusantara Piala Wakil Walikota Yogyakarta",
    level: "Daerah",
    year: "2026",
    result: "Juara Harapan 1",
    image: "https://placehold.co/300x300/4EA8DE/ffffff?text=Foto",
    
  },
  {  
    studentName: "Tim Hockey Putra",
    competition : "Bangunjiwo Indoor Hockey CUP II",
    level : "Kabupaten",
    year: "2026",
    result: "Juara 2",
    image: "https://placehold.co/300x300/4EA8DE/ffffff?text=Foto",

  },
  {
    studentName: "Annasya Adreena Ayu Setiawan",
    competition : "Lomba Nasyid Islami TPA",
    level : "Kecamatan",
    year: "2026",
    result: "Juara 2",
    image: "https://placehold.co/300x300/4EA8DE/ffffff?text=Foto",

  },
  {
    studentName: "Azkya Jasmine Ramadhina",
    competition : "Lomba Nasyid Islami TPA",
    level : "Kecamatan",
    year: "2026",
    result: "Juara 2",
    image: "https://placehold.co/300x300/4EA8DE/ffffff?text=Foto",
    
  },
  {
    studentName: "Khanza Nur Azkia",
    competition : "Lomba Mewarnai Katagori B",
    level : "Kabupaten",
    year: "2026",
    result: "Juara 2",
    image: "https://placehold.co/300x300/4EA8DE/ffffff?text=Foto",
    
  },
  {
    studentName: "Mikaila Sonya",
    competition : "Festival Anak Sholeh (FASI) 2026",
    level : "Kecamatan",
    year: "2026",
    result: "Juara 2",
    image: "https://placehold.co/300x300/4EA8DE/ffffff?text=Foto",

  },
  {
    studentName: "Arjuna Zhafran  Wicaksono",
    competition : "Kejuaraan Nasioanl UGM TAEKWONDO CHAMPIONSHIP 2026",
    level : "Nasional",
    year: "2026",
    result: "Juara 1",
    image: "https://placehold.co/300x300/4EA8DE/ffffff?text=Foto",  
  
  },
];
