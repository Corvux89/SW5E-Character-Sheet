// clasp
// npm i -g @google/clasp
// npm i @types/google-apps-script
// clasp clone ""
// clasp push/pull

function onOpen(e){
  var ui = SpreadsheetApp.getUi()

  function createMenuRecursive(parentMenu, menuData){
    if (menuData.children){
      const subMenu = ui.createMenu(menuData.caption)
      menuData.children.forEach(child => createMenuRecursive(subMenu, child))
      parentMenu.addSubMenu(subMenu)
    } else {
      parentMenu.addItem(menuData.caption, menuData.function)
    }
  }

  menu = ui.createMenu('SW5E Character Sheet')

  menus.forEach(item => createMenuRecursive(menu, item))
  menu.addToUi()
}

function checkForUpdates(){
  var scriptProperties = PropertiesService.getScriptProperties()
  const version = scriptProperties.getProperty('version') || '1.0'
  var patches = []
  var newVersion = version

  patches.forEach(p => {
    const patch = {...createPatch(), ...p}

    if (parseFloat(patch.version) > parseFloat(version)){
      newVersion = patch.version
      patches.push(patch)
    }
  })

}

function clearNamedRanges(){
  if (SpreadsheetApp.getActiveSpreadsheet().getId() == url) throw new error (`Can't modify source sheet`)
  clearAllNamedRanges()

  var  spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  tabs.forEach(tab => {
    var sheet = spreadsheet.getSheetByName(tab)
    if (sheet){
      spreadsheet.deleteSheet(sheet)
    }
  })
}

function setupWorkbook(){
  if (SpreadsheetApp.getActiveSpreadsheet().getId() == url) throw new error (`Can't modify source sheet`)
  var  spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  tabs.forEach(tab => {
    var sheet = spreadsheet.getSheetByName(tab)
    if (sheet){
      spreadsheet.deleteSheet(sheet)
    }

    copySheet(tab)
  })

  clearAllNamedRanges()
  copyNamedRanges(spreadsheet)
  copyFormulasAcrossSpreadsheet()
}

function copySheet(name){
  const sourceSS = SpreadsheetApp.openById(url)

  const sourceSheet = sourceSS.getSheetByName(name)

  if (!sourceSheet){
    throw new error (`Sheet '${name}' not found`)
  }

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = spreadsheet.getSheetByName(name)

  if (!sheet){
    sheet = sourceSheet.copyTo(spreadsheet)
    sheet.setName(name)
  }
}

function copyFormulasAcrossSpreadsheet() {
  const sourceSS = SpreadsheetApp.openById(url);
  const targetSS = SpreadsheetApp.getActiveSpreadsheet();

  tabs.forEach(tab => {
    const sourceSheet = sourceSS.getSheetByName(tab);
    const targetSheet = targetSS.getSheetByName(tab);

    const sourceRange = sourceSheet.getDataRange();

    const formulas = sourceRange.getFormulas();

    const values = sourceRange.getValues();

    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < values[i].length; j++) {
        if (formulas[i][j]) {
          targetSheet.getRange(i + 1, j + 1).setFormula(formulas[i][j]);
        } else {
          targetSheet.getRange(i + 1, j + 1).setValue(values[i][j]);
        }
      }
    }
  });
}
function clearAllNamedRanges() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var namedRanges = spreadsheet.getNamedRanges();

  for (let i = 0; i < namedRanges.length; i++) {
    namedRanges[i].remove();
  }
}

function copyNamedRanges(targetSpreadsheet) {
  const sourceSpreadsheet = SpreadsheetApp.openById(url);
  const namedRanges = sourceSpreadsheet.getNamedRanges();

  for (let i = 0; i < namedRanges.length; i++) {
    const namedRange = namedRanges[i];
    const range = namedRange.getRange(); 
    const sourceSheetName = range.getSheet().getName(); 
    let targetSheet = targetSpreadsheet.getSheetByName(sourceSheetName); 
    const newRange = targetSheet.getRange(range.getA1Notation()); 
    targetSpreadsheet.setNamedRange(namedRange.getName(), newRange);
  }
}
function applyFormulasAndStyles(sheet, sheetFormulas) {
  sheetFormulas.forEach(attrs => {
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
    if (cellAttributes.verticalAlignment) range.setVerticalAlignment(cellAttributes.verticalAlignment)
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

function createPatch() {
  return {
    desc: '',
    version: '',
    updates: {}
  }
}

function createUpdate() {
  return {
    sheet: '',
    formulas: []
  }
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