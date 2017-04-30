$(document).ready(function() {

  /*
    
    People
    http://swapi.co/api/people/?format=json#
    
    Starships
    http://swapi.co/api/starships/?format=json#
    
    Planets
    http://swapi.co/api/planets/?format=json#
    
  */
  
  // Luke Skywalker
  $('#lukeId').click(function() {
    url = "https://swapi.co/api/people/1/";
    var swChar = $(this).children('.hidden-text').text();
    
    function getSwapi(data) {
      $('#content').html('<p>Name: ' + data.name + '</p>');
      $('#content').append('<p>Birth Year: ' + data.birth_year + '</p>');
      $('#content').append('<p>Gender: ' + data.gender + '</p>');
      $('#content').append('<p>Eye Color: ' + data.eye_color + '</p>');
      $('#content').append('<p>Hair Color: ' + data.hair_color + '</p>');
      $('#content').append('<p>Weight (kg): ' + data.mass + '</p>');
      $('#content').append('<p>Height (cm): ' + data.height + '</p>');
      $('#content').append('<p>Skin Color: ' + data.skin_color + '</p>');
    };
    $.getJSON(url, getSwapi);
  });
  
  // R2-D2
  $('#r2d2').click(function() {
    url = "https://swapi.co/api/people/?search=r2";
    var swChar = $(this).children('.hidden-text').text();
    
    function getSwapi(data) {
      $('#content').html('<p>Name: ' + data.results.name + '</p>');
      $('#content').append('<p>Birth Year: ' + data.birth_year + '</p>');
      $('#content').append('<p>Gender: ' + data.gender + '</p>');
      $('#content').append('<p>Eye Color: ' + data.eye_color + '</p>');
      $('#content').append('<p>Hair Color: ' + data.hair_color + '</p>');
      $('#content').append('<p>Weight (kg): ' + data.mass + '</p>');
      $('#content').append('<p>Height (cm): ' + data.height + '</p>');
      $('#content').append('<p>Skin Color: ' + data.skin_color + '</p>');
    };
    $.getJSON(url, getSwapi);
  });
  
  // Darth Vader
  $('#darthId').click(function() {
    url = "https://swapi.co/api/people/4/";
    var swChar = $(this).children('.hidden-text').text();
    
    function getSwapi(data) {
      $('#content').html('<p>Name: ' + data.name + '</p>');
      $('#content').append('<p>Birth Year: ' + data.birth_year + '</p>');
      $('#content').append('<p>Gender: ' + data.gender + '</p>');
      $('#content').append('<p>Eye Color: ' + data.eye_color + '</p>');
      $('#content').append('<p>Hair Color: ' + data.hair_color + '</p>');
      $('#content').append('<p>Weight (kg): ' + data.mass + '</p>');
      $('#content').append('<p>Height (cm): ' + data.height + '</p>');
      $('#content').append('<p>Skin Color: ' + data.skin_color + '</p>');
    };
    $.getJSON(url, getSwapi);
  });
  
  // Leia
  $('#leiaId').click(function() {
    url = "https://swapi.co/api/people/3/";
    var swChar = $(this).children('.hidden-text').text();
    
    function getSwapi(data) {
      $('#content').html('<p>Name: ' + data.name + '</p>');
      $('#content').append('<p>Birth Year: ' + data.birth_year + '</p>');
      $('#content').append('<p>Gender: ' + data.gender + '</p>');
      $('#content').append('<p>Eye Color: ' + data.eye_color + '</p>');
      $('#content').append('<p>Hair Color: ' + data.hair_color + '</p>');
      $('#content').append('<p>Weight (kg): ' + data.mass + '</p>');
      $('#content').append('<p>Height (cm): ' + data.height + '</p>');
      $('#content').append('<p>Skin Color: ' + data.skin_color + '</p>');
    };
    $.getJSON(url, getSwapi);
  });
  
  // Obi-Wan
  $('#leiaId').click(function() {
    url = "https://swapi.co/api/people/3/";
    var swChar = $(this).children('.hidden-text').text();
    
    function getSwapi(data) {
      $('#content').html('<p>Name: ' + data.name + '</p>');
      $('#content').append('<p>Birth Year: ' + data.birth_year + '</p>');
      $('#content').append('<p>Gender: ' + data.gender + '</p>');
      $('#content').append('<p>Eye Color: ' + data.eye_color + '</p>');
      $('#content').append('<p>Hair Color: ' + data.hair_color + '</p>');
      $('#content').append('<p>Weight (kg): ' + data.mass + '</p>');
      $('#content').append('<p>Height (cm): ' + data.height + '</p>');
      $('#content').append('<p>Skin Color: ' + data.skin_color + '</p>');
    };
    $.getJSON(url, getSwapi);
  });
  

}); // end ready