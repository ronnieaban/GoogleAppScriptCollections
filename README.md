# GoogleAppScriptCollections

**TerbilangScript.gs**

Fungsi terbilang adalah suatu fungsi yang merubah angka menjadi bentuk kata atau tulisan angka dalam bahasa. Dengan kata lain, fungsi ini mengonversi nilai numerik menjadi bentuk yang lebih mudah dimengerti dalam bahasa manusia. Misalnya, angka 123 dapat diubah menjadi "seratus dua puluh tiga" menggunakan fungsi terbilang.

Fungsi terbilang biasanya digunakan dalam konteks penyusunan dokumen keuangan, pembuatan cek atau dokumen resmi lainnya di mana angka perlu diwakili dalam bentuk kata. Fungsi ini membantu menghindari kesalahan pembacaan atau interpretasi angka, terutama ketika angka yang besar atau kompleks terlibat.

Fungsi terbilang dapat disesuaikan sesuai dengan kebutuhan bahasa dan format tertentu. Dalam script yang diberikan sebelumnya untuk Google Spreadsheet, fungsi terbilang ditulis dalam bahasa Indonesia dan mampu menangani angka hingga triliun.

Berikut adalah langkah-langkah untuk membuat fungsi terbilang:
  1. Buka Google Spreadsheet dan buat spreadsheet baru atau buka spreadsheet yang sudah ada.
  2. Pilih "Extension" dari menu dan kemudian pilih "Apps Script."
  3. Di jendela Apps Script yang terbuka, Anda dapat menghapus kode yang ada dan menggantinya dengan kode berikut: **TerbilangScript.gs**
  4. Simpan script dengan memberikan nama seperti "TerbilangScript".
  5. Kembali ke spreadsheet, dan sekarang Anda dapat menggunakan fungsi terbilang pada sel spreadsheet. Misalnya, jika Anda ingin menuliskan terbilang dari angka 123, cukup masukkan =terbilang(123) pada sel, dan hasilnya akan otomatis muncul.

<<<-------------------------------------------------------------->>>

**uuidGoogleSheets.gs**

UUID, atau Universally Unique Identifier, adalah format identifikasi unik yang digunakan untuk memberikan identifikasi unik pada berbagai objek atau entitas. UUID biasanya digunakan dalam komputasi terdistribusi dan sistem yang memerlukan identifikasi unik untuk mencegah konflik atau duplikasi.

Di Google Sheets, Anda dapat membuat fungsi UUID menggunakan Google Apps Script. Berikut adalah contoh sederhana untuk membuat fungsi UUID di Google Sheets:

  1. Buka Google Sheets.
  2. Pilih "Extensions" > "Apps Script" dari menu. copy paste kode dari uuidGoogleSheets.gs
  3. Save kode

Jika Anda ingin menghasilkan sebuah UUID untuk setiap baris dalam kolom A, Anda dapat menulis formula berikut di sel B1:
```bash
=ARRAYFORMULA(IF(A:A<>"", UUID(), ""))
```
Formula ini akan menghasilkan UUID untuk setiap sel dalam kolom B hanya jika ada nilai di kolom A.

Jika Anda ingin menghasilkan array UUID dengan panjang tertentu, katakanlah 5, untuk setiap baris dalam kolom A, Anda dapat menggunakan formula berikut di sel B1:
```bash
=ARRAYFORMULA(IF(ROW(A:A) <= 5, UUID(), ""))
```
Formula ini akan menghasilkan array UUID dengan panjang 5 untuk setiap baris di kolom B.

<<<-------------------------------------------------------------->>>
  
