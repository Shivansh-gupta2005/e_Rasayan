document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    document.getElementById('contact-form').reset();
});

// Google Apps Script code (Code.gs)

function doPost(e) {
    const sheet = SpreadsheetApp.openById('Y1tvQtrz3XICVWuTksU-JnQzbe3Gy0fBbfF0T8YRKsc_A').getActiveSheet(); // Replace with your Google Sheet ID
    const newRow = sheet.getLastRow() + 1;
    const rowData = [];
    
    rowData.push(new Date()); // Timestamp
    rowData.push(e.parameter.name);
    rowData.push(e.parameter.email);
    rowData.push(e.parameter.phone);
    
    sheet.getRange(newRow, 1, 1, rowData.length).setValues([rowData]);
    
    return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT);
  }
  