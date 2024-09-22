class UserDataConfig {
    private language: any;
    private rank: any;
    private city: any;
    private country: any;

    constructor() {
        this.language = null;
        this.rank = null;
        this.city = null;
        this.country = null;
    }

    getLanguage() {
        return this.language;
    }

    getRank() {
        return this.rank;
    }

    getCity() {
        return this.city;
    }

    getCountry() {
        return this.country;
    }

    setLanguage(language: any) {
        this.language = language;
    }

    setRank(rank: any) {
        this.rank = rank;
    }

    setCity(city: any) {
        this.city = city;
    }

    setCountry(country: any) {
        this.country = country;
    }
}

export { UserDataConfig };
