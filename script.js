document.getElementById('excelFile').addEventListener('change', function(e) {
  let file = e.target.files[0];
  let reader = new FileReader();

  reader.onload = function(e) {
    let data = new Uint8Array(e.target.result);
    let workbook = XLSX.read(data, { type: 'array' });

    let html = "";
    workbook.SheetNames.forEach(function(sheetName) {
      let worksheet = workbook.Sheets[sheetName];
      html += `<h2>📂 ${sheetName}</h2>`;
      html += XLSX.utils.sheet_to_html(worksheet);
    });

    document.getElementById('output').innerHTML = html;
  };

  reader.readAsArrayBuffer(file);
});
