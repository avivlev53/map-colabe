export const mapService = {
    getLocs: getLocs,
    generateLocation: generateLocation
}
var locs = [{ lat: 11.22, lng: 22.11 }]

var gLocations = [];

window.gLocations = gLocations;

function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}

function generateLocation(name, position) {
    const location = {
        id: makeId(),
        name,
        lat: position.lat,
        lng: position.lng,
        createdAt: Date.now()
    }
    gLocations.push(location);
}

function makeId(length = 4) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}