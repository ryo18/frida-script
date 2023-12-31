const simulated_latitude  = 10
const simulated_longitude = 106

Java.perform(function(){

    const Location = Java.use('android.location.Location')
    
    var location = Location.$new("gps")
    location.setLatitude(simulated_latitude)
    location.setLongitude(simulated_longitude)

    Location.$init.overload("android.location.Location").implementation = function(x){
        console.log("Instantiated new location ( Location ) ")
        return location
    }

    Location.$init.overload("java.lang.String").implementation = function(x){
        console.log("Instantiated new location ( String ) ")
        return location
    }

    Location.getLatitude.implementation = function(){
        console.log("Old latitude : " + this.getLatitude() + ", New Latitude : " + simulated_latitude)
        return simulated_latitude
    }


    Location.getLongitude.implementation = function(){
        console.log("Old longitude : " + this.getLongitude() + ", New Longitude : " + simulated_longitude)
        return simulated_longitude
    }

    // Not sure if needed, bypass fake location check
    Location.isFromMockProvider.implementation = function(){
        console.log("Location.isFromMockProvider -> false")
        return false
    }
})
