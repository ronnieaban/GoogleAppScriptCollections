/**
 * Menghasilkan UUID (Universally Unique Identifier).
 *
 * @param {number} numRows - Jumlah UUID yang akan dihasilkan.
 * @customfunction
 * @return {Array} UUID yang dihasilkan.
 */
function UUID(numRows) {
  if (numRows === undefined) {
    // Jika numRows tidak diberikan, mengembalikan satu UUID
    return Utilities.getUuid();
  } else {
    // Jika numRows diberikan, mengembalikan array UUID
    var uuids = [];
    for (var i = 0; i < numRows; i++) {
      uuids.push([Utilities.getUuid()]);
    }
    return uuids;
  }
}
