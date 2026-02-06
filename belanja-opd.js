// ================================
// DATA BELANJA 33 OPD (DUMMY)
// ================================

const belanjaData = [];

for (let i = 1; i <= 33; i++) {
  belanjaData.push({
    nama: "OPD " + i,
    anggaran: 80000000000 + i * 2500000000,
    realisasi: 50000000000 + i * 2000000000,
    bulanan: Array.from({ length: 12 }, () =>
      Math.floor(Math.random() * 60) + 15
    )
  });
}
