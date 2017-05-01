$(document).ready(function() {
  
  // Luke Skywalker
  $('#lukeId').click(function(event) {
    event.preventDefault();
//    var image_href = $(this).attr("src");
    
    if ($('#lightbox').length > 0) {
      
      //insert img tag with clicked link's href as src value
//      $('#content').html('<img src="' + image_href + '" />');
      
      //show lightbox window - you can use a transition here if you want
      $('#lightbox').show();
      

      
    } else { //#lightbox does not exist
      
      //create HTML markup for lightbox window
      var lightbox = 
          '<div id="lightbox">' +
            '<p>Click to close</p>' +
            '<div id="content">' + //insert clicked link's href into img sr
//                '<img src="' + image_href + '" />' +
            '</div>' + 
          '</div>';
      
      //insert lightbox HTML into page
      $('body').append(lightbox);
    }
    
    url = "https://swapi.co/api/people/1/";
    
    function getSwapi(data) {
      $('#content').html('<li>Name: ' + data.name + '</li>');
      $('#content').append('<li>Birth Year: ' + data.birth_year + '</li>');
      $('#content').append('<li>Gender: ' + data.gender + '</li>');
      $('#content').append('<li>Eye Color: ' + data.eye_color + '</li>');
      $('#content').append('<li>Hair Color: ' + data.hair_color + '</li>');
      $('#content').append('<li>Weight (kg): ' + data.mass + '</li>');
      $('#content').append('<li>Height (cm): ' + data.height + '</li>');
      $('#content').append('<li>Skin Color: ' + data.skin_color + '</li>');
    };
    $.getJSON(url, getSwapi);
  });
  
  // R2-D2
  $('#artwoId').click(function() {
    url = "https://swapi.co/api/people/3/";
    
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
  
  // Darth Vader
  $('#darthId').click(function() {
    url = "https://swapi.co/api/people/4/";
    
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
    url = "https://swapi.co/api/people/5/";
    
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
  $('#obiwanId').click(function() {
    url = "https://swapi.co/api/people/10/";
    
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
  
  // Chewbacca
  $('#chewbaccaId').click(function() {
    url = "https://swapi.co/api/people/13/";
    
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
  
//  $('#lightbox').click(function() {
//    $(this).hide();
//  });
  

}); // end ready