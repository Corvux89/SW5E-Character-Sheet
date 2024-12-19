function onOpen(e){
  var ui = SpreadsheetApp.getUi()
  ui.createMenu('SW5E Character Sheet')
    .addItem('Point Buy Calculator ➕➖', 'gotoPointBuy')
    .addItem('Retest', 'retest')
    .addToUi()

  createMainPage()
}

function retest(){
  const name = 'v2.1'
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = spreadsheet.getSheetByName(name)

  if (sheet){
    spreadsheet.deleteSheet(sheet)
  }
  
  createMainPage()
}

function swapFormula(range, formula){
  if (range.getFormulas() !== formula){
    range.setFormula(formula)
  }
}

function sizeSheet(sheet, numRows, numColumns){
  var currentRows = sheet.getMaxRows()
  if (currentRows < numRows) sheet.insertRowsAfter(currentRows, numRows - currentRows)

  var currentColumns = sheet.getMaxColumns()
  if (currentColumns < numColumns) sheet.insertColumnsAfter(currentColumns, numColumns - currentColumns)
}

function protectSheet(sheet, excemptions){
  const protection = sheet.protect()
  protection.setWarningOnly(true)
  if (excemptions) protection.setUnprotectedRanges(excemptions)
}

function gotoPointBuy()
{
   const js = " \
    <script> \
      window.open('https://chicken-dinner.com/5e/5e-point-buy.html'); \
      google.script.host.close(); \
    </script> \
  ";
  const html = HtmlService.createHtmlOutput(js)
    .setHeight(10)
    .setWidth(100)
  SpreadsheetApp.getUi().showModalDialog(html, 'Loading Point Buy Calculator...'); // If you use this on Spreadsheet
}

function applyFormulasAndStyles(sheet, sheetFormulas) {
  sheetFormulas.forEach(attrs => {
    // Merge defaults with overrides
    const cellAttributes = { ...createCellAttributes(), ...attrs }

    const range = sheet.getRange(cellAttributes.range)

    if (!range){
      return
    }

    if (cellAttributes.name) sheet.getParent().setNamedRange(cellAttributes.name, range)

    // Apply formula or value
    if (cellAttributes.formula) {
      range.setFormula(cellAttributes.formula)
    } else if (cellAttributes.value) {
      range.setValue(cellAttributes.value)
    }

    // Apply formatting
    if (cellAttributes.merge) range.merge()
    if (cellAttributes.fontSize) range.setFontSize(cellAttributes.fontSize)
    if (cellAttributes.fontWeight) range.setFontWeight(cellAttributes.fontWeight)
    if (cellAttributes.fontStyle) range.setFontStyle(cellAttributes.fontStyle)
    if (cellAttributes.fontFamily) range.setFontFamily(cellAttributes.fontFamily)
    if (cellAttributes.backgroundColor) range.setBackground(cellAttributes.backgroundColor)
    if (cellAttributes.textColor) range.setFontColor(cellAttributes.textColor)
    if (cellAttributes.horizontalAlignment) range.setHorizontalAlignment(cellAttributes.horizontalAlignment)
    if (cellAttributes.verticalAlignment) range.setHorizontalAlignment(cellAttributes.verticalAlignment)
    if (cellAttributes.notes) range.setNote(cellAttributes.notes)
    if (cellAttributes.numberFormat) range.setNumberFormat(cellAttributes.numberFormat)

    if (cellAttributes.border){

      const borderAttributes = {...createBorderAttributes(), ...cellAttributes.border}

      range.setBorder(
        borderAttributes.top,
        borderAttributes.left,
        borderAttributes.bottom,
        borderAttributes.right,
        borderAttributes.vertical,
        borderAttributes.horizontal,
        borderAttributes.color,
        borderAttributes.style
      )
    }
  })
}

function getExcemptionRanges(sheet, range_strings){
   var ranges = []

  range_strings.forEach(r => {
    ranges.push(sheet.getRange(r))
  })

  return ranges
}

function createCellAttributes() {
  return {
    range: '',              
    value: null,            
    formula: null,
    notes: null,          
    fontSize: 8,         
    fontFamily: primaryFontFamily,       
    fontWeight: null,       
    fontStyle: 'normal',        
    backgroundColor: null,  
    textColor: darkGrey4,        
    horizontalAlignment: null,
    verticalAlignment: null, 
    merge: false,
    name: null,
    border: null,   
    numberFormat: null         
  }
}

function createBorderAttributes() {
  return {
    top: false,
    left: false,
    bottom: false,
    right: false,
    vertical: false,
    horizontal: false,
    color: '',
    style: null
  }
}