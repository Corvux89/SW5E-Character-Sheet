const primaryFontFamily = "Georgia"
const hiddenFontFamily = "Trebuchet MS"

const darkGrey4 = "#434343"
const darkGrey3 = "#666666"
const darkGrey2 = "#999999"
const darkGrey1 = "#b7b7b7"
const lightGrey3 = "#f3f3f3"
const lightGrey20 = "#dddddd"
const black = "#000000"

const formulas = {
    'v2.1': [
      {
        range: "A2:R5",
        formula: `=if(C174="",if(isnumber(find("Han",C6)),image("https://i.imgur.com/T5OD9a5.png",2),if(and(AV16<>"",countif(AQ155:AQ180,AV16)),image(vlookup(AV16,AQ155:AS180,2,false),2),image(AR156,2))),image(vlookup(C174,AQ155:AS180,2,false),2))`,
        merge: true
      },
      {
        range: "T2:AM2",
        merge: true,
        formula: `=if(and(name="",classAndLevel="",race="",level="",C16=0,C21=0,C26=0,C31=0,C36=0,C41=0),"Click [File] then [Make a copy...] to use the sheet for yourself.",if(and(sum(AT6:AT15)<>level,classAndLevel<>""),"Total class levels must equal character level",""))`,
        fontFamily: hiddenFontFamily,
        fontStyle: 'italic'
      },
      {
        range: "AQ2",
        value: `Hide these columns. There should be no need to alter them (mostly).`,
        fontSize: 6,
        fontFamily: hiddenFontFamily
      },
      {
        range: "T3:AM3",
        merge: true,
        formula: `=if(and(name="",classAndLevel="",race="",level="",C16=0,C21=0,C26=0,C31=0,C36=0,C41=0),"Check [?] for help.  And read all the notes!",if(and(sum(AT6:AT15)<>level,classAndLevel<>""),"If you are using a homebrew class, enter its details on the Class Info page.",""))`
      },
      {
        range: "S4:AN4",
        merge: true,
        formula: `=IMAGE("http://i.imgur.com/OlUFGxq.png",2)`
      },
      {
        range: "AO4:AO8",
        merge: true,
        formula: `=IMAGE("http://i.imgur.com/nWCUyCa.png",2)` 
      },
      {
        range: "AQ4",
        value: "2.1",
        fontFamily: hiddenFontFamily,
        fontSize: 6
      },
      {
        range: "T5:AD5",
        merge: true,
        notes: 
        `Enter your first chosen class first. If you have an Archetype, enter it anywhere before another class, e.g. "Assault Specialist Fighter 4 or Ballistic Approach Berserker 3"\nThe first class entered will be used to determine your 1st level hit die and saving throw proficiencies.\n\n**IF YOU ARE A FORCE USER, signify Light or Dark.\ne.g. "ConsularLight or ConsularDark"\n\nImportant: Do not neglect to set your Archetype. Under various circumstances, not intentionally setting an Archetype can end up with the sheet giving you an Archetype you don't have.`,
        fontSize: 7
      },
      {
        range: "AE5:AJ5",
        merge: true,
        fontSize: 9
      },
      {
        range: "AK5:AK8",
        merge: true,
        formula: `=if(AL6="",IMAGE(Additional!AV9,2),if(AL6<5,IMAGE(Additional!AV10,2),if(AL6<11,IMAGE(Additional!AV11,2),if(AL6<17,IMAGE(Additional!AV12,2),IMAGE(Additional!AV13,2)))))`
      },
      {
        range: "AL5:AM5",
        merge: true,
        formula: `=if(AL6="",IMAGE(Additional!AX9,2),if(AL6<5,IMAGE(Additional!AX10,2),if(AL6<11,IMAGE(Additional!AX11,2),if(AL6<17,IMAGE(Additional!AX12,2),IMAGE(Additional!AX13,2)))))`
      },
      {
        range: "AN5:AN8",
        merge: true,
        formula: `=if(AL6="",IMAGE(Additional!AW9,2),if(AL6<5,IMAGE(Additional!AW10,2),if(AL6<11,IMAGE(Additional!AW11,2),if(AL6<17,IMAGE(Additional!AW12,2),IMAGE(Additional!AW13,2)))))`
      },
      {
        range: "AQ5",
        formula: `=iferror(array_constrain(split(textjoin("~",True,filter('Race Info'!$B$7:$AN180,'Race Info'!$B$7:$B180<>"",lower('Race Info'!$B$7:$B180=$T$7))),"~"),1,11),"")`,
        name: "race",
        fontFamily: hiddenFontFamily,
        fontSize: 6
      },
      {
        range: "AT5",
        name: "racialSpeed",
        fontSize: 6,
        fontFamily: hiddenFontFamily
      },
      {
        range: "AV5",
        name: "raceResist",
        fontSize: 6,
        fontFamily: hiddenFontFamily
      },
      {
        range: "BC5",
        fontSize: 6,
        fontFamily: hiddenFontFamily,
        formula: `=if($T$5<>"",array_constrain(iferror(filter(BA6:BA15,BA6:BA15<>"",isnumber(find("10",BA6:BA15))),"10+dex"),1,1),"")`
      },
      {
        range: "T6:AD6",
        fontFamily: hiddenFontFamily,
        fontSize: 7,
        merge: true,
        value: `CLASS(ES) & LEVEL(S)`,
        textColor: darkGrey3,
        border: {
            top: true,
            color: darkGrey1
        }
      },
      {
        range: "AE6:AJ6",
        merge: true,
         fontFamily: hiddenFontFamily,
         fontSize: 7,
         value: `PLAYER NAME`,
         textColor: darkGrey3,
         border: {
            top: true,
            color: darkGrey1
         }
      },
      {
        range: "AL6:AM7",
        merge: true,
        fontSize: 20,
        formula: `=if(AE7<>"",if(AE7<300,1,if(AE7<900,2,if(AE7<2700,3,if(AE7<6500,4,if(AE7<14000,5,if(AE7<23000,6,if(AE7<34000,7,if(AE7<48000,8,if(AE7<64000,9,if(AE7<85000,10,if(AE7<100000,11,if(AE7<120000,12,if(AE7<140000,13,if(AE7<165000,14,if(AE7<195000,15,if(AE7<225000,16,if(AE7<265000,17,if(AE7<305000,18,if(AE7<355000,19,20))))))))))))))))))),"")`
      },
      {
        range: "AQ6",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula: `=ARRAY_CONSTRAIN(ARRAYFORMULA(iferror(vlookup(AR6:AR15,'Class Info'!B7:K,10,false),"")), 10, 1)`
      },
      {
        range: "AR6",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula: `=iferror(transpose(unique(filter(split(proper($T$5)," "),iserror(find(split(proper($T$5)," ")&" 0",proper($T$5))),isnumber(find(proper(split($T$5," "))&"-",proper(textjoin("-",True,'Class Info'!$B$7:$B,"-"))))))),"")`
      },
      {
        range: "AS6",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula: `=if($AR6<>"",iferror(array_constrain(filter('Class Info'!$E$7:$E,'Class Info'!$B$7:$B=$AR6,'Class Info'!$E$7:$E<>"",isnumber(find(proper('Class Info'!$E$7:$E),proper($T$5)))),1,1),"-"),"")`
      },
      {
        range: "AT6",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula: `=if(and(AR6<>"",isnumber(find(lower(AR6),lower($T$5)))),int(substitute(if(regexmatch(proper($T$5),proper(AR6)&" [0-9]+"),regexextract(proper($T$5),proper(AR6)&" [0-9]+"),level),proper(AR6)&" ","")),"")`
      },
      {
        range: "AU6",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula: 
        `=arrayformula(if(AT6:AT15,AT6:AT15*(int(regexextract(AQ6:AQ15,"[0-9]+"))/2+1
        +if(vlookup(AR6:AR15,'Class Info'!B7:O,14,false)<>"-",vlookup(AR6:AR15,'Class Info'!B7:O,14,false),0)
        +if(vlookup(AS6:AS15,'Class Info'!E7:O,11,false)<>"-",vlookup(AS6:AS15,'Class Info'!E7:O,11,false),0))
        +if(AV6:AV15<>"",(int(regexextract(AQ6:AQ15,"[0-9]+"))/2-1),0),""))`
      },
      {
        range: "AV6",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula: 
        `=if(AR6<>"",\nvlookup(AR6,'Class Info'!B7:Q,16,false)\n&if(vlookup(AR6,'Class Info'!B7:X,23,false)<>"-",", "&vlookup(AR6,'Class Info'!B7:X,23,false),""),\n""\n)`
      },
      {
        range: "AW6",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula: 
        `=ARRAY_CONSTRAIN(ARRAYFORMULA(iferror(vlookup(AR6:AR15,'Class Info'!B7:AB,27,false)\n&if(vlookup(AS6:AS15,'Class Info'!E7:AB,24,false)<>"-",if(AS6:AS15<>"-",", "&vlookup(AS6:AS15,'Class Info'!E7:AB,24,false),""),""),"")), 10, 1)`
      },
      {
        range: "AX6",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula: 
        `=ARRAY_CONSTRAIN(ARRAYFORMULA(iferror(if(vlookup(AR6:AR15,'Class Info'!B7:AG,32,false)<>"-",vlookup(AR6:AR15,'Class Info'!B7:AG,32,false),"")\n&if(vlookup(AS6:AS15,'Class Info'!E7:AG,29,false)<>"-",if(AS6:AS15<>"-",vlookup(AS6:AS15,'Class Info'!E7:AG,29,false),""),""),"")), 10, 1)`
      },
      {
        range: "AY6",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula: 
        `=ARRAY_CONSTRAIN(ARRAYFORMULA(iferror(if(vlookup(AR6:AR15,'Class Info'!B7:AJ,35,false)<>"-",vlookup(AR6:AR15,'Class Info'!B7:AJ,35,false),"")\n&if(AS6:AS15<>"-",if(vlookup(AS6:AS15,'Class Info'!E7:AJ,32,false)<>"-",vlookup(AS6:AS15,'Class Info'!E7:AJ,32,false),""),""),"")), 10, 1)`
      },
      {
        range: "AZ6",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula:
        `=ARRAY_CONSTRAIN(ARRAYFORMULA(if(AR6:AR15<>"",int(iferror(if(vlookup(AR6:AR15,'Class Info'!B7:AM,38,false)<>"-",vlookup(AR6:AR15,'Class Info'!B7:AM,38,false),"")\n&if(vlookup(AS6:AS15,'Class Info'!E7:AM,35,false)<>"-",vlookup(AS6:AS15,'Class Info'!E7:AM,35,false),""),"")),"")), 10, 1)`
      },
      {
        range: "BA6",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula:
        `=ARRAY_CONSTRAIN(ARRAYFORMULA(iferror(if(vlookup(AR6:AR15,'Class Info'!B7:I,8,false)<>"-",if(vlookup(AR6:AR15,'Class Info'!B7:I,8,false)<>"10+dex",vlookup(AR6:AR15,'Class Info'!B7:I,8,false),""),"")\n&if(AS6:AS15<>"-",if(vlookup(AS6:AS15,'Class Info'!E7:I,5,false)<>"-",vlookup(AS6:AS15,'Class Info'!E7:I,5,false),""),""),"")), 10, 1)`
      },
      {
        range: "BB6",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula:
        `=ARRAY_CONSTRAIN(ARRAYFORMULA(if(AR6:AR15<>"",if(vlookup(AR6:AR15,'Class Info'!B7:M,12,false)<>"-",vlookup(AR6:AR15,'Class Info'!B7:M,12,false),"")\n&if(vlookup(AS6:AS15,'Class Info'!E7:M,9,false)<>"-",vlookup(AS6:AS15,'Class Info'!E7:M,9,false),""),"")), 10, 1)`
      },
      {
        range: "T7:AD7",
        merge: true,
        fontSize: 10
      },
      {
        range: "AE7:AG7",
        merge: true,
        fontSize: 10,
        notes: `When you update your experience total, most other fields will automatically update as you level up. Also adjust the CLASS cell accordingly, the level or sum of levels from there needs to match your total level.`
      },
      {
        range: "AH7:AJ7",
        merge: true,
        formula: `=if(AE7<>"",choose(AL6,300,900,2700,6500,14000,23000,34000,48000,64000,85000,100000,120000,140000,165000,195000,225000,265000,305000,355000,0),"")`,
        fontSize: 9,
        textColor: darkGrey2
      },
      {
        range: "AS7",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula: `=if($AR7<>"",iferror(array_constrain(filter('Class Info'!$E$7:$E180,'Class Info'!$B$7:$B180=$AR7,'Class Info'!$E$7:$E180<>"",isnumber(find(proper('Class Info'!$E$7:$E180),proper($T$5)))),1,1),"-"),"")`
      },
      {
        range: "AT7",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula: `=if(and(AR7<>"",isnumber(find(lower(AR7),lower($T$5)))),int(substitute(if(regexmatch(proper($T$5),proper(AR7)&" [0-9]+"),regexextract(proper($T$5),proper(AR7)&" [0-9]+"),level),proper(AR7)&" ","")),"")`
      },
      {
        range: "T8:AD8",
        merge: true,
        fontFamily: hiddenFontFamily,
        fontSize: 7,
        textColor: darkGrey3,
        formula: `=if(and(T7<>"",AQ5=""),"To use a custom race, add it on the 'Race Info' tab.","RACE")`,
        border: {
            top: true,
            color: darkGrey1
        }
      },
      {
        range: "AE8:AG8",
        merge: true,
        value: "EXPERIENCE",
        fontFamily: hiddenFontFamily,
        fontSize: 7,
        textColor: darkGrey3,
        border: {
            top: true,
            color: darkGrey1
        }
      },
      {
        range: "AH8:AJ8",
        merge: true,
        value: "NEXT LEVEL",
        fontFamily: hiddenFontFamily,
        fontSize: 7,
        textColor: darkGrey3,
        border: {
            top: true,
            color: darkGrey1
        }
      },
      {
        range: "AL8:AM8",
        merge: true,
        formula: `=if(AL6="",IMAGE(Additional!AY9,2),if(AL6<5,IMAGE(Additional!AY10,2),if(AL6<11,IMAGE(Additional!AY11,2),if(AL6<17,IMAGE(Additional!AY12,2),IMAGE(Additional!AY13,2)))))`,
        fontFamily: hiddenFontFamily,
        fontSize: 7
      },
      {
        range: "AS8",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula: `=if($AR8<>"",iferror(array_constrain(filter('Class Info'!$E$7:$E180,'Class Info'!$B$7:$B180=$AR8,'Class Info'!$E$7:$E180<>"",isnumber(find(proper('Class Info'!$E$7:$E180),proper($T$5)))),1,1),"-"),"")`
      },
      {
        range: "AT8",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula: `=if(and(AR8<>"",isnumber(find(lower(AR8),lower($T$5)))),int(substitute(if(regexmatch(proper($T$5),proper(AR8)&" [0-9]+"),regexextract(proper($T$5),proper(AR8)&" [0-9]+"),level),proper(AR8)&" ","")),"")`
      },
      {
        range: "S9:AN9",
        merge: true,
        formula: `=IMAGE("http://i.imgur.com/6avJSbK.png",2)`
      },
      {
        range: "AS9",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula: `=if($AR9<>"",iferror(array_constrain(filter('Class Info'!$E$7:$E180,'Class Info'!$B$7:$B180=$AR9,'Class Info'!$E$7:$E180<>"",isnumber(find(proper('Class Info'!$E$7:$E180),proper($T$5)))),1,1),"-"),"")`
      },
      {
        range: "AT9",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula: `=if(and(AR9<>"",isnumber(find(lower(AR9),lower($T$5)))),int(substitute(if(regexmatch(proper($T$5),proper(AR9)&" [0-9]+"),regexextract(proper($T$5),proper(AR9)&" [0-9]+"),level),proper(AR9)&" ","")),"")`
      },
      {
        range: "A10:A44",
        merge: true,
        formula: `=IMAGE("https://imgur.com/ABQY3Ko.png",2)`,
      },
      {
        range: "B10:E10",
        merge: true,
        formula: `=IMAGE("http://i.imgur.com/u3YeDks.png",2)`
      },
      {
        range: "G10:G44",
        merge: true,
        formula: `=IMAGE("https://i.imgur.com/0VlrXCA.png",2)`
      },
      {
        range: "H10:N10",
        merge: true,
        formula: `=IF(OR(C174="Dragon",And(C174="",T5="")),IMAGE(AT156,4,30,140),"")`
      },
      {
        range: "O10:O47",
        merge: true,
        formula: `=IMAGE("https://i.imgur.com/GFrq6pf.png",2)`
      },
      {
        range: "Q10:AB10",
        merge: true,
        formula: `=IMAGE("https://i.imgur.com/sMN3tei.png",2)`
      },
      {
        range: "AC10",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        textColor: darkGrey1,
        value: "HP"
      },
      {
        range: "AD10:AO10",
        merge: true,
        formula: `=IMAGE("https://i.imgur.com/sMN3tei.png",2)`
      },
      {
        range: "AS10",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula: `=if($AR10<>"",iferror(array_constrain(filter('Class Info'!$E$7:$E180,'Class Info'!$B$7:$B180=$AR10,'Class Info'!$E$7:$E180<>"",isnumber(find(proper('Class Info'!$E$7:$E180),proper($T$5)))),1,1),"-"),"")`
      },
      {
        range: "AT10",
        fontFamily: hiddenFontFamily,
        fontSize: 6,
        formula: `=if(and(AR10<>"",isnumber(find(lower(AR10),lower($T$5)))),int(substitute(if(regexmatch(proper($T$5),proper(AR10)&" [0-9]+"),regexextract(proper($T$5),proper(AR10)&" [0-9]+"),level),proper(AR10)&" ","")),"")`
      },
      {
        range: "H11:I12",
        merge: true,
        fontSize: 24,
        horizontalAlignment: 'center',
        verticalAlignment: 'center',
        numberFormat: `✧;✧;;✧`,
        value: "0"
      },
      {
        range: "J11:J12",
        merge: true,
        formula: `=image("https://i.imgur.com/kI66z3t.png",2)`
      },
      {
        range: "K11:N12",
        merge: true,
        fontFamily: hiddenFontFamily,
        fontSize: 8,
        textColor: black
      },
      {
        range: "Q11:Q28",
        merge: true,
        formula: `=IMAGE("https://i.imgur.com/r6YjQVe.png",2)`,
        border: {
            top: true,
            bottom: true,
            color: lightGrey20
        }
      },
      {
        range: "R11:S11",
        merge: true,
        backgroundColor: lightGrey20
      },
      {
        range: "T11:T15",
        merge: true,
        formula: `=IMAGE("https://i.imgur.com/k6zj6md.png",2)`,
        border: {
            top: true,
            bottom: true,
            color: lightGrey20
        }
      }
    ]
  }