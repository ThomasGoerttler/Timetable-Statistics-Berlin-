var data = {  
  "categories" : [
    {
      "main": "Methodische Grundlagen",
      "sub": [
        "Das lineare Modell",
        "Multivariate statistische Verfahren"
      ]
    },
    {
      "main": "Wahrscheinlichkeitstheorie"
    },
    {
      "main": "Fortgeschrittene Methoden der Statistik"
    },
    {
      "main": "Statistische Inferenz",
      "sub": [
        "Moderne Methoden der Statistik",
        "Angewandte Statistik",
        "Stichprobentheorie",
        "Aktuelle Forschungsfragen der Statistik",
        "Mathematische Statistik",
        "Statistik stochastischer Prozesse",
        "Zuverlässigkeitstheorie"
      ]
    },
    {
      "main": "Ökonometrie",
      "sub": [
        "Mikroökonometrie",
        "Ökonometrische Analyse von Paneldaten",
        "Zeitreihenökonometrie",
        "Ökonometrische Analyse von Finanzmarktdaten",
        "Projektseminar Ökonometrie",
        "Ökonometrische Analyse",
        "Ausgewählte Themen der Ökonometrie"
      ]
    },
    {
      "main": "Quantitative Methoden der Finanzmärkte",
      "sub": [
        "Statistik und Finanzwirtschaft",
        "Statistik der Finanzmärkte",
        "Ökonometrische Analyse von Finanzmarktdaten",
        "Stochastik der Finanzmärkte"
      ]
    },
    {
      "main": "Survey Statistik",
      "sub": [
        "Grundlagen der Stichprobentheorie",
        "Fortgeschrittene Methoden der Survey Statistik",
        "Nonresponse",
        "Simulation und Stichprobenziehung"
      ]
    },
    {
      "main": "Statistik in den Lebenswissenschaften",
    },
    {
      "main": "Wahlbereich",
    }
  ], 
	"subjects":[
		{  
			"name":"Multivariante Verfahren",
			"university":"FU",
      "address" : "Garystr. 21, 14195 Berlin",
			"taken": true,
      "lecturer": "R. Schlittgen",
      "sp": "9",
      "category" : "Methodische Grundlagen",
      "subcategory" : "Das lineare Modell",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 14,
          "duration": 2,
          "room": "HS 104a",
          "type": "Vorlesung" // auch übung
				},
				{
					"day":"Donnerstag",
					"startTime": 16,
          "duration": 2,
          "room": "PCPool",
          "type": "Uebung" 
				}
			]
		},
    {  
			"name":"Varianzschätzmethoden",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "R. Münnich",
      "sp": "5",
      "category" : "Survey Statistik",
			"annotation" : "Video-Übertragung von der Universität Trier Beginn: 27.10.14",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 14,
          "duration": 2,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "Vorlesung"
				},
				{
					"day":"Montag",
					"startTime": 16,
          "duration": 2,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "Uebung" 
				}
			]
		}, 
    {  
			"name":"Einführung in Monte-Carlo-Methoden",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "R. Münnich",
      "sp": "5",
      "category" : "Survey Statistik",
			"annotation" : "Video-Übertragung von der Universität Trier Beginn: 28.10.14",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 14,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "Vorlesung"
				}
			]
		}, 
    {  
			"name":"Stichprobenverfahren",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "U. Rendtel",
      "sp": "5",
      "category" : "Survey Statistik",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 10,
          "duration": 4,
          "room": "AS-Saal im Henry Ford Bau, 1. OG",
          "type": "Vorlesung"
				}
			]
		}, 
    {  
			"name":"Behandlung Fehlender Daten in Erhebungen",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "S. Rässler",
      "sp": "5",
      "category" : "Survey Statistik",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 10,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "Vorlesung"
				}
			]
		}, 
    
    // Fallstudieneseminar fehlt
    
    {  
			"name":"Ökonometrische Analyse",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "C. Offermanns T. Strohsal",
      "sp": "5",
      "category" : "Ökonometrie",
      "subcategory" : "Ökonometrische Analyse",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 10,
          "duration": 2,
          "room": "HS 105",
          "type": "Vorlesung"
				},
				{
					"day":"Freitag",
					"startTime": 8,
          "duration": 2,
          "room": "HS 105",
          "type": "Übung"
				}
			]
		}, 
		
		// Seminar Aktuelle Forschungsfragen der Ökonometrie FEHLT
		
		// Introdcution fehlet
		// Angewandte Könnometrie fehlt
		
		{  
			"name":"Econometric Methods (HU)",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Droge",
      "sp": "9",
      "category" : "Methodische Grundlagen",
      "subcategory" : "Das lineare Modell",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 10,
          "duration": 2,
          "room": "Raum 202",
          "type": "Vorlesung"
				},
				{
					"day":"Dienstag",
					"startTime": 10,
          "duration": 2,
          "room": "Raum 201",
          "type": "Vorlesung"
				},
				{
					"day":"Donnerstag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 202",
					"hasAlternative" : true,
          "type": "Übung"
				},
				{
					"day":"Freitag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 202",
					"hasAlternative" : true,
          "type": "Übung"
				}
			]
		},
		
		{  
			"name":"Time Series Analysis (HU)",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Droge",
      "sp": "-1",
      "category" : "Ökonometrie",
      "subcategory" : "Zeitreihenökonometrie",
			"language" : "english",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 22",
          "type": "Vorlesung"
				},
				{
					"day":"Donnerstag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 202/025",
          "type": "VL/UE"
				}
			]
		},
		
		{  
			"name":"Econometric Projects",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "O. Blaskowitz",
      "sp": "-1",
      "category" : "Ökonometrie",
      "subcategory" : "Projektseminar Ökonometrie",
			"language" : "english",
			"annotation" : "Distinguished Seminar in Econometric Projects on Quantitative Asset Management. 14.10 - 16.12",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 16,
          "duration": 4,
          "room": "Raum 22",
          "type": "SE"
				},
			]
		},
		{  
			"name":"Seminar for Bachelor, Master and PhD Students",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Droge, C. Breunig",
      "sp": "0",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 16,
          "duration": 2,
          "room": "Raum 21b",
          "type": "Seminar"
				}
			]
		},
		{  
			"name":"Microeconometrics (HU)",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "C. Breunig",
      "sp": "-1",
      "category" : "Ökonometrie",
      "subcategory" : "Mikroökonometrie",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 21a/PC Pool",
          "type": "VL/UE"
				},
				{
					"day":"Dienstag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 21a/PC Pool",
          "type": "VL/UE"
				}
			]
		},
		{  
			"name":"Economic Risk",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "W. Härdle,B. Lopez Cabrera, O. Okhrin, W. Wang",
      "sp": "-1",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Statistik der Finanzmärkte",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 23",
          "type": "Seminar"
				}
			]
		},
		{  
			"name":"Multivariate Statistische Analyse I",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "O. Okhrin",
      "sp": "-1",
      "category" : "Methodische Grundlagen",
      "subcategory" : "Multivariate statistische Verfahren",
			"language" : "english",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 8,
          "duration": 4,
          "room": "Raum 203",
          "type": "Vorlesung"
				}
			]
		},
		{  
			"name":"Datenanlyse II",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "S. Klinke",
      "sp": "-1",
      "category" : "Statistische Inferenz",
      "subcategory" : "Angewandte Statistik",
			"language" : "german",
			"annotation" : "Wenn Computergestützte Statisitik (HU) bereits belegt wurde, kann die VL nicht nochmal",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 10,
					"duration": 2,
					"room": "Raum 22",
					"type": "VL/UE"
				},
				{
					"day":"Montag",
					"startTime": 14,
					"duration": 2,
					"room": "Raum 025",
					"type": "VL/UE"
				},
				{
					"day":"Dienstag",
					"startTime": 12,
					"duration": 2,
					"room": "Raum 025",
					"type": "VL/UE"
				}
			]
		},
		{  
			"name":"Statistics of Financial Markets I",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "W. Härdle, M. Grith, A. Mihoci",
      "sp": "-1",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Statistik und Finanzwirtschaft",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 16,
					"duration": 4,
					"room": "Raum 23",
					"type": "VL"
				}
			]
		},
		/* TODO IS MISSING
		{  
			"name":"Statistical Programming Languages",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "L. Borke, L. Fang",
      "sp": "-1",
      "category" : "Statistische Inferenz",
      "subcategory" : "Angewandte Statistik",
			"language" : "english",
			"annotation" : "Blockveranstaltung",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 10,
					"duration": 2,
					"room": "Raum 22",
					"type": "VL/UE"
				},
				{
					"day":"Montag",
					"startTime": 14,
					"duration": 2,
					"room": "Raum 025",
					"type": "VL/UE"
				},
				{
					"day":"Dienstag",
					"startTime": 8,
					"duration": 12,
					"room": "Raum 025",
					"type": "VL/UE"
				}
			]
		},
		*/
		{  
			"name":"Selected Topix of Mathematical Statistics II",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "O. Okhrin",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 12,
					"duration": 2,
					"room": "Raum 21b",
					"type": "VL"
				}
			]
		},
		{  
			"name":"Mathematical Statistics",
			"university":"WIAS",
      "address" : "Mohrenstraße 39",
			"taken": true,
      "lecturer": "W. Härdle, B. Lopez-Cabrera, O. Okhrin, V. Spokoiny, W. Wang",
      "sp": "-1",
      "category" : "Statistische Inferenz",
      "subcategory" : "Moderne Methoden der Statistik",
			"language" : "english",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 10,
					"duration": 2,
					"room": "Ehrhard- Schmidt-Hörsaal",
					"type": "SE"
				}
			]
		},
		// TODO Mathe VORKURS
		
		{  
			"name":"Einführung zu numerischen Verfahren",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "O. Okhrin",
      "sp": "-1",
      "category" : "Statistische Inferenz",
      "subcategory" : "Angewandte Statistik",
			"language" : "english",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 18,
					"duration": 2,
					"room": "Raum 21a",
					"type": "SE"
				}
			]
		},
		{  
			"name":"Stochastik II",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "P. Imkeller",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 1304",
					"type": "VL"
				},
				{
					"day":"Dienstag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum 1304",
					"type": "VL"
				},
				{
					"day":"Montag",
					"startTime": 15,
					"duration": 2,
					"room": "Raum 3.006",
					"type": "UE"
				}
			]
		},
		
		{  
			"name":"Methoden der Statistik",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "M. Reiß, M. Trabs",
      "sp": "-1",
      "category" : "Methodische Grundlagen",
      "subcategory" : "Das lineare Modell",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 1.115",
					"type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum 1304",
					"type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 3.006",
					"type": "UE"
				}
			]
		},
		{  
			"name":"Nichtparametrische Statistik",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "V. Spokoiny",
      "sp": "-1",
      "category" : "Statistische Inferenz",
      "subcategory" : "Moderne Methoden der Statistik",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 0311",
					"type": "VL"
				},
				{
					"day":"Montag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 1.013",
					"type": "VL"
				},
				{
					"day":"Montag",
					"startTime": 15,
					"duration": 2,
					"room": "Raum 3.011",
					"type": "UE"
				}
			]
		},
		{  
			"name":"Nichtparametrische Testtheorie",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "T. Dickhaus",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum 1.013",
					"type": "VL"
				}
			]
		},
		{  
			"name":"Stochastische Finanzmathematik",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "U. Horst",
      "sp": "-1",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Stochastik der Finanzmärkte",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 0311",
					"type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 0307",
					"type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 3.007",
					"type": "UE"
				}
			]
		},
		
		{  
			"name":"Statistik stochastischer Prozesse",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "M. Reiß",
      "sp": "-1",
      "category" : "Statistische Inferenz",
      "subcategory" : "Statistik stochastischer Prozesse",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum 3.007",
					"type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 0310",
					"type": "UE"
				}
			]
		},
		{  
			"name":"Engineering Statistics",
			"university":"TU",
      "address" : "Straße des 17. Juni 135",
			"taken": true,
      "lecturer": "A. Werwatz, F. Plitzko",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "english",
			"annotation" : "Übung ab zweiter Woche",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 10,
					"duration": 2,
					"room": "Raum H 2013",
					"type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 8,
					"duration": 2,
					"room": "Raum H 2038 oder TEL 206_rechts",
					"type": "UE"
				}
			]
		},
		{  
			"name":"Microeconometrics",
			"university":"TU",
      "address" : "Straße des 17. Juni 135",
			"taken": true,
      "lecturer": "A. Werwatz, T. Repasky",
      "sp": "-1",
      "category" : "Ökonometrie",
      "subcategory" : "Mikroökonometrie",
			"language" : "english",
			"annotation" : "Übung ab zweiter Woche",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 14,
					"duration": 2,
					"room": "Raum C130/TEL 206_re",
					"type": "VL"
				},
				{
					"day":"Dienstag",
					"startTime": 8,
					"duration": 2,
					"room": "Raum H 0112 oder TEL 206_re",
					"type": "UE"
				}
			]
		},
		{  
			"name":"Time Series Analysis",
			"university":"TU",
      "address" : "Straße des 17. Juni 135",
			"taken": true,
      "lecturer": "A. Werwatz, F. Plitzko",
      "sp": "-1",
      "category" : "Ökonometrie",
      "subcategory" : "Zeitreihenökonometrie",
			"language" : "english",
			"annotation" : "Übung ab zweiter Woche",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 10,
					"duration": 2,
					"room": "Raum H 2032",
					"type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 8,
					"duration": 2,
					"room": "Raum 2032 oder TEL 206_re",
					"type": "UE"
				}
			]
		},
		
		
	]
}