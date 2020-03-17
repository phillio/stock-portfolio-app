// symbol data is stored below so there are not multiple calls to IEX
// these symbols will be used in search bar if time allows
// only symbols are exported at bottom of page with a map function

// const symbols = symbolData.map(el=>{
    //     return el['symbol']
    // })
    
    // export default { symbols }
    

    
// edit: did not have time to implement a dropdown list as user types


const symbolData = [
    {
        "symbol": "A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AAAU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AACG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AADR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AAMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AAME",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AAOI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AAON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AAPL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AAU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AAWW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AAXJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AAXN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ABB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ABBV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ABC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ABCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ABEO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ABEQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ABEV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ABG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ABIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ABM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ABMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ABR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ABR-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ABR-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ABR-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ABT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ABTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ABUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACAD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACAM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACAMU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACAMW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACEL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACEL+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACER",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACGL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACGLO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACGLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACHV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACIA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACIU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACIW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACMR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACNB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACSG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACTT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACTTU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACTTW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACWF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACWI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACWV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACWX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ACY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADBE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADILW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADMA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADME",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADSK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADSW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADVM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADXN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADXS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AEB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AEE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AEF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AEFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AEG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AEGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AEHR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AEIS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AEL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AEL-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AEMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AEO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AEP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AEP-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AER",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AERI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AESE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AESR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AEY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AEYE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AEZS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFGB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFGC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFGH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFIF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFINP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFLG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AFYA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGBA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGBAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGBAU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGBAW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGFSW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGGP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGGY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGLE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGM-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGM-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGM-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGM.A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGMH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGNCM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGNCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGNCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGNCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGO-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGO-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGO-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGYS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AGZD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AHCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AHH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AHH-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AHL-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AHL-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AHL-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AHPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AHT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AHT-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AHT-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AHT-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AHT-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AHT-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AI-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AI-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIEQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIG+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIG-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIHS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIIQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIKI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AINC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AINV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIRG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIRR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIRTP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIRTW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AIZP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AJG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AJRD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AJX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AJXA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AKAM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AKBA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AKCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AKER",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AKG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AKO.A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AKO.B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AKR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AKRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AKRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AKS",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "AKTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AKTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AL-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALACR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALACU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALACW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALBO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALDX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALFA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALGRR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALGRU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALGRW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALGT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALJJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALKS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALL-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALL-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALL-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALL-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALLE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALLK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALLO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALLY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALLY-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALNY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALOT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALP-Q",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALPN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALRM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALSK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALSN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALTG+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALTM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALUS+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALUS=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALXN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ALYA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMAG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMBA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMBC+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMBO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMCIU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMCIW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMCR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMCX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AME",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMED",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMEH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMH-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMH-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMH-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMH-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMH-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMHCU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMHCW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMJL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMKR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMNB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMOT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMPE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMPY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMRB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMRH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMRHW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMRK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMSF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMSWA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMTB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMTBB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMTD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMUB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMWD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMZA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AMZN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANDA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANDAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANDAU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANDAW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANDE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANGL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANGO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANH-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANH-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANH-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANIK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANPC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANTE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANTM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANVS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ANY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AOA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AOBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AOD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AOK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AOS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AOSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APAM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APDN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APEI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APHA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APLE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APO-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APO-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APOG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APOP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APOPW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APPF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APPN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APPS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APTO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APTV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APVO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APWC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APXT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APXTU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APXTW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "APYX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AQB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AQMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AQN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AQNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AQNB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AQST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AQUA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARAV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARAY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARCE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARCH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARCM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARCT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARDS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARDX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AREC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARES-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARGD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARGO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARGT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARGX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARKF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARKG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARKK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARKQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARKR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARKW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARLO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARMK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARMR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARNC-",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AROC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AROW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARPO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARQT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARR-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARTLW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARTNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARTW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARVN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARWR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARYA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARYAU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ARYAW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASB-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASB-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASB-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASEA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASFI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASHR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASHS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASHX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASLN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASML",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASPN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASPS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASPU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASRV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASRVP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASTE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASUR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ASYS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATAX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATCO-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATCO-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATCO-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATCO-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATCO-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATCX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATCXW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATH-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATH-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATHE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATHM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATHX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATIF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATKR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATLC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATLO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATNI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATNM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATOS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATSG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATTO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATVI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ATXI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AUB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AUBN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AUDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AUG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AUMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AUPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AUSF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AUTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AUTO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AUY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVAV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVDE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVDL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVDV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVEO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVGO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVGOP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVID",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVLR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVNS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVNW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVTR-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVUV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVXL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AVYA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AWAY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AWF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AWI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AWK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AWP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AWR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AWRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AWTM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AWX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AXAS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AXDX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AXE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AXGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AXGT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AXJL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AXL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AXLA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AXNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AXO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AXP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AXR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AXS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AXS-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AXSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AXTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AXTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AXU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AYI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AYR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AYTU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AYX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AZN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AZO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AZPN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AZRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AZRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AZUL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "AZZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BABA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAC-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAC-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAC-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAC-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAC-K",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAC-L",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAC-M",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAC-N",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BANC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BANC-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BANC-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BANF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BANFP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BANR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BANX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BASI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BATL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BATRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BATRK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BATT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAUG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BAX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBAX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBBY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBDO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBEU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBJP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BBY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BC-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BC-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BC-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCBP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCDA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCDAW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCEI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCEL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCLI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCML",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCPC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCRH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCSF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCTF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCV-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCYC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BDCL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BDCS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BDCY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BDCZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BDEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BDGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BDJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BDL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BDN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BDR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BDRY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BDSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BDTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BDX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BDXA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BEAM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BEAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BECN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BEDU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BELFA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BELFB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BEP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BEP-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BERY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BEST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BF.A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BF.B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BFAM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BFEB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BFIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BFIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BFK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BFO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BFOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BFRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BFS-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BFS-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BFST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BFY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BFYT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BFZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BGB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BGCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BGFV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BGG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BGH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BGIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BGNE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BGRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BGSF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BGT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BGX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BGY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BH.A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BHAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BHB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BHE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BHF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BHFAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BHFAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BHK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BHLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BHP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BHR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BHR-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BHR-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BHTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BHV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BHVN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIBL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BICK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIDU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIIB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BILI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BILL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIO.B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIOC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIOL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIOX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIOX+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BITA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BIZD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BJAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BJK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BJRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BJUL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BJUN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BK-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BKCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BKD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BKE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BKEP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BKEPP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BKF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BKH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BKI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BKK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BKLN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BKN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BKNG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BKR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BKSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BKT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BKTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BKU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BKYI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLBD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLCM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLDP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLDR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLHY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLKB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLNK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLNKW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLOK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLUE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BLX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BMA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BMAR",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "BMCH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BME",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BMEZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BML-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BML-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BML-J",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BML-L",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BMLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BMRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BMRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BMRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BMTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BMY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BMY^",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNDW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNDX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNED",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNFT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNGO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNGOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNKD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNKO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNKU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNKZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNSO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNTCW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BOCH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BOCT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BOE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BOH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BOIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BOKF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BOKFL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BOMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BOND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BOOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BOOT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BORR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BOSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BOSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BOTJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BOTZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BOUT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BOX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BOXL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BPFH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BPMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BPMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BPMX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BPOP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BPOPM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BPOPN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BPRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BPTH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BPY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BPYPN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BPYPO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BPYPP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BPYU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BPYUP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BQH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BREW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRG-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRG-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRG-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRID",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRK.A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRK.B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRKL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRKR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRKS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRMK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRMK+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BROG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BROGW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRPA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRPAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRPAU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRPAW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRQS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BRZU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSAE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSBE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSCE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSCK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSCL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSCM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSCQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSCR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSCS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSCT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSDE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSEP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSGM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSJK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSJL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSJM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSJN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSJO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSJP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSJQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSJR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSML",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSMM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSMQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSMR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSMX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSQR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSRR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSTZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSVN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BSX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BTAI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BTAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BTE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BTEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BTO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BTT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BTU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BTYS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BTZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BUD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BUG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BUI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BUL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BURG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BURL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BUSE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BUY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BUYN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BUYZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BVAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BVN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BVSN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BVXV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BVXVW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BWA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BWAY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BWB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BWEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BWFG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BWG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BWL.A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BWMX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BWX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BWXT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BWZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BXC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BXG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BXMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BXMX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BXP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BXP-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BXRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BXS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BXS-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BYD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BYFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BYLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BYM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BYND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BYSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BZH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BZM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BZQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BZUN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "C-J",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "C-K",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "C-N",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "C-S",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAAS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CABA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CABO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CACC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CACG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CACI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CADE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAI-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAI-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAKE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CALA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CALF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CALM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CALX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CANE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CANF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CANG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAPE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAPL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CARA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CARE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CARG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CARO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CARS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CARV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CARZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CASA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CASH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CASI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CASS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CASY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CATB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CATC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CATH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CATM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CATO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CATS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CATY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBAY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBB-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBFV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBL-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBL-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBLI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBMG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBNK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBOE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBPO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBRL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBSH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBSHP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CBZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCAC=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCBG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCC+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCCL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCEP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCH+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCH=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCI-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCNE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCOI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCX+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCX=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCXI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCXX=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CCZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDAY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDEV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDLX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDMOP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDNS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDR-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDR-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDXC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDXS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CDZI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CECE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEFL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEFZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CELC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CELG^",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CELH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CELP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CENT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CENTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CENX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEPU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEQP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEQP-",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CERC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CERN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CERS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CETV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CETX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CETXP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CETXW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CEZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFFA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFFAU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFFAW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFFI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFFN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFG-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFG-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFR-A*",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CFXA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CGA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CGBD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CGC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CGEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CGIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CGNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CGO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CGW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHAD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHAU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHCT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHDN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHEF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHEK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHEKZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHEP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHGG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHGX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHIE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHIH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHIK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHIQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHIR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHIS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHIU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHK-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHKP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHMA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHMG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHMI-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHMI-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHNG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHNGU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHNGV",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "CHNR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHPM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHPMU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHPMW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHRW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHSCL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHSCM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHSCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHSCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHSCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHUY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHWY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CHY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CID",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIDM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIG.C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIICU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIICW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIM-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIM-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIM-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIM-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CINF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CINR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIO-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIT-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIVB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CIZN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CJJD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CKH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CKPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CKX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLCT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLDB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLDR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLDX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLFD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLGX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLIR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLNE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLNY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLNY-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLNY-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLNY-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLNY-J",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLOU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLPS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLRB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLRBZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLRG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLSD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLSK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLSN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLUB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLVS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLWT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CLXT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMBM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMCL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMCM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMCSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMCT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMCTP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMDY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CME",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMFNL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMO-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMRE-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMRE-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMRE-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMRE-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMS-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMSD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CMU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNBKA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNCE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNCR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNFR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNFRL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNNB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNNE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNOB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNP-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNRG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNSP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNXM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNXN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNXT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CNYA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CODA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CODI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CODI-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CODI-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CODI-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CODX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COF-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COF-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COF-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COF-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COF-J",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COHN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COHR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COHU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COKE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COLL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COLM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COMM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CONE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CONN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COOP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COPX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CORE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CORN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CORP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CORR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CORR-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CORT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CORV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COUP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COWN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COWNL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COWNZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "COWZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPAA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPAAU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPAAW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPAH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPER",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPLG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPSH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPTAG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPTAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CPZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CQP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CQQQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRAI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRAK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRBN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRBP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRD.A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRD.B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CREE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CREG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRESY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CREX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CREXW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRHM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRIS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CROC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CROP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CROX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRSAU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRSAW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRSP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRTO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRVL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRVS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRWD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRWS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CRY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSFL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSGP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSIQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSML",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSOD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSSE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSSEP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSTE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSTM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSWC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSWCL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSWI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CSX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTA-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTA-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTAA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTAS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTBB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTDD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTEK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTHR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTIB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTMX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTRM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTSH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTSO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTXR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTXRW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTXS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CTZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CUB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CUBA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CUBB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CUBE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CUBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CUBI-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CUBI-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CUBI-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CUBI-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CUE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CUI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CUK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CULP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CUO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CURE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CURO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CUT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CUTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CUZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVBF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVCY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVEO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVGW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVIA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVLY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CVY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CWB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CWBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CWBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CWCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CWEB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CWEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CWEN.A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CWH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CWI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CWK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CWS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CWST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CWT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CXDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CXE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CXH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CXO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CXP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CXSE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CXW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CYAD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CYAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CYB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CYBE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CYBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CYCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CYCCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CYCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CYD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CYH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CYOU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CYRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CYRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CYRXW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CYTK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CZA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CZNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CZR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CZWI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "CZZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DAIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DAKT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DALI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DALT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DAO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DARE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DAUD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DAUG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DAVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DAX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBAW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBEF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBEH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBEU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBEZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBJP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBVT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DBX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DCAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DCF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DCHF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DCIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DCOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DCOMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DCP-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DCP-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DCPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DCUE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DDD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DDF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DDG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DDIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DDLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DDM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DDMX",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "DDMXU",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "DDMXW",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "DDOG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DDS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DDWM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DEA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DEAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DEACU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DEACW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DECK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DEEF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DEF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DEFA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DEI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DELL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DENN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DEO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DESP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DEUR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DEUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DEW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DFE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DFEB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DFEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DFFN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DFIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DFJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DFND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DFNL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DFNS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DFNS+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DFNS=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DFP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DFPHU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DFVL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DFVS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DGAZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DGBP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DGICA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DGICB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DGII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DGL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DGLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DGLY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DGP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DGRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DGRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DGRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DGRW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DGT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DGX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DGZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DHCNI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DHCNL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DHDG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DHF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DHIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DHR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DHR-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DHS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DHT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DHX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DHY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DIA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DIAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DIAX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DIET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DINT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DIOD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DIS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DISCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DISCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DISCK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DISH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DIVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DIVB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DIVC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DIVO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DIVY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DJCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DJCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DJCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DJD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DJP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DJPY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DKL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DKS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLNG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLNG-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLNG-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLPN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLPNW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLR-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLR-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLR-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLR-J",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLR-K",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLR-L",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLTH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DLY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DMAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DMDV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DMLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DMPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DMRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DMRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DMRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DMRL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DMRM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DMRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DMTK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DMYT=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DNI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DNJR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DNK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DNKN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DNL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DNLI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DNN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DNOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DNOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DNP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DNR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DOC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DOCU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DOG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DOGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DOGZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DOL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DOMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DOO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DOOO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DOOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DORM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DOX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DOYU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DPG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DPHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DPHCU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DPHCW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DPK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DPST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DPW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DPZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRAD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRADP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRIOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRSK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRTT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRUA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DRW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DS-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DS-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DS-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DSE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DSGX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DSKE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DSKEW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DSLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DSPG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DSSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DSTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DSU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DSWL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DSX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DSX-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTEA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTLA-",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTUL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTYL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DTYS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DUC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DUG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DUK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DUK-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DUKB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DUKH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DUO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DUOT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DURA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DUSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DUSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DUST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DVAX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DVD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DVEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DVHL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DVLU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DVN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DVOL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DVOP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DVP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DVY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DVYA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DVYE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DVYL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DWAS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DWAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DWAW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DWCR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DWEQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DWFI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DWLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DWM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DWMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DWMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DWPP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DWSH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DWSN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DWT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DWUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DWX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DX-A*",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DX-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DX-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DXB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DXC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DXCM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DXD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DXF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DXGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DXJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DXJS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DXLG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DXPE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DXR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DXYN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DYAI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DYLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DYNF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DYNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DZK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DZSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "DZZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EAD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EAE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EAF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EAGG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EAI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EARN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EARS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EASG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EASI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EAST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EBAY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EBAYL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EBF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EBIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EBIZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EBMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EBND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EBR.B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EBSB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EBTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECCX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECCY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECF-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECHO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECLN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECNS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECOL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECOLW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECOZ",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "ECPG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ECT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ED",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDOG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDRY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDTXU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDTXW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDUC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EDZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EEA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EEFT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EEH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EELV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EEMA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EEMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EEMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EEMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EEMV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EEMX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EEV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFAD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFAS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFAV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFAX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFC-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFNL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFOI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EFZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EGAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EGBN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EGF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EGHT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EGIF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EGLE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EGO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EGOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EGP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EGPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EGRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EGY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EHT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EHTH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EIDO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EIDX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EIGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EIGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EINC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EIRL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EIS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EJAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EJUL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EKAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EKSO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ELA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ELAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ELAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ELC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ELD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ELF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ELGX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ELJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ELLO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ELMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ELOX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ELP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ELS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ELSE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ELTK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ELU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ELVT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ELY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMAG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMBH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMCF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMCG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMDV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EME",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMFM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMGF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMHY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMIF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMIH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMKR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EML",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMLC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMQQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMSG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMSH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EMXC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENBA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENBL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENDP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENFR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENIA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENLC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENOB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENR-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENSG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENSV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENTXW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ENZL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EOD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EOG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EOI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EOLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EOS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EOT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EP-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPAM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPAY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPHE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPOL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPR-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPR-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPR-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPRF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPSN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EPZM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EQAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EQBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EQC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EQC-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EQH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EQH-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EQIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EQL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EQM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EQNR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EQR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EQRR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EQS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EQT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EQWL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EQX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ERA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ERC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ERF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ERH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ERI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ERIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ERIE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ERII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ERJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ERM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EROS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ERSX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ERUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ERX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ERY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ERYP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESBA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESEA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESGD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESGG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESGRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESGRP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESGU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESGV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESGW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESML",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESNG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESPO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESSCU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESTE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ESXB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETHO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETI-",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETNB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETP-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETP-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETP-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETSY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EUDG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EUDV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EUFL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EUFN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EUFX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EUM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EUMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EUMV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EUO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EURL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EURN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EURZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EUSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EUSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVBG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVBN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVER",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVFM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVGBC",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "EVGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVLMC",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "EVLO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVOK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVOL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVOP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVRG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVSIW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVSTC",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "EVT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EVY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWJE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWJV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EWZS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXAS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXEL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXFO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXPC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXPCU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXPCW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXPD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXPE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXPO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EXTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EYE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EYEG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EYEGW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EYEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EYES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EYESW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EYLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EYPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EZA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EZJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EZM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EZPW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EZT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EZU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "F-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "F-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FAAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FAD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FAF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FALN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FAM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FAMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FANG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FANH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FARM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FARO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FAS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FAST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FATE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FAUG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FAUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FAX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FAZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FBGX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FBHS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FBIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FBIOP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FBIZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FBM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FBMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FBNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FBND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FBP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FBSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FBT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FBZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCAU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCBP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCCY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCEF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCEL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCNCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCNCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCVT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FCX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDEF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDEU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDEV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDHY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDIS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDLO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDNI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDRR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDUSG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDUSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDUSZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDVV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FDX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FEAC=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FEDU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FEI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FEIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FELE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FEMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FEMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FENC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FENG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FENY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FEO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FEP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FEUL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FEUZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FEYE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FEZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFBW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFEB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFEU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFHG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFHL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFIU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFNW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFSG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FFWM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FG+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FGB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FGBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FGD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FGEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FGM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FHB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FHK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FHLC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FHN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FHN-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FICO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FID",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIDI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIDU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIEE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIHD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FILL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FINS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FINU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FINV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FINX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FINZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FISI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FISK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FISR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FISV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FITB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FITBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FITBO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FITBP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FITE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIVE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIVG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIVN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIXD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIXX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIYY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FIZZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FJNK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FJP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FKO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FKU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLAG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLAU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLAX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLBL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLCH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLDM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLDR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLEE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLEH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLEU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLFR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLGB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLGT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLHK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLHY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLIA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLIR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLIY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLJH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLJP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLKR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLLA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLMNW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLMX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLNG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLOT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLQD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLQE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLQG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLQH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLQL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLQM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLQS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLRU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLSP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLSW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLTB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLTW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLWS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLXN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLXS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLYT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FLZA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FMAO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FMAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FMBH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FMBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FMCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FMCIU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FMCIW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FMHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FMK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FMNB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FMX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FMY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNB-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNCL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNDA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNDB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNDE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNDF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNDX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNGD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNGO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNGU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNGZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNJN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNKO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNLC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNWB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FNY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FOCS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FOE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FOF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FOLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FONR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FORD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FORK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FORM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FORR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FORTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FOSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FOVL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FOX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FOXA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FOXF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FPA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FPAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FPAC+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FPAC=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FPAY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FPE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FPEI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FPF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FPI-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FPL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FPRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FPX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FPXE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FPXI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FQAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRAF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRAK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRBA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRC-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRC-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRC-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRC-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRC-J",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRDM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FREL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FREQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRLG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRME",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRSX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRT-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FRTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSBW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSCT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSEA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSFG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSLR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSLY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSRV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSRVU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSRVW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FSZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTACU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTACW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTAG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTAI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTAI-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTAI-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTCH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTCS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTDR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTEK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTFT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTGC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTSD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTSV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTV-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTXD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTXG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTXH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTXL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTXN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTXO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FTXR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FUD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FUE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FUL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FULC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FULT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FUMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FUN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FUNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FUND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FUSB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FUT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FUTU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FUTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FUV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FVAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FVC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FVCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FVD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FVE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FVL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FVRR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FWDB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FWONA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FWONK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FWP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FWRD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FXA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FXB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FXC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FXD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FXE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FXF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FXG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FXH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FXI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FXL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FXN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FXNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FXO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FXP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FXR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FXU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FXY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FXZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FYC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FYLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FYT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "FYX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GAA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GAB-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GAB-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GAB-J",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GAB-K",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GABC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GAIA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GAIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GAINL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GAINM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GALT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GAM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GAM-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GAMR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GARD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GARS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GASL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GASS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GASX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GATX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GAZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GBAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GBCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GBDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GBDV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GBF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GBIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GBL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GBLI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GBLIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GBLIZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GBT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GBUG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GBUY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GBX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GCAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GCBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GCE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GCOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GCV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDDY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDL-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDMA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDOT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDV-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDV-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDV-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDVD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDXJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDYN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GDYNW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GECC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GECCL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GECCM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GECCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GEF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GEF.B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GEL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GENC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GENE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GENY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GEO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GEOS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GER",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GERN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GEVO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GFED",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GFF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GFI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GFIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GFL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GFLU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GFN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GFNCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GFNSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GFY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GGAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GGB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GGG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GGM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GGN-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GGO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GGO-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GGT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GGT-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GGT-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GGZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GGZ-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GHG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GHIVU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GHL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GHM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GHSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GHY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GHYB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GHYG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GIB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GIFI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GIGB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GIGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GIGM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GIII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GILD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GILT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GIS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GIX+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GIX=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GIX^",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GJH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GJO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GJP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GJR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GJS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GJT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GKOS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GL-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLAD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLADD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLADL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLBY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLBZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLDD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLDI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLDM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLEO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLEO+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLEO=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLIBA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLIBP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLIF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLNG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLOB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLOG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLOG-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLOP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLOP-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLOP-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLOP-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLP-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLPG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLU-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLU-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLUU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GLYC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GMAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GMAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GMDA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GME",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GMED",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GMHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GMHIU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GMHIW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GMLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GMLPP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GMOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GMRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GMRE-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GMTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GMZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNAF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNE-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNFT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNL-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNL-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNLN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNMA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNMK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNPX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNRSU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNT-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GNW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GOAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GOAU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GOEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GOF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GOGL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GOGO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GOL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GOLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GOLF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GOOD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GOODM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GOODN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GOOG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GOOGL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GOOS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GORO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GOSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GOVT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GPAQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GPAQU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GPAQW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GPC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GPJA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GPK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GPL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GPM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GPMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GPN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GPOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GPP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GPRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GPRK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GPRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GPS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GPX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GQRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRAF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRAF+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRAF=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRAM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GREK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRID",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRIF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRNB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRNQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRNV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRNVR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRNVU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRNVW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GROW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRP=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRPN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRUB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRVY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRWG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRX-A*",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GRX-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GS-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GS-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GS-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GS-J",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GS-K",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GS-N",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSBD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSEU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSEW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSHD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSIE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSJY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSKY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSL-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSLC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSMG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSMGW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSUM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GSY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GTE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GTEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GTES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GTHX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GTIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GTIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GTLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GTN.A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GTO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GTT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GTYH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GUDB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GULF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GUNR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GURE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GURU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GUSH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GUT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GUT-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GUT-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GVAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GVI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GVIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GVP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GWB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GWGH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GWPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GWRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GWRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GWW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GWX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GXC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GXF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GXG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GXGX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GXGXU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GXGXW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GXTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GYC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GYLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "GYRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HABT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HACK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HAE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HAFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HAIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HAIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HALL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HALO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HAPP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HARP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HAS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HASI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HAUD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HAUZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HAWX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HAYN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HBAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HBANN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HBANO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HBB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HBCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HBIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HBM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HBMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HBNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HBP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HBT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCACU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCACW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCAPZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCCH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCCHR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCCHU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCCHW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCCOU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCCOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCFT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCKT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCRB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCSG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCXY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HCXZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HDAW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HDB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HDEF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HDG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HDGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HDIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HDLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HDLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HDMV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HDS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HDSN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HDV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEBT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HECO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEDJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEFA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEI.A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HELE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HELX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEPA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HERD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HERO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HESM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEWC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEWG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEWI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEWJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEWL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEWP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEWU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEWW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEWY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEXO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HEZU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HFBL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HFFG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HFRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HFRO-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HFWA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HFXE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HFXI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HFXJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HGH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HGLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HGSH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HGV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HHHH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HHHHR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HHHHU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HHHHW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HHR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HHS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HHT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HIBB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HIBL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HIBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HIE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HIFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HIG-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HIHO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HIMX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HIPS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HIW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HJLI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HJLIW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HJPX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HJV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HKIB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HL-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HLAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HLF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HLG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HLI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HLIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HLIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HLM-",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HLNE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HLX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HMG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HMHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HMLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HMLP-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HMNF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HMOP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HMST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HMSY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HMTV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HMY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HNDL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HNGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HNI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HNNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HNP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HNRG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HNW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HOFT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HOG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HOLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HOLI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HOLX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HOMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HOME",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HOML",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HOMZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HONE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HOOK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HOPE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HOTH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HOVNP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HPE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HPF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HPP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HPQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HPS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HQH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HQI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HQL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HQY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HRB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HRL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HROW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HRTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HRTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HRZN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HSBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HSBC-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HSCZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HSDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HSIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HSII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HSKA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HSON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HSPX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HSRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HSTM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HSY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HT-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HT-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HT-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTBX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTFA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTGC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTGM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTHT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTIA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTLF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTRB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HTZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HUBB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HUBG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HUBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HUD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HUGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HUIZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HUM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HUN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HURC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HURN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HUSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HUSE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HUSV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HUYA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HVBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HVT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HVT.A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HWBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HWC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HWCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HWCPL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HWKN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HXL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYACU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYACW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYDB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYDW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYGH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYGV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYHG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYIH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYUP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYXE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYXU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HYZD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HZN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HZNP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "HZO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IAA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IAE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IAF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IAG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IAGG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IAI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IAK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IART",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IAU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IAUF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBCD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBCE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBDD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBDL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBDM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBDN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBDO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBDP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBDQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBDR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBDS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBDU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBHA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBHB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBHD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBHE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBKC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBKCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBKCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBKCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBKR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBMJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBMK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBML",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBMM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBMQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBOC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBTB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBTD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBTE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBTF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBTH",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "IBTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBTJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IBUY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICAD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICCH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICFI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICHR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICLK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICLN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICLR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICOL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICSH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICUI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICVT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDEV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDHD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDHQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDOG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDRV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDXG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDXX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IDYA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEAWW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IECS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEDI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEFA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEFN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEHS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEIH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEME",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEMG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IESC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IETC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEUR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IEZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IFEU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IFF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IFFT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IFGL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IFLY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IFMK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IFN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IFRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IFRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IFV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGBH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGEB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGHG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGIB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGIH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGSB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IGV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IHAK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IHD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IHDG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IHE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IHF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IHG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IHIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IHRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IHT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IHTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IHY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IID",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IIF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IIGD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IIGV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "III",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IIIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IIIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IIPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IIPR-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IIVI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IJAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IJH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IJJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IJK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IJR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IJS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IJT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IJUL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IKNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ILF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ILMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ILPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ILTB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMACW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMAX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMKTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMMR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMMU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMOS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMRNW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMTB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMTE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMTM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMUX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMVT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMVTU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMVTW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IMXI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INBKL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INBKZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INCY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INDA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INDB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INDL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INDO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INDS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INDY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INFI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INFN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INFO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INFR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INFU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INFY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ING",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INKM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INN-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INN-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INOD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INPX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INSE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INSG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INSP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INSU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INSUU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INSUW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INSW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INSW-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INTF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INTT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INTU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INUV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INVE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INVH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INWK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "INXN",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "IO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IONS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IOO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IOSP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IOTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IOVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPAY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPDN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPFF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPGP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPHA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPKW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPLDP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPOS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPV+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPV=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IPWR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IQDE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IQDF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IQDG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IQDY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IQI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IQIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IQLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IQM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IQSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IQSU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IQV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IRBO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IRBT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IRCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IRDM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IRET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IRET-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IRIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IRL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IRM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IRMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IROQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IRR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IRTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IRWD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISCF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISDR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISDS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISDX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISEE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISHG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISNS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISRG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISTB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ISZE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ITA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ITB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ITCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ITCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ITEQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ITGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ITI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ITIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ITM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ITMR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ITOT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ITP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ITRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ITRM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ITRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ITT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ITUB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ITW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IUSB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IUSG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IUSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IUSV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IVAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IVAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IVC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IVE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IVH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IVLU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IVOG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IVOL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IVOO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IVOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IVR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IVR-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IVR-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IVR-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IVV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IVW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IVZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IWB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IWC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IWD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IWF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IWL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IWM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IWN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IWO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IWP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IWR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IWS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IWV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IWX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IWY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IXC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IXG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IXJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IXN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IXP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IXSE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IXUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IYC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IYE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IYF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IYG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IYH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IYJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IYK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IYLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IYM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IYR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IYT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IYW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IYY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IYZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IZEA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IZRL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "J",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JACK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JAGG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JAGX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JAKK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JAX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JAZZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JBGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JBHT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JBL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JBLU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JBN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JBSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JBT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JCAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JCAP-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JCE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JCOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JCPB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JCS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JCTCF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JDD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JDIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JDST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JE-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JEF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JELD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JEMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JEQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JETS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JFIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JFK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JFKKR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JFKKU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JFKKW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JFR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JFU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JGH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHAA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHCS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHMA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHME",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHMH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHML",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHMM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHMU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JHY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JIGB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JIH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JIH+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JIH=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JILL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JJA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JJC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JJE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JJG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JJM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JJN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JJP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JJS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JJSF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JJT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JJU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JKD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JKE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JKF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JKG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JKH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JKHY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JKI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JKJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JKK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JKL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JKS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JLL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JMBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JMEI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JMIA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JMIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JMLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JMM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JMOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JMPNL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JMPNZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JMST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JMUB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JNCE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JNJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JNK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JNMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JNPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JNUG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JOB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JOBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JOE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JOF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JOUT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JOYY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPED",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPEU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPGB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPHF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPHY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPM-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPM-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPM-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPM-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPM-J",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPME",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPMV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPNL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPSE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JPXN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JQC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JQUA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JRJC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JRSH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JRVR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JSD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JSMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JSML",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JTD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JUST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JVAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JW.A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JW.B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JWN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JXI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "JYNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "K",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KAI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KALA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KALL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KALU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KALV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KAMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KARS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KBA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KBAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KBE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KBH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KBLM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KBLMR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KBLMU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KBLMW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KBSF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KBWB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KBWD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KBWP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KBWR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KBWY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KCAPL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KCCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KCE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KCNY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KDFI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KDMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KDP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KELYA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KELYB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KEMQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KEMX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KEP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KEQU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KERN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KERNW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KEY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KEY-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KEY-J",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KEY-K",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KEYS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KFFB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KFRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KFY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KFYP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KGC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KGJI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KGRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KIDS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KIE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KIM-L",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KIM-M",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KINS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KIQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KIRK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KJAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KKR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KKR-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KKR-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KLAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KLCD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KLDO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KLDW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KLIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KLR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KLR+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KLXE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KMDA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KMED",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KMPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KMPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KMX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KNAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KNDI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KNG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KNL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KNOP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KNOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KNSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KNSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KOCT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KOD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KODK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KOF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KOIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KOL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KOLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KOMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KOP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KOPN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KORP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KORU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KOS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KOSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KPTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KREF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KRG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KRKR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KRMA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KRMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KRNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KRNY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KRP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KRTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KRUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KRYS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KSCD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KSU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KSU-",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KTB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KTCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KTF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KTH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KTOS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KTOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KTOVW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KTP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KURA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KURE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KVHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KWEB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KWR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KXI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KXIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KYN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KZIA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "KZR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "L",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LABD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LABU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LACK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LACQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LACQU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LACQW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LAD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LADR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LAIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LAKE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LAMR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LANC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LAND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LANDP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LARK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LASR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LATN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LATNU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LATNW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LAUR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LAWS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LAZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LAZY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LBAI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LBDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LBJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LBRDA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LBRDK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LBRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LBTYA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LBTYB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LBTYK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LBY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LCAHU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LCAHW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LCII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LCNB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LCR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LCTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LCUT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LDEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LDL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LDOS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LDP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LDRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LDSF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LDUR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LEA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LEAD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LEAF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LECO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LEDS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LEE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LEG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LEGH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LEGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LEJU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LEMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LEN.B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LEND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LEO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LEU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LEVI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LEVL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LFAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LFACU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LFACW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LFEQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LFUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LFVN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LGC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LGC+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LGC=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LGF.A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LGF.B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LGH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LGIH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LGL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LGLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LGND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LGOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LHC+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LHC=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LHCG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LHX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LIFE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LILA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LILAK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LINC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LIND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LINX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LIQT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LITB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LITE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LIVE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LIVK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LIVKU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LIVKW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LIVN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LIVX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LIZI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LJPC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LKCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LKFN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LKOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LKQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LLEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LLIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LLNW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LLY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMFA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMFAW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMHA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMHB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMNL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMNR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMPX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMRK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMRKN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMRKO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMRKP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LNDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LNG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LNGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LNN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LNTH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LOAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LOACR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LOACU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LOACW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LOAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LOB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LOCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LODE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LOGC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LOGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LOGM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LOMA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LONE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LOOP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LOPE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LORL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LOUP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LOVE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LOWC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LPCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LPG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LPL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LPLA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LPSN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LPTH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LPTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LPX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LQD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LQDA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LQDH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LQDI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LQDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LRCX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LRET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LRGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LRGF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LRNZ",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "LSACU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LSAF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LSBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LSCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LSLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LSST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LSTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LSXMA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LSXMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LSXMK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LTBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LTHM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LTM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LTPZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LTRPA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LTRPB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LTRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LUB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LULU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LUNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LUV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LVGO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LVHB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LVHD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LVHE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LVHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LVS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LVUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LWAY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LXFR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LXP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LXP-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LXRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LXU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LYB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LYFT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LYG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LYL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LYTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LYV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LZB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "M",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MAA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MAA-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MAAX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MACK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MAG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MAGA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MAGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MAIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MANH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MANT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MANU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MARA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MARB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MARK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MARPS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MAS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MASI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MATW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MATX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MAV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MAXR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MAYS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MBB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MBCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MBII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MBIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MBINO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MBINP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MBIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MBNKP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MBOT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MBRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MBSD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MBT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MBUU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MBWM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCEF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCEP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCFT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCHP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCHX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCK$",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "MCMJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCMJW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCRB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MCY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDGL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDGSW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDIA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDJH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDLA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDLQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDLX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDLY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDLZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDRR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDRRP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDWD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDYG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MDYV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MEAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MED",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MEDP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MEDS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MEET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MEI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MEIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MELI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MEOH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MER-K",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MERC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MESA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MESO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MET-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MET-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MET-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "METC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MEXX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFA-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFA-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFAC+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFAC=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFDX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFGP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFINL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFSF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MFV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGEE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGLN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MGYR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MH-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MH-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MH-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MHD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MHE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MHF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MHH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MHK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MHLA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MHLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MHN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MHNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MHO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MICR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MICT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MIDD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MIDF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MIDU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MIDZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MIE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MIK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MILN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MIME",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MINC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MIND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MINDP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MINI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MINT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MIRM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MIST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MITK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MITO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MITT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MITT-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MITT-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MITT-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MIXT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MIY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MJCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MJJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MJO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MKC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MKC.V",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MKD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MKGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MKL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MKSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MKTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLHR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLPA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLPB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLPC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLPE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLPG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLPO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLPQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLPX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLPY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLPZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MLVF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MMAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MMIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MMIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MMLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MMM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MMSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MMTM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MMU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MMX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MMYT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNCL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNCLU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNCLW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNDO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNKD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNLO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNR-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNRL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNSB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MNTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOBL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MODN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOFG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOG.A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOG.B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOGO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOGU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOHO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MORF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MORL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MORN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MORT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOSY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOTO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MOXC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MPA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MPAA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MPB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MPC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MPLX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MPV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MPW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MPWR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MPX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MQT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MQY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRAM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRCCL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRCY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MREO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRKR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRLN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRNS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRRL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRSN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MRVL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MS-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MS-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MS-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MS-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MS-K",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MS-L",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MSB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MSBF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MSBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MSCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MSD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MSEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MSFT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MSG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MSGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MSN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MSON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MSTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MSUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MSVB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTBCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTCH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTDR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTGP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTL-",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTNB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTUM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MTZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MUA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MUB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MUC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MUDS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MUDSU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MUDSW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MUE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MUFG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MUH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MUI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MUJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MUNI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MUR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MUSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MUST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MUTE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MUX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MVBF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MVC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MVCD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MVF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MVIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MVIS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MVO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MVT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MVV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MWA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MWK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MXC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MXDE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MXDU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MXE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MXF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MXI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MXIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MXL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MYC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MYD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MYE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MYF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MYFW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MYGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MYI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MYJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MYL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MYN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MYO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MYOK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MYOS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MYOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MYRG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MYSZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MYT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MYY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MZA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "MZZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NACP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NAD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NAII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NAIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NAK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NAKD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NANR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NAOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NATH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NATI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NATR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NAV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NAV-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NAVB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NAVI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NAZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NBACU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NBB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NBEV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NBH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NBHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NBIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NBL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NBLX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NBN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NBO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NBR-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NBRV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NBSE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NBTB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NBW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NBY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NCBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NCLH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NCMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NCNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NCR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NCSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NCTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NCV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NCV-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NCZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NCZ-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NDAQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NDLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NDP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NDRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NDRAW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NDSN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEBU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEBUU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEBUW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEE-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEE-J",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEE-K",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEE-N",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEE-O",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEE-P",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEED",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEOG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEOS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NERD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NERV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NESR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NESRW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NETE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NETL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEWA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEWR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEWT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEWTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEWTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEXA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEXT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NFBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NFE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NFG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NFH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NFH+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NFIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NFINU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NFINW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NFJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NFLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NFLX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NFRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NFTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NGD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NGG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NGHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NGHCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NGHCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NGHCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NGHCZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NGL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NGL-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NGL-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NGLS-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NGM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NGVC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NGVT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NHA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NHF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NHLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NHLDW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NHS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NHTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NI-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NIB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NICE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NICK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NID",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NIE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NINE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NIQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NIU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NJAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NJR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NJV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NKE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NKG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NKSH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NKTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NKX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NLNK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NLOK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NLR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NLSN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NLTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NLY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NLY-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NLY-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NLY-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NLY-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NM-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NM-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NMCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NMCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NMFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NMFX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NMIH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NMK-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NMK-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NML",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NMM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NMR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NMRD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NMRK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NMY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NMZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NNBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NNDM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NNI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NNN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NNN-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NNVC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NNY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NOA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NOAH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NOBL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NOC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NOCT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NODK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NOG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NOK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NOMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NORW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NOVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NOVN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NOVT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NPA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NPAUU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NPAWW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NPK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NPN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NPO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NPTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NPV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NQP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NRBO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NREF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NRG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NRGD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NRGO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NRGU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NRGX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NRGZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NRIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NRK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NRP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NRUC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NRZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NRZ-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NRZ-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NRZ-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NS-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NS-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NS-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NSA-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NSCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NSCO+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NSEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NSIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NSP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NSPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NSPR+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NSPR+B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NSSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NSTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NSYS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTCT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTEST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTEST.A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTEST.B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTEST.C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTLA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTRP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTRSO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTSX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTWK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NTZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUAG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUBD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUDM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUGT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUHY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NULC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NULG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NULV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUMG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUMV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NURE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NURO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUROW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NUW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVAX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVCR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVDA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVEE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVFY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NVUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NWBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NWE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NWFL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NWGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NWHM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NWL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NWLI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NWN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NWPX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NWS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NWSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NXC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NXE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NXGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NXJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NXN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NXP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NXPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NXQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NXR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NXRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NXST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NXTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NXTD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NXTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NYCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NYCB-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NYCB-U",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NYF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NYMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NYMTM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NYMTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NYMTO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NYMTP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NYMX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NYT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NYV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NZF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NONE",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "O",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OAC+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OAC=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OAK-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OAK-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OAS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OBAS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OBCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OBE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OBLG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OBLN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OBNK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OBOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OBSV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OCCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OCCIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OCFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OCFT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OCGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OCIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OCSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OCSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OCSLL",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "OCUL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OCX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ODC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ODFL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ODP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ODT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OEF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OESX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OEUR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OFED",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OFG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OFG-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OFG-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OFG-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OFIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OFLX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OFSSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OFSSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OFSSZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OGCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OGEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OGIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OIA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OIBR.C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OIH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OIIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OILD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OILK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OILU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OILX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OIS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OKE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OKTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OLED",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OLEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OLLI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OLN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OMAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OMCL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OMER",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OMEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OMFL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OMFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ONB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ONCS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ONCT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ONCY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ONDK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ONE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ONEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ONEO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ONEQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ONEV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ONEW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ONEY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ONLN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ONTO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ONTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ONTXW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ONVO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OOMA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPCH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPER",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPESU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPESW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPGNW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPINI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPOF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPTT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OPY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ORA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ORAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ORBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ORC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ORCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ORCL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ORG",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "ORGO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ORGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ORI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ORLY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ORMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ORN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ORRF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ORSN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ORSNR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ORSNU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ORSNW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ORTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OSB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OSBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OSCV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OSG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OSIS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OSK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OSMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OSN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OSPN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OSTK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OSUR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OSW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OTEL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OTEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OTIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OTLK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OTLKW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OTTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OTTW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OUNZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OUSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OUSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OUT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OVB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OVBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OVF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OVID",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OVL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OVLY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OVM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OVS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OVV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OXBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OXBRW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OXFD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OXLC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OXLCM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OXLCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OXLCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OXM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OXSQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OXSQL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OXSQZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OXY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OYST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "OZK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAACR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAACU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAACW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAAS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PACA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PACB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PACD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PACK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PACK+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PACQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PACQU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PACQW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PACW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAEWW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAGP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PALL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PANL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PANW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PARR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PASG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PASS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PATI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PATK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAUG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAVE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAVM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAVMW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAVMZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAWZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAYC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAYS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PAYX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBCT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBCTP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBDM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBEE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBFX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBI-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBPB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBR.A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBTP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PBYI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCEF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCG-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCG-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCG-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCG-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCG-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCG-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCG-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCG-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCSB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCYG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PCYO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PDBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PDCE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PDCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PDD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PDEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PDEV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PDEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PDFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PDI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PDLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PDLI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PDM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PDN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PDP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PDS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PDSB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEAK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEB-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEB-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEB-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEB-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEBO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PECK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PED",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEGA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEI-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEI-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEI-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PENN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PER",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PERI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PESI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PETQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PETS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PETZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEXL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PEZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFEB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFFA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFFD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFFL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFFR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFGC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFHD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFIE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFIS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFSW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PFXF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PGAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PGC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PGEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PGF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PGHY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PGJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PGM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PGNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PGNY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PGP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PGRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PGTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PGX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PGZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHAS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHCF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHDG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHGE+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHGE=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHIOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHUN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHUNW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHYL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PHYS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PIC+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PIC=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PICB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PICK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PICO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PID",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PIE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PIH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PIHPP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PILL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PINC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PINE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PING",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PINS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PIPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PIRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PIXY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PIY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PIZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PJAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PJH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PJP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PJT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PJUL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PJUN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PKB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PKBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PKE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PKG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PKI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PKO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PKOH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PKW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PKX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLAG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLAY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLCE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLCY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLMR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLPC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLSE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLTM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLUG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLXP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLXS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLYA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLYM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PLYM-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PMAR",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "PMBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PME",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PML",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PMM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PMOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PMT-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PMT-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PMX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PNBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PNC-P",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PNC-Q",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PNF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PNFP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PNI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PNM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PNNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PNNTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PNOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PNQI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PNR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PNRG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PNTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PNW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "POAI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "POCT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PODD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "POL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "POLA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "POOL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "POPE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "POR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "POST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "POTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "POWI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "POWL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPDM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPIH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPLC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PPX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PQG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PQIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PQLC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PQSG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PQSV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRAA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRAH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRDO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRE-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRE-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRE-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRE-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PREF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRFT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRFZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRGO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRGX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRIF-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRIF-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRIF-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRIF-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRIF-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRIF-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRMW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRNB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PROF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PROS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PROV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRPL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRPO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRQR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRSP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRTH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRTK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRVB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PRVL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSA-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSA-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSA-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSA-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSA-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSA-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSA-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSA-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSA-J",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSA-K",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSA-V",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSA-W",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSA-X",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSB-W",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSB-X",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSB-Y",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSB-Z",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSCD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSCE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSCF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSCH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSCM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSCT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSCU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSEP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSMG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSMM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSNL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSTV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSTVZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PSXP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTACU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTACW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTBD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTCT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTEU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTGX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTLA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTLC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTNQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTNR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTVCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTVCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PUB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PUI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PUK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PUK-",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PUK-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PULM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PULS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PUMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PUTW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PUYI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PVAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PVAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PVBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PVG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PVH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PVI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PVL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PW-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PWB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PWC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PWFL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PWOD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PWR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PWS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PWV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PWZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PXD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PXE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PXF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PXH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PXI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PXJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PXLW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PXQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PXS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PYN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PYPE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PYPL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PYS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PYT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PYX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PYZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PZA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PZC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PZD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PZG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PZN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PZT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "PZZA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QABA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QADA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QADB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QAI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QARP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QBAK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QCLN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QCOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QCRH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QDEF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QDEL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QDF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QDIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QDYN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QED",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QEFA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QEMM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QEP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QFIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QGEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QGRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QGTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QID",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QINT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QIWI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QLC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QLTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QLVD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QLVE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QLYS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QMCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QMJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QMOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QNST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QQEW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QQH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QQQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QQQE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QQQX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QQXT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QRFT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QRHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QRTEA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QRTEB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QRVO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QSR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QSY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QTEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QTNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QTRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QTS-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QTS-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QTT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QTUM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QTWO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QUAD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QUAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QUIK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QUMU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QUOT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QURE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QVAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QVCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QVCD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QVM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QWLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QYLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "R",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RAAX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RACE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RAD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RADA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RAFE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RAIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RALS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RAMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RAND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RAPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RARE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RARX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RAVE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RAVI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RAVN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RBA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RBB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RBBN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RBCAA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RBCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RBIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RBKB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RBNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RBUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RBZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RCD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RCEL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RCG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RCII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RCKT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RCKY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RCL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RCM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RCMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RCON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RCS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RCUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RDCM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RDFN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RDHL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RDI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RDIB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RDIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RDN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RDNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RDOG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RDS.A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RDS.B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RDUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RDVT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RDVY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RDWR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RDY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RECN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RECS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REDU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REED",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REFR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REGL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REKR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RELL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RELV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RELX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REML",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REMX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RENN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REPL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RESI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RESN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RETA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RETL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RETO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REVG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REVS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REXN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REXR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REXR-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REXR-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REXR-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REYN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "REZI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RF-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RF-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RF-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RFAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RFCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RFDA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RFDI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RFEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RFEU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RFFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RFG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RFI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RFIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RFL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RFP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RFUN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RFV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RGA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RGCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RGEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RGLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RGLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RGNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RGT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RHE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RHE-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RHP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RHS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RIBT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RICK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RIF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RIGL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RIGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RILY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RILYG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RILYH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RILYI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RILYM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RILYN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RILYO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RILYP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RILYZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RINF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RING",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RIOT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RISE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RIVE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RJA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RJF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RJI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RJN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RJZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RKDA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RLGT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RLGY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RLH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RLI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RLJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RLJ-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RLMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RLY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RMAX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RMBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RMBL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RMBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RMCF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RMED",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RMG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RMG+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RMG=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RMM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RMNI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RMPL-",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RMR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RMTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RNDB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RNDM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RNDV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RNEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RNET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RNG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RNGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RNLC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RNMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RNP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RNR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RNR-C*",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RNR-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RNR-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RNSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RNST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RNWK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROAD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROAM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROBO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROBT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROCK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RODE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RODI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RODM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROKT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROKU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROLL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROOF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RORE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROSE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROSEU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROSEW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ROYT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RPAI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RPAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RPAY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RPD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RPG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RPLA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RPLA+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RPLA=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RPM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RPT-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RPV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RQI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RRBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RRD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RRGB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RRR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RRTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RSF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RSG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RSP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RSX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RSXJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RTH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RTIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RTLR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RTM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RTRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RTTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RTW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RUBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RUBY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RUHN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RUN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RUSHA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RUSHB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RUSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RUSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RUTH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RVI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RVLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RVMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RVNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RVNU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RVP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RVRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RVSB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RVT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWCD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWDE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWED",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWGV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWIU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWLK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWUI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWVG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RWX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RXD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RXI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RXL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RXN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RY-T",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RYAAY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RYAM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RYB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RYCE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RYE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RYF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RYH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RYI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RYJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RYLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RYN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RYT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RYTM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RYU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RYZZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RZA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RZB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RZG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "RZV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "S",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SABR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SACC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SACH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAFE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAFM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAFT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAGG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAIA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SALM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SALT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAMA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAMAU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAMAW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAMG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAN-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SANM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SANW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAQN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAQNU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAQNW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SASR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SATS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SAVE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SB-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SB-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBBP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBBX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBCF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBE+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBE=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBFG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBLK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBLKZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBNY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBSW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBUG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SBUX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCE-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCE-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCE-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCE-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCE-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCE-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCE-J",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCE-K",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCE-L",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHW-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHW-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCHZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCID",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCIF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCIJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCIU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCKT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCPE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCPE+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCPE=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCPL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCVL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCVX=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCWX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCYX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SCZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDAG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDGA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDOG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDRL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDVY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SDYL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SEAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SEAS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SEB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SECO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SECT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SEDG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SEE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SEED",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SEEL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SEF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SEIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SEIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SELB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SELF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SENEA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SENEB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SENS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SERV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SESN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SF-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SF-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFHY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFTW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFTW+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFTW=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFUN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFYF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SFYX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGBX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGDJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGDM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGLBW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGMA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGOC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGOL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGRP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGRY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SGU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHAG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHAK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHIPW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHIPZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHLL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHLL+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHLL=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHLO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHLX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHO-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHO-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHOO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHOP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHSP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHYD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHYG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SHYL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIBN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SID",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIEB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIFY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIGA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SILC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SILJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SILK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SILV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SINA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SINO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SINT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SITC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SITC-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SITC-K",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SITE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SITM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIVB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIVBP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIVR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SIZE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SJB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SJI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SJIJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SJIU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SJM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SJNK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SJR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SJT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SJW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SKF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SKM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SKOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SKT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SKX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SKY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SKYS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SKYW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SKYY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLCT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLDB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLG-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLGG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLGL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLIM",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "SLM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLMBP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLNO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLQD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLVO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLVP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLYG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SLYV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMDD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMDV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMDY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMED",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMEZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMFG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMHB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMHD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMLF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMLL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMMCU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMMCW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMMU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMMV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMOG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMPL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SMTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNCR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNDE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNDL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNDR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNDX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNFCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNGX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNGXW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNLN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNOA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNPE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNPS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNSR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNUG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNV-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNV-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SNY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOCL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOGO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOHO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOHOB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOHON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOHOO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOHU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOJA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOJB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOJC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOJD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOLN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOLO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOLOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOLY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SONA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SONG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SONGW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SONM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SONO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SORL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOVB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOXL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOXS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOXX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SOYB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPAQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPAQ+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPAQ=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPBO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPCE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPCE+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPCE=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPDN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPDV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPDW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPE-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPEU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPFF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPFI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPG-J",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPGM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPGP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPHB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPHD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPHQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPHY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPIB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPKE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPKEP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPLG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPLK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPLP-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPMV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPNE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPNS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPOK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPOT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPPP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPSB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPSK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPTM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPUU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPVM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPVU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPWH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPWR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPXB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPXC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPXE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPXL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPXN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPXS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPXT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPXU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPXV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPXX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPYB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPYD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPYG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPYV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SPYX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SQBG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SQLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SQM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SQNS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SQQQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SR-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRACU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRACW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRAX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRC-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRCE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRCL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRDX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRE-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRE-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SREA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SREV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRG-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRLN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRNE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRRK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRTSW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SRVR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSKN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSPK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSPKU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSPKW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSPY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSRM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSTK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SSYS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STAA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STAF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STAG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STAG-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STAR-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STAR-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STAR-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STAY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STBA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STIM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STKL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STKS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STL-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STLG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STML",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STNE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STNG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STOK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STOT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STPP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STPZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STRL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STRM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STT-C*",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STT-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STT-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STWD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STXB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STXS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "STZ.B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SUB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SUI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SUM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SUMR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SUN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SUNS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SUNW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SUP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SUPN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SUPV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SURF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SUSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SUSB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SUSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SUSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SUZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SVBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SVC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SVM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SVMK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SVRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SVT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SVVC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SVXY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SWAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SWAV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SWCH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SWI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SWIR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SWK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SWKH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SWKS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SWM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SWN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SWP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SWT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SWTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SWX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SWZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SXC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SXI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SXT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SXTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYBT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYBX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYF-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYKE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYNH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYNL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SYY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SZC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SZK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "SZNE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "T",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "T-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "T-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TACO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TACOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TACT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TAGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TAIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TAIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TAK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TALO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TALO+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TANH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TANNI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TANNL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TANNZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TAOP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TAP.A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TAPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TARA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TARO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TAST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TATT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TAWK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TAXF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TAYD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TBB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TBBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TBF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TBIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TBLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TBLTW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TBLU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TBND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TBNK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TBPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TBT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TBX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCBIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCBIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCDA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCFCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCO-J",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCO-K",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCPC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCRD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCRR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCRW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCRZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TCX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDACU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDACW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDOC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDTF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDTT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDW+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDW+A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDW+B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TDY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TEAF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TEAM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TECB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TECD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TECH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TECK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TECL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TECS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TECTP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TEDU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TEF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TEI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TEL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TELA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TELL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TENB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TENX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TEO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TER",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TERM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TERP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TESS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TEUM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TEVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TFC-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TFC-G",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TFC-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TFC-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TFFP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TFI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TFII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TFIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TFLO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TFLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TFSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TFX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TGA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TGB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TGC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TGEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TGH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TGLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TGNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TGP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TGP-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TGP-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TGS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TGT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TGTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THBRU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THBRW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THCAU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THCAW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THCB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THCBU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THCBW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THCX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THFF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THGA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THRM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "THWWW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TIBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TIBRU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TIBRW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TIF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TIGO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TIGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TILE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TILT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TIPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TIPX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TIPZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TISI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TITN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TIVO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TJX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TKAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TKC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TKR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TLC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TLDH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TLEH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TLF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TLGT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TLH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TLI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TLK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TLND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TLRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TLRD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TLRY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TLSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TLTD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TLTE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TLYS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TMDI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TMDV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TMDX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TME",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TMFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TMHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TMP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TMQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TMSR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TMST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TMUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TMV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TNAV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TNDM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TNET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TNK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TNP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TNP-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TNP-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TNP-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TNP-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TNXP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TOCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TOK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TOKE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TOL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TOLZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TOO-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TOO-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TOO-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TOPS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TORC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TOT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TOTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TOTAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TOTAU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TOTAW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TOTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TOUR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TOWN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPAY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPHD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPHS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPIF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPLC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPVG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPVY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPYP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TPZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TQQQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRCH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TREC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TREE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TREX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRGP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRIB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRMK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRNE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRNE+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRNE=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRNO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRNS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TROV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TROW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TROX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRPX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRTN-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRTN-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRTN-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRTN-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRUE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRUP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRVG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRVI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRVN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRWH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRXC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TSBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TSCAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TSCBP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TSCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TSE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TSEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TSG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TSLA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TSLF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TSLX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TSN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TSQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TSRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TSU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TTAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TTAI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TTD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TTEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TTEK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TTGT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TTM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TTMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TTNP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TTOO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TTP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TTPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TTT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TTTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TTWO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TUES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TUFN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TUP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TUR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TURN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TUSA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TUSK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TVC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TVE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TVIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TVTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TWI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TWIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TWLO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TWM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TWMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TWN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TWNK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TWNKW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TWO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TWO-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TWO-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TWO-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TWO-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TWO-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TWOU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TWST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TWTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TXG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TXMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TXN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TXRH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TXT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TY-",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TYBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TYD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TYG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TYHT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TYL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TYME",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TYO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TZA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TZAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TZACU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TZACW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TZOO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UAA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UAE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UAG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UAMY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UAPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UAUD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UAUG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UAVS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UBA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UBCP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UBER",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UBFO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UBG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UBIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UBOH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UBOT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UBP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UBP-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UBP-K",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UBSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UBT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UBX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UCBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UCHF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UCIB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UCOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UCON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UCTT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UDEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UDN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UDOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UDR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UEIC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UEPS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UEUR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UEVM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UFAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UFCS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UFEB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UFI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UFO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UFPI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UFPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UGA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UGAZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UGBP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UGL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UGLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UGP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UHAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UHS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UHT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UIHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UIS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UITB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UIVM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UJAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UJB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UJPY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UJUL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UJUN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ULBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ULBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ULE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ULH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ULST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ULTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ULTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ULVM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UMAR",
        "date": "2020-03-13",
        "isEnabled": false
    },
    {
        "symbol": "UMBF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UMDD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UMH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UMH-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UMH-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UMH-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UMPQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UMRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UNAM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UNB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UNF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UNFI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UNG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UNH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UNIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UNL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UNM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UNMA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UNOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UNP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UNTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UNVR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UOCT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UONE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UONEK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UPLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UPRO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UPS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UPV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UPW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UPWK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "URA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "URBN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "URE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "URG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "URGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "URI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "URNM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UROV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "URR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "URTH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "URTY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USAI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USAK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USAP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USAS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USAU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USB-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USB-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USB-M",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USB-O",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USB-P",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USCI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USCR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USDP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USDU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USDY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USEG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USEP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USEQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USFD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USFR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USHG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USHY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USLM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USMV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USOI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USSG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USTB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USVM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USWS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USWSW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "USX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UTES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UTF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UTHR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UTMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UTRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UTSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UTSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UUP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UUU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UUUU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UUUU+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UVE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UVSP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UVV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UVXY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UWM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UWT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UXI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UXIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UYG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UYM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UZA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UZB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "UZC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "V",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VALE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VALQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VALT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VALU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VALX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VAM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VAMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VAPO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VAW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VBF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VBFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VBIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VBLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VBND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VBTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VCEL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VCF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VCIF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VCIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VCLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VCNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VCR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VCRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VCSH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VCTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VCV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VCYT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VDE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VEA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VECO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VEDL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VEEV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VEGA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VEGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VEGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VEL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VEON",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VER",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VER-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VERB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VERBW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VERI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VERO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VERT=",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VERU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VERY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VETS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VEU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VFF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VFH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VFL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VFLQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VFMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VFMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VFMV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VFQY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VFVA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VGFO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VGIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VGK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VGLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VGM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VGSH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VGT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VGZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VHC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VHI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VHT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIAC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIACA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIAV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VICI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VICR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIDI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIOG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIOO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIOT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIPS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIRC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VISL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIVE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIVO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIXM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VIXY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VJET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VKI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VKQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VKTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VKTXW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VLGEA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VLO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VLRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VLU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VLUE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VLY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VLYPO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VLYPP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VMBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VMM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VMOT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VMW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VNCE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VNDA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VNE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VNET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VNLA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VNM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VNO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VNO-K",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VNO-L",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VNO-M",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VNOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VNQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VNQI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VNRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VNTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VOC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VOD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VOE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VOLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VONE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VONG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VONV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VOO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VOOG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VOOV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VOT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VOX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VOXX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VOYA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VOYA-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VPC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VPG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VPL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VPU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VPV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VQT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRAI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRAY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRCA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VREX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRML",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRNA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRNS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRRM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRSK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRSN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRT+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRTU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRTV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VRTX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VSAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VSDA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VSEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VSGX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VSH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VSLR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VSMV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VSS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VST+A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VSTM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VSTO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTEB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTHR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTIQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTIQU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTIQW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTNR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTSI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTVT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTWG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTWO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VTWV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VUG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VUSE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VUZI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VVI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VVNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VVNT+",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VVPR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VVR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VVUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VVV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VWO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VWOB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VXF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VXRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VXUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VXX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VXZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VYGR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VYM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VYMI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "W",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WAAS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WABC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WAFD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WAFU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WALA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WANT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WASH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WATT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WBA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WBAI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WBIE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WBIF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WBIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WBII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WBIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WBIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WBIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WBIY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WBND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WBS-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WBT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WCC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WCHN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WCLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WCN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WDAY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WDC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WDFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WDIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WDR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WDRW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WEA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WEAT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WEBK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WEBL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WEBS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WEI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WELL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WERN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WETF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WEX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WEYS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WFC-L",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WFC-N",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WFC-O",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WFC-P",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WFC-Q",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WFC-R",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WFC-T",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WFC-V",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WFC-W",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WFC-X",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WFC-Y",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WFC-Z",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WFHY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WFIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WGO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WHD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WHF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WHFBZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WHG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WHLM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WHLR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WHLRD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WHLRP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WHR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WIA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WIFI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WIL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WILC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WINA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WINC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WING",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WINS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WIRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WISA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WIW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WIX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WIZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WKEY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WKHS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WLDN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WLDR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WLFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WLK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WLKP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WLL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WLTW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WMB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WMGI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WMK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WMS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WMT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WNC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WNEB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WNS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WOMN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WOOD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WORK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WORX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WPC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WPG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WPG-H",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WPG-I",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WPM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WPP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WPRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WPS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WPX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WRB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WRB-B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WRB-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WRB-D",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WRB-E",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WRB-F",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WRI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WRK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WRLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WRLS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WRLSR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WRLSU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WRLSW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WRTC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WSBC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WSBF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WSC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WSFS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WSG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WSM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WSO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WSO.B",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WSR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WSTG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WSTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WTBA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WTER",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WTFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WTFCM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WTI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WTID",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WTIU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WTM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WTMF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WTRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WTREP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WTRG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WTRH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WTRU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WTT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WTTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WUBA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WVE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WVFC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WVVI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WVVIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WWD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WWE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WWJD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WWR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WWW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WYND",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WYNN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "WYY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "X",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XAIR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XAN-C",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XAR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XBI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XBIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XBIOW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XBIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XBUY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XCEM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XCOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XCUR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XDIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XEC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XEL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XELA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XELB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XENE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XENT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XERS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XES",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XFLT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XFOR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XHB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XHE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XHR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XHS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XITK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XLC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XLE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XLF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XLG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XLI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XLK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XLNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XLRE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XLRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XLSR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XLU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XLY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XME",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XMHQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XMLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XMMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XMPT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XMVM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XNCR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XNET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XNTK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XOG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XOMA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XONE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XOP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XOUT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XPEL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XPER",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XPH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XPL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XPO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XPP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XRAY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XRF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XRLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XRT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XRX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XSD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XSHD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XSHQ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XSLV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XSMO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XSOE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XSPA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XSVM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XSW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XTH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XTL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XTLB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XTN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XTNT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XVZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XWEB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XXII",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XYF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XYL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "Y",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YANG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YCBD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YCBD-A",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YCL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YCOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YCS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YELP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YETI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YEXT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YGRN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YGYI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YGYIP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YINN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YJ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YLCO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YLD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YLDE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YMAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YNDX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YOLO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YORW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YPF",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YRCW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YRD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YTEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YTRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YUM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YUMA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YUMC",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YVR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YXI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "YYY",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "Z",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZAGG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZAZZT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZBH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZBIO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZBRA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZBZX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZBZZT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZCAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZCMD",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZCZZT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZDEU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZDGE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZEAL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZEN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZEUS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZEXIT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZFGN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZGBR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZGNX",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZGYHU",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZHOK",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZIEXT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZIG",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZION",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZIONL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZIONN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZIONO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZIONP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZIONW",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZIOP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZIV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZIXI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZJPN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZJZZT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZKIN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZLAB",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZMLP",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZNGA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZNH",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZNWAA",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZOM",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZROZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZSAN",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZSL",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZTEST",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZTO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZTR",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZTS",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZUMZ",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZUO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZVO",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZVV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZVVV",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZVZZT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZWZZT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZXIET",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZXZZT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZYME",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZYNE",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ZYXI",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BTCUSDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "EOSUSDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETHUSDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BNBUSDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ONTUSDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "BCCUSDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ADAUSDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XRPUSDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TUSDUSDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "TRXUSDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "LTCUSDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ETCUSDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "IOTAUSDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "ICXUSDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "NEOUSDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "VENUSDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "XLMUSDT",
        "date": "2020-03-13",
        "isEnabled": true
    },
    {
        "symbol": "QTUMUSDT",
        "date": "2020-03-13",
        "isEnabled": true
    }
]

const symbols = symbolData.map(el=>{
    return el['symbol']
})

export default { symbols }