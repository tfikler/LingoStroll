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
                        new LandmarkConfig("Seville Cathedral", 37.3860686, -5.9927638, "Discuss religion in Spanish.", [{lat: 37.3861041, lng: -5.9923071}]
                            ,1),
                        new LandmarkConfig("Alcázar of Seville", 37.3831000, -5.9903000, "Talk about history in Spanish.",[{lat: 37.3861041, lng: -5.9923071}]
                            ,2),
                        new LandmarkConfig("Plaza de España", 37.3772000, -5.9869000, "Discuss culture in Spanish.",[{lat: 37.3861041, lng: -5.9923071}]
                            , 3),
                    ]),
                ]),
                // new CountryConfig("Mexico", [
                //     new CityConfig("Mexico City", [
                //         new LandmarkConfig("Zócalo", "19.4326,-99.1332, "Discuss politics in Spanish.", 1),
                //         new LandmarkConfig("Chapultepec Park", "19.4204,-99.1815", "Talk about nature in Spanish.", 2),
                //         new LandmarkConfig("Frida Kahlo Museum", "19.3556,-99.1625", "Discuss art in Spanish.", 3),
                //     ]),
                //     new CityConfig("Guadalajara", [
                //         new LandmarkConfig("Guadalajara Cathedral", "20.6775,-103.3476", "Discuss religion in Spanish.", 1),
                //         new LandmarkConfig("Hospicio Cabañas", "20.6736,-103.3390", "Talk about culture in Spanish.", 2),
                //         new LandmarkConfig("Tequila Express", "20.6775,-103.3476", "Order drinks in Spanish.", 3),
                //     ]),
                //     new CityConfig("Cancún", [
                //         new LandmarkConfig("Chichen Itza", "20.6843,-88.5678", "Discuss history in Spanish.", 1),
                //         new LandmarkConfig("Cancún Beaches", "21.1619,-86.8515", "Talk about leisure activities in Spanish.", 2),
                //         new LandmarkConfig("Cenote Ik Kil", "20.6665,-88.5505", "Discuss nature in Spanish.", 3),
                //     ]),
                // ]),
                // new CountryConfig("Argentina", [
                //     new CityConfig("Buenos Aires", [
                //         new LandmarkConfig("La Boca", "34.6345,-58.3630", "Discuss art in Spanish.", 1),
                //         new LandmarkConfig("Teatro Colón", "34.6010,-58.3826", "Talk about music in Spanish.", 2),
                //         new LandmarkConfig("Casa Rosada", "34.6081,-58.3703", "Discuss politics in Spanish.", 3),
                //     ]),
                //     new CityConfig("Mendoza", [
                //         new LandmarkConfig("Aconcagua Mountain", "32.6532,-70.0109", "Talk about nature in Spanish.", 1),
                //         new LandmarkConfig("Wine Tours", "32.8895,-68.8458", "Discuss wine in Spanish.", 2),
                //         new LandmarkConfig("Parque General San Martín", "32.8893,-68.8766", "Discuss leisure in Spanish.", 3),
                //     ]),
                //     new CityConfig("Córdoba", [
                //         new LandmarkConfig("Manzana Jesuítica", "31.4165,-64.1830", "Discuss history in Spanish.", 1),
                //         new LandmarkConfig("Catedral de Córdoba", "31.4167,-64.1836", "Talk about religion in Spanish.", 2),
                //         new LandmarkConfig("Sarmiento Park", "31.4250,-64.1836", "Discuss nature in Spanish.", 3),
                //     ]),
                // ]),
            ]),
            english: new LanguageConfig("English", [
                new CountryConfig("United States", [
                    new CityConfig("New York", [
                        new LandmarkConfig("Statue of Liberty", 37.3863048,-5.9922559, "Discuss history in English.", [{lat: 37.3861041, lng: -5.9923071}]
                            ,1),
                        new LandmarkConfig("Central Park", 37.3863048,-5.9922559, "Talk about nature in English.", [{lat: 37.3861041, lng: -5.9923071}]
                            ,2),
                        new LandmarkConfig("Times Square", 37.3863048,-5.9922559, "Order tickets in English.", [{lat: 37.3861041, lng: -5.9923071}]
                            ,3),
                    ]),
                    new CityConfig("Los Angeles", [
                        new LandmarkConfig("Hollywood Sign", 37.3863048,-5.9922559, "Discuss movies in English.", [{lat: 37.3861041, lng: -5.9923071}]
                            ,1),
                        new LandmarkConfig("Santa Monica Pier", 37.3863048,-5.9922559, "Talk about leisure in English.", [{lat: 37.3861041, lng: -5.9923071}]
                            ,2),
                        new LandmarkConfig("Getty Center", 37.3863048,-5.9922559, "Discuss art in English.",[{lat: 37.3861041, lng: -5.9923071}]
                            , 3),
                    ]),
                    new CityConfig("Chicago", [
                        new LandmarkConfig("Millennium Park", 37.3863048,-5.9922559, "Discuss art in English.", [{lat: 37.3861041, lng: -5.9923071}]
                            ,1),
                        new LandmarkConfig("Navy Pier", 37.3863048,-5.9922559, "Talk about leisure in English.", [{lat: 37.3861041, lng: -5.9923071}]
                            ,2),
                        new LandmarkConfig("Willis Tower", 37.3863048,-5.9922559, "Discuss architecture in English.", [{lat: 37.3861041, lng: -5.9923071}]
                            ,3),
                    ]),
                ]),
            //     new CountryConfig("United Kingdom", [
            //         new CityConfig("London", [
            //             new LandmarkConfig("Big Ben", "51.5007,-0.1246", "Discuss time in English.", 1),
            //             new LandmarkConfig("Tower of London", "51.5081,-0.0759", "Talk about history in English.", 2),
            //             new LandmarkConfig("Buckingham Palace", "51.5014,-0.1419", "Discuss royalty in English.", 3),
            //         ]),
            //         new CityConfig("Edinburgh", [
            //             new LandmarkConfig("Edinburgh Castle", "55.9486,-3.1999", "Discuss history in English.", 1),
            //             new LandmarkConfig("Royal Mile", "55.9496,-3.1905", "Talk about culture in English.", 2),
            //             new LandmarkConfig("Arthur's Seat", "55.9442,-3.1618", "Discuss nature in English.", 3),
            //         ]),
            //         new CityConfig("Manchester", [
            //             new LandmarkConfig("Old Trafford", "53.4631,-2.2913", "Discuss sports in English.", 1),
            //             new LandmarkConfig("Science and Industry Museum", "53.4760,-2.2540", "Talk about science in English.", 2),
            //             new LandmarkConfig("Manchester Art Gallery", "53.4798,-2.2414", "Discuss art in English.", 3),
            //         ]),
            //     ]),
            //     new CountryConfig("Australia", [
            //         new CityConfig("Sydney", [
            //             new LandmarkConfig("Sydney Opera House", "33.8568,151.2153", "Discuss music in English.", 1),
            //             new LandmarkConfig("Sydney Harbour Bridge", "33.8523,151.2108", "Talk about architecture in English.", 2),
            //             new LandmarkConfig("Bondi Beach", "33.8908,151.2743", "Discuss leisure activities in English.", 3),
            //         ]),
            //         new CityConfig("Melbourne", [
            //             new LandmarkConfig("Federation Square", "37.8179,144.9691", "Discuss culture in English.", 1),
            //             new LandmarkConfig("Royal Botanic Gardens", "37.8304,144.9796", "Talk about nature in English.", 2),
            //             new LandmarkConfig("Queen Victoria Market", "37.8076,144.9568", "Order food in English.", 3),
            //         ]),
            //         new CityConfig("Brisbane", [
            //             new LandmarkConfig("South Bank Parklands", "27.4811,153.0235", "Discuss leisure in English.", 1),
            //             new LandmarkConfig("Story Bridge", "27.4639,153.0351", "Talk about history in English.", 2),
            //             new LandmarkConfig("Lone Pine Koala Sanctuary", "27.5277,152.9758", "Discuss animals in English.", 3),
            //         ]),
            //     ]),
            // ]),
            // german: new LanguageConfig("German", [
            //     new CountryConfig("Germany", [
            //         new CityConfig("Berlin", [
            //             new LandmarkConfig("Brandenburg Gate", "52.5163,13.3777", "Discuss history in German.", 1),
            //             new LandmarkConfig("Berlin Wall", "52.5200,13.4094", "Talk about culture in German.", 2),
            //             new LandmarkConfig("Reichstag Building", "52.5186,13.3762", "Discuss politics in German.", 3),
            //         ]),
            //         new CityConfig("Munich", [
            //             new LandmarkConfig("Marienplatz", "48.1374,11.5755", "Discuss architecture in German.", 1),
            //             new LandmarkConfig("English Garden", "48.1610,11.6036", "Talk about nature in German.", 2),
            //             new LandmarkConfig("Nymphenburg Palace", "48.1585,11.5034", "Discuss history in German.", 3),
            //         ]),
            //         new CityConfig("Frankfurt", [
            //             new LandmarkConfig("Römerberg", "50.1106,8.6821", "Discuss history in German.", 1),
            //             new LandmarkConfig("Main Tower", "50.1113,8.6745", "Talk about architecture in German.", 2),
            //             new LandmarkConfig("Städel Museum", "50.1036,8.6724", "Discuss art in German.", 3),
            //         ]),
            //     ]),
            //     new CountryConfig("Austria", [
            //         new CityConfig("Vienna", [
            //             new LandmarkConfig("Schönbrunn Palace", "48.1845,16.3122", "Discuss history in German.", 1),
            //             new LandmarkConfig("St. Stephen's Cathedral", "48.2082,16.3738", "Talk about religion in German.", 2),
            //             new LandmarkConfig("Belvedere Palace", "48.1914,16.3802", "Discuss art in German.", 3),
            //         ]),
            //         new CityConfig("Salzburg", [
            //             new LandmarkConfig("Hohensalzburg Fortress", "47.7956,13.0470", "Discuss history in German.", 1),
            //             new LandmarkConfig("Mirabell Palace", "47.8057,13.0410", "Talk about music in German.", 2),
            //             new LandmarkConfig("Mozart's Birthplace", "47.8132,13.0445", "Discuss music in German.", 3),
            //         ]),
            //         new CityConfig("Innsbruck", [
            //             new LandmarkConfig("Golden Roof", "47.2682,11.3933", "Discuss history in German.", 1),
            //             new LandmarkConfig("Nordkette Cable Car", "47.3066,11.3959", "Talk about nature in German.", 2),
            //             new LandmarkConfig("Ambras Castle", "47.2479,11.4353", "Discuss history in German.", 3),
            //         ]),
            //     ]),
            //     new CountryConfig("Switzerland", [
            //         new CityConfig("Zurich", [
            //             new LandmarkConfig("Lake Zurich", "47.3667,8.5500", "Discuss nature in German.", 1),
            //             new LandmarkConfig("Old Town", "47.3717,8.5423", "Talk about history in German.", 2),
            //             new LandmarkConfig("Uetliberg Mountain", "47.3490,8.4910", "Discuss hiking in German.", 3),
            //         ]),
            //         new CityConfig("Geneva", [
            //             new LandmarkConfig("Jet d'Eau", "46.2074,6.1561", "Discuss engineering in German.", 1),
            //             new LandmarkConfig("Lake Geneva", "46.2100,6.1538", "Talk about nature in German.", 2),
            //             new LandmarkConfig("Palace of Nations", "46.2266,6.1400", "Discuss politics in German.", 3),
            //         ]),
            //         new CityConfig("Basel", [
            //             new LandmarkConfig("Basel Minster", "47.5566,7.5906", "Discuss religion in German.", 1),
            //             new LandmarkConfig("Tinguely Fountain", "47.5537,7.5931", "Talk about art in German.", 2),
            //             new LandmarkConfig("Kunstmuseum Basel", "47.5562,7.5957", "Discuss art in German.", 3),
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
