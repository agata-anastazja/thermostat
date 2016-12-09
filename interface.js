$( document ).ready(function() {
    var thermostat = new Thermostat;

    updateTemperature();


    function updateTemperature() {
        $('#temperature').text(thermostat.temperature);
    };


    $('#increase').click(function() {
          thermostat.increase();
          updateTemperature();
    });

    $('#decrease').click(function() {
          thermostat.decrease();
          updateTemperature();
    });

    $('#reset').click(function() {
          thermostat.reset();
          updateTemperature();
    });

    $('#turnPSMOn').click(function() {
          thermostat.turnOnPSM();
          updateTemperature();
    });


    $('#turnPSMOff').click(function() {
          thermostat.turnOffPSM();
          updateTemperature();
    });

    $('#current-city').change(function() {
      var city = $('#current-city').val();
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
      var token = '&appid=94bf779877b538f9e7ddc5d40272248d';
      var units = '&units=metric';
      $.get(url + city + token + units, function(data) {
        $('#current-temperature').text(data.main.temp)
      });
    });
});
