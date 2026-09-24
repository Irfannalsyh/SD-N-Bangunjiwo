// ============================================================
// script.js — SD NEGERI BANGUNJIWO
// Berisi: navigasi mobile, scroll reveal, carousel, render data
// guru/berita/prestasi, form SPMB, dan panel admin SPMB.
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupNavbar();
  setupHeroSlider();
  setupScrollReveal();
  setupAllCarousels();
  renderTeachers();
  renderTeacherGrid();
  renderNewsHome();
  renderNewsGrid();
  renderArticle();
  renderAchievements();
  setupSpmbForm();
  setupAdminPanel();
  setYear();
});

// ------------------------------------------------------------
// 0. DARK MODE: tombol matahari/bulan di navbar
//    Tema awal sudah diset lebih dulu oleh script kecil di <head>
//    (supaya tidak "kedip" putih sesaat sebelum berganti gelap).
//    Fungsi ini hanya menangani klik tombolnya + menyimpan pilihan.
// ------------------------------------------------------------
const THEME_STORAGE_KEY = "sdnb-theme";

function setupThemeToggle() {
  const toggleButtons = document.querySelectorAll("#themeToggle");
  if (!toggleButtons.length) return;

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch (e) {
        // localStorage tidak tersedia (mis. mode privat) — tema tetap
        // berubah untuk sesi ini, hanya tidak tersimpan permanen.
      }
    });
  });
}

// ------------------------------------------------------------
// 1. NAVBAR: hamburger mobile + dropdown "Program Sekolah"
// ------------------------------------------------------------
function setupNavbar() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      mobileMenu.classList.toggle("open");
    });
  }

  // Accordion submenu di menu mobile — mendukung lebih dari satu dropdown
  // (mis. "Tentang" & "Program Sekolah") di halaman mana pun
  document.querySelectorAll(".mobile-dropdown-toggle").forEach((toggle) => {
    const submenu = toggle.nextElementSibling;
    if (!submenu || !submenu.classList.contains("mobile-submenu")) return;
    toggle.addEventListener("click", () => {
      submenu.classList.toggle("open");
      toggle.classList.toggle("open");
    });
  });

  // Dropdown desktop juga bisa dibuka via klik (selain hover) — ramah untuk layar sentuh besar/tablet
  document.querySelectorAll(".nav-menu .dropdown").forEach((dropdown) => {
    const trigger = dropdown.querySelector(".nav-item");
    if (!trigger) return;
    trigger.addEventListener("click", (e) => {
      if (window.innerWidth <= 860) return; // biar tidak bentrok dengan menu mobile
      e.preventDefault();
      dropdown.classList.toggle("open");
    });
  });
}

// ------------------------------------------------------------
// 1b. SLIDESHOW FOTO HERO — beranda (index.html)
//     Foto berganti otomatis setiap 5 detik, data dari heroPhotosData (data.js)
// ------------------------------------------------------------
function setupHeroSlider() {
  const container = document.getElementById("heroPhotoSlider");
  if (!container || typeof heroPhotosData === "undefined" || !heroPhotosData.length) return;

  // Buat satu lapisan <div> per foto, ditumpuk di belakang teks & overlay
  const slides = heroPhotosData.map((photo, i) => {
    const slide = document.createElement("div");
    slide.className = "hero-photo-slide" + (i === 0 ? " active" : "");
    slide.style.backgroundImage = `url('${photo.image}')`;
    container.insertBefore(slide, container.firstChild);
    return slide;
  });

  if (slides.length <= 1) return; // cukup 1 foto, tidak perlu diputar

  let current = 0;
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 5000);
}

// ------------------------------------------------------------
// 2. SCROLL REVEAL: animasi muncul halus saat elemen di-scroll
// ------------------------------------------------------------
function setupScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach((el) => observer.observe(el));
}

// ------------------------------------------------------------
// 3. CAROUSEL GENERIK: tombol prev/next untuk semua carousel
//    (dipakai untuk carousel Guru & Berita di index.html)
// ------------------------------------------------------------
function setupAllCarousels() {
  document.querySelectorAll("[data-carousel]").forEach((wrap) => {
    const track = wrap.querySelector(".carousel-track");
    const prevBtn = wrap.querySelector(".carousel-btn.prev");
    const nextBtn = wrap.querySelector(".carousel-btn.next");
    if (!track) return;

    const scrollAmount = () => track.clientWidth * 0.85;

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
      });
    }
  });
}

// ------------------------------------------------------------
// 4. RENDER KARTU GURU (dipakai di index.html, carousel Guru)
// ------------------------------------------------------------
function renderTeachers() {
  const track = document.getElementById("teacherTrack");
  if (!track || typeof teachersData === "undefined") return;

  track.innerHTML = teachersData
    .map(
      (t) => `
      <div class="teacher-card">
        <img src="${t.photo}" alt="Foto ${t.name}" loading="lazy">
        <div class="info">
          <p class="name">${t.name}</p>
          <p class="role">${t.role}</p>
        </div>
      </div>`
    )
    .join("");
}

// ------------------------------------------------------------
// 4b. RENDER GRID GURU & KARYAWAN — guru-karyawan.html
// ------------------------------------------------------------
function renderTeacherGrid() {
  const grid = document.getElementById("teacherGrid");
  if (!grid || typeof teachersData === "undefined") return;

  grid.innerHTML = teachersData
    .map(
      (t) => `
      <div class="teacher-card">
        <div class="teacher-photo">
          <img src="${t.photo}" alt="${t.name}" loading="lazy">
        </div>
        <div class="teacher-caption">
          <h3>${t.name}</h3>
          <p>${t.role}</p>
        </div>
      </div>`
    )
    .join("");
}

// ------------------------------------------------------------
// 5. RENDER BERITA — carousel di index.html
// ------------------------------------------------------------
function renderNewsHome() {
  const track = document.getElementById("newsTrack");
  if (!track || typeof newsData === "undefined") return;

  track.innerHTML = newsData
    .map(
      (n) => `
      <a href="baca-berita.html?id=${n.id}" class="news-card">
        <img src="${n.image}" alt="${n.title}" loading="lazy">
        <div class="info">
          <p class="date">${n.date}</p>
          <p class="title">${n.title}</p>
          <p class="excerpt">${n.excerpt}</p>
        </div>
      </a>`
    )
    .join("");
}

// ------------------------------------------------------------
// 6. RENDER BERITA — grid lengkap di berita.html
// ------------------------------------------------------------
function renderNewsGrid() {
  const grid = document.getElementById("newsGrid");
  if (!grid || typeof newsData === "undefined") return;

  grid.innerHTML = newsData
    .map(
      (n) => `
      <a href="baca-berita.html?id=${n.id}" class="news-card">
        <img src="${n.image}" alt="${n.title}" loading="lazy">
        <div class="info">
          <p class="date">${n.date}</p>
          <p class="title">${n.title}</p>
          <p class="excerpt">${n.excerpt}</p>
        </div>
      </a>`
    )
    .join("");
}

// ------------------------------------------------------------
// 7. RENDER ARTIKEL PENUH — baca-berita.html?id=...
// ------------------------------------------------------------
function renderArticle() {
  const container = document.getElementById("articleContainer");
  if (!container || typeof newsData === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const article = newsData.find((n) => n.id === id);

  if (!article) {
    container.innerHTML = `
      <div class="article-header">
        <h1 class="article-title">Berita tidak ditemukan</h1>
        <p class="article-content">Maaf, artikel yang kamu cari tidak tersedia. 
        <a href="berita.html" style="color:var(--blue); font-weight:700;">Kembali ke daftar berita</a>.</p>
      </div>`;
    return;
  }

  document.title = `${article.title} | SD Negeri Bangunjiwo`;

  container.innerHTML = `
    <div class="article-header">
      <p class="article-date">${article.date}</p>
      <h1 class="article-title">${article.title}</h1>
      <img src="${article.image}" alt="${article.title}">
    </div>
    <div class="article-content">
      <p>${article.content}</p>
    </div>
    <p style="margin-top:32px;">
      <a href="berita.html" style="color:var(--blue); font-weight:700;">← Kembali ke daftar berita</a>
    </p>
  `;
}

// ------------------------------------------------------------
// 8. RENDER PRESTASI — prestasi.html
// ------------------------------------------------------------
function renderAchievements() {
  const grid = document.getElementById("achievementGrid");
  if (!grid || typeof achievementsData === "undefined") return;

  grid.innerHTML = achievementsData
    .map(
      (a) => `
      <div class="achievement-card">
        <img src="${a.image}" alt="${a.studentName}" loading="lazy">
        <div class="info">
          <span class="achievement-badge">${a.result}</span>
          <p class="name" style="font-weight:700; margin:0 0 4px;">${a.studentName}</p>
          <p style="font-size:0.88rem; color:var(--gray); margin:0 0 4px;">${a.competition}</p>
          <p style="font-size:0.8rem; color:var(--gray); margin:0;">Tingkat ${a.level} · ${a.year}</p>
        </div>
      </div>`
    )
    .join("");
}

// ------------------------------------------------------------
// 9. FORM SPMB — simpan pendaftaran ke localStorage
// ------------------------------------------------------------
const SPMB_STORAGE_KEY = "spmbPendaftar";

function setupSpmbForm() {
  const form = document.getElementById("spmbForm");
  if (!form) return;

  const successAlert = document.getElementById("spmbSuccess");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const newEntry = {
      id: Date.now(),
      namaSiswa: formData.get("namaSiswa"),
      nik: formData.get("nik"),
      tempatLahir: formData.get("tempatLahir"),
      tanggalLahir: formData.get("tanggalLahir"),
      namaOrtu: formData.get("namaOrtu"),
      noHp: formData.get("noHp"),
      alamat: formData.get("alamat"),
      waktuDaftar: new Date().toLocaleString("id-ID"),
    };

    const existing = getSpmbData();
    existing.push(newEntry);
    localStorage.setItem(SPMB_STORAGE_KEY, JSON.stringify(existing));

    form.reset();

    if (successAlert) {
      successAlert.classList.add("show");
      successAlert.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => successAlert.classList.remove("show"), 5000);
    }
  });
}

function getSpmbData() {
  try {
    return JSON.parse(localStorage.getItem(SPMB_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

// ------------------------------------------------------------
// 10. PANEL ADMIN SPMB — admin-spmb.html
//     Tabel rekap, pencarian, hapus data, export CSV
// ------------------------------------------------------------
function setupAdminPanel() {
  const tableBody = document.getElementById("adminTableBody");
  if (!tableBody) return; // bukan halaman admin, skip

  const searchInput = document.getElementById("adminSearch");
  const exportBtn = document.getElementById("exportCsvBtn");
  const emptyState = document.getElementById("adminEmptyState");

  function renderTable(filterText = "") {
    const data = getSpmbData();
    const filtered = data.filter((d) =>
      d.namaSiswa.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filtered.length === 0) {
      tableBody.innerHTML = "";
      if (emptyState) emptyState.style.display = "block";
      return;
    }

    if (emptyState) emptyState.style.display = "none";

    tableBody.innerHTML = filtered
      .map(
        (d) => `
        <tr>
          <td>${d.namaSiswa}</td>
          <td>${d.nik}</td>
          <td>${d.tempatLahir}, ${d.tanggalLahir}</td>
          <td>${d.namaOrtu}</td>
          <td>${d.noHp}</td>
          <td>${d.alamat}</td>
          <td>${d.waktuDaftar}</td>
          <td><button class="btn-delete" data-id="${d.id}">Hapus</button></td>
        </tr>`
      )
      .join("");

    // Pasang event listener tombol hapus setelah render
    tableBody.querySelectorAll(".btn-delete").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!confirm("Yakin ingin menghapus data pendaftar ini?")) return;
        const id = Number(btn.dataset.id);
        const updated = getSpmbData().filter((d) => d.id !== id);
        localStorage.setItem(SPMB_STORAGE_KEY, JSON.stringify(updated));
        renderTable(searchInput ? searchInput.value : "");
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => renderTable(searchInput.value));
  }

  if (exportBtn) {
    exportBtn.addEventListener("click", () => exportSpmbToCsv());
  }

  renderTable();
}

function exportSpmbToCsv() {
  const data = getSpmbData();

  if (data.length === 0) {
    alert("Belum ada data pendaftar untuk diexport.");
    return;
  }

  const headers = [
    "Nama Calon Siswa",
    "NIK",
    "Tempat Lahir",
    "Tanggal Lahir",
    "Nama Orang Tua",
    "No. HP/WA",
    "Alamat",
    "Waktu Daftar",
  ];

  const rows = data.map((d) => [
    d.namaSiswa,
    d.nik,
    d.tempatLahir,
    d.tanggalLahir,
    d.namaOrtu,
    d.noHp,
    d.alamat,
    d.waktuDaftar,
  ]);

  // Escape tanda kutip & bungkus tiap kolom dengan quote supaya aman dibuka di Excel
  const csvContent = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");

  // Tambahkan BOM supaya karakter Indonesia (é, dsb) tampil benar di Excel
  const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `data-spmb-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// ------------------------------------------------------------
// 11. TAHUN OTOMATIS DI FOOTER
// ------------------------------------------------------------
function setYear() {
  document.querySelectorAll(".current-year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}
