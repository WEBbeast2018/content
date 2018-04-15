class Weather {

    constructor(temperature, humidity, cloudness, rain, description, icon) {
        //constructor(){
        this._temperature = temperature;
        this._humidity = humidity;
        this._cloudness = cloudness;
        this._rain = rain;
        this._description = description;
        this._icon = icon;
    }

    // SETTERS
    set temperature(newTemperature) {
        this._temperature = newTemperature;
    }

    set humidity(newHumidity) {
        this._humidity = newHumidity;
    }

    set cloudness(newCloudness) {
        this._cloudness = newCloudness;
    }

    set rain(newRain) {
        this._rain = newRain;
    }

    set description(newDescription) {
        this._description = newDescription;
    }

    set icon(newIcon) {
        this._icon = newIcon;
    }

    // GETTERS
    get temperature() {
        return this._temperature;
    }

    get humidity() {
        return this._humidity;
    }

    get cloudness() {
        return this._cloudness;
    }

    get rain() {
        return this._rain;
    }

    get description() {
        return this._description;
    }

    get icon() {
        return this._icon;
    }

}