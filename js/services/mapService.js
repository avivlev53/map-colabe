export const mapService = {
    getLocs: getLocs,
    saveLocations: saveLocations,
    generateLocation: generateLocation,
    getGLlocations: getGLlocations,
    searchLocation: searchLocation,
    removePlace: removePlace,
    moveToPlace: moveToPlace
}
var locs = []

var gLocations = []
generateLocation('hadash',{ lat: 11.22, lng: 22.11 })
generateLocation('baba',{ lat: 7.22, lng: 27.292 })
generateLocation('puki',{ lat: 23.22, lng: 13.20 })

window.gLocations = gLocations;

function removePlace(idx) {
    var placeidx = gLocations.findIndex((currplace)=> currplace.id === idx);
    gLocations.splice(placeidx, 1);
}

function moveToPlace(idx){
    var placeIdx = gLocations.findIndex((currplace)=> currplace.id === idx);
    var location = gLocations[placeIdx];
    return {
        lat: location.lat,
        lng: location.lng
    }
}

function searchLocation(val) {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${val}&key=AIzaSyCs6vBR-47pkKtZnKO24hqOLwzAzyFXMqI`)
        .then(res => res.json())
        .then(resp => resp.results)
        .then(results => results[0].geometry)
        .then(ans => ans.location)
}

saveLocations()
function saveLocations() {
    saveToStorage('usersLocationDB', gLocations)
}

function getGLlocations() {
    return gLocations
}


function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}

function saveToStorage(key, val) {
    var str = JSON.stringify(val);
    localStorage.setItem(key, str)
}
function loadFromStorage(key) {
    var str = localStorage.getItem(key)
    return JSON.parse(str)
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