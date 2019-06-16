// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
function initialize() {
 var Marker;
 var map;
 var latlng = new google.maps.LatLng(35.658704,139.745408);
 var opts = {
  zoom: 15,
  center: latlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
 }

 map = new google.maps.Map
 (document.getElementById("map_canvas"),opts);

//地図クリックイベントの登録
 google.maps.event.addListener(map, 'click',
 function(event) {
  if (Marker){Marker.setMap(null)};
  Marker = new google.maps.Marker({
   position: event.latLng,
   draggable: true,
   map: map
  });
  infotable(Marker.getPosition().lat(),
  Marker.getPosition().lng(),map.getZoom());
  geocode();
  //マーカードラッグイベントの登録
  google.maps.event.addListener(Marker,'dragend',
   function(event) {
   infotable(Marker.getPosition().lat(),
   Marker.getPosition().lng(),map.getZoom());
   geocode();
  })
  //地図ズームチェンジイベントの登録
  google.maps.event.addListener(map, 'zoom_changed',
   function(event) {
   infotable(Marker.getPosition().lat(),
   Marker.getPosition().lng(),map.getZoom());
  })
 })
//ジオコーディング
 function geocode(){  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'location': Marker.getPosition()},
     function(results, status) {
   if (status == google.maps.GeocoderStatus.OK && results[0]){
     document.getElementById('id_address').innerHTML =
         results[0].formatted_address.replace(/^日本, /, '');
   }else{
     document.getElementById('id_address').innerHTML =
       "Geocode 取得に失敗しました";
    alert("Geocode 取得に失敗しました reason: "
           + status);
   }
  });
 }

//HTMLtagを更新
 function infotable(ido,keido,level){
  document.getElementById('id_ido').innerHTML = ido;
  document.getElementById('id_keido').innerHTML = keido;
  document.getElementById('id_level').innerHTML = level;
 };
};
