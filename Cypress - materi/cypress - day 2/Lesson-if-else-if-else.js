/*
  buat lah program condition untuk mengetahui nilai siswa dengan kebutuhan dibawah ini :
  
  - buatlah sebuah variable yang tidak perlu di initialisasi ulang bernama value dan isi sesuai nilai yang kamu mau

  > condition if, else if, else
  - jika value lebih besar atau sama dengan 80 dan value lebih kecil atau sama dengan 100, print console "Nilai anda adalah A dari {value}"
  - jika tidak value lebih besar atau sama dengan 60 dan value lebih kecil atau sama dengan 79, print console "Nilai anda adalah B dari {value}"
  - lain jika, print console "Nilai anda adalah C dari {value}"
*/

const value = 100;

if (value >= 80 && value <= 100) {
  console.log("Nilai anda adalah A dari" + " " + value);
} else if (value >= 60 && value <= 79) {
  console.log("Nilai anda adalah B dari" + " " + value);
} else {
  console.log("Nilai anda adalah C dari" + " " + value);
}
