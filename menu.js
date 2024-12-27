function openURL(url, dialogTitle) {
    var htmlOutput = HtmlService.createHtmlOutputFromFile('openURL')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .url(url)
    SpreadsheetApp.getUi().showModalDialog(htmlOutput, `Loading ${dialogTitle}...`);
  }

function gotoPlayersHandbook(){
    openURL("https://sw5e.com/rules/phb", "Players Handbook")
  }
  
  function gotoPointBuy(){
    openURL("https://chicken-dinner.com/5e/5e-point-buy.html", "Point Buy Calculator")
  }
  
  function gotoClasses(){
    openURL("https://sw5e.com/characters/classes", "Classes")
  }
  
  function gotoNightbrother(){
    openURL("https://www.gmbinder.com/share/-NWcmYdzTvxg4AmBq8xK", "GM Binder")
  }
  
  function gotoProjection(){
    openURL("https://www.gmbinder.com/share/-MyNV9HKNTLe-FVdkvf4", "GM Binder")
  }
  
  function gotoBonesetter(){
    openURL("https://www.gmbinder.com/share/-N-ngBQ4nn3SuEPq6fRo", "GM Binder")
  }

  function gotoSpecies(){
    openURL("https://sw5e.com/characters/species", "Species")
  }

  function gotoBackgrounds(){
    openURL("https://sw5e.com/characters/backgrounds", "Backgrounds")
  }

  function gotoFeats(){
    openURL("https://sw5e.com/characters/feats", "Feats")
  }

  function gotoForcePowers(){
    openURL("https://sw5e.com/characters/forcePowers", "Force Powers")
  }

  function gotoExpandedForcePowers(){
    openURL("https://www.gmbinder.com/share/-MDosNzOCLn0_ColYfBf", "GM Binder")
  }

  function gotoTechPowers(){
    openURL("https://sw5e.com/characters/techPowers", "Tech Powers")
  }

  function gotoExpandedTechPowers(){
    openURL("https://www.gmbinder.com/share/-MDp2nOeGD6JJLxNM_lT", "GM Binder")
  }

  function gotoNewTechPowers(){
    openURL("https://www.gmbinder.com/share/-My-EnFn7t2vE3kxawC0", "GM Binder")
  }