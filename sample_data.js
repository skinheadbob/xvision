var graphRespSimplePacket = {
    'roleData': [
        {
            "name": "from",
            "roleType": "TOMCAT",
            "totalReqCount": 7894,
            "failedReqCount": 2,
            "slowReqCount": 0
        }, {
            "name": "to",
            "roleType": "TOMCAT",
            "totalReqCount": 1745,
            "failedReqCount": 1,
            "slowReqCount": 3
        },
    ],
    'linkData': [{
        "source": "from",
        "target": "to",
        "totalReqCount": 1000,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 100, "3s": 300, "5s": 500, "Error": 50, "Slow": 50}
    }]
}

var graphRespMichael = {
    "roleData": [{
        "name": "David",
        "roleType": "TOMCAT",
        "totalReqCount": 7894,
        "failedReqCount": 2,
        "slowReqCount": 0,
        "histogram": {"1s": 7883, "3s": 9, "5s": 0, "Error": 2, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["David-prod16-mp", "David-prod15-mp", "David-prod14-mp", "David-prod09-mp", "David-prod08-mp", "David-prod07-mp", "David-prod04-mp", "David-prod03-mp", "David-prod05-mp", "David-prod06-mp", "David-prod02-mp", "David-prod10-mp", "David-prod11-mp", "David-prod12-mp", "David-prod13-mp"]
    }, {
        "name": "Shannon",
        "roleType": "TOMCAT",
        "totalReqCount": 1745,
        "failedReqCount": 1,
        "slowReqCount": 3,
        "histogram": {"1s": 1712, "3s": 28, "5s": 3, "Error": 1, "Slow": 1},
        "unknownSourceHistogram": {},
        "serverList": ["Shannon-prod04-mp", "Shannon-prod01-mp", "Shannon-prod06-mp", "Shannon-prod05-mp", "Shannon-prod02-mp", "Shannon-prod03-mp"]
    }, {
        "name": "Jeffrey",
        "roleType": "TOMCAT",
        "totalReqCount": 4161,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 4161, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Jeffrey06", "Jeffrey07", "Jeffrey08", "Jeffrey09", "Jeffrey02", "Jeffrey13", "Jeffrey03", "Jeffrey14", "Jeffrey04", "Jeffrey05", "Jeffrey10", "Jeffrey11", "Jeffrey12"]
    }, {
        "name": "Christopher",
        "roleType": "TOMCAT",
        "totalReqCount": 537,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 529, "3s": 8, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Christopher-prod03-mp", "Christopher-prod04-mp", "Christopher-prod02-mp", "Christopher-prod01-mp"]
    }, {
        "name": "Steve",
        "roleType": "TOMCAT",
        "totalReqCount": 4827,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 4826, "3s": 1, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["mobile-web-prod15-mp", "mobile-web-prod13-mp", "mobile-web-prod16-mp", "mobile-web-prod14-mp", "mobile-web-prod12-mp", "mobile-web-prod11-mp", "mobile-web-prod08-mp", "mobile-web-prod09-mp", "mobile-web-prod07-mp", "mobile-web-prod06-mp", "mobile-web-prod03-mp", "mobile-web-prod02-mp", "mobile-web-prod04-mp", "mobile-web-prod05-mp", "mobile-web-prod01-mp", "mobile-web-prod10-mp"]
    }, {
        "name": "Joseph",
        "roleType": "TOMCAT",
        "totalReqCount": 1055,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1053, "3s": 2, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Joseph-web-prod04-mp", "Joseph-web-prod03-mp", "Joseph-web-prod01-mp", "Joseph-web-prod02-mp"]
    }, {
        "name": "Michael",
        "roleType": "TOMCAT",
        "totalReqCount": 3932,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 3932, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 3364, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Michael-prod08-mp", "Michael-prod07-mp", "Michael-prod06-mp", "Michael-prod05-mp", "Michael-prod02-mp", "Michael-prod01-mp", "Michael-prod03-mp", "Michael-prod04-mp"]
    }, {
        "name": "Nicholas",
        "roleType": "TOMCAT",
        "totalReqCount": 31757,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 31757, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Nicholas-prod22-mp", "Nicholas-prod03-mp", "Nicholas-prod04-mp", "Nicholas-prod02-mp", "Nicholas-prod01-mp", "Nicholas-prod20-mp", "Nicholas-prod05-mp", "Nicholas-prod08-mp", "Nicholas-prod21-mp", "Nicholas-prod06-mp", "Nicholas-prod07-mp", "Nicholas-prod23-mp", "Nicholas-prod24-mp", "Nicholas-prod09-mp", "Nicholas-prod10-mp", "Nicholas-prod11-mp", "Nicholas-prod13-mp", "Nicholas-prod12-mp", "Nicholas-prod18-mp", "Nicholas-prod19-mp", "Nicholas-prod14-mp", "Nicholas-prod17-mp", "Nicholas-prod15-mp", "Nicholas-prod16-mp"]
    }, {
        "name": "Taylor",
        "roleType": "TOMCAT",
        "totalReqCount": 2747,
        "failedReqCount": 2,
        "slowReqCount": 0,
        "histogram": {"1s": 2744, "3s": 1, "5s": 0, "Error": 2, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Taylor-prod01-mp", "Taylor-prod04-mp", "Taylor-prod02-mp", "Taylor-prod03-mp"]
    }, {
        "name": "Ryan",
        "roleType": "TOMCAT",
        "totalReqCount": 14597,
        "failedReqCount": 2,
        "slowReqCount": 4,
        "histogram": {"1s": 14584, "3s": 7, "5s": 4, "Error": 2, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["mobile-api-new-prod02-mp", "mobile-api-new-prod05-mp", "mobile-api-new-prod06-mp", "mobile-api-new-prod01-mp", "mobile-api-new-prod03-mp", "mobile-api-new-prod04-mp", "mobile-api-new-prod08-mp", "mobile-api-new-prod07-mp", "mobile-api-new-prod09-mp", "mobile-api-new-prod14-mp", "mobile-api-new-prod15-mp", "mobile-api-new-prod17-mp", "mobile-api-new-prod16-mp", "mobile-api-new-prod10-mp", "mobile-api-new-prod13-mp", "mobile-api-new-prod11-mp", "mobile-api-new-prod12-mp", "mobile-api-new-prod20-mp", "mobile-api-new-prod18-mp", "mobile-api-new-prod19-mp"]
    }, {
        "name": "Stephen",
        "roleType": "TOMCAT",
        "totalReqCount": 115,
        "failedReqCount": 7,
        "slowReqCount": 0,
        "histogram": {"1s": 108, "3s": 0, "5s": 0, "Error": 7, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Stephen-prod03-mp", "Stephen-prod04-mp", "Stephen-prod02-mp", "Stephen-prod01-mp"]
    }],
    "linkData": [{
        "source": "Steve",
        "target": "Michael",
        "totalReqCount": 9,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 100, "3s": 300, "5s": 500, "Error": 50, "Slow": 50}
    }, {
        "source": "Christopher",
        "target": "Michael",
        "totalReqCount": 198,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 198, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Nicholas",
        "target": "Michael",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Michael",
        "totalReqCount": 30,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 30, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Taylor",
        "target": "Michael",
        "totalReqCount": 122,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 122, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Joseph",
        "target": "Michael",
        "totalReqCount": 55,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 55, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Shannon",
        "target": "Michael",
        "totalReqCount": 124,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 124, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Michael",
        "totalReqCount": 27,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 27, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Stephen",
        "target": "Michael",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Jeffrey",
        "target": "Michael",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }]
};

var graphRespMichael2 = {
    "roleData": [{
        "name": "David",
        "roleType": "TOMCAT",
        "totalReqCount": 7894,
        "failedReqCount": 2,
        "slowReqCount": 0,
        "histogram": {"1s": 7883, "3s": 9, "5s": 0, "Error": 2, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["David-prod16-mp", "David-prod15-mp", "David-prod14-mp", "David-prod09-mp", "David-prod08-mp", "David-prod07-mp", "David-prod04-mp", "David-prod03-mp", "David-prod05-mp", "David-prod06-mp", "David-prod02-mp", "David-prod10-mp", "David-prod11-mp", "David-prod12-mp", "David-prod13-mp"]
    }, {
        "name": "Shannon",
        "roleType": "TOMCAT",
        "totalReqCount": 42,
        "failedReqCount": 42,
        "slowReqCount": 42,
        "histogram": {"1s": 42, "3s": 42, "5s": 42, "Error": 42, "Slow": 42},
        "unknownSourceHistogram": {},
        "serverList": ["Shannon-prod04-mp", "Shannon-prod01-mp", "Shannon-prod06-mp", "Shannon-prod05-mp", "Shannon-prod02-mp", "Shannon-prod03-mp"]
    }, {
        "name": "Jeffrey",
        "roleType": "TOMCAT",
        "totalReqCount": 42,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 42, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Jeffrey06", "Jeffrey07", "Jeffrey08", "Jeffrey09", "Jeffrey02", "Jeffrey13", "Jeffrey03", "Jeffrey14", "Jeffrey04", "Jeffrey05", "Jeffrey10", "Jeffrey11", "Jeffrey12"]
    }, {
        "name": "Christopher",
        "roleType": "TOMCAT",
        "totalReqCount": 42,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 42, "3s": 42, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Christopher-prod03-mp", "Christopher-prod04-mp", "Christopher-prod02-mp", "Christopher-prod01-mp"]
    }, {
        "name": "Steve",
        "roleType": "TOMCAT",
        "totalReqCount": 42,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 42, "3s": 42, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["mobile-web-prod15-mp", "mobile-web-prod13-mp", "mobile-web-prod16-mp", "mobile-web-prod14-mp", "mobile-web-prod12-mp", "mobile-web-prod11-mp", "mobile-web-prod08-mp", "mobile-web-prod09-mp", "mobile-web-prod07-mp", "mobile-web-prod06-mp", "mobile-web-prod03-mp", "mobile-web-prod02-mp", "mobile-web-prod04-mp", "mobile-web-prod05-mp", "mobile-web-prod01-mp", "mobile-web-prod10-mp"]
    }, {
        "name": "Joseph",
        "roleType": "TOMCAT",
        "totalReqCount": 42,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 42, "3s": 42, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Joseph-web-prod04-mp", "Joseph-web-prod03-mp", "Joseph-web-prod01-mp", "Joseph-web-prod02-mp"]
    }, {
        "name": "Michael",
        "roleType": "TOMCAT",
        "totalReqCount": 42,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 42, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 42, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Michael-prod08-mp", "Michael-prod07-mp", "Michael-prod06-mp", "Michael-prod05-mp", "Michael-prod02-mp", "Michael-prod01-mp", "Michael-prod03-mp", "Michael-prod04-mp"]
    }, {
        "name": "Nicholas",
        "roleType": "TOMCAT",
        "totalReqCount": 42,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 42, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Nicholas-prod22-mp", "Nicholas-prod03-mp", "Nicholas-prod04-mp", "Nicholas-prod02-mp", "Nicholas-prod01-mp", "Nicholas-prod20-mp", "Nicholas-prod05-mp", "Nicholas-prod08-mp", "Nicholas-prod21-mp", "Nicholas-prod06-mp", "Nicholas-prod07-mp", "Nicholas-prod23-mp", "Nicholas-prod24-mp", "Nicholas-prod09-mp", "Nicholas-prod10-mp", "Nicholas-prod11-mp", "Nicholas-prod13-mp", "Nicholas-prod12-mp", "Nicholas-prod18-mp", "Nicholas-prod19-mp", "Nicholas-prod14-mp", "Nicholas-prod17-mp", "Nicholas-prod15-mp", "Nicholas-prod16-mp"]
    }, {
        "name": "Taylor",
        "roleType": "TOMCAT",
        "totalReqCount": 42,
        "failedReqCount": 42,
        "slowReqCount": 0,
        "histogram": {"1s": 42, "3s": 1, "5s": 0, "Error": 42, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Taylor-prod01-mp", "Taylor-prod04-mp", "Taylor-prod02-mp", "Taylor-prod03-mp"]
    }, {
        "name": "Ryan",
        "roleType": "TOMCAT",
        "totalReqCount": 42,
        "failedReqCount": 2,
        "slowReqCount": 4,
        "histogram": {"1s": 42, "3s": 7, "5s": 4, "Error": 2, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["mobile-api-new-prod02-mp", "mobile-api-new-prod05-mp", "mobile-api-new-prod06-mp", "mobile-api-new-prod01-mp", "mobile-api-new-prod03-mp", "mobile-api-new-prod04-mp", "mobile-api-new-prod08-mp", "mobile-api-new-prod07-mp", "mobile-api-new-prod09-mp", "mobile-api-new-prod14-mp", "mobile-api-new-prod15-mp", "mobile-api-new-prod17-mp", "mobile-api-new-prod16-mp", "mobile-api-new-prod10-mp", "mobile-api-new-prod13-mp", "mobile-api-new-prod11-mp", "mobile-api-new-prod12-mp", "mobile-api-new-prod20-mp", "mobile-api-new-prod18-mp", "mobile-api-new-prod19-mp"]
    }, {
        "name": "Stephen",
        "roleType": "TOMCAT",
        "totalReqCount": 42,
        "failedReqCount": 7,
        "slowReqCount": 0,
        "histogram": {"1s": 42, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Stephen-prod03-mp", "Stephen-prod04-mp", "Stephen-prod02-mp", "Stephen-prod01-mp"]
    }],
    "linkData": [{
        "source": "Steve",
        "target": "Michael",
        "totalReqCount": 9,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 42, "3s": 42, "5s": 42, "Error": 42, "Slow": 42}
    }, {
        "source": "Christopher",
        "target": "Michael",
        "totalReqCount": 42,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 42, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Nicholas",
        "target": "Michael",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Michael",
        "totalReqCount": 42,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 30, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Taylor",
        "target": "Michael",
        "totalReqCount": 42,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 42, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Joseph",
        "target": "Michael",
        "totalReqCount": 42,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 42, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Shannon",
        "target": "Michael",
        "totalReqCount": 42,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 42, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Michael",
        "totalReqCount": 42,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 42, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Stephen",
        "target": "Michael",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Jeffrey",
        "target": "Michael",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }]
};

var graphRespJoseph = {
    "roleData": [
        {
            "name": "Eric",
            "roleType": "TOMCAT",
            "histogram": {"1s": 3964, "3s": 2, "5s": 0, "Error": 18, "Slow": 0},
            "unknownSourceHistogram": {},
            "serverList": ["Eric-prod18-mp", "Eric-prod16-mp", "Eric-prod17-mp", "Eric-prod14-mp", "Eric-prod15-mp", "Eric-prod13-mp", "Eric-prod12-mp", "Eric-prod04-mp", "Eric-prod09-mp", "Eric-prod10-mp", "Eric-prod03-mp", "Eric-prod11-mp", "Eric-prod05-mp", "Eric-prod08-mp", "Eric-prod06-mp", "Eric-prod07-mp", "Eric-prod01-mp", "Eric-prod02-mp"]
        }, {
            "name": "Pete",
            "roleType": "TOMCAT",
            "totalReqCount": 0,
            "failedReqCount": 0,
            "slowReqCount": 0,
            "histogram": {"1s": 2978, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
            "unknownSourceHistogram": {},
            "serverList": ["auth-prod02-mp", "auth-prod01-mp", "auth-prod03-mp", "auth-prod04-mp"]
        }, {
            "name": "Joseph",
            "roleType": "TOMCAT",
            "totalReqCount": 1055,
            "failedReqCount": 0,
            "slowReqCount": 0,
            "histogram": {"1s": 1053, "3s": 2, "5s": 0, "Error": 0, "Slow": 0},
            "unknownSourceHistogram": {"1s": 1053, "3s": 2, "5s": 0, "Error": 0, "Slow": 0},
            "serverList": ["Joseph-web-prod04-mp", "Joseph-web-prod03-mp", "Joseph-web-prod01-mp", "Joseph-web-prod02-mp"]
        }, {
            "name": "Michael",
            "roleType": "TOMCAT",
            "totalReqCount": 4242,
            "failedReqCount": 420,
            "slowReqCount": 0,
            "histogram": {"1s": 3932, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
            "unknownSourceHistogram": {},
            "serverList": ["Michael-prod08-mp", "Michael-prod07-mp", "Michael-prod06-mp", "Michael-prod05-mp", "Michael-prod02-mp", "Michael-prod01-mp", "Michael-prod03-mp", "Michael-prod04-mp"]
        }],
    "linkData": [
        {
            "source": "Joseph",
            "target": "Pete",
            "totalReqCount": 558,
            "failedReqCount": 0,
            "slowReqCount": 0,
            "histogram": {"1s": 558, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
        }, {
            "source": "Joseph",
            "target": "Michael",
            "totalReqCount": 55,
            "failedReqCount": 0,
            "slowReqCount": 0,
            "histogram": {"1s": 55, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
        }, {
            "source": "Joseph",
            "target": "Eric",
            "totalReqCount": 32,
            "failedReqCount": 0,
            "slowReqCount": 0,
            "histogram": {"1s": 32, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
        }]
};

var graphRespMissingRoleData = {
    // "roleData": [],
    "linkData": []
};

var graphRespMissingLinkData = {
    "roleData": []
    // "linkData": []
};

var graphRespPlenty = {
    "roleData": [{
        "name": "Alik",
        "roleType": "TOMCAT",
        "totalReqCount": 79,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 76, "3s": 1, "5s": 0, "Error": 0, "Slow": 2},
        "unknownSourceHistogram": {"1s": 76, "3s": 1, "5s": 0, "Error": 0, "Slow": 2},
        "serverList": ["32409a594ff8", "58d4ea71024c", "b4698ae00f27", "7cdc5963b4d0"],
        "avgLatency": 329.25,
        "owner": "hayden@kyle.com",
        "serverCount": 4
    }, {
        "name": "Scott",
        "roleType": "TOMCAT",
        "totalReqCount": 13,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 13, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 13, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Scott-prod01-mp", "Scott-prod02-mp"],
        "avgLatency": 25.25,
        "owner": "cloudstick@kyle.com",
        "serverCount": 2
    }, {
        "name": "Justin",
        "roleType": "TOMCAT",
        "totalReqCount": 1981,
        "failedReqCount": 29,
        "slowReqCount": 0,
        "histogram": {"1s": 1871, "3s": 81, "5s": 0, "Error": 29, "Slow": 0},
        "unknownSourceHistogram": {"1s": 1871, "3s": 81, "5s": 0, "Error": 29, "Slow": 0},
        "serverList": ["order-web-new-prod04-mp", "order-web-new-prod03-mp", "order-web-new-prod01-mp", "order-web-new-prod02-mp", "order-web-new-prod05-mp", "order-web-new-prod08-mp", "order-web-new-prod06-mp", "order-web-new-prod07-mp"],
        "avgLatency": 188.7,
        "owner": "nwcho@kyle.com",
        "serverCount": 8
    }, {
        "name": "Juan",
        "totalReqCount": -1,
        "failedReqCount": -1,
        "slowReqCount": -1,
        "histogram": {},
        "unknownSourceHistogram": {},
        "serverList": Array,
        "avgLatency": -1.0,
        "owner": "",
        "serverCount": -1
    }, {
        "name": "Joe",
        "roleType": "TOMCAT",
        "totalReqCount": 47,
        "failedReqCount": 1,
        "slowReqCount": 0,
        "histogram": {"1s": 42, "3s": 4, "5s": 0, "Error": 1, "Slow": 0},
        "unknownSourceHistogram": {"1s": 42, "3s": 4, "5s": 0, "Error": 1, "Slow": 0},
        "serverList": ["Joe-prod01-mp", "Joe-prod03-mp", "Joe-prod04-mp", "Joe-prod02-mp"],
        "avgLatency": 199.91,
        "owner": "need4spd@kyle.com",
        "serverCount": 4
    }, {
        "name": "Gino",
        "roleType": "TOMCAT",
        "totalReqCount": 207,
        "failedReqCount": 40,
        "slowReqCount": 0,
        "histogram": {"1s": 167, "3s": 0, "5s": 0, "Error": 40, "Slow": 0},
        "unknownSourceHistogram": {"1s": 167, "3s": 0, "5s": 0, "Error": 40, "Slow": 0},
        "serverList": ["Gino-prod03-mp", "Gino-prod02-mp", "Gino-prod04-mp", "Gino-prod01-mp"],
        "avgLatency": 28.25,
        "owner": "stager0909@kyle.com",
        "serverCount": 4
    }, {
        "name": "Cody",
        "roleType": "TOMCAT",
        "totalReqCount": 112,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 112, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 59, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Cody-prod01-mp", "Cody-prod02-mp", "Cody-prod03-mp", "Cody-prod04-mp"],
        "avgLatency": 6.57,
        "owner": "kxiao@kyle.com",
        "serverCount": 4
    }, {
        "name": "Edward",
        "totalReqCount": -1,
        "failedReqCount": -1,
        "slowReqCount": -1,
        "histogram": {},
        "unknownSourceHistogram": {},
        "serverList": Array,
        "avgLatency": -1.0,
        "owner": "",
        "serverCount": -1
    }, {
        "name": "David",
        "roleType": "TOMCAT",
        "totalReqCount": 32748,
        "failedReqCount": 0,
        "slowReqCount": 3,
        "histogram": {"1s": 32726, "3s": 18, "5s": 3, "Error": 0, "Slow": 1},
        "unknownSourceHistogram": {},
        "serverList": ["David-prod16-mp", "David-prod15-mp", "David-prod14-mp", "David-prod09-mp", "David-prod08-mp", "David-prod07-mp", "David-prod04-mp", "David-prod03-mp", "David-prod05-mp", "David-prod06-mp", "David-prod01-mp", "David-prod02-mp", "David-prod10-mp", "David-prod11-mp", "David-prod12-mp", "David-prod13-mp"],
        "avgLatency": 52.91,
        "owner": "ms.song@kyle.com",
        "serverCount": 16
    }, {
        "name": "Alexander",
        "roleType": "TOMCAT",
        "totalReqCount": 348,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 347, "3s": 1, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 347, "3s": 1, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Alexander-prod05-bp", "Alexander-prod06-bp", "Alexander-prod01-bp", "Alexander-prod02-bp", "Alexander-prod04-bp", "Alexander-prod03-bp"],
        "avgLatency": 85.37,
        "owner": "ru4ng@kyle.com",
        "serverCount": 6
    }, {
        "name": "Christopher",
        "roleType": "TOMCAT",
        "totalReqCount": 2077,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 2046, "3s": 31, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Christopher-prod03-mp", "Christopher-prod04-mp", "Christopher-prod02-mp", "Christopher-prod01-mp"],
        "avgLatency": 160.67,
        "owner": "hyunyop.jung@kyle.com",
        "serverCount": 4
    }, {
        "name": "Sean",
        "roleType": "TOMCAT",
        "totalReqCount": 20934,
        "failedReqCount": 1,
        "slowReqCount": 0,
        "histogram": {"1s": 20932, "3s": 1, "5s": 0, "Error": 1, "Slow": 0},
        "unknownSourceHistogram": {"1s": 133, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Sean-prod01-mp", "Sean-prod02-mp", "Sean-prod03-mp", "Sean-prod04-mp", "Sean-prod05-mp", "Sean-prod08-mp", "Sean-prod09-mp", "Sean-prod07-mp", "Sean-prod06-mp"],
        "avgLatency": 21.7,
        "owner": "yansim87@kyle.com",
        "serverCount": 9
    }, {
        "name": "Gregory-api",
        "roleType": "TOMCAT",
        "totalReqCount": 5334,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 5334, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 5248, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Gregory-api07", "Gregory-api06", "Gregory-api08", "Gregory-api01", "Gregory-api03", "Gregory-api02", "Gregory-api05", "Gregory-api04"],
        "avgLatency": 33.15,
        "owner": "sover@kyle.com",
        "serverCount": 8
    }, {
        "name": "Charles",
        "roleType": "TOMCAT",
        "totalReqCount": 11805,
        "failedReqCount": 3,
        "slowReqCount": 0,
        "histogram": {"1s": 11802, "3s": 0, "5s": 0, "Error": 3, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["shipping01", "shipping04", "shipping05", "shipping02", "shipping03", "shipping08", "shipping06", "shipping07"],
        "avgLatency": 10.99,
        "owner": "sh.kim6793@kyle.com",
        "serverCount": 8
    }, {
        "name": "Kelly",
        "roleType": "TOMCAT",
        "totalReqCount": 940,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 939, "3s": 1, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 8, "3s": 1, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Kelly-prod04-mp", "Kelly-prod03-mp", "Kelly-prod02-mp", "Kelly-prod01-mp"],
        "avgLatency": 6.76,
        "owner": "pilgrim21c@kyle.com",
        "serverCount": 4
    }, {
        "name": "Evan",
        "roleType": "TOMCAT",
        "totalReqCount": 1491,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1491, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Evan-prod02-mp", "Evan-prod01-mp", "Evan-prod04-mp", "Evan-prod03-mp"],
        "avgLatency": 2.84,
        "owner": "kangwoo@kyle.com",
        "serverCount": 4
    }, {
        "name": "Victor",
        "totalReqCount": -1,
        "failedReqCount": -1,
        "slowReqCount": -1,
        "histogram": {},
        "unknownSourceHistogram": {},
        "serverList": Array,
        "avgLatency": -1.0,
        "owner": "",
        "serverCount": -1
    }, {
        "name": "Peter",
        "roleType": "TOMCAT",
        "totalReqCount": 15,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 15, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 15, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Peter-prod01-mp", "Peter-prod02-mp"],
        "avgLatency": 75.07,
        "owner": "",
        "serverCount": 2
    }, {
        "name": "Julia",
        "roleType": "TOMCAT",
        "totalReqCount": 4,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 4, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 4, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Julia02-mp"],
        "avgLatency": 28.25,
        "owner": "tyou@kyle.com",
        "serverCount": 1
    }, {
        "name": "Shawn",
        "totalReqCount": -1,
        "failedReqCount": -1,
        "slowReqCount": -1,
        "histogram": {},
        "unknownSourceHistogram": {},
        "serverList": Array,
        "avgLatency": -1.0,
        "owner": "",
        "serverCount": -1
    }, {
        "name": "Taylor",
        "roleType": "TOMCAT",
        "totalReqCount": 8052,
        "failedReqCount": 20,
        "slowReqCount": 0,
        "histogram": {"1s": 8030, "3s": 2, "5s": 0, "Error": 20, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Taylor-prod01-mp", "Taylor-prod04-mp", "Taylor-prod02-mp", "Taylor-prod03-mp"],
        "avgLatency": 27.14,
        "owner": "ocg@kyle.com",
        "serverCount": 4
    }, {
        "name": "Kristen",
        "totalReqCount": -1,
        "failedReqCount": -1,
        "slowReqCount": -1,
        "histogram": {},
        "unknownSourceHistogram": {},
        "serverList": Array,
        "avgLatency": -1.0,
        "owner": "",
        "serverCount": -1
    }, {
        "name": "Shane",
        "roleType": "TOMCAT",
        "totalReqCount": 6548,
        "failedReqCount": 0,
        "slowReqCount": 4,
        "histogram": {"1s": 6496, "3s": 47, "5s": 4, "Error": 0, "Slow": 1},
        "unknownSourceHistogram": {"1s": 6484, "3s": 46, "5s": 4, "Error": 0, "Slow": 1},
        "serverList": ["Shane-prod03-mp", "Shane-prod04-mp", "Shane-prod02-mp", "Shane-prod01-mp"],
        "avgLatency": 116.14,
        "owner": "before30@kyle.com",
        "serverCount": 4
    }, {
        "name": "Jenna",
        "roleType": "TOMCAT",
        "totalReqCount": 30,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 30, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 30, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Jenna-app-prod02-mp", "Jenna-app-prod03-mp", "Jenna-app-prod01-mp", "Jenna-app-prod05-mp", "Jenna-app-prod04-mp", "Jenna-app-prod06-mp", "Jenna-app-prod09-mp", "Jenna-app-prod07-mp", "Jenna-app-prod08-mp"],
        "avgLatency": 4.14,
        "owner": "james.wang@kyle.com",
        "serverCount": 9
    }, {
        "name": "Bryan",
        "roleType": "TOMCAT",
        "totalReqCount": 5209,
        "failedReqCount": 20,
        "slowReqCount": 0,
        "histogram": {"1s": 5187, "3s": 2, "5s": 0, "Error": 20, "Slow": 0},
        "unknownSourceHistogram": {"1s": 5177, "3s": 2, "5s": 0, "Error": 19, "Slow": 0},
        "serverList": ["Bryan-prod04-mp", "Bryan-prod02-mp", "Bryan-prod05-mp", "Bryan-prod03-mp", "Bryan-prod01-mp", "Bryan-prod09-mp", "Bryan-prod10-mp", "Bryan-prod06-mp", "Bryan-prod07-mp", "Bryan-prod08-mp"],
        "avgLatency": 28.3,
        "owner": "mli@kyle.com",
        "serverCount": 10
    }, {
        "name": "William",
        "roleType": "TOMCAT",
        "totalReqCount": 20874,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 20874, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["William-prod10-mp", "William-prod14-mp", "William-prod11-mp", "William-prod12-mp", "William-prod09-mp", "William-prod13-mp", "William-prod16-mp", "William-prod15-mp"],
        "avgLatency": 0.3,
        "owner": "bye@kyle.com",
        "serverCount": 8
    }, {
        "name": "Ian",
        "roleType": "TOMCAT",
        "totalReqCount": 1326,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1326, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 1326, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Ian-prod06-mp", "Ian-prod07-mp", "Ian-prod09-mp", "Ian-prod10-mp", "Ian-prod08-mp", "Ian-prod02-mp", "Ian-prod05-mp", "Ian-prod03-mp", "Ian-prod04-mp", "Ian-prod01-mp"],
        "avgLatency": 6.28,
        "owner": "james.wang@kyle.com",
        "serverCount": 10
    }, {
        "name": "Nathan",
        "roleType": "TOMCAT",
        "totalReqCount": 712,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 711, "3s": 1, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Nathan-prod02-bp", "Nathan-prod03-bp", "Nathan-prod04-bp", "Nathan-prod01-bp"],
        "avgLatency": 13.17,
        "owner": "itkyung@kyle.com",
        "serverCount": 4
    }, {
        "name": "Stephen",
        "roleType": "TOMCAT",
        "totalReqCount": 274,
        "failedReqCount": 11,
        "slowReqCount": 0,
        "histogram": {"1s": 261, "3s": 2, "5s": 0, "Error": 11, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Stephen-prod03-mp", "Stephen-prod04-mp", "Stephen-prod02-mp", "Stephen-prod01-mp"],
        "avgLatency": 77.71,
        "owner": "jonghee@kyle.com",
        "serverCount": 4
    }, {
        "name": "Erin",
        "roleType": "TOMCAT",
        "totalReqCount": 91,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 89, "3s": 1, "5s": 0, "Error": 0, "Slow": 1},
        "unknownSourceHistogram": {},
        "serverList": ["Erin-prod05-mp", "Erin-prod06-mp", "Erin-prod04-mp", "Erin-prod01-mp", "Erin-prod02-mp", "Erin-prod03-mp"],
        "avgLatency": 317.13,
        "owner": "tyou@kyle.com",
        "serverCount": 6
    }, {
        "name": "Christian",
        "roleType": "TOMCAT",
        "totalReqCount": 83,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 82, "3s": 1, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 82, "3s": 1, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Christian-prod01-mp", "Christian-prod02-mp"],
        "avgLatency": 80.68,
        "owner": "woops101@kyle.com",
        "serverCount": 2
    }, {
        "name": "Joseph-review",
        "roleType": "TOMCAT",
        "totalReqCount": 13466,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 13466, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Joseph-review-prod00-mv", "Joseph-review-prod03-mp", "Joseph-review-prod04-mp", "Joseph-review-prod01-mp", "Joseph-review-prod02-mp"],
        "avgLatency": 11.56,
        "owner": "dolmang@kyle.com",
        "serverCount": 5
    }, {
        "name": "Timothy",
        "roleType": "TOMCAT",
        "totalReqCount": 17113,
        "failedReqCount": 2,
        "slowReqCount": 0,
        "histogram": {"1s": 17085, "3s": 26, "5s": 0, "Error": 2, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Timothy-prod06-mp", "Timothy-prod07-mp", "Timothy-prod05-mp", "Timothy-prod02-mp", "Timothy-prod03-mp", "Timothy-prod04-mp", "Timothy-prod08-mp"],
        "avgLatency": 30.93,
        "owner": "nwcho@kyle.com",
        "serverCount": 7
    }, {
        "name": "Aaron",
        "roleType": "TOMCAT",
        "totalReqCount": 1226,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1226, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Aaron-api-prod02-mp", "Aaron-api-prod01-mp", "Aaron-api-prod03-mp", "Aaron-api-prod04-mp"],
        "avgLatency": 12.25,
        "owner": "taehyun.kim@kyle.com",
        "serverCount": 4
    }, {
        "name": "Aaron-web",
        "totalReqCount": -1,
        "failedReqCount": -1,
        "slowReqCount": -1,
        "histogram": {},
        "unknownSourceHistogram": {},
        "serverList": Array,
        "avgLatency": -1.0,
        "owner": "",
        "serverCount": -1
    }, {
        "name": "John-admin",
        "totalReqCount": -1,
        "failedReqCount": -1,
        "slowReqCount": -1,
        "histogram": {},
        "unknownSourceHistogram": {},
        "serverList": Array,
        "avgLatency": -1.0,
        "owner": "",
        "serverCount": -1
    }, {
        "name": "Kevin",
        "roleType": "TOMCAT",
        "totalReqCount": 29,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 29, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 29, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Kevin-prod01-mp", "Kevin-prod02-mp", "Kevin-prod04-mp", "Kevin-prod03-mp"],
        "avgLatency": 3.1,
        "owner": "daltago@kyle.com",
        "serverCount": 4
    }, {
        "name": "James",
        "roleType": "TOMCAT",
        "totalReqCount": 8,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 8, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["James-prod03-mp", "James-prod04-mp", "James-prod01-mp", "James-prod02-mp"],
        "avgLatency": 147.57,
        "owner": "unizune@kyle.com",
        "serverCount": 4
    }, {
        "name": "Vincent",
        "roleType": "TOMCAT",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Vincent-prod04-mp"],
        "avgLatency": 7.0,
        "owner": "prakash@kyle.com",
        "serverCount": 1
    }, {
        "name": "Chris",
        "roleType": "TOMCAT",
        "totalReqCount": 9936,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 9921, "3s": 15, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 9921, "3s": 15, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Chris-prod02-mp", "Chris-prod01-mp", "Chris-prod07-mp", "Chris-prod08-mp", "Chris-prod03-mp", "Chris-prod06-mp", "Chris-prod10-mp", "Chris-prod04-mp", "Chris-prod05-mp", "Chris-prod12-mp", "Chris-prod11-mp", "Chris-prod09-mp"],
        "avgLatency": 46.04,
        "owner": "before30@kyle.com",
        "serverCount": 12
    }, {
        "name": "Adam",
        "roleType": "TOMCAT",
        "totalReqCount": 40,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 40, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["fileupload-prod04-mp", "fileupload-prod03-mp", "fileupload-prod01-mp", "fileupload-prod02-mp"],
        "avgLatency": 17.19,
        "owner": "dolmang@kyle.com",
        "serverCount": 4
    }, {
        "name": "Shannon",
        "roleType": "TOMCAT",
        "totalReqCount": 6456,
        "failedReqCount": 17,
        "slowReqCount": 16,
        "histogram": {"1s": 6321, "3s": 90, "5s": 16, "Error": 17, "Slow": 12},
        "unknownSourceHistogram": {},
        "serverList": ["Shannon-prod04-mp", "Shannon-prod01-mp", "Shannon-prod06-mp", "Shannon-prod05-mp", "Shannon-prod02-mp", "Shannon-prod03-mp"],
        "avgLatency": 180.77,
        "owner": "need4spd@kyle.com",
        "serverCount": 6
    }, {
        "name": "Devin",
        "roleType": "TOMCAT",
        "totalReqCount": 116,
        "failedReqCount": 1,
        "slowReqCount": 0,
        "histogram": {"1s": 114, "3s": 0, "5s": 0, "Error": 1, "Slow": 1},
        "unknownSourceHistogram": {"1s": 113, "3s": 0, "5s": 0, "Error": 1, "Slow": 1},
        "serverList": ["Devin-prod03-mp", "Devin-prod02-mp", "Devin-prod01-mp"],
        "avgLatency": 200.03,
        "owner": "elichang@kyle.com",
        "serverCount": 3
    }, {
        "name": "Gregory",
        "roleType": "TOMCAT",
        "totalReqCount": 5801,
        "failedReqCount": 16,
        "slowReqCount": 3,
        "histogram": {"1s": 5763, "3s": 15, "5s": 3, "Error": 16, "Slow": 4},
        "unknownSourceHistogram": {"1s": 5763, "3s": 15, "5s": 3, "Error": 16, "Slow": 4},
        "serverList": ["Gregory-was08", "Gregory-was07", "Gregory-was02", "Gregory-was01", "Gregory-was04", "Gregory-was03", "Gregory-was06", "Gregory-was05"],
        "avgLatency": 53.91,
        "owner": "sover@kyle.com",
        "serverCount": 8
    }, {
        "name": "Morgan",
        "roleType": "TOMCAT",
        "totalReqCount": 624,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 612, "3s": 12, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 612, "3s": 12, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Morgan-prod03-mp", "Morgan-prod02-mp", "Morgan-prod01-mp"],
        "avgLatency": 116.32,
        "owner": "hyungsee@kyle.com",
        "serverCount": 3
    }, {
        "name": "Chas",
        "roleType": "TOMCAT",
        "totalReqCount": 833,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 821, "3s": 12, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Chas-api-prod01-bp", "Chas-api-prod02-bp", "Chas-api-prod05-bp", "Chas-api-prod06-bp", "Chas-api-prod03-bp", "Chas-api-prod04-bp"],
        "avgLatency": 95.6,
        "owner": "itkyung@kyle.com",
        "serverCount": 6
    }, {
        "name": "Richard",
        "roleType": "TOMCAT",
        "totalReqCount": 12,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 12, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Pearl-Chas-api-prod04-mp", "Pearl-Chas-api-prod05-mp", "Pearl-Chas-api-prod06-mp", "Pearl-Chas-api-prod03-mp", "Pearl-Chas-api-prod02-mp", "Pearl-Chas-api-prod01-mp"],
        "avgLatency": 15.92,
        "owner": "wshen@kyle.com",
        "serverCount": 6
    }, {
        "name": "Brooke",
        "totalReqCount": -1,
        "failedReqCount": -1,
        "slowReqCount": -1,
        "histogram": {},
        "unknownSourceHistogram": {},
        "serverList": Array,
        "avgLatency": -1.0,
        "owner": "",
        "serverCount": -1
    }, {
        "name": "Michael-join",
        "roleType": "TOMCAT",
        "totalReqCount": 2,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 1, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 1, "3s": 1, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Michael-join-prod02-mp", "Michael-join-prod01-mp"],
        "avgLatency": 575.0,
        "owner": "need4spd@kyle.com",
        "serverCount": 2
    }, {
        "name": "Andrew",
        "roleType": "TOMCAT",
        "totalReqCount": 482,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 480, "3s": 2, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Andrew-prod01-mp", "Andrew-prod02-mp", "Andrew-prod04-mp", "Andrew-prod03-mp"],
        "avgLatency": 23.82,
        "owner": "cloudstick@kyle.com",
        "serverCount": 4
    }, {
        "name": "George",
        "roleType": "TOMCAT",
        "totalReqCount": 1751,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1751, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 1489, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["George-prod04-mp", "George-prod03-mp", "George-prod01-mp", "George-prod02-mp"],
        "avgLatency": 3.96,
        "owner": "leehaesang@kyle.com",
        "serverCount": 4
    }, {
        "name": "Matthew",
        "roleType": "TOMCAT",
        "totalReqCount": 9932,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 9931, "3s": 1, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Matthew-prod04-mp", "Matthew-prod05-mp", "Matthew-prod03-mp", "Matthew-prod02-mp", "Matthew-prod06-mp", "Matthew-prod09-mp", "Matthew-prod10-mp", "Matthew-prod01-mp"],
        "avgLatency": 14.27,
        "owner": "readytogo@kyle.com",
        "serverCount": 8
    }, {
        "name": "John",
        "roleType": "TOMCAT",
        "totalReqCount": 148,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 148, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 148, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["John-prod02-mp", "John-prod01-mp"],
        "avgLatency": 15.81,
        "owner": "pengcheng.gao@kyle.com",
        "serverCount": 2
    }, {
        "name": "Alexis",
        "roleType": "TOMCAT",
        "totalReqCount": 4,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 4, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 4, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["captcha-prod01-mp", "captcha-prod02-mp"],
        "avgLatency": 12.25,
        "owner": "stager0909@kyle.com",
        "serverCount": 2
    }, {
        "name": "Raymond",
        "totalReqCount": -1,
        "failedReqCount": -1,
        "slowReqCount": -1,
        "histogram": {},
        "unknownSourceHistogram": {},
        "serverList": Array,
        "avgLatency": -1.0,
        "owner": "",
        "serverCount": -1
    }, {
        "name": "Adrian",
        "totalReqCount": -1,
        "failedReqCount": -1,
        "slowReqCount": -1,
        "histogram": {},
        "unknownSourceHistogram": {},
        "serverList": Array,
        "avgLatency": -1.0,
        "owner": "",
        "serverCount": -1
    }, {
        "name": "Blake",
        "roleType": "TOMCAT",
        "totalReqCount": 10,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 10, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 10, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Blake-prod01-mp", "Blake-prod02-mp", "Blake-prod03-mp", "Blake-prod04-mp"],
        "avgLatency": 23.11,
        "owner": "upepo@kyle.com",
        "serverCount": 4
    }, {
        "name": "Ethan",
        "roleType": "TOMCAT",
        "totalReqCount": 123,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 123, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 123, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["landing-prod01-mp", "landing-prod02-mp"],
        "avgLatency": 6.16,
        "owner": "soul567@kyle.com",
        "serverCount": 2
    }, {
        "name": "Anthony",
        "roleType": "TOMCAT",
        "totalReqCount": 981,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 981, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Anthony-prod01-mp", "Anthony-prod02-mp", "Anthony-prod03-mp", "Anthony-prod06-mp", "Anthony-prod07-mp", "Anthony-prod04-mp", "Anthony-prod05-mp", "Anthony-prod08-mp"],
        "avgLatency": 27.53,
        "owner": "jmgu@kyle.com",
        "serverCount": 8
    }, {
        "name": "Steve",
        "roleType": "TOMCAT",
        "totalReqCount": 18811,
        "failedReqCount": 2,
        "slowReqCount": 0,
        "histogram": {"1s": 18808, "3s": 1, "5s": 0, "Error": 2, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["mobile-web-prod15-mp", "mobile-web-prod13-mp", "mobile-web-prod16-mp", "mobile-web-prod14-mp", "mobile-web-prod12-mp", "mobile-web-prod11-mp", "mobile-web-prod08-mp", "mobile-web-prod09-mp", "mobile-web-prod07-mp", "mobile-web-prod06-mp", "mobile-web-prod03-mp", "mobile-web-prod02-mp", "mobile-web-prod04-mp", "mobile-web-prod05-mp", "mobile-web-prod01-mp", "mobile-web-prod10-mp"],
        "avgLatency": 37.86,
        "owner": "oneiswon@kyle.com",
        "serverCount": 16
    }, {
        "name": "Caleb",
        "totalReqCount": -1,
        "failedReqCount": -1,
        "slowReqCount": -1,
        "histogram": {},
        "unknownSourceHistogram": {},
        "serverList": Array,
        "avgLatency": -1.0,
        "owner": "",
        "serverCount": -1
    }, {
        "name": "David10",
        "totalReqCount": -1,
        "failedReqCount": -1,
        "slowReqCount": -1,
        "histogram": {},
        "unknownSourceHistogram": {},
        "serverList": Array,
        "avgLatency": -1.0,
        "owner": "",
        "serverCount": -1
    }, {
        "name": "Brian",
        "roleType": "TOMCAT",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Brian-prod01-bp"],
        "avgLatency": -1.0,
        "owner": "ru4ng@kyle.com",
        "serverCount": 1
    }, {
        "name": "Mark",
        "roleType": "TOMCAT",
        "totalReqCount": 6932,
        "failedReqCount": 2,
        "slowReqCount": 1,
        "histogram": {"1s": 6912, "3s": 16, "5s": 1, "Error": 2, "Slow": 1},
        "unknownSourceHistogram": {},
        "serverList": ["cart-web-prod01-mp", "cart-web-prod02-mp", "cart-web-prod03-mp", "Matthew-prod07-mp", "Matthew-prod08-mp", "cart-web-prod06-mp", "cart-web-prod05-mp", "cart-web-prod04-mp"],
        "avgLatency": 40.08,
        "owner": "readytogo@kyle.com",
        "serverCount": 8
    }, {
        "name": "Aria",
        "totalReqCount": -1,
        "failedReqCount": -1,
        "slowReqCount": -1,
        "histogram": {},
        "unknownSourceHistogram": {},
        "serverList": Array,
        "avgLatency": -1.0,
        "owner": "",
        "serverCount": -1
    }, {
        "name": "Pete",
        "roleType": "TOMCAT",
        "totalReqCount": 10790,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 10788, "3s": 2, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["auth-prod02-mp", "auth-prod01-mp", "auth-prod03-mp", "auth-prod04-mp"],
        "avgLatency": 11.45,
        "owner": "stager0909@kyle.com",
        "serverCount": 4
    }, {
        "name": "Alex",
        "totalReqCount": -1,
        "failedReqCount": -1,
        "slowReqCount": -1,
        "histogram": {},
        "unknownSourceHistogram": {},
        "serverList": Array,
        "avgLatency": -1.0,
        "owner": "",
        "serverCount": -1
    }, {
        "name": "Lindsay",
        "totalReqCount": -1,
        "failedReqCount": -1,
        "slowReqCount": -1,
        "histogram": {},
        "unknownSourceHistogram": {},
        "serverList": Array,
        "avgLatency": -1.0,
        "owner": "",
        "serverCount": -1
    }, {
        "name": "Ellis",
        "roleType": "TOMCAT",
        "totalReqCount": 338,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 338, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 338, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["ip-10-211-203-6.ap-northeast-2.compute.internal", "ip-10-211-203-193.ap-northeast-2.compute.internal", "ip-10-211-202-95.ap-northeast-2.compute.internal", "ip-10-211-202-27.ap-northeast-2.compute.internal", "ip-10-211-203-192.ap-northeast-2.compute.internal", "ip-10-211-202-121.ap-northeast-2.compute.internal", "ip-10-211-202-98.ap-northeast-2.compute.internal", "ip-10-211-203-150.ap-northeast-2.compute.internal", "Ellis-prod01-mp"],
        "avgLatency": 41.31,
        "owner": "joshua@kyle.com",
        "serverCount": 9
    }, {
        "name": "Robert",
        "roleType": "TOMCAT",
        "totalReqCount": 11468,
        "failedReqCount": 2,
        "slowReqCount": 0,
        "histogram": {"1s": 11466, "3s": 0, "5s": 0, "Error": 2, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Robert-prod03-mp", "Robert-prod01-mp", "Robert-prod02-mp", "Robert-prod07-mp", "Robert-prod04-mp", "Robert-prod05-mp", "Robert-prod06-mp", "Robert-prod08-mp"],
        "avgLatency": 3.33,
        "owner": "stager0909@kyle.com",
        "serverCount": 8
    }, {
        "name": "Kenneth",
        "roleType": "TOMCAT",
        "totalReqCount": 451,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 447, "3s": 4, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 439, "3s": 4, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Kenneth-prod01-mp", "Kenneth-prod04-mp", "Kenneth-prod03-mp", "Kenneth-prod02-mp"],
        "avgLatency": 69.84,
        "owner": "watercolors@kyle.com",
        "serverCount": 4
    }, {
        "name": "Ryan",
        "roleType": "TOMCAT",
        "totalReqCount": 51728,
        "failedReqCount": 15,
        "slowReqCount": 0,
        "histogram": {"1s": 51693, "3s": 19, "5s": 0, "Error": 15, "Slow": 1},
        "unknownSourceHistogram": {},
        "serverList": ["mobile-api-new-prod26-mp", "mobile-api-new-prod28-mp", "mobile-api-new-prod05-mp", "mobile-api-new-prod30-mp", "mobile-api-new-prod24-mp", "mobile-api-new-prod01-mp", "mobile-api-new-prod22-mp", "mobile-api-new-prod03-mp", "mobile-api-new-prod07-mp", "mobile-api-new-prod09-mp", "mobile-api-new-prod15-mp", "mobile-api-new-prod17-mp", "mobile-api-new-prod13-mp", "mobile-api-new-prod11-mp", "mobile-api-new-prod20-mp", "mobile-api-new-prod19-mp", "mobile-api-new-prod02-mp", "mobile-api-new-prod25-mp", "mobile-api-new-prod27-mp", "mobile-api-new-prod06-mp", "mobile-api-new-prod23-mp", "mobile-api-new-prod04-mp", "mobile-api-new-prod08-mp", "mobile-api-new-prod21-mp", "mobile-api-new-prod29-mp", "mobile-api-new-prod14-mp", "mobile-api-new-prod16-mp", "mobile-api-new-prod10-mp", "mobile-api-new-prod12-mp", "mobile-api-new-prod18-mp"],
        "avgLatency": 55.48,
        "owner": "softrain40@kyle.com",
        "serverCount": 30
    }, {
        "name": "Paul",
        "roleType": "TOMCAT",
        "totalReqCount": 19107,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 19106, "3s": 1, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Paul-prod02-mp", "Paul-prod03-mp", "Paul-prod01-mp", "Paul-prod07-mp", "Paul-prod04-mp", "Paul-prod05-mp", "Paul-prod06-mp", "Paul-prod08-mp"],
        "avgLatency": 28.55,
        "owner": "dongho@kyle.com",
        "serverCount": 8
    }, {
        "name": "Michael",
        "roleType": "TOMCAT",
        "totalReqCount": 15445,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 15444, "3s": 1, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Michael-prod08-mp", "Michael-prod07-mp", "Michael-prod06-mp", "Michael-prod05-mp", "Michael-prod02-mp", "Michael-prod01-mp", "Michael-prod03-mp", "Michael-prod04-mp"],
        "avgLatency": 6.49,
        "owner": "need4spd@kyle.com",
        "serverCount": 8
    }, {
        "name": "Ken",
        "roleType": "TOMCAT",
        "totalReqCount": 10430,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 10430, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Ken-prod04-mp", "Ken-prod01-mp", "Ken-prod06-mp", "Ken-prod05-mp", "Ken-prod02-mp", "Ken-prod03-mp"],
        "avgLatency": 2.8,
        "owner": "tyou@kyle.com",
        "serverCount": 6
    }, {
        "name": "Scout",
        "totalReqCount": -1,
        "failedReqCount": -1,
        "slowReqCount": -1,
        "histogram": {},
        "unknownSourceHistogram": {},
        "serverList": Array,
        "avgLatency": -1.0,
        "owner": "",
        "serverCount": -1
    }, {
        "name": "Danica",
        "roleType": "TOMCAT",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["seller-prod02-mp"],
        "avgLatency": 69.0,
        "owner": "ocg@kyle.com",
        "serverCount": 1
    }, {
        "name": "Pearl",
        "roleType": "TOMCAT",
        "totalReqCount": 4,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 4, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 4, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Pearl-web-prod02-mp", "Pearl-web-prod01-mp"],
        "avgLatency": 175.75,
        "owner": "kxiao@kyle.com",
        "serverCount": 2
    }, {
        "name": "Eric",
        "roleType": "TOMCAT",
        "totalReqCount": 17712,
        "failedReqCount": 6,
        "slowReqCount": 0,
        "histogram": {"1s": 17697, "3s": 9, "5s": 0, "Error": 6, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Eric-prod19-mp", "Eric-prod17-mp", "Eric-prod21-mp", "Eric-prod15-mp", "Eric-prod23-mp", "Eric-prod13-mp", "Eric-prod25-mp", "Eric-prod09-mp", "Eric-prod28-mp", "Eric-prod03-mp", "Eric-prod11-mp", "Eric-prod05-mp", "Eric-prod30-mp", "Eric-prod07-mp", "Eric-prod01-mp", "Eric-prod18-mp", "Eric-prod20-mp", "Eric-prod16-mp", "Eric-prod22-mp", "Eric-prod14-mp", "Eric-prod24-mp", "Eric-prod12-mp", "Eric-prod26-mp", "Eric-prod29-mp", "Eric-prod04-mp", "Eric-prod10-mp", "Eric-prod27-mp", "Eric-prod08-mp", "Eric-prod06-mp", "Eric-prod02-mp"],
        "avgLatency": 15.51,
        "owner": "sinyj@kyle.com",
        "serverCount": 30
    }, {
        "name": "Gabriel",
        "roleType": "TOMCAT",
        "totalReqCount": 151,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 139, "3s": 12, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {"1s": 134, "3s": 12, "5s": 0, "Error": 0, "Slow": 0},
        "serverList": ["Gabriel-prod01-mp"],
        "avgLatency": 340.44,
        "owner": "stan@kyle.com",
        "serverCount": 1
    }, {
        "name": "Thomas",
        "roleType": "TOMCAT",
        "totalReqCount": 9815,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 9815, "3s": 0, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Thomas01", "Thomas03", "Thomas02", "Thomas05", "Thomas04", "Thomas07", "Thomas06", "Thomas08", "Thomas-prod00-mv"],
        "avgLatency": 9.92,
        "owner": "softrain40@kyle.com",
        "serverCount": 9
    }, {
        "name": "Joseph",
        "roleType": "TOMCAT",
        "totalReqCount": 4653,
        "failedReqCount": 1,
        "slowReqCount": 2,
        "histogram": {"1s": 4631, "3s": 18, "5s": 2, "Error": 1, "Slow": 1},
        "unknownSourceHistogram": {},
        "serverList": ["Joseph-web-prod04-mp", "Joseph-web-prod03-mp", "Joseph-web-prod01-mp", "Joseph-web-prod02-mp"],
        "avgLatency": 41.36,
        "owner": "dave.lee@kyle.com",
        "serverCount": 4
    }, {
        "name": "Jeffrey",
        "roleType": "TOMCAT",
        "totalReqCount": 15116,
        "failedReqCount": 1,
        "slowReqCount": 0,
        "histogram": {"1s": 15115, "3s": 0, "5s": 0, "Error": 1, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Jeffrey06", "Jeffrey07", "Jeffrey08", "Jeffrey09", "Jeffrey02", "Jeffrey13", "Jeffrey03", "Jeffrey14", "Jeffrey04", "Jeffrey05", "Jeffrey10", "Jeffrey11", "Jeffrey12"],
        "avgLatency": 13.67,
        "owner": "cloude.lee@kyle.com",
        "serverCount": 13
    }, {
        "name": "Nicholas",
        "roleType": "TOMCAT",
        "totalReqCount": 81781,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 81773, "3s": 8, "5s": 0, "Error": 0, "Slow": 0},
        "unknownSourceHistogram": {},
        "serverList": ["Nicholas-prod22-mp", "Nicholas-prod03-mp", "Nicholas-prod04-mp", "Nicholas-prod02-mp", "Nicholas-prod01-mp", "Nicholas-prod20-mp", "Nicholas-prod05-mp", "Nicholas-prod08-mp", "Nicholas-prod21-mp", "Nicholas-prod06-mp", "Nicholas-prod07-mp", "Nicholas-prod23-mp", "Nicholas-prod24-mp", "Nicholas-prod09-mp", "Nicholas-prod10-mp", "Nicholas-prod11-mp", "Nicholas-prod13-mp", "Nicholas-prod12-mp", "Nicholas-prod18-mp", "Nicholas-prod19-mp", "Nicholas-prod14-mp", "Nicholas-prod17-mp", "Nicholas-prod15-mp", "Nicholas-prod16-mp"],
        "avgLatency": 17.24,
        "owner": "ultrakain@kyle.com",
        "serverCount": 24
    }],
    "linkData": [{
        "source": "Nathan",
        "target": "William",
        "totalReqCount": 2,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 2, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Shannon",
        "target": "Joseph-review",
        "totalReqCount": 117,
        "failedReqCount": 50,
        "slowReqCount": 0,
        "histogram": {"1s": 117, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Joseph",
        "target": "Taylor",
        "totalReqCount": 110,
        "failedReqCount": 10,
        "slowReqCount": 0,
        "histogram": {"1s": 110, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Anthony",
        "target": "Joseph-review",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Thomas",
        "totalReqCount": 2030,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 2030, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Gino",
        "target": "David",
        "totalReqCount": 12,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 12, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Jeffrey",
        "target": "Michael",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Michael",
        "target": "Jeffrey",
        "totalReqCount": 2,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 2, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Joseph",
        "target": "Shane",
        "totalReqCount": 6,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 5, "3s": 1, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Steve",
        "target": "Eric",
        "totalReqCount": 1752,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1752, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Eric",
        "totalReqCount": 8401,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 8401, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Andrew",
        "target": "Devin",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Mark",
        "target": "Cody",
        "totalReqCount": 29,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 29, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Mark",
        "target": "Paul",
        "totalReqCount": 1093,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1093, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Mark",
        "totalReqCount": 1005,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1005, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Anthony",
        "target": "Nicholas",
        "totalReqCount": 33,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 33, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Mark",
        "target": "Robert",
        "totalReqCount": 206,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 206, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Cody",
        "totalReqCount": 4,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 4, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Christopher",
        "target": "Evan",
        "totalReqCount": 270,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 270, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Joe",
        "target": "Charles",
        "totalReqCount": 88,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 88, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Eric",
        "target": "Nicholas",
        "totalReqCount": 17,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 17, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Nicholas",
        "target": "Eric",
        "totalReqCount": 464,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 464, "3s": 0, "5s": 0, "Error": 0, "Slow": 300}
    }, {
        "source": "Ryan",
        "target": "Jeffrey",
        "totalReqCount": 86,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 86, "3s": 0, "5s": 0, "Error": 100, "Slow": 0}
    }, {
        "source": "Mark",
        "target": "Sean",
        "totalReqCount": 1295,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1295, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Christopher",
        "target": "Michael",
        "totalReqCount": 714,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 713, "3s": 1, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Charles",
        "totalReqCount": 85,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 85, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Sean",
        "totalReqCount": 7846,
        "failedReqCount": 1,
        "slowReqCount": 0,
        "histogram": {"1s": 7845, "3s": 0, "5s": 0, "Error": 1, "Slow": 0}
    }, {
        "source": "Bryan",
        "target": "Pete",
        "totalReqCount": 1010,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1008, "3s": 2, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Evan",
        "totalReqCount": 686,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 686, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Steve",
        "target": "Ken",
        "totalReqCount": 1003,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1003, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Joseph",
        "target": "Pete",
        "totalReqCount": 1177,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1177, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Taylor",
        "target": "Nicholas",
        "totalReqCount": 1126,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1126, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Joseph",
        "target": "Gabriel",
        "totalReqCount": 5,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 5, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Taylor",
        "target": "Michael",
        "totalReqCount": 55,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 55, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Ken",
        "totalReqCount": 2449,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 2449, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Christopher",
        "target": "Ken",
        "totalReqCount": 431,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 431, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Christopher",
        "target": "Matthew",
        "totalReqCount": 422,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 422, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Shannon",
        "target": "Taylor",
        "totalReqCount": 1253,
        "failedReqCount": 10,
        "slowReqCount": 0,
        "histogram": {"1s": 1242, "3s": 1, "5s": 0, "Error": 10, "Slow": 0}
    }, {
        "source": "Eric",
        "target": "Gregory-api",
        "totalReqCount": 86,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 86, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Aaron",
        "totalReqCount": 881,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 881, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Joe",
        "target": "Nicholas",
        "totalReqCount": 10,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 10, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Thomas",
        "target": "Nicholas",
        "totalReqCount": 3,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 3, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Steve",
        "target": "Thomas",
        "totalReqCount": 2278,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 2278, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Steve",
        "target": "Matthew",
        "totalReqCount": 800,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 800, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Timothy",
        "target": "Nicholas",
        "totalReqCount": 3646,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 3646, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Steve",
        "target": "Jeffrey",
        "totalReqCount": 115,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 115, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Joseph",
        "target": "Jeffrey",
        "totalReqCount": 12,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 12, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Christopher",
        "target": "Stephen",
        "totalReqCount": 56,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 56, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Kelly",
        "totalReqCount": 526,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 526, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Erin",
        "target": "Eric",
        "totalReqCount": 41,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 41, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Christopher",
        "target": "Joseph-review",
        "totalReqCount": 924,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 924, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Steve",
        "target": "Timothy",
        "totalReqCount": 2,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 2, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Shannon",
        "target": "Stephen",
        "totalReqCount": 37,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 37, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Anthony",
        "target": "Ryan",
        "totalReqCount": 42,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 42, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Steve",
        "target": "Paul",
        "totalReqCount": 631,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 631, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Justin",
        "target": "Paul",
        "totalReqCount": 209,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 209, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Joseph",
        "target": "George",
        "totalReqCount": 262,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 262, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Ken",
        "totalReqCount": 3796,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 3796, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Justin",
        "target": "Eric",
        "totalReqCount": 229,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 229, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Eric",
        "totalReqCount": 3241,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 3241, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Christopher",
        "target": "Charles",
        "totalReqCount": 861,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 861, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Steve",
        "target": "Joseph-review",
        "totalReqCount": 6622,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 6622, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Erin",
        "target": "Nicholas",
        "totalReqCount": 197,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 197, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Robert",
        "totalReqCount": 569,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 569, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Matthew",
        "target": "Nicholas",
        "totalReqCount": 1649,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1649, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "James",
        "target": "Steve",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Gino",
        "target": "William",
        "totalReqCount": 45,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 45, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Alexander",
        "target": "Nathan",
        "totalReqCount": 219,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 218, "3s": 1, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Chas",
        "target": "Pete",
        "totalReqCount": 2,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 2, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Timothy",
        "totalReqCount": 30,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 30, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Kenneth",
        "target": "Eric",
        "totalReqCount": 23,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 23, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Eric",
        "target": "Kenneth",
        "totalReqCount": 8,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 8, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Mark",
        "target": "Ken",
        "totalReqCount": 1025,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1025, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Stephen",
        "target": "Jeffrey",
        "totalReqCount": 121,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 121, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Jeffrey",
        "target": "Stephen",
        "totalReqCount": 11,
        "failedReqCount": 9,
        "slowReqCount": 0,
        "histogram": {"1s": 2, "3s": 0, "5s": 0, "Error": 9, "Slow": 0}
    }, {
        "source": "Julia",
        "target": "Paul",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Joseph",
        "target": "Eric",
        "totalReqCount": 104,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 104, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Justin",
        "target": "Nicholas",
        "totalReqCount": 2579,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 2579, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Nicholas",
        "target": "Jeffrey",
        "totalReqCount": 8,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 8, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Jeffrey",
        "target": "Nicholas",
        "totalReqCount": 995,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 995, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Cody",
        "totalReqCount": 20,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 20, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Aaron",
        "totalReqCount": 641,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 641, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Julia",
        "target": "Nicholas",
        "totalReqCount": 2,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 2, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ken",
        "target": "Nicholas",
        "totalReqCount": 39,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 39, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Gregory",
        "target": "Eric",
        "totalReqCount": 248,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 248, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Alexander",
        "target": "Chas",
        "totalReqCount": 6,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 6, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Matthew",
        "totalReqCount": 1836,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1836, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Steve",
        "target": "Sean",
        "totalReqCount": 340,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 340, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Steve",
        "target": "Robert",
        "totalReqCount": 502,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 502, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Joe",
        "target": "Taylor",
        "totalReqCount": 19,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 19, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Peter",
        "target": "Pete",
        "totalReqCount": 4,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 4, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Vincent",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Steve",
        "target": "Charles",
        "totalReqCount": 27,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 27, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Andrew",
        "target": "Kelly",
        "totalReqCount": 2,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 2, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Timothy",
        "target": "Paul",
        "totalReqCount": 18,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 18, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Chas",
        "target": "Nathan",
        "totalReqCount": 523,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 523, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Kenneth",
        "target": "Nicholas",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Steve",
        "target": "Nicholas",
        "totalReqCount": 22629,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 22629, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Christopher",
        "target": "Mark",
        "totalReqCount": 117,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 117, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Adam",
        "totalReqCount": 23,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 23, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Steve",
        "target": "Kelly",
        "totalReqCount": 222,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 222, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Joseph-review",
        "totalReqCount": 2619,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 2619, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Shannon",
        "target": "Charles",
        "totalReqCount": 3419,
        "failedReqCount": 1,
        "slowReqCount": 0,
        "histogram": {"1s": 3418, "3s": 0, "5s": 0, "Error": 1, "Slow": 0}
    }, {
        "source": "Mark",
        "target": "Jeffrey",
        "totalReqCount": 966,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 966, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Steve",
        "totalReqCount": 26,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 26, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Christopher",
        "target": "Paul",
        "totalReqCount": 102,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 102, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Joseph-review",
        "totalReqCount": 3991,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 3991, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Paul",
        "totalReqCount": 4646,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 4646, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Mark",
        "target": "Nicholas",
        "totalReqCount": 2975,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 2975, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Matthew",
        "target": "Jeffrey",
        "totalReqCount": 106,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 106, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Steve",
        "target": "Michael",
        "totalReqCount": 41,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 41, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Timothy",
        "target": "Robert",
        "totalReqCount": 303,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 303, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Matthew",
        "target": "Sean",
        "totalReqCount": 1949,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1949, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Paul",
        "target": "Jeffrey",
        "totalReqCount": 19,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 19, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Erin",
        "target": "Paul",
        "totalReqCount": 18,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 18, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Mark",
        "target": "Steve",
        "totalReqCount": 102,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 102, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Steve",
        "target": "Mark",
        "totalReqCount": 204,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 204, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Shannon",
        "target": "Nicholas",
        "totalReqCount": 5531,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 5531, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Mark",
        "totalReqCount": 449,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 449, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Mark",
        "target": "David",
        "totalReqCount": 140,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 140, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Brian",
        "target": "Nathan",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Shannon",
        "target": "Jeffrey",
        "totalReqCount": 3310,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 3310, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Christopher",
        "target": "Robert",
        "totalReqCount": 2104,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 2104, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Christopher",
        "target": "Adam",
        "totalReqCount": 4,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 4, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Timothy",
        "target": "Jeffrey",
        "totalReqCount": 4624,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 4624, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Jeffrey",
        "target": "Timothy",
        "totalReqCount": 6,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 6, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Justin",
        "target": "Andrew",
        "totalReqCount": 58,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 58, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Christopher",
        "target": "Timothy",
        "totalReqCount": 973,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 973, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Timothy",
        "target": "Andrew",
        "totalReqCount": 4,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 4, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Mark",
        "target": "Matthew",
        "totalReqCount": 8,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 8, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Timothy",
        "target": "Eric",
        "totalReqCount": 75,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 75, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Timothy",
        "target": "Stephen",
        "totalReqCount": 24,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 24, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Sean",
        "totalReqCount": 9366,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 9365, "3s": 1, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Mark",
        "target": "Eric",
        "totalReqCount": 404,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 404, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Michael",
        "totalReqCount": 56,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 56, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Thomas",
        "totalReqCount": 4368,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 4368, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "John",
        "target": "Nicholas",
        "totalReqCount": 2,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 2, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Joseph",
        "target": "Michael",
        "totalReqCount": 127,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 127, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Stephen",
        "target": "Nicholas",
        "totalReqCount": 127,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 127, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Anthony",
        "target": "Aaron",
        "totalReqCount": 4,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 4, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Timothy",
        "target": "Charles",
        "totalReqCount": 44,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 44, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Steve",
        "target": "Aaron",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Jeffrey",
        "totalReqCount": 12,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 12, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Jeffrey",
        "target": "Charles",
        "totalReqCount": 3889,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 3889, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Joe",
        "target": "Jeffrey",
        "totalReqCount": 21,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 21, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Thomas",
        "target": "Sean",
        "totalReqCount": 5,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 5, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Joe",
        "target": "Timothy",
        "totalReqCount": 3,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 3, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Erin",
        "target": "David",
        "totalReqCount": 2,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 2, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Andrew",
        "target": "Michael",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Paul",
        "totalReqCount": 10549,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 10548, "3s": 1, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Andrew",
        "target": "Nicholas",
        "totalReqCount": 1,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 1, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Michael",
        "totalReqCount": 120,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 119, "3s": 1, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Christopher",
        "target": "David",
        "totalReqCount": 67,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 67, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Kelly",
        "totalReqCount": 181,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 181, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Paul",
        "target": "Nicholas",
        "totalReqCount": 6908,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 6908, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Eric",
        "target": "Andrew",
        "totalReqCount": 3,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 3, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Christopher",
        "target": "Nicholas",
        "totalReqCount": 331,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 331, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Christopher",
        "target": "Jeffrey",
        "totalReqCount": 39,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 39, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Matthew",
        "totalReqCount": 3868,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 3867, "3s": 1, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Christopher",
        "target": "Andrew",
        "totalReqCount": 70,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 68, "3s": 2, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Shannon",
        "target": "Michael",
        "totalReqCount": 667,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 667, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Charles",
        "totalReqCount": 25,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 25, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "David",
        "target": "Nicholas",
        "totalReqCount": 12575,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 12573, "3s": 2, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Alexander",
        "target": "Richard",
        "totalReqCount": 7,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 7, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Jeffrey",
        "target": "Robert",
        "totalReqCount": 2,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 2, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "James",
        "target": "David",
        "totalReqCount": 2,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 2, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Ryan",
        "target": "Nicholas",
        "totalReqCount": 18392,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 18391, "3s": 1, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Anthony",
        "target": "Robert",
        "totalReqCount": 4,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 4, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }, {
        "source": "Justin",
        "target": "William",
        "totalReqCount": 590,
        "failedReqCount": 0,
        "slowReqCount": 0,
        "histogram": {"1s": 590, "3s": 0, "5s": 0, "Error": 0, "Slow": 0}
    }]
};
