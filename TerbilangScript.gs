function TERBILANG(arr) {
  if (!Array.isArray(arr)) {
    return "Input harus berupa array";
  }

  const result = arr.map(row => {
    if (!Array.isArray(row)) {
      return "Setiap elemen harus berupa array";
    }

    return row.map(cell => {
      if (typeof cell !== "number") {
        return "Setiap elemen harus berupa angka";
      }

      const satuan = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan"];
      const belasan = ["", "Sebelas", "Dua Belas", "Tiga Belas", "Empat Belas", "Lima Belas", "Enam Belas", "Tujuh Belas", "Delapan Belas", "Sembilan Belas"];
      const puluhan = ["", "Sepuluh", "Dua Puluh", "Tiga Puluh", "Empat Puluh", "Lima Puluh", "Enam Puluh", "Tujuh Puluh", "Delapan Puluh", "Sembilan Puluh"];

      function terbilangRatusan(num) {
        if (num >= 100) {
          return satuan[Math.floor(num / 100)] + " Ratus " + terbilangRatusan(num % 100);
        } else if (num >= 20) {
          return puluhan[Math.floor(num / 10)] + " " + satuan[num % 10];
        } else if (num >= 11) {
          return belasan[num - 10];
        } else {
          return satuan[num];
        }
      }

      function terbilangRibuan(num) {
        if (num >= 1000) {
          return terbilangRatusan(Math.floor(num / 1000)) + " Ribu " + terbilangRatusan(num % 1000);
        } else {
          return terbilangRatusan(num);
        }
      }

      function terbilangJutaan(num) {
        if (num >= 1000000) {
          return terbilangRatusan(Math.floor(num / 1000000)) + " Juta " + terbilangRibuan(num % 1000000);
        } else {
          return terbilangRibuan(num);
        }
      }

      function terbilangMiliaran(num) {
        if (num >= 1000000000) {
          return terbilangRatusan(Math.floor(num / 1000000000)) + " Miliar " + terbilangJutaan(num % 1000000000);
        } else {
          return terbilangJutaan(num);
        }
      }

      function terbilangTriliunan(num) {
        if (num >= 1000000000000) {
          return terbilangRatusan(Math.floor(num / 1000000000000)) + " Triliun " + terbilangMiliaran(num % 1000000000000);
        } else {
          return terbilangMiliaran(num);
        }
      }

      if (cell === 0) {
        return "Nol";
      } else {
        return terbilangTriliunan(cell);
      }
    });
  });

  return result;
}
