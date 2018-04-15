class City {

    constructor(fullName) {
        this._fullName = fullName;
        this._cityName = this.getCityShortName();      // get only the city name (without the country)
        this._mapData = this.getCityMapData();         // get the coords and circle marker color of the city
    }

    // SETTERS
    set fullName(newFullName) {
        this._fullName = newFullName;
    }

    // GETTERS
    get fullName() {
        return this._fullName;
    }

    get cityName() {
        return this._cityName;
    }

    get mapData() {
        return this._mapData;
    }

    // METHODS
    // get only the city name (without the country)
    getCityShortName() {
        let citySplit = this._fullName.split(',');
        return citySplit[0];
    }

    getCityMapData() {
        // define the mapData Object
        const mapData = {
            coords: [],
            circleMarkerColor: ''
        };

        switch (this._cityName) {
            case 'prague':
                mapData.coords = [50.0750689, 14.4350772];
                mapData.circleMarkerColor = 'blue';
                break;
            case 'paris':
                mapData.coords = [48.856614, 2.3522219];
                mapData.circleMarkerColor = 'yellow';
                break;
            case 'london':
                mapData.coords = [51.5073509, -0.1277583];
                mapData.circleMarkerColor = 'green';
                break;
            case 'rome':
                mapData.coords = [41.9027835, 12.4963655];
                mapData.circleMarkerColor = 'magenta';
                break;
            case 'berlin':
                mapData.coords = [52.5200066, 13.404954];
                mapData.circleMarkerColor = 'orange';
                break;
            case 'amsterdam':
                mapData.coords = [52.3702157, 4.8951679];
                mapData.circleMarkerColor = 'cyan';
                break;
            case 'beijing':
                mapData.coords = [39.9041999, 116.4073963];
                mapData.circleMarkerColor = 'brown';
                break;
            case 'tokyo':
                mapData.coords = [35.7090259, 139.7319925];
                mapData.circleMarkerColor = 'lime';
                break;
            case 'cairo':
                mapData.coords = [30.0138323, 31.209572];
                mapData.circleMarkerColor = 'crimson';
                break;
            default:
                mapData.coords = [40.7127753, -74.0059728];         // New York is the default
                mapData.circleMarkerColor = 'red';
                break;
        }
        ;
        return mapData;
    }


}