function openURL(url, dialogTitle) {
    var htmlOutput = HtmlService.createHtmlOutputFromFile('openURL')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .url(url)
    // const js = `<script>window.open('${url}'); google.script.host.close();</script>`;
    SpreadsheetApp.getUi().showModalDialog(htmlOutput, dialogTitle);
    // const html = HtmlService.createHtmlOutput(js).setHeight(10).setWidth(100);
    // SpreadsheetApp.getUi().showModalDialog(html, dialogTitle);
  }

function gotoPlayersHandbook(){
    openURL("https://sw5e.com/rules/phb", "Loading Players Handbook...")
  }
  
  function gotoPointBuy(){
    openURL("https://chicken-dinner.com/5e/5e-point-buy.html", "Loading Point Buy Calculator...")
  }
  
  function gotoClasses(){
    openURL("https://sw5e.com/characters/classes", "Loading Classes...")
  }
  
  function gotoNightbrother(){
    openURL("https://www.gmbinder.com/share/-NWcmYdzTvxg4AmBq8xK", "Loading GM Binder...")
  }
  
  function gotoProjection(){
    openURL("https://www.gmbinder.com/share/-MyNV9HKNTLe-FVdkvf4", "Loading GM Binder...")
  }
  
  function gotoBonesetter(){
    openURL("https://www.gmbinder.com/share/-N-ngBQ4nn3SuEPq6fRo", "Loading GM Binder...")
  }