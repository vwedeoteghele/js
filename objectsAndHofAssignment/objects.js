//create a javascript objects with objects in your everyday life
const myHpLaptop = {
    "brand-name" : "Hewlett-Packard",
    "operating-system": "windows 10",
    systemConfiguration:{
      ram: "8 gb",
      hardDrive:"300 gb"
    },
    color : "grey",
    usb : 3,
    jack: true,
    increaseSystemConfig:(ram,hardDrive)=>{
    this.systemConfiguration.ram = ram;
    this.hardDrive = hardDrive;
    }
    }
    
    console.log(increaseSystemConfig("16 gb","1 tb"));