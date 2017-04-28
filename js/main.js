$(document).ready(function() {

  /*
    
    People
    http://swapi.co/api/people/?format=json#
    
    Starships
    http://swapi.co/api/starships/?format=json#
    
    Planets
    http://swapi.co/api/planets/?format=json#
    
  */
  
  
  // People
  $('#lukeId').click(function() {
//    $('button').removeClass("selected");
//    $(this).addClass("selected");
    
    var url = "https://swapi.co/api/people/1/;
    
    function displayData(data) {
      var photoHTML = '<ul>';
      
      
      
      $.each(data, function(i, item){
        photoHTML += '<li>';
        photoHTML += '<p>Name: ' + item.name + '</p>';
        photoHTML += '<p>Gender: ' + item.gender + '</p>';
        photoHTML += '<p>Height: ' + item.height + '</p></li>';
        
      });
      
      
      photoHTML += '</ul>';
      $('#content').html(photoHTML);
    }
    
    $.getJSON(url, displayData);
    
  });
 
  
  // Planets
  $('#planetsId').click(function() {
    $('button').removeClass("selected");
    $(this).addClass("selected");
    
    var url = "http://swapi.co/api/planets/";
    
    function displayData(data) {
      var photoHTML = '<ul>';
      $.each(data.results, function(i, item){
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<p>Name: ' + item.name + '</p>';
        photoHTML += '<p>Climate: ' + item.climate + '</p>';
        photoHTML += '<p>Population: ' + item.population + '</p></li>';
        
      });
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    
    $.getJSON(url, displayData);
    
  });
  
  
  // Ships
  $('#shipsId').click(function() {
    $('button').removeClass("selected");
    $(this).addClass("selected");
    
    var url = "http://swapi.co/api/starships/";
    
    function displayData(data) {
      var photoHTML = '<ul>';
      $.each(data.results, function(i, item){
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<p>Name: ' + item.name + '</p>';
        photoHTML += '<p>Length: ' + item.length + '</p>';
        photoHTML += '<p>Crew: ' + item.crew + '</p></li>';
        
      });
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    
    $.getJSON(url, displayData);
    
  });
  
  
  
}); // end ready