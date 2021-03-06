//variabler
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//program
//visittkort Jovica
//lagde rod trekant
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300,0);
ctx.lineTo(300,200);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();

//tegnekommandoer
ctx.moveTo(0, 0);
ctx.lineTo(300, 0);
ctx.lineTo(300, 200);
ctx.lineTo(0, 200);
ctx.lineTo(0, 0);
ctx.lineTo(300, 200);
ctx.stroke();

//fylte visittkort med info
ctx.fillStyle = "white";
ctx.font = "30px Arial";
ctx.fillText("Jovica Ugrinic", 90, 50);
ctx.fillStyle = "red";
ctx.font = "15px Arial";
ctx.textAlign = "end";
ctx.fillText("Universitetet i Agder", 140, 120);
ctx.font = "10px Arial";
ctx.textAlign = "end";
ctx.fillText("Fakultetet for samfunnsvitenskap", 152, 140);
ctx.font = "10px Arial";
ctx.textAlign = "end";
ctx.fillText("IT og Informasjonssystemer", 129, 160);

//visittkort Markus Ribe
//tegnekommandoer --KH
ctx.moveTo(0, 300);
ctx.lineTo(300, 300);
ctx.lineTo(300, 500);
ctx.lineTo(0, 500);
ctx.lineTo(0, 300);
ctx.stroke();

//lage gradient
var grd = ctx.createLinearGradient(0, 0, c.width, 0);
grd.addColorStop(0, "black");
grd.addColorStop(0.3, "darkgray");
grd.addColorStop(0.5, "gray");
grd.addColorStop(0.8, "lightgray");
grd.addColorStop(1, "lightgray");

//fylte visittkort med gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 300, 300, 200);

//fylte visittkort med info
ctx.fillStyle = "white";
ctx.font = "30px Arial";
ctx.fillText("Markus Ribe ", 275, 350);
ctx.font = "15px Arial";
ctx.textAlign = "end";
ctx.fillText("Universitetet i Agder", 140, 420);
ctx.font = "11px Arial";
ctx.textAlign = "end";
ctx.fillText("Fakultetet for samfunnsvitenskap", 170, 440);
ctx.font = "11px Arial";
ctx.textAlign = "end";
ctx.fillText("IT og Informasjonssystemer", 144, 460);

//visittkort Katrine
//tegnekommandoer --KH
ctx.moveTo(400, 0);
ctx.lineTo(700, 0);
ctx.lineTo(700, 200);
ctx.lineTo(400, 200);
ctx.lineTo(400, 0);
ctx.stroke();

//lage annen gradient --KH
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop(0, "lightgreen");
gradient.addColorStop(0.3, "lightgreen");
gradient.addColorStop(0.5, "lightblue");
gradient.addColorStop(0.7, "lightpink");
gradient.addColorStop(1, "red");

//fylte visittkort med annen gradient --KH
ctx.fillStyle = gradient;
ctx.fillRect(400, 0, 300, 200);

//fylte visittkort med info --KH
ctx.fillStyle = "black";
ctx.font = "30px Arial";
ctx.fillText("Katrine Huynh", 680, 50);
ctx.font = "15px Arial";
ctx.textAlign = "end";
ctx.fillText("Universitetet i Agder", 560, 120);
ctx.font = "11px Arial";
ctx.textAlign = "end";
ctx.fillText("Fakultetet for samfunnsvitenskap", 587, 140);
ctx.font = "11px Arial";
ctx.textAlign = "end";
ctx.fillText("IT og Informasjonssystemer", 561, 160);

//visittkort Markus
//tegnekommandoer --MR
ctx.moveTo(0,600);
ctx.lineTo(300, 600);
ctx.lineTo(300,800);
ctx.lineTo(0,800);
ctx.lineTo(0, 600);
ctx.stroke();

//lagde gradient --MR (tror ikke denne funker)
var gradient1 = ctx.createLinearGradient(0,0, c.width,0);
gradient1.addColorStop(0,"black");
gradient1.addColorStop(0.3, "grey");
gradient1.addColorStop(0.5, "lightgrey");
gradient1.addColorStop(0.8, "lightgrey");
gradient1.addColorStop(1, "white");

//fylte visittkort med gradient --MR
ctx.fillStyle = gradient1;
ctx.fillRect(0,600,300,200);

//fylte vissittkort med info --MR
ctx.fillStyle = "white";
ctx.font = "30px Times New Roman";
ctx.fillText("Markus Ribe", 270,650);
ctx.font = "15px Times New Roman";
ctx.textAlign = "end";
ctx.fillText("Universitetet i Agder", 270, 700);
ctx.font = "11px Times New Roman";
ctx.textAlign = "end";
ctx.fillText("Fakultet for samfunnsvitenskap", 270, 720);
ctx.font = "11px Times New Roman";
ctx.textAlign = "end";
ctx.fillText("IT og Informasjonssystemer", 270, 732);

//setter inn bilde i visittkort
var img = document.createElement("img")
img.src = "https://pbs.twimg.com/profile_images/1245761461827198976/iVypuDnz.jpg"
var src = document.getElementById("picture")
src.appendChild(img)

