'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("has an up function that increases the temperature by 1", function(){
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  });

  it("has a down function that decreases the temperature by 1", function(){
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(19);
  });

  it("has a min temperature of 10", function(){
    expect(thermostat._minTemperature).toEqual(10);
  });

  it("has a max temperature of 25", function(){
    expect(thermostat._maxTemperature).toEqual(25);
  });

  it("has a max temperature of 32 when power saving mode is off", function(){
    thermostat.changePowerSaveMode();
    expect(thermostat._maxTemperature).toEqual(32);
  });

  it("is in power saving mode by default", function(){
    expect(thermostat._isPowerSaveOn).toEqual(true);
  });

  it("changes the power save mode", function(){
    thermostat.changePowerSaveMode();
    expect(thermostat._isPowerSaveOn).toEqual(false);
  });

  it("resets the temperature to 20", function(){
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it("returns low-usage when temperature at 17", function() {
    thermostat.temperature = 17;
    expect(thermostat.energyUsage()).toEqual("low-usage");

  });

  it("returns medium-usage when 20 degrees", function() {
    thermostat.temperature = 20;
    expect(thermostat.energyUsage()).toEqual("medium-usage");
  });

  it("returns high-usage", function() {
    thermostat.temperature = 27;
    expect(thermostat.energyUsage()).toEqual("high-usage");
  });



});
