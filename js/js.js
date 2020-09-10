ymaps.ready(init);
var placemarks = [
{
    latitude: 59.9783333333333,
    longitude: 30.2166666666667,
    hintContent: 'Станция №1',
},
{
    latitude: 59.8883333333333,
    longitude: 30.2183333333333,
    hintContent: 'Станция №2',
},
{
    latitude: 59.8850000000000,
    longitude: 30.1666666666667,
    hintContent: 'Станция №3',
    },
{
    latitude: 59.9166666666667,
    longitude: 30.2633333333333,
    hintContent: 'Станция №4',
    },
{
    latitude: 59.9083333333333,
    longitude: 29.9366666666667,
    hintContent: 'Станция №5',
    },
{
    latitude: 59.9900000000000,
    longitude: 29.8583333333333,
    hintContent: 'Станция №6',
    },
{
    latitude: 59.9583333333333,
    longitude: 29.7966666666667,
    hintContent: 'Станция №7',
    number:7,
    },
{
    latitude: 59.9366666666667,
    longitude: 29.7883333333333,
    hintContent: 'Станция №8',    },
{
    latitude: 60,
    longitude: 29.9383333333333,
    hintContent: 'Станция №9',
    },
{
    latitude: 59.93833333333333,
    longitude: 30.1283333333333,
    hintContent: 'Станция №10',
    },
{
    latitude: 59.9016666666667,
    longitude: 30.0866666666667,
    hintContent: 'Станция №11',
    preset: 'islands#greenIcon',
}
];

    function init(){
        var num;
        var myMap = new ymaps.Map("map", {
            center: [59.9353,29.9941],
            zoom: 11
        },
        {
             searchControlProvider: 'yandex#search'
        });

        var myButton = new ymaps.control.Button('Выбрать');
            myButton.events
            .add(
             'press',
             function () {
                 console.clear()
                 placemarks.forEach(function(obj){
                    if (obj.preset == 'islands#greenIcon') {
                    console.log(obj.hintContent,"Широта:", obj.latitude,"Долгота:", obj.longitude);
                }
                });
             }
              );
            myMap.controls.add(myButton, {
             float: "left"
          });


        placemarks.forEach(function(obj){
            var placemark = new ymaps.Placemark([obj.latitude, obj.longitude],{
                    hintContent: obj.hintContent,
                    balloonContent: obj.balloonContent,
                },
                {
                    preset: obj.preset
                });
             
        
         placemark.events
        .add('click', function (e) {
            // Ссылку на объект, вызвавший событие,
            // можно получить из поля 'target'.
            //e.get('target').options.set('preset', 'islands#greenIcon');
            var target = e.get('target');
           // target.options.set('preset', 'islands#greenIcon');
            target.options.set('preset', 'islands#greenIcon');
        });
        placemark.events
          .add('mouseenter', function (e) {
            // Ссылку на объект, вызвавший событие,
            // можно получить из поля 'target'.
            e.get('target').options.set('preset', 'islands#blueIcon');
        });
        myMap.geoObjects.add(placemark);
       
        });

    }
