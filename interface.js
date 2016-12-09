$( document ).ready(function() {
    // $( "a" ).addClass( "test" );
    //
    // alert( "welcome" );
    //
    // $( "a" ).click(function( event ) {
    //
    //
    //     event.preventDefault();
    //     $(this).hide();
    //
    //     $.get(index.html, myCallBack);
    // });

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











});
