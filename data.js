// ================================
// 1. LIST OPD (33 OPD)
// ================================
const opdList = [
  "Dinas Pendidikan", "Dinas Kesehatan", "Dinas PUPR", "Dinas Perhubungan",
  "Dinas Sosial", "Dinas Kominfo", "Dinas Pariwisata", "Dinas Pertanian",
  "Dinas Perikanan", "Dinas Lingkungan Hidup", "Dinas Dukcapil", "Dinas PMD",
  "Dinas Tenaga Kerja", "Dinas Koperasi UKM", "Dinas Perdagangan", "Dinas Penanaman Modal",
  "Bappeda", "BPKAD", "Inspektorat", "Satpol PP", "BPBD", "Sekretariat DPRD",
  "Sekretariat Daerah", "Bagian Umum", "Bagian Hukum", "Bagian Organisasi",
  "Bagian Pemerintahan", "Kecamatan Siberut Selatan", "Kecamatan Siberut Utara",
  "Kecamatan Sipora Selatan", "Kecamatan Sipora Utara", "Kecamatan Pagai Selatan",
  "Kecamatan Pagai Utara"
];

// ================================
// 2. DATA PENDAPATAN (Target & Realisasi)
// ================================
const pendapatanData = opdList.map((nama) => {
  // Target: antara 50 Miliar hingga 150 Miliar
  const target = Math.floor(Math.random() * 101 + 50) * 1000000000;
  // Realisasi: antara 60% - 100% dari target
  const realisasiTotal = Math.floor(target * (Math.random() * 0.4 + 0.6));

  const bulanan = [];
  let sisa = realisasiTotal;
  for (let i = 0; i < 11; i++) {
    const nilai = Math.floor((realisasiTotal / 12) + (Math.random() * 500000000) - 250000000);
    const fix = Math.max(0, nilai);
    bulanan.push(fix);
    sisa -= fix;
  }
  bulanan.push(Math.max(0, sisa)); // Bulan ke-12 sisa akumulasi

  return {
    nama: nama,
    target: target,
    realisasi: realisasiTotal,
    bulanan: bulanan
  };
});

// ================================
// 3. DATA BELANJA (Anggaran & Realisasi)
// ================================
const belanjaData = opdList.map((nama, i) => {
  // Anggaran belanja: simulasi mulai dari 80M + kenaikan bertahap per index
  const anggaran = 80000000000 + (i * 2500000000); 
  // Realisasi belanja: antara 60% - 95% dari anggaran
  const realisasiBelanja = Math.floor(anggaran * (Math.random() * 0.35 + 0.6));

  const bulananBelanja = [];
  let sisaBelanja = realisasiBelanja;
  for (let j = 0; j < 11; j++) {
    const nilai = Math.floor((realisasiBelanja / 12) + (Math.random() * 400000000) - 200000000);
    const fix = Math.max(0, nilai);
    bulananBelanja.push(fix);
    sisaBelanja -= fix;
  }
  bulananBelanja.push(Math.max(0, sisaBelanja));

  return {
    nama: nama,
    anggaran: anggaran,
    realisasi: realisasiBelanja,
    bulanan: bulananBelanja
  };
});