
    // function Circle(x,y,radius) {
    //     this.x = x;
    //     this.y = y;
    //     this.radius = radius;
    // }
    // function createCircle() {
    //     let ctx = document.getElementById("myCanvas").getContext("2d");
    //     let circle = new Circle(500, 500, 80);
    //     ctx.beginPath();
    //     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    //     ctx.fill();
    // }
    // createCircle()
    function Circle(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    }
    function getRandomHex(){
    return Math.floor(Math.random()*255);
    }
    function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return 'rgb(' + red +',' + green + ',' + blue + ')';
    }

    function createCircle1(){
    let ctx = document.getElementById('myCanvas').getContext('2d');
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let circle = new Circle(500,500, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    }
    createCircle1();
    // function Circle(x, y, radius){
    //     this.x = x;
    //     this.y = y;
    //     this.radius = radius;
    // }
    //
    // function getRandomHex(){
    //     return Math.floor(Math.random()*255);
    // }
    //
    // function getRandomColor(){
    //     var red = getRandomHex();
    //     var green = getRandomHex();
    //     var blue = getRandomHex();
    //     return "rgb(" + red + "," + blue + "," + green +")";
    // }
    //
    // function createCircle2(){
    //     var ctx = document.getElementById("myCanvas").getContext("2d");
    //     var radius = Math.floor(Math.random() * 80);
    //     var color = getRandomColor();
    //     var x = Math.random() * window.innerWidth;
    //     var y = Math.random() * window.innerHeight;
    //     var circle= new Circle(x, y, radius);
    //     ctx.beginPath();
    //     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    //     ctx.fillStyle = color;
    //     ctx.fill();
    // }
    //
    // createCircle2();
    function Circle(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    function getRandomHex(){
        return Math.floor(Math.random()*255);
    }

    function getRandomColor(){
        var red = getRandomHex();
        var green = getRandomHex();
        var blue = getRandomHex();
        return "rgb(" + red + "," + blue + "," + green +")";
    }

    function createCircle3(){
        var ctx = document.getElementById("myCanvas").getContext("2d");
        var radius = Math.floor(Math.random() * 80);
        var color = getRandomColor();
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var circle= new Circle(x, y, radius);
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }

    createCircle3();


    function Circle(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    function getRandomHex(){
        return Math.floor(Math.random()*255);
    }

    function getRandomColor(){
        var red = getRandomHex();
        var green = getRandomHex();
        var blue = getRandomHex();
        return "rgb(" + red + "," + blue + "," + green +")";
    }

    function createCircle4(){
        var ctx = document.getElementById("myCanvas").getContext("2d");
        var radius = Math.floor(Math.random() * 80);
        var color = getRandomColor();
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var circle= new Circle(x, y, radius);
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }

    function createMultipleCircle(){
        for(var i = 0; i < 30; i++){
            createCircle4();
        }
    }

    createMultipleCircle();

