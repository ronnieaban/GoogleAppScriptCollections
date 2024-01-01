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

**waktu.gs**

Adalah Google Apps Script yang berguna untuk menerjemahkan timestamp ke dalam format tanggal, waktu, dan tanggal-waktu dengan berbagai zona waktu Indonesia (WIB, WITA, WIT). Kode ini dapat dengan mudah diintegrasikan ke dalam spreadsheet Google Sheets dan digunakan dengan bantuan formula ARRAYFORMULA untuk memproses sejumlah besar data timestamp secara otomatis.

  1. Buka Google Apps Script : Buka Google Sheets dan buatlah spreadsheet baru. Selanjutnya, pilih menu "Add-ons" -> "Apps Script" untuk membuka Google Apps Script Editor.
  2. Salin dan Tempel Kode : Salin dan tempel kode **waktu.gs** ke dalam Google Apps Script Editor:
  3. Simpan dan Beri Nama Project : Berikan nama project dengan mengklik pada bagian atas kiri yang berisi "Untitled project" dan berikan nama yang sesuai.
  4. Izinkan Akses : Pastikan memberikan izin yang diperlukan saat diminta oleh Google Apps Script.
  5. Kembali ke Spreadsheet : Kembali ke Google Sheets dan ketikkan beberapa timestamp di kolom A.
  6. Gunakan Fungsi dengan ARRAYFORMULA : Di sel B1, ketik formula berikut:
```bash
=ARRAYFORMULA(IF(A:A<>"", terjemahkanTimestampArray(A:A), ""))
```
  7. Lihat Hasilnya : Setelah beberapa saat, kolom B, C, dan D akan diisi dengan hasil terjemahan timestamp ke date, time, dan datetime dalam Bahasa Indonesia dengan zona waktu yang sesuai.
<<<-------------------------------------------------------------->>>
  
