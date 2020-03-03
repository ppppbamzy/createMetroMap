;(function () {
    var canvas=document.createElement("canvas");
    canvas.width = 500;
    canvas.height = 500;
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    
    function draw() {
        ctx.fillStyle="red";
        ctx.fillRect(100,100,100,100);
    }
    
    draw();
    
    var ctx = new C2S(500,500);
    draw();
    var myRectangle = ctx.getSerializedSvg(true);
    document.getElementById("svgoutput").innerHTML = myRectangle;
}());
