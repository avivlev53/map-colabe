export const mapService = {
    getLocs: getLocs
}
var locs = [{ lat: 11.22, lng: 22.11 }]

var gLocations = []


function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}


