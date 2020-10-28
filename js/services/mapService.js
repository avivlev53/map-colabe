export const mapService = {
    getLocs: getLocs,
    saveLocations: saveLocations,
    generateLocation: generateLocation,
    getGLlocations: getGLlocations
}
var locs = [{ lat: 11.22, lng: 22.11 }]

var gLocations = [{lat:100,lan:23}]
window.gLocations = gLocations;

function searchLocation(val) {
    return fetch('')
}

saveLocations()
function saveLocations(){
    saveToStorage('usersLocationDB', gLocations)
}

function getGLlocations(){
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