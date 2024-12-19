function createMainPage() {
  const name = 'v2.1'
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = spreadsheet.getSheetByName(name)

  if (!sheet){
    sheet = spreadsheet.insertSheet(name)
    sheet.setHiddenGridlines(true)

    // Resize Sheet
    sizeSheet(sheet, 180, 55)
    

    // Set Widths
    sheet.setColumnWidths(1, 55, 20)
    sheet.setColumnWidth(43, 55)
    sheet.setColumnWidth(53, 96)

    // Header
    sheet.setRowHeight(1, 2)

    // Default Formatting
    sheet.getRange("AQ:BC")
      .setFontFamily(hiddenFontFamily)
      .setFontSize(6)

    // Conditional Formatting

    // Data Validation

    // Build it out
    applyFormulasAndStyles(sheet, formulas[name])

    // Setup the hidden section
    sheet.getRange("AQ1:BC" + sheet.getMaxRows())
      .setBackground(lightGrey3)

    // Hide columns
    var startColumn = sheet.getRange("AQ1").getColumn()
    var lastColumn = sheet.getLastColumn()

    for (var i = startColumn; i <= lastColumn; i++){
      sheet.hideColumn(sheet.getRange(1, i))
    }
  }

  // Sheet protection
  const excemptRanges = getExcemptionRanges(sheet, excemptions[name])
  protectSheet(sheet, excemptRanges)
}
