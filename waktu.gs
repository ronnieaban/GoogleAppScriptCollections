
function waktu(timestamps) {
  // Mengonversi setiap timestamp dalam array
  var hasilTerjemahan = timestamps.map(function(timestamp) {
    // Menggunakan library TimeZone untuk mendapatkan zona waktu
    var timeZone = TimeZone.createTimeZone('Asia/Jakarta'); // Ganti 'Asia/Jakarta' sesuai dengan zona waktu yang diinginkan

    // Mengonversi timestamp ke format tanggal dan waktu dengan zona waktu yang benar
    var date = Utilities.formatDate(new Date(timestamp), timeZone, "dd MMMM yyyy");
    var time = Utilities.formatDate(new Date(timestamp), timeZone, "HH:mm:ss");
    var datetime = Utilities.formatDate(new Date(timestamp), timeZone, "dd MMMM yyyy HH:mm:ss");

    // Terjemahkan ke Bahasa Indonesia menggunakan Google LanguageApp
    var dateTranslated = LanguageApp.translate(date, 'en', 'id');
    var timeTranslated = LanguageApp.translate(time, 'en', 'id');
    var datetimeTranslated = LanguageApp.translate(datetime, 'en', 'id');

    return [dateTranslated, timeTranslated, datetimeTranslated];
  });

  // Return hasil terjemahan
  return hasilTerjemahan;
}
