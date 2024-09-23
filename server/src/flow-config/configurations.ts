// config/flowConfig.ts

export class FlowConfig {
    public ranks: { [key: number]: string };
    public languages: { [key: string]: LanguageConfig };

    constructor() {
        this.ranks = {
            1: "easy",
            2: "medium",
            3: "hard",
        };

        this.languages = {
            spanish: new LanguageConfig("Spanish", [
                new CountryConfig("Spain", [
                    // new CityConfig("Barcelona", [
                    //     new LandmarkConfig("La Sagrada Familia", 41.4036000, 2.1744000, "Discuss architecture in Spanish.", 1),
                    //     new LandmarkConfig("Park Güell", 41.4145000, 2.1527000, "Talk about art in Spanish.", 2),
                    //     new LandmarkConfig("La Rambla", 41.3809000, 2.1730000, "Order tapas in Spanish.", 3),
                    // ]),
                    // new CityConfig("Madrid", [
                    //     new LandmarkConfig("Prado Museum", 40.4138000, -3.6921000, "Discuss famous paintings in Spanish.", 1),
                    //     new LandmarkConfig("Retiro Park", 40.4153000, -3.6846000, "Talk about nature in Spanish.", 2),
                    //     new LandmarkConfig("Plaza Mayor", 40.4155000, -3.7074000, "Order food in Spanish.", 3),
                    // ]),
                    new CityConfig("Seville", [
                        new LandmarkConfig("Seville Cathedral", 37.3860686, -5.9927638, "Discuss religion in Spanish.", [{lat: 37.3861041, lng: -5.9923071}, {
                                lat:37.3852044,
                                lng:-5.993113

                                
                            },{lat: 37.3853863,lng:-5.9930006},{lat:37.385257,lng:-5.9938882}]
                            ,1),
                        new LandmarkConfig("Alcázar of Seville", 37.3863862, -5.992497, "Talk about history in Spanish.",[{lat: 37.3861041, lng: -5.9923071},{lat:37.3836432,lng:-5.9913286},{lat:37.3837437,lng:-5.991077}]
                            ,2),
                        new LandmarkConfig("Plaza de España", 37.3772000, -5.9869000, "Discuss culture in Spanish.",[{lat: 37.3861041, lng: -5.9923071},{lat:37.3768502,lng:-5.9899179}, {lat:37.374153,lng:-5.988111}]
                            , 3),
                    ]),
                ]),
                // new CountryConfig("Mexico", [
                //     new CityConfig("Mexico City", [
                //         new LandmarkConfig("Zócalo", "19.4326,-99.1332, "Discuss politics in Spanish.", [{lat:19.4344666, lng:-99.1335738},{lat:19.4338469,lng:-99.1339934},{lat:19.433488,lng:-99.1325279}],1),
                //         new LandmarkConfig("Chapultepec Park", "19.4204,-99.1815", "Talk about nature in Spanish.",[{lat:19.4213936,lng:-99.1875799},{lat:19.4211999,lng:-99.1893298},{lat:19.4185003,lng:-99.1857827}], 2),
                //         new LandmarkConfig("Frida Kahlo Museum", "19.3556,-99.1625", "Discuss art in Spanish.",[{lat:19.3551665,lng:-99.1623979},{lat:19.3552573,lng:-99.1624538},{lat:19.3551772,lng:-99.1624889}], 3),
                //     ]),
                //     new CityConfig("Guadalajara", [
                //         new LandmarkConfig("Guadalajara Cathedral", "20.6775,-103.3476", "Discuss religion in Spanish.",[{lat:20.6765812,lng:-103.3473802},{lat:20.6770771,lng:-103.3475172},{lat:20.677138,lng:-103.3465765}], 1),   SECOND POINT NEED ADJUSTING
                //         new LandmarkConfig("Hospicio Cabañas", "20.6736,-103.3390", "Talk about culture in Spanish.",[{lat:20.6769149,lng:-103.3373396},{lat:20.6769251,lng:-103.337405},{lat:20.6770929,lng:-103.3375559}], 2),
                //         new LandmarkConfig("Tequila Express", "20.6775,-103.3476", "Order drinks in Spanish.",[{lat:20.678812,lng:-103.3482312},{lat:20.6799653,lng:-103.3483952},{lat:20.6796956,-103.3476674}], 3), HERE I TRIED TO FIND FOOD PLACES
                //     ]),
                //     new CityConfig("Cancún", [ CANT FIND IT ON THE MAP
                //         new LandmarkConfig("Chichen Itza", "20.6843,-88.5678", "Discuss history in Spanish.", 1),
                //         new LandmarkConfig("Cancún Beaches", "21.1619,-86.8515", "Talk about leisure activities in Spanish.", 2),
                //         new LandmarkConfig("Cenote Ik Kil", "20.6665,-88.5505", "Discuss nature in Spanish.", 3),
                //     ]),
                // ]),
                // new CountryConfig("Argentina", [
                //     new CityConfig("Buenos Aires", [
                //         new LandmarkConfig("La Boca", "34.6345,-58.3630", "Discuss art in Spanish.",[{lat:-34.6397449,lng:-58.3627272},{lat:-34.6397115,lng:-58.3626819},{lat:-34.6394048,lng:-58.3623243}], 1),
                //         new LandmarkConfig("Teatro Colón", "34.6010,-58.3826", "Talk about music in Spanish.",[{lat:-34.6013051,lng:-58.3838006},{lat:-34.6009902,lng:-58.3837343},{lat:-34.6011665,lng:-58.3836859}], 2),
                //         new LandmarkConfig("Casa Rosada", "34.6081,-58.3703", "Discuss politics in Spanish.",[{lat:-34.6079611,lng:-58.3701711},{lat:-34.6077941,lng:-58.3702839},{lat:-34.6077878,lng:-58.3702301}], 3),
                //     ]),
                //     new CityConfig("Mendoza", [
                //         new LandmarkConfig("Aconcagua Mountain", "32.6532,-70.0109", "Talk about nature in Spanish.", 1), THERE IN NOTHING IN SIGHT
                //         new LandmarkConfig("Wine Tours", "32.8895,-68.8458", "Discuss wine in Spanish.", 2),THERE ISN'T A SPECIFIC PLACE
                //         new LandmarkConfig("Parque General San Martín", "32.8893,-68.8766", "Discuss leisure in Spanish.",[{lat:-32.8862665,lng:-68.8632225},{lat:-32.8886602,lng:-68.8677923},{lat:-32.8891463,lng:-68.866457}],3),
                //     ]),
                //     new CityConfig("Córdoba", [
                //         new LandmarkConfig("Manzana Jesuítica", "31.4165,-64.1830", "Discuss history in Spanish.",[{lat:-31.4191565,lng:-64.1868567},{lat:-31.4188247,lng:-64.1866648},{lat:-31.4173573,lng:-64.1876385}], 1),
                //         new LandmarkConfig("Catedral de Córdoba", "31.4167,-64.1836", "Talk about religion in Spanish.",[{lat:-31.4169178,lng:-64.1843703},{lat:-31.4159796,lng:-64.1840076},{lat:-31.4177065,lng:-64.1847447}], 2),
                //         new LandmarkConfig("Sarmiento Park", "31.4250,-64.1836", "Discuss nature in Spanish.",[{lat:-31.4321116,lng:-64.1794787},{lat:-31.4320498,lng:-64.1803882},{lat:-31.4307189,lng:-64.1806566}], 3),
                //     ]),
                // ]),
            ]),
            english: new LanguageConfig("English", [
                new CountryConfig("United States", [
                    new CityConfig("New York", [
                        new LandmarkConfig("Statue of Liberty", 37.3863048,-5.9922559, "Discuss history in English.", [{lat: 37.3861041, lng: -5.9923071},{lat:40.6885812,lng:-74.0443608},{lat:40.689451,lng:-74.0437805},{lat:40.6902145,lng:-74.0440363}],1),
                        new LandmarkConfig("Central Park", 37.3863048,-5.9922559, "Talk about nature in English.", [{lat: 37.3861041, lng: -5.9923071},{lat:40.7825341,lng:-73.9666892},{lat:40.7789784,lng:-73.9667977},{lat:40.779712,lng:-73.9654051}],2),
                        new LandmarkConfig("Times Square", 37.3863048,-5.9922559, "Order tickets in English.", [{lat: 37.3861041, lng: -5.9923071},{lat:40.7580037,lng:-73.9855675},{lat:40.7589543,lng:-73.9848462},{lat:40.7600632,lng:-73.984635}],3),
                    ]),
                    new CityConfig("Los Angeles", [
                        new LandmarkConfig("Hollywood Sign", 37.3863048,-5.9922559, "Discuss movies in English.", [{lat: 37.3861041, lng: -5.9923071}],1),
                        new LandmarkConfig("Santa Monica Pier", 37.3863048,-5.9922559, "Talk about leisure in English.", [{lat: 37.3861041, lng: -5.9923071},{lat:34.0074091,lng:-118.499913},{lat:34.0086084,lng:-118.4981329}]
                            ,2),
                        new LandmarkConfig("Getty Center", 37.3863048,-5.9922559, "Discuss art in English.",[{lat: 37.3861041, lng: -5.9923071},{lat:34.0771738,lng:-118.4745906},{lat:34.0774475,lng:-118.4740309}], 3),
                    ]),
                    new CityConfig("Chicago", [
                        new LandmarkConfig("Millennium Park", 37.3863048,-5.9922559, "Discuss art in English.", [{lat: 37.3861041, lng: -5.9923071},{lat:41.8821734,lng:-87.6223466},{lat:41.8830089,lng:-87.622481},{lat:41.8826839,lng:-87.6233231}],1),
                        new LandmarkConfig("Navy Pier", 37.3863048,-5.9922559, "Talk about leisure in English.", [{lat: 37.3861041, lng: -5.9923071},{lat:41.8915427,lng:-87.6099951},{lat:41.8910518,lng:-87.6099854}],2),
                        new LandmarkConfig("Willis Tower", 37.3863048,-5.9922559, "Discuss architecture in English.", [{lat: 37.3861041, lng: -5.9923071},{lat:41.879015,lng:-87.6352567},{lat:41.8806501,lng:-87.6353069}],3),
                    ]),
                ]),
            //     new CountryConfig("United Kingdom", [
            //         new CityConfig("London", [
            //             new LandmarkConfig("Big Ben", "51.5007,-0.1246", "Discuss time in English.", [{lat:51.5008358,lng:-0.1245948},{lat:1.5015699,lng:-0.1262513},{lat:51.5002058,lng:-0.1269903}],1),
            //             new LandmarkConfig("Tower of London", "51.5081,-0.0759", "Talk about history in English.",[{lat:51.5074153,lng:-0.0758562},{lat:51.5075337,lng:-0.0762557},{lat:51.5075886,lng:-0.0767428}], 2),
            //             new LandmarkConfig("Buckingham Palace", "51.5014,-0.1419", "Discuss royalty in English.",[{lat:51.500847,lng:-0.1431261},{lat:51.5006645,lng:-0.1430556},{lat:51.5007951,lng:-0.1433557}], 3),
            //         ]),
            //         new CityConfig("Edinburgh", [
            //             new LandmarkConfig("Edinburgh Castle", "55.9486,-3.1999", "Discuss history in English.",[{lat:55.9486476,lng:-3.1999053},{lat:55.9483967,lng:-3.2007077},{lat:55.9490455,lng:-3.2004325}], 1),
            //             new LandmarkConfig("Royal Mile", "55.9496,-3.1905", "Talk about culture in English.",[{lat:55.9502374,lng:-3.1875606},{lat:55.9503036,lng:-3.1864555},{lat:55.9505126,lng:-3.1855645}], 2),
            //             new LandmarkConfig("Arthur's Seat", "55.9442,-3.1618", "Discuss nature in English.",[{lat:55.9440712,lng:-3.1618439},{lat:55.9442283,lng:-3.1617329},{lat:55.9442868,lng:-3.1604368}], 3),
            //         ]),
            //         new CityConfig("Manchester", [
            //             new LandmarkConfig("Old Trafford", "53.4631,-2.2913", "Discuss sports in English.",[{lat:53.4629401,lng:-2.2890147},{lat:53.4632293,lng:-2.2934553},{lat:53.464488,lng:-2.29148}], 1),
            //             new LandmarkConfig("Science and Industry Museum", "53.4760,-2.2540", "Talk about science in English.",[{lat:53.4770695,lng:-2.2540652},{lat:53.4775076,lng:-2.2538661},{lat:53.4784343,lng:-2.2534239}], 2), THE FIRST POINT RELATES TO THE TOPIC THE OTHER TWO NOT SO MUCH
            //             new LandmarkConfig("Manchester Art Gallery", "53.4798,-2.2414", "Discuss art in English.",[{lat:53.4784444,lng:-2.2417877},{lat:53.4789903,lng:-2.2428665},{lat:53.4786497,lng:-2.2430841}], 3),
            //         ]),
            //     ]),

            //     new CountryConfig("Australia", [
            //         new CityConfig("Sydney", [
            //             new LandmarkConfig("Sydney Opera House", "33.8568,151.2153", "Discuss music in English.",[{lat:-33.8569062,lng:151.2150245},{lat:-33.8569434,lng:151.2148832},{lat:-33.8569104,lng:151.2151407}], 1),
            //             new LandmarkConfig("Sydney Harbour Bridge", "33.8523,151.2108", "Talk about architecture in English.",[{lat:-33.8522772,lng:151.2108858},{lat:-33.8526024,lng:151.2106802},{lat:-33.8533391,lng:151.21022}], 2),
            //             new LandmarkConfig("Bondi Beach", "33.8908,151.2743", "Discuss leisure activities in English.", [{lat:-33.8922338,lng:151.2758229},{lat:-33.8920275,lng:151.2761858},{lat:-33.8916815,lng:151.2768361}],3),
            //         ]),
            //         new CityConfig("Melbourne", [
            //             new LandmarkConfig("Federation Square", "37.8179,144.9691", "Discuss culture in English.",[{lat:-37.8178211,lng:144.9691245},{lat:-37.8180533,lng:144.9686595},{lat:-37.817756,lng:144.9692907}], 1),
            //             new LandmarkConfig("Royal Botanic Gardens", "37.8304,144.9796", "Talk about nature in English.",[{lat:-37.8298547,lng:144.9801436},{lat:-37.8296896,lng:144.979781},{lat:-37.8294374,lng:144.979252}], 2),
            //             new LandmarkConfig("Queen Victoria Market", "37.8076,144.9568", "Order food in English.",[{lat:-37.8080644,lng:144.9577986},{lat:-37.8076712,lng:144.9579038},{lat:-37.8078707,lng:144.9578249}], 3),
            //         ]),
            //         new CityConfig("Brisbane", [
            //             new LandmarkConfig("South Bank Parklands", "27.4811,153.0235", "Discuss leisure in English.",[{lat:-27.4749039,lng:153.0210985},{lat:-27.4752925,lng:153.0215729},{lat:-27.4763767,lng:153.022413}], 1),
            //             new LandmarkConfig("Story Bridge", "27.4639,153.0351", "Talk about history in English.",[{lat:-27.4640828,lng:153.0365139},{lat:-27.4639705,lng:153.0358},{lat:}], 2), THIS VIEW POINT IS FROM A BOAT NOT SURE IF IT'S GOOD
            //             new LandmarkConfig("Lone Pine Koala Sanctuary", "27.5277,152.9758", "Discuss animals in English.", [{lat:-27.5338128,lng:152.9686917},{lat:-27.5337124,lng:152.968364},{lat:-27.5339854,lng:152.9687499}],3),
            //         ]),
            //     ]),
            // ]),
            // german: new LanguageConfig("German", [
            //     new CountryConfig("Germany", [
            //         new CityConfig("Berlin", [
            //             new LandmarkConfig("Brandenburg Gate", "52.5163,13.3777", "Discuss history in German.",[{lat:52.5162225,lng:13.3778401},{lat:52.5161876,lng:13.3782749},{lat:52.5159251,lng:13.3794032}], 1),
            //             new LandmarkConfig("Berlin Wall", "52.5200,13.4094", "Talk about culture in German.",[{lat:52.5353592,lng:13.390303},{lat:52.5358112,lng:13.3914722},{lat:52.535931,lng:13.3916973}], 2),
            //             new LandmarkConfig("Reichstag Building", "52.5186,13.3762", "Discuss politics in German.",[{lat:},{lat:},{lat:}], 3), NOT A GOOD POINT, THERE IS NO PATH TO WALK ON INSIDE THE BUILDING
            //         ]),
            //         new CityConfig("Munich", [
            //             new LandmarkConfig("Marienplatz", "48.1374,11.5755", "Discuss architecture in German.",[{lat:48.1374374,lng:11.5754745},{lat:48.1372711,lng:11.5762492},{lat:48.1368946,lng:11.5767823}], 1),
            //             new LandmarkConfig("English Garden", "48.1610,11.6036", "Talk about nature in German.",[{lat:},{lat:},{lat:}], 2),  NOT A GOOD POINT, THERE IS NO PATH TO WALK ON
            //             new LandmarkConfig("Nymphenburg Palace", "48.1585,11.5034", "Discuss history in German.",[{lat:48.158246,lng:11.502968},{lat:48.1582081,lng:11.5011361},{lat:48.1583364,lng:11.5011131}], 3),
            //         ]),
            //         new CityConfig("Frankfurt", [
            //             new LandmarkConfig("Römerberg", "50.1106,8.6821", "Discuss history in German.",[{lat:49.2843075,lng:8.3959773},{lat:49.2846689,lng:8.396385},{lat:49.2845409,lng:8.3976034}], 1),
            //             new LandmarkConfig("Main Tower", "50.1113,8.6745", "Talk about architecture in German.",[{lat:50.1123564,lng:8.671896},{lat:50.1118788,lng:8.6723315},{lat:50.1119992,lng:8.6732058}], 2),
            //             new LandmarkConfig("Städel Museum", "50.1036,8.6724", "Discuss art in German.",[{lat:50.1031317,lng:8.6741665},{lat:50.1032836,lng:8.6739489},{lat:50.1031229,lng:8.6740108}], 3),
            //         ]),
            //     ]),

            // --------------------UP TO HERE!!!!!!--------------------------------

            //     new CountryConfig("Austria", [
            //         new CityConfig("Vienna", [
            //             new LandmarkConfig("Schönbrunn Palace", "48.1845,16.3122", "Discuss history in German.",[{lat:},{lat:},{lat:}], 1),
            //             new LandmarkConfig("St. Stephen's Cathedral", "48.2082,16.3738", "Talk about religion in German.",[{lat:},{lat:},{lat:}], 2),
            //             new LandmarkConfig("Belvedere Palace", "48.1914,16.3802", "Discuss art in German.",[{lat:},{lat:},{lat:}], 3),
            //         ]),
            //         new CityConfig("Salzburg", [
            //             new LandmarkConfig("Hohensalzburg Fortress", "47.7956,13.0470", "Discuss history in German.",[{lat:},{lat:},{lat:}], 1),
            //             new LandmarkConfig("Mirabell Palace", "47.8057,13.0410", "Talk about music in German.",[{lat:},{lat:},{lat:}], 2),
            //             new LandmarkConfig("Mozart's Birthplace", "47.8132,13.0445", "Discuss music in German.",[{lat:},{lat:},{lat:}], 3),
            //         ]),
            //         new CityConfig("Innsbruck", [
            //             new LandmarkConfig("Golden Roof", "47.2682,11.3933", "Discuss history in German.", [{lat:},{lat:},{lat:}],1),
            //             new LandmarkConfig("Nordkette Cable Car", "47.3066,11.3959", "Talk about nature in German.",[{lat:},{lat:},{lat:}], 2),
            //             new LandmarkConfig("Ambras Castle", "47.2479,11.4353", "Discuss history in German.",[{lat:},{lat:},{lat:}], 3),
            //         ]),
            //     ]),
            //     new CountryConfig("Switzerland", [
            //         new CityConfig("Zurich", [
            //             new LandmarkConfig("Lake Zurich", "47.3667,8.5500", "Discuss nature in German.",[{lat:},{lat:},{lat:}], 1),
            //             new LandmarkConfig("Old Town", "47.3717,8.5423", "Talk about history in German.",[{lat:},{lat:},{lat:}], 2),
            //             new LandmarkConfig("Uetliberg Mountain", "47.3490,8.4910", "Discuss hiking in German.",[{lat:},{lat:},{lat:}], 3),
            //         ]),
            //         new CityConfig("Geneva", [
            //             new LandmarkConfig("Jet d'Eau", "46.2074,6.1561", "Discuss engineering in German.",[{lat:},{lat:},{lat:}], 1),
            //             new LandmarkConfig("Lake Geneva", "46.2100,6.1538", "Talk about nature in German.",[{lat:},{lat:},{lat:}], 2),
            //             new LandmarkConfig("Palace of Nations", "46.2266,6.1400", "Discuss politics in German.",[{lat:},{lat:},{lat:}], 3),
            //         ]),
            //         new CityConfig("Basel", [
            //             new LandmarkConfig("Basel Minster", "47.5566,7.5906", "Discuss religion in German.",[{lat:},{lat:},{lat:}], 1),
            //             new LandmarkConfig("Tinguely Fountain", "47.5537,7.5931", "Talk about art in German.",[{lat:},{lat:},{lat:}], 2),
            //             new LandmarkConfig("Kunstmuseum Basel", "47.5562,7.5957", "Discuss art in German.",[{lat:},{lat:},{lat:}], 3),
            //         ]),
            //     ]),
            ]),
        };
    }

    public getLanguage(languageKey: string): LanguageConfig {
        return this.languages[languageKey.toLowerCase()];
    }

    public getRank(rankKey: number): string {
        return this.ranks[rankKey];
    }
}

export class LanguageConfig {
    public name: string;
    public countries: CountryConfig[];

    constructor(name: string, countries: CountryConfig[]) {
        this.name = name;
        this.countries = countries;
    }
}

export class CountryConfig {
    public name: string;
    public cities: CityConfig[];

    constructor(name: string, cities: CityConfig[]) {
        this.name = name;
        this.cities = cities;
    }
}

export class CityConfig {
    public name: string;
    public landmarks: LandmarkConfig[];

    constructor(name: string, landmarks: LandmarkConfig[]) {
        this.name = name;
        this.landmarks = landmarks;
    }
}

export class LandmarkConfig {
    public name: string;
    public location: { lat: number; lng: number };
    public prompt: string;
    public markerLocations: { lat: number; lng: number }[];
    public rank: number;

    constructor(name: string, lat: number, lng: number, prompt: string, markerLocations: { lat: number; lng: number }[], rank: number) {
        this.name = name;
        this.location = {lat, lng};
        this.prompt = prompt;
        this.markerLocations = markerLocations;
        this.rank = rank;
    }
}
