var Thermostat = function() {
  this.temperature = 20;
  this.MIN_TEMPERATURE = 10;
  this.MAX_TEMPERATURE_PSM_ON= 25;
  this.MAX_TEMPERATURE_PSM_OFF= 32;
  this._isPowerSaveOn = true;

};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};


Thermostat.prototype.increase = function() {
  if(  this._isPowerSaveOn == true && this.temperature === this.MAX_TEMPERATURE_PSM_ON) {
    return ;
    }
  else if (  this._isPowerSaveOn == false && this.temperature === this.MAX_TEMPERATURE_PSM_OFF) {
    return ;
    }
  else
  { return this.temperature += 1;}

};

Thermostat.prototype.decrease = function() {
  if(this.temperature > this.MIN_TEMPERATURE)
  { return this.temperature -= 1;}

};

Thermostat.prototype.changePowerSaveMode = function() {
  if(this._isPowerSaveOn = true) {
    this._isPowerSaveOn = false;
  } else {
    this._isPowerSaveOn = true;
  }
};




Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function() {
  if(this.temperature < 18)
    {return "low-usage";}
  else if(this.temperature < 25)
    {return "medium-usage";}
  else
    {return "high-usage";}
};
