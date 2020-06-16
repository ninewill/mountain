
$('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});

function initMap() {
    var map;
    var snakeMountain = { lat: 22.9068049, lng: 120.6956238 };

    map = new google.maps.Map(document.getElementById("map"), {

        //預設縮放遠近
        zoom: 14,
        //緯度,經度
        center: snakeMountain,

        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true,
        mapTypeControl: true,

        //控制縮放平移
        // gestureHandling: 'cooperative',

        //更改成下拉選項
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },

        //地圖類型
        mapTypeId: 'terrain',
        // mapTypeId: "satellite",
        // mapTypeId: "hybrid",


        //樣式
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#523735"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c9b2a6"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#dcd2be"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ae9e90"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#447530"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#93817c"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#00ffae"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#447530"

                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fdfcf8",
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f8c967"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#e9bc62"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e98d58"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#db8555"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#806b63"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8f7d77"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#00e9ff"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#000"
                    }
                ]
            }
        ],
    });

    //訊息視窗
    var contentString = `
    <div id="content">
        <h1 id="firstHeading" class="firstHeading">蛇頭山</h1>
        <div id="bodyContent">
            <p><b>蛇頭山</b>, 位於台灣澎湖縣馬公市風櫃里的一座山峰，峰頂海拔20公尺，為台灣小百岳之一。</p>
            <p>來源: 蛇頭山, <a href="https://www.google.com/maps/place/%E8%9B%87%E9%A0%AD%E5%B1%B1/@22.8775689,120.688206,4268a,35y,38.47t/data=!3m1!1e3!4m5!3m4!1s0x346e4590bc080011:0xeb4ba4426aa6239!8m2!3d22.9072858!4d120.6953786!5m1!1e4">3D viewer</a></p>
        </div>
    </div>
    `;

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200
    });

    //標記
    // var marker = new google.maps.Marker({
    //     position: snakeMountain,
    //     map: map
    // })

    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var beachMarker = new google.maps.Marker({
        position: { lat: 22.9058049, lng: 120.6956238 },
        map: map,
        icon: image,
        draggable: true,
        title: '蛇頭山',
        animation: google.maps.Animation.BOUNCE,
    });
    beachMarker.addListener('click', function () {
        infowindow.open(map, beachMarker);
    });
}




