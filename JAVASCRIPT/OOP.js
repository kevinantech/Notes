//EJERCICIO PRACTICO
/*
    class Phone {
        constructor(color, weigth, displayResolution, cameraResolution, ram){
            this.color = color;
            this.weigth = weigth;
            this.displayResolution = displayResolution;
            this.cameraResolution = cameraResolution;
            this.ram = ram;
        }

        On(){
            console.log("On");
        }
        Reboot(){
            console.log("Reboot");
        }
        PoweOff(){
            console.log("Off");
        }
        TakePhoto(){
            console.log("Captured");
        }
        Record(){
            console.log("Recording");
        }
    }
    let motoOneMacro = new Phone("Blue", "300g", "19:9", "16MP", "4Gb");
    console.log(motoOneMacro);
    motoOneMacro.Record();
    //HERENCIA
    class HighRange extends Phone{
        constructor(color, weigth, displayResolution, cameraResolution, ram, cameraResolution_2){
            super(color, weigth, displayResolution, cameraResolution, ram);
            this.cameraResolution_2 = cameraResolution_2;
        }
        FacialRecognition(){
            console.log("Facial Recognition = Ok");
        }
    }
    let iPhoneXII = new HighRange("White", "450g", "16:9", "28MP", "8Gb", "50MP");
    console.log(iPhoneXII);
    iPhoneXII.FacialRecognition();
*/
// STATIC, GET & SET
/*  
    class Mobile {
        constructor(price){
            this.price = price;
        }
        static HolaMundo(){
            console.log("Hola Mundo");
        }
        set setPrice(price){
            this.price = price;
        }
        get getPrice(){
            return this.price;
        }
    }
    let samsung = new Mobile(750);
    console.log(samsung.getPrice);
    Mobile.HolaMundo();
*/