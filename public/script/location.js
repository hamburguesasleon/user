//Mapa

function iniciarMap(){
    var coord = {lat: 18.852879,lng: -97.063693};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 16,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}












































































