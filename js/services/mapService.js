export const mapService = {
    getLocs: getLocs,
    saveLocations: saveLocations,
    locations: gLocations
}
var locs = [{ lat: 11.22, lng: 22.11 }]

var gLocations = [{lat:100,lan:23}]
saveLocations()
function saveLocations(){
    saveToStorage('usersLocationDB', gLocations)
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



