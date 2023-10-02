class Temperature{
  constructor(){
   this.check=-1
   this.Celsiustep=0
   this.Fehrenheittep=32
  }
   
   get getCelsius(){ 
       return this.Celsiustep
   }
   get getFehrenheit(){
       return this.Fehrenheittep
   }
   
   set setCelsius(Celsiustep){
     
     if ( typeof Celsiustep==="number") {
        this.Celsiustep=Celsiustep
        this.Fehrenheittep=((this.Celsiustep*9/5)+32)
     } else {
       console.log(`Temperature should be a number`);
     }
         
   }
   set setFehrenheit(Fehrenheittep){
     if ( typeof Fehrenheittep==="number") {
        this.Fehrenheittep=Fehrenheittep
       this.Celsiustep=((this.Fehrenheittep-32)*(5/9))
     } else {
       console.log(`Temperature should be a number`);
 
     }
   }
 
 }
 
 let temperature=new Temperature
 console.log(`Initial celsius : ${temperature.getCelsius} C`);
 console.log(`Initial Fehrenheit : ${temperature.getFehrenheit} F`);


 temperature.setCelsius=25
 console.log(`celsius : ${temperature.getCelsius} C`);
 console.log(`Fehrenheit : ${temperature.getFehrenheit} F`);


 temperature.setFehrenheit=68
 console.log(`celsius : ${temperature.getCelsius} C`);
 console.log(`Fehrenheit : ${temperature.getFehrenheit} F`);