//https://developers.google.com/maps/documentation/javascript/markers?hl=ru

let map;

export async function initMap() {

    const position = { lat: 50.5050, lng: 30.45 };

    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        zoom: 16,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

     let marker = new google.maps.Marker({
        position: position,
        title:"It`s our company!"
    });
    marker.setMap(map);
}

initMap()