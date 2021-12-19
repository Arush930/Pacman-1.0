
var wallGroup
var edges
var food, foodImg, foodGroup

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var PacMan, inky, blinky, pinky, clyde

var PacManImg, inkyImg, pinkyImg, clydeImg

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,
wall14,wall15,wall16,wall17,wall18,wall9,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,
wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40
,wall41,wall42,wall43,wall44,wall45,wall46,wall47,walll48

var food1,food2,food3


function preload() {
    backgroundImg = loadImage("PacManBackground.png");
    PacManImg = loadImage("PacMan.gif");
    inkyImg = loadImage("imported piskel.gif");
    blinkyImg = loadImage("hibob24.gif");
    pinkyImg = loadImage("imported piskel (4).gif");
    clydeImg = loadImage("2469743-orange.png");
    foodImg = loadImage("Food.gif")
}

function setup(){
    var canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;

    wallGroup = new Group()
    edges = createEdgeSprites()
   

    clyde = createSprite(600,290,30,30)
    clyde.addImage(clydeImg)
    clyde.scale = 0.1
    clyde.velocityX = random(-10, 10)
    clyde.velocityY = random(-10, 10)
    clyde.setCollider("rectangle",0,0,200,200)


    inky = createSprite(665,290,30,30)
    inky.addImage(inkyImg)
    inky.scale = 0.20
    inky.velocityX = random(-10, 10)
    inky.velocityY = random(-10, 10)
    inky.setCollider("rectangle",0,0,150,150)

    blinky = createSprite(730,290,30,30)
    blinky.addImage(blinkyImg)
    blinky.scale = 0.22
    blinky.velocityX = random(-10, 10)
    blinky.velocityY = random(-10, 10)
    blinky.setCollider("rectangle",0,0,150,150)

    pinky = createSprite(795,290,30,30)
    pinky.addImage(pinkyImg)
    pinky.scale = 0.16
    pinky.velocityX = random(-10, 10)
    pinky.velocityY = random(-10, 10)
    pinky.setCollider("rectangle",0,0,150,150)

    PacMan = createSprite(100,60,30,30)
    PacMan.addImage(PacManImg)
    PacMan.scale = 0.4



//Right side teleporter borders
 wall1=createSprite(140,200,290,10)
 wallGroup.add(wall1)
 wall2=createSprite(282,228,10,60)
 wallGroup.add(wall2)
 wall3=createSprite(140,255,290,10)
 wallGroup.add(wall3)
 wall4=createSprite(140,310,290,10) 
 wallGroup.add(wall4)
 wall5=createSprite(280,335,10,60)
 wallGroup.add(wall5)
 wall6=createSprite(140,365,290,10)
 wallGroup.add(wall6)

//Left side teleporter borders
 wall7=createSprite(1260,200,290,10)
 wallGroup.add(wall7)
 wall8=createSprite(1118,228,10,60) 
 wallGroup.add(wall8)
 wall9=createSprite(1260,255,290,10)
 wallGroup.add(wall9)
 wall10=createSprite(1260,310,290,10)
 wallGroup.add(wall10)
 wall11=createSprite(1120,335,10,60)
 wallGroup.add(wall11)
 wall12=createSprite(1260,365,290,10)
 wallGroup.add(wall12)

 //Lines at top
 wall13=createSprite(215,76,125,20)
 wallGroup.add(wall13)
 wall14=createSprite(215,140,120,10)
 wallGroup.add(wall14)
 wall15=createSprite(485,76,160,20)
 wallGroup.add(wall15)
 wall16=createSprite(915,76,160,20)
 wallGroup.add(wall16)
 wall17=createSprite(1180,76,120,20)
 wallGroup.add(wall17)
 wall18=createSprite(1180,140,120,10)
 wallGroup.add(wall18)


 //Borders
 wall19=createSprite(800,5,1600,30)
 wallGroup.add(wall19)
 wall20=createSprite(800,595,1600,30)
 wallGroup.add(wall20)
 wall21=createSprite(10,300,80,600)
 wallGroup.add(wall21)
 wall22=createSprite(1390,300,80,600)
 wallGroup.add(wall22)

 //Attachments to borders
 wall23=createSprite(702,50,50,80)
 wallGroup.add(wall23)
 wall24=createSprite(95,478,100,20)
 wallGroup.add(wall24)
 wall25=createSprite(1310,478,100,20)
 wallGroup.add(wall25)


 wall26=createSprite(702,142,330,15)
 wallGroup.add(wall26)
 wall27=createSprite(702,170,50,65)
 wallGroup.add(wall27)
 
 //Ghost Encosure
 wall28=createSprite(702,316,340,8)
 wallGroup.add(wall28)
 wall29=createSprite(540,280,12,75)
 wallGroup.add(wall29)
 wall30=createSprite(865,280,12,75)
 wallGroup.add(wall30)
 



 wall33=createSprite(702,368,330,15)
 wallGroup.add(wall33)
 wall34=createSprite(702,400,50,65)
 wallGroup.add(wall34)

 wall35=createSprite(702,478,330,15)
 wallGroup.add(wall35)
 wall36=createSprite(702,510,50,65)
 wallGroup.add(wall36)

 wall37=createSprite(915,423,170,15)
 wallGroup.add(wall37)
 wall38=createSprite(485,423,170,15)
 wallGroup.add(wall38)

 wall39=createSprite(365,535,420,15)
 wallGroup.add(wall39)
 wall40=createSprite(413,506,50,65)
 wallGroup.add(wall40)

 wall41=createSprite(1040,535,420,15)
 wallGroup.add(wall41)
 wall42=createSprite(993,506,50,65)
 wallGroup.add(wall42)

 wall43=createSprite(993,337,50,70)
 wallGroup.add(wall43)
 wall44=createSprite(410,337,50,70)
 wallGroup.add(wall44)

 wall43=createSprite(993,197,50,125)
 wallGroup.add(wall43)
 wall44=createSprite(410,197,50,125)
 wallGroup.add(wall44)

 wall43=createSprite(900,197,140,10)
 wallGroup.add(wall43)
 wall44=createSprite(503,197,140,10)
 wallGroup.add(wall44)

 wall45=createSprite(220,423,140,18)
 wallGroup.add(wall45)
 wall46=createSprite(268,453,45,60)
 wallGroup.add(wall46)

 wall47=createSprite(1186,423,140,18)
 wallGroup.add(wall47)
 wall48=createSprite(1138,453,45,60)
 wallGroup.add(wall48)




 food1=createSprite(340,510,415,10)
 food1.addImage(foodImg)
 food2=createSprite(340,460,415,10)
 food2.addImage(foodImg)
 food3=createSprite(340,410,415,10)
 food3.addImage(foodImg)
 food4=createSprite(340,360,415,10)
 food4.addImage(foodImg)
 food5=createSprite(340,310,415,10)
 food5.addImage(foodImg)
 food6=createSprite(340,260,415,10)
 food6.addImage(foodImg)
 food7=createSprite(340,210,415,10)
 food7.addImage(foodImg)
 food8=createSprite(340,160,415,10)
 food8.addImage(foodImg)
 food9=createSprite(340,110,415,10)
 food9.addImage(foodImg)
 food10=createSprite(340,60,415,10)
 food10.addImage(foodImg)


 food11=createSprite(1055,510,415,10)
 food11.addImage(foodImg)
 food12=createSprite(1055,460,415,10)
 food12.addImage(foodImg)
 food13=createSprite(1055,410,415,10)
 food13.addImage(foodImg)
 food14=createSprite(1055,360,415,10)
 food14.addImage(foodImg)
 food15=createSprite(1055,310,415,10)
 food15.addImage(foodImg)
 food16=createSprite(1055,260,415,10)
 food16.addImage(foodImg)
 food17=createSprite(1055,210,415,10)
 food17.addImage(foodImg)
 food18=createSprite(1055,160,415,10)
 food18.addImage(foodImg)
 food19=createSprite(1055,110,415,10)
 food19.addImage(foodImg)
 food20=createSprite(1055,60,415,10)
 food20.addImage(foodImg)


 food21=createSprite(1300,570,415,10)
 food21.addImage(foodImg)
 food22=createSprite(1250,570,415,10)
 food22.addImage(foodImg)
 food23=createSprite(1200,570,415,10)
 food23.addImage(foodImg)
 food24=createSprite(1150,570,415,10)
 food24.addImage(foodImg)
 food25=createSprite(1100,570,415,10)
 food25.addImage(foodImg)
 food26=createSprite(1050,570,415,10)
 food26.addImage(foodImg)
 food27=createSprite(1000,570,415,10)
 food27.addImage(foodImg)
 food28=createSprite(950,570,415,10)
 food28.addImage(foodImg)
 food29=createSprite(900,570,415,10)
 food29.addImage(foodImg)
 food30=createSprite(850,570,415,10)
 food30.addImage(foodImg)
 food31=createSprite(800,570,415,10)
 food31.addImage(foodImg)
 food32=createSprite(750,570,415,10)
 food32.addImage(foodImg)
 food33=createSprite(700,570,415,10)
 food33.addImage(foodImg)
 food34=createSprite(650,570,415,10)
 food34.addImage(foodImg)
 food35=createSprite(600,570,415,10)
 food35.addImage(foodImg)
 food36=createSprite(550,570,415,10)
 food36.addImage(foodImg)
 food37=createSprite(500,570,415,10)
 food37.addImage(foodImg)
 food38=createSprite(450,570,415,10)
 food38.addImage(foodImg)
 food39=createSprite(400,570,415,10)
 food39.addImage(foodImg)
 food40=createSprite(350,570,415,10)
 food40.addImage(foodImg)
 food41=createSprite(300,570,415,10)
 food41.addImage(foodImg)
 food42=createSprite(250,570,415,10)
 food42.addImage(foodImg)
 food43=createSprite(200,570,415,10)
 food43.addImage(foodImg)
 food44=createSprite(150,570,415,10)
 food44.addImage(foodImg)
 food45=createSprite(100,570,415,10)
 food45.addImage(foodImg)
 
 food46=createSprite(300,510,415,10)
 food46.addImage(foodImg)
 food47=createSprite(250,510,415,10)
 food47.addImage(foodImg)
 food48=createSprite(200,510,415,10)
 food48.addImage(foodImg)
 food49=createSprite(150,510,415,10)
 food49.addImage(foodImg)
 food50=createSprite(100,510,415,10)
 food50.addImage(foodImg)

 food51=createSprite(300,400,415,10)
 food51.addImage(foodImg)
 food52=createSprite(250,400,415,10)
 food52.addImage(foodImg)
 food53=createSprite(200,400,415,10)
 food53.addImage(foodImg)
 food54=createSprite(150,400,415,10)
 food54.addImage(foodImg)
 food55=createSprite(100,400,415,10)
 food55.addImage(foodImg)

 food56=createSprite(300,290,415,10)
 food56.addImage(foodImg)
 food57=createSprite(250,290,415,10)
 food57.addImage(foodImg)
 food58=createSprite(200,290,415,10)
 food58.addImage(foodImg)
 food59=createSprite(150,290,415,10)
 food59.addImage(foodImg)
 food60=createSprite(100,290,415,10)
 food60.addImage(foodImg)

 food61=createSprite(300,180,415,10)
 food61.addImage(foodImg)
 food62=createSprite(250,180,415,10)
 food62.addImage(foodImg)
 food63=createSprite(200,180,415,10)
 food63.addImage(foodImg)
 food64=createSprite(150,180,415,10)
 food64.addImage(foodImg)
 food65=createSprite(100,180,415,10)
 food65.addImage(foodImg)

 food66=createSprite(300,120,415,10)
 food66.addImage(foodImg)
 food67=createSprite(250,120,415,10)
 food67.addImage(foodImg)
 food68=createSprite(200,120,415,10)
 food68.addImage(foodImg)
 food69=createSprite(150,120,415,10)
 food69.addImage(foodImg)
 food70=createSprite(100,120,415,10)
 food70.addImage(foodImg)

 food71=createSprite(300,50,415,10)
 food71.addImage(foodImg)
 food72=createSprite(250,50,415,10)
 food72.addImage(foodImg)
 food73=createSprite(200,50,415,10)
 food73.addImage(foodImg)
 food74=createSprite(150,50,415,10)
 food74.addImage(foodImg)
 food75=createSprite(100,50,415,10)
 food75.addImage(foodImg)

 food76=createSprite(1100,510,415,10)
 food76.addImage(foodImg)
 food77=createSprite(1150,510,415,10)
 food77.addImage(foodImg)
 food78=createSprite(1200,510,415,10)
 food78.addImage(foodImg)
 food79=createSprite(1250,510,415,10)
 food79.addImage(foodImg)
 food80=createSprite(1300,510,415,10)
 food80.addImage(foodImg)

 food81=createSprite(1100,400,415,10)
 food81.addImage(foodImg)
 food82=createSprite(1150,400,415,10)
 food82.addImage(foodImg)
 food83=createSprite(1200,400,415,10)
 food83.addImage(foodImg)
 food84=createSprite(1250,400,415,10)
 food84.addImage(foodImg)
 food85=createSprite(1300,400,415,10)
 food85.addImage(foodImg)

 food86=createSprite(1100,290,415,10)
 food86.addImage(foodImg)
 food87=createSprite(1150,290,415,10)
 food87.addImage(foodImg)
 food88=createSprite(1200,290,415,10)
 food88.addImage(foodImg)
 food89=createSprite(1250,290,415,10)
 food89.addImage(foodImg)
 food90=createSprite(1300,290,415,10)
 food90.addImage(foodImg)

 food91=createSprite(1100,180,415,10)
 food91.addImage(foodImg)
 food92=createSprite(1150,180,415,10)
 food92.addImage(foodImg)
 food93=createSprite(1200,180,415,10)
 food93.addImage(foodImg)
 food94=createSprite(1250,180,415,10)
 food94.addImage(foodImg)
 food95=createSprite(1300,180,415,10)
 food95.addImage(foodImg)

 food96=createSprite(1100,120,415,10)
 food96.addImage(foodImg)
 food97=createSprite(1150,120,415,10)
 food97.addImage(foodImg)
 food98=createSprite(1200,120,415,10)
 food98.addImage(foodImg)
 food99=createSprite(1250,120,415,10)
 food99.addImage(foodImg)
 food100=createSprite(1300,120,415,10)
 food100.addImage(foodImg)

 food101=createSprite(1100,50,415,10)
 food101.addImage(foodImg)
 food102=createSprite(1150,50,415,10)
 food102.addImage(foodImg)
 food103=createSprite(1200,50,415,10)
 food103.addImage(foodImg)
 food104=createSprite(1250,50,415,10)
 food104.addImage(foodImg)
 food105=createSprite(1300,50,415,10)
 food105.addImage(foodImg)
//???
 food106=createSprite(400,50,415,10)
 food106.addImage(foodImg)
 food107=createSprite(450,50,415,10)
 food107.addImage(foodImg)
 food108=createSprite(500,50,415,10)
 food108.addImage(foodImg)
 food109=createSprite(550,50,415,10)
 food109.addImage(foodImg)
 food111=createSprite(600,50,415,10)
 food111.addImage(foodImg)
 food112=createSprite(650,50,415,10)
 food112.addImage(foodImg)
 food113=createSprite(750,50,415,10)
 food113.addImage(foodImg)
 food114=createSprite(800,50,415,10)
 food114.addImage(foodImg)
 food115=createSprite(850,50,415,10)
 food115.addImage(foodImg)
 food116=createSprite(900,50,415,10)
 food116.addImage(foodImg)
 food118=createSprite(950,50,415,10)
 food118.addImage(foodImg)
 food119=createSprite(1000,50,415,10)
 food119.addImage(foodImg)

 food121=createSprite(400,120,415,10)
 food121.addImage(foodImg)
 food122=createSprite(450,120,415,10)
 food122.addImage(foodImg)
 food123=createSprite(500,120,415,10)
 food123.addImage(foodImg)
 food124=createSprite(550,120,415,10)
 food124.addImage(foodImg)
 food125=createSprite(600,120,415,10)
 food125.addImage(foodImg)
 food126=createSprite(650,120,415,10)
 food126.addImage(foodImg)
 food127=createSprite(700,120,415,10)
 food127.addImage(foodImg)
 food128=createSprite(750,120,415,10)
 food128.addImage(foodImg)
 food129=createSprite(800,120,415,10)
 food129.addImage(foodImg)
 food130=createSprite(850,120,415,10)
 food130.addImage(foodImg)
 food131=createSprite(900,120,415,10)
 food131.addImage(foodImg)
 food132=createSprite(950,120,415,10)
 food132.addImage(foodImg)
 food133=createSprite(1000,120,415,10)
 food133.addImage(foodImg)

 food134=createSprite(450,180,415,10)
 food134.addImage(foodImg)
 food135=createSprite(500,180,415,10)
 food135.addImage(foodImg)
 food136=createSprite(550,180,415,10)
 food136.addImage(foodImg)
 food137=createSprite(600,180,415,10)
 food137.addImage(foodImg)
 food138=createSprite(650,180,415,10)
 food138.addImage(foodImg)
 food139=createSprite(750,180,415,10)
 food139.addImage(foodImg)
 food140=createSprite(800,180,415,10)
 food140.addImage(foodImg)
 food141=createSprite(850,180,415,10)
 food141.addImage(foodImg)
 food142=createSprite(900,180,415,10)
 food142.addImage(foodImg)
 food143=createSprite(950,180,415,10)
 food143.addImage(foodImg)

 food144=createSprite(450,230,415,10)
 food144.addImage(foodImg)
 food145=createSprite(500,230,415,10)
 food145.addImage(foodImg)
 food146=createSprite(550,230,415,10)
 food146.addImage(foodImg)
 food147=createSprite(600,230,415,10)
 food147.addImage(foodImg)
 food148=createSprite(650,230,415,10)
 food148.addImage(foodImg)
 food149=createSprite(700,230,415,10)
 food149.addImage(foodImg)
 food150=createSprite(750,230,415,10)
 food150.addImage(foodImg)
 food151=createSprite(800,230,415,10)
 food151.addImage(foodImg)
 food152=createSprite(850,230,415,10)
 food152.addImage(foodImg)
 food153=createSprite(900,230,415,10)
 food153.addImage(foodImg)
 food154=createSprite(950,230,415,10)
 food154.addImage(foodImg)

 food155=createSprite(450,350,415,10)
 food155.addImage(foodImg)
 food156=createSprite(500,350,415,10)
 food156.addImage(foodImg)
 food157=createSprite(550,350,415,10)
 food157.addImage(foodImg)
 food158=createSprite(600,350,415,10)
 food158.addImage(foodImg)
 food159=createSprite(650,350,415,10)
 food159.addImage(foodImg)
 food160=createSprite(700,350,415,10)
 food160.addImage(foodImg)
 food161=createSprite(750,350,415,10)
 food161.addImage(foodImg)
 food162=createSprite(800,350,415,10)
 food162.addImage(foodImg)
 food163=createSprite(850,350,415,10)
 food163.addImage(foodImg)
 food164=createSprite(900,350,415,10)
 food164.addImage(foodImg)
 food165=createSprite(950,350,415,10)
 food165.addImage(foodImg)

 food166=createSprite(400,400,415,10)
 food166.addImage(foodImg)
 food167=createSprite(450,400,415,10)
 food167.addImage(foodImg)
 food168=createSprite(500,400,415,10)
 food168.addImage(foodImg)
 food169=createSprite(550,400,415,10)
 food169.addImage(foodImg)
 food170=createSprite(600,400,415,10)
 food170.addImage(foodImg)
 food171=createSprite(650,400,415,10)
 food171.addImage(foodImg)
 food172=createSprite(750,400,415,10)
 food172.addImage(foodImg)
 food173=createSprite(800,400,415,10)
 food173.addImage(foodImg)
 food174=createSprite(850,400,415,10)
 food174.addImage(foodImg)
 food175=createSprite(900,400,415,10)
 food175.addImage(foodImg)
 food176=createSprite(950,400,415,10)
 food176.addImage(foodImg)
 food177=createSprite(1000,400,415,10)
 food177.addImage(foodImg)

 food178=createSprite(400,460,415,10)
 food178.addImage(foodImg)
 food179=createSprite(450,460,415,10)
 food179.addImage(foodImg)
 food180=createSprite(500,460,415,10)
 food180.addImage(foodImg)
 food181=createSprite(550,460,415,10)
 food181.addImage(foodImg)
 food182=createSprite(600,460,415,10)
 food182.addImage(foodImg)
 food183=createSprite(650,460,415,10)
 food183.addImage(foodImg)
 food184=createSprite(700,460,415,10)
 food184.addImage(foodImg)
 food185=createSprite(750,460,415,10)
 food185.addImage(foodImg)
 food186=createSprite(800,460,415,10)
 food186.addImage(foodImg)
 food187=createSprite(850,460,415,10)
 food187.addImage(foodImg)
 food188=createSprite(900,460,415,10)
 food188.addImage(foodImg)
 food189=createSprite(950,460,415,10)
 food189.addImage(foodImg)
 food190=createSprite(1000,460,415,10)
 food190.addImage(foodImg)

 
 food191=createSprite(450,520,415,10)
 food191.addImage(foodImg)
 food192=createSprite(500,520,415,10)
 food192.addImage(foodImg)
 food193=createSprite(550,520,415,10)
 food193.addImage(foodImg)
 food194=createSprite(600,520,415,10)
 food194.addImage(foodImg)
 food195=createSprite(650,520,415,10)
 food195.addImage(foodImg)
 food196=createSprite(750,520,415,10)
 food196.addImage(foodImg)
 food197=createSprite(800,520,415,10)
 food197.addImage(foodImg)
 food198=createSprite(850,520,415,10)
 food198.addImage(foodImg)
 food199=createSprite(900,520,415,10)
 food199.addImage(foodImg)
 food200=createSprite(950,520,415,10)
 food200.addImage(foodImg)
 

 food201=createSprite(400,290,415,10)
 food201.addImage(foodImg)
 food202=createSprite(450,290,415,10)
 food202.addImage(foodImg)
 food203=createSprite(500,290,415,10)
 food203.addImage(foodImg)
 food204=createSprite(600,290,415,10)
 food204.addImage(foodImg)
 food205=createSprite(650,290,415,10)
 food205.addImage(foodImg)
 food206=createSprite(700,290,415,10)
 food206.addImage(foodImg)
 food207=createSprite(750,290,415,10)
 food207.addImage(foodImg)
 food208=createSprite(800,290,415,10)
 food208.addImage(foodImg)
 food209=createSprite(900,290,415,10)
 food209.addImage(foodImg)
 food210=createSprite(950,290,415,10)
 food210.addImage(foodImg)
 food211=createSprite(1000,290,415,10)
 food211.addImage(foodImg)

}

function draw(){
    background(backgroundImg)
    Engine.update(engine)

clyde.bounceOff(wallGroup)
inky.bounceOff(wallGroup)
blinky.bounceOff(wallGroup)
pinky.bounceOff(wallGroup) 

clyde.bounceOff(edges)
inky.bounceOff(edges)
blinky.bounceOff(edges)
pinky.bounceOff(edges)


PacMan.bounceOff(wallGroup)
PacMan.bounceOff(edges)


if(keyDown(UP_ARROW)){
  PacMan.y = PacMan.y - 5
}

  if(keyDown(DOWN_ARROW)){
    PacMan.y = PacMan.y + 5
}

    if(keyDown(LEFT_ARROW)){
        PacMan.x = PacMan.x - 5
    }

        if(keyDown(RIGHT_ARROW)){
            PacMan.x = PacMan.x + 5
        }

if(PacMan.isTouching(clyde)){
destroyAll()
}

if(PacMan.isTouching(pinky)){
destroyAll()
}

if(PacMan.isTouching(inky)){
destroyAll()
}

if(PacMan.isTouching(blinky)){
destroyAll()
}



 
 
    


 if(PacMan.isTouching(food1)){
food1.destroy()}

if(PacMan.isTouching(food2)){
food2.destroy()}

if(PacMan.isTouching(food3)){
food3.destroy()}

if(PacMan.isTouching(food4)){
food4.destroy()}

if(PacMan.isTouching(food5)){
food5.destroy()}

if(PacMan.isTouching(food6)){
food6.destroy()}

if(PacMan.isTouching(food7)){
food7.destroy()}

if(PacMan.isTouching(food8)){
food8.destroy()}

if(PacMan.isTouching(food9)){
food9.destroy()}

if(PacMan.isTouching(food10)){
food10.destroy()}

if(PacMan.isTouching(food11)){
food11.destroy()}

if(PacMan.isTouching(food12)){
food12.destroy()}

if(PacMan.isTouching(food13)){
food13.destroy()}

if(PacMan.isTouching(food14)){
food14.destroy()}

if(PacMan.isTouching(food15)){
food15.destroy()}

if(PacMan.isTouching(food16)){
food16.destroy()}

if(PacMan.isTouching(food17)){
food17.destroy()}

if(PacMan.isTouching(food18)){
food18.destroy()}

if(PacMan.isTouching(food19)){
food19.destroy()}

if(PacMan.isTouching(food20)){
food20.destroy()}

if(PacMan.isTouching(food21)){
food21.destroy()}

if(PacMan.isTouching(food22)){
food22.destroy()}

if(PacMan.isTouching(food23)){
food23.destroy()}

if(PacMan.isTouching(food24)){
food24.destroy()}

if(PacMan.isTouching(food25)){
food25.destroy()}

if(PacMan.isTouching(food26)){
food26.destroy()}

if(PacMan.isTouching(food27)){
food27.destroy()}

if(PacMan.isTouching(food28)){
food28.destroy()}

if(PacMan.isTouching(food29)){
food29.destroy()}

if(PacMan.isTouching(food30)){
food30.destroy()}

if(PacMan.isTouching(food31)){
food31.destroy()}

if(PacMan.isTouching(food32)){
food32.destroy()}

if(PacMan.isTouching(food33)){
food33.destroy()}

if(PacMan.isTouching(food34)){
food34.destroy()}

if(PacMan.isTouching(food35)){
food35.destroy()}

if(PacMan.isTouching(food36)){
food36.destroy()}

if(PacMan.isTouching(food37)){
food37.destroy()}

if(PacMan.isTouching(food38)){
food38.destroy()}

if(PacMan.isTouching(food39)){
food39.destroy()}

if(PacMan.isTouching(food40)){
food40.destroy()}

if(PacMan.isTouching(food41)){
food41.destroy()}

if(PacMan.isTouching(food42)){
food42.destroy()}

if(PacMan.isTouching(food43)){
food43.destroy()}

if(PacMan.isTouching(food44)){
food44.destroy()}

if(PacMan.isTouching(food45)){
food45.destroy()}

if(PacMan.isTouching(food46)){
food46.destroy()}

if(PacMan.isTouching(food47)){
food47.destroy()}

if(PacMan.isTouching(food48)){
food48.destroy()}

if(PacMan.isTouching(food49)){
food49.destroy()}

if(PacMan.isTouching(food50)){
food50.destroy()}

if(PacMan.isTouching(food51)){
food51.destroy()}

if(PacMan.isTouching(food52)){
food52.destroy()}

if(PacMan.isTouching(food53)){
food53.destroy()}

if(PacMan.isTouching(food54)){
food54.destroy()}

if(PacMan.isTouching(food55)){
food55.destroy()}

if(PacMan.isTouching(food56)){
food56.destroy()}

if(PacMan.isTouching(food57)){
food57.destroy()}

if(PacMan.isTouching(food58)){
food58.destroy()}

if(PacMan.isTouching(food59)){
food59.destroy()}

if(PacMan.isTouching(food60)){
food60.destroy()}

if(PacMan.isTouching(food61)){
food61.destroy()}

if(PacMan.isTouching(food62)){
food62.destroy()}

if(PacMan.isTouching(food63)){
food63.destroy()}

if(PacMan.isTouching(food64)){
food64.destroy()}

if(PacMan.isTouching(food65)){
food65.destroy()}

if(PacMan.isTouching(food66)){
food66.destroy()}

if(PacMan.isTouching(food67)){
food67.destroy()}

if(PacMan.isTouching(food68)){
food68.destroy()}

if(PacMan.isTouching(food69)){
food69.destroy()}

if(PacMan.isTouching(food70)){
food70.destroy()}

if(PacMan.isTouching(food71)){
food71.destroy()}

if(PacMan.isTouching(food72)){
food72.destroy()}

if(PacMan.isTouching(food73)){
food73.destroy()}

if(PacMan.isTouching(food74)){
food74.destroy()}

if(PacMan.isTouching(food75)){
food75.destroy()}

if(PacMan.isTouching(food76)){
food76.destroy()}

if(PacMan.isTouching(food77)){
food77.destroy()}

if(PacMan.isTouching(food78)){
food78.destroy()}

if(PacMan.isTouching(food79)){
food79.destroy()}

if(PacMan.isTouching(food80)){
food80.destroy()}

if(PacMan.isTouching(food81)){
food81.destroy()}

if(PacMan.isTouching(food82)){
food82.destroy()}

if(PacMan.isTouching(food83)){
food83.destroy()}

if(PacMan.isTouching(food84)){
food84.destroy()}

if(PacMan.isTouching(food85)){
food85.destroy()}

if(PacMan.isTouching(food86)){
food86.destroy()}

if(PacMan.isTouching(food87)){
food87.destroy()}

if(PacMan.isTouching(food88)){
food88.destroy()}

if(PacMan.isTouching(food89)){
food89.destroy()}

if(PacMan.isTouching(food90)){
food90.destroy()}

if(PacMan.isTouching(food91)){
food91.destroy()}

if(PacMan.isTouching(food92)){
food92.destroy()}

if(PacMan.isTouching(food93)){
food93.destroy()}

if(PacMan.isTouching(food94)){
food94.destroy()}

if(PacMan.isTouching(food95)){
food95.destroy()}

if(PacMan.isTouching(food96)){
food96.destroy()}

if(PacMan.isTouching(food97)){
food97.destroy()}

if(PacMan.isTouching(food98)){
food98.destroy()}

if(PacMan.isTouching(food99)){
food99.destroy()}

if(PacMan.isTouching(food100)){
food100.destroy()}


//next


if(PacMan.isTouching(food101)){
food101.destroy()}

if(PacMan.isTouching(food102)){
food102.destroy()}

if(PacMan.isTouching(food103)){
food103.destroy()}

if(PacMan.isTouching(food104)){
food104.destroy()}

if(PacMan.isTouching(food105)){
food105.destroy()}

if(PacMan.isTouching(food106)){
food106.destroy()}

if(PacMan.isTouching(food107)){
food107.destroy()}

if(PacMan.isTouching(food108)){
food108.destroy()}

if(PacMan.isTouching(food109)){
food109.destroy()}

if(PacMan.isTouching(food111)){
food111.destroy()}

if(PacMan.isTouching(food112)){
food112.destroy()}

if(PacMan.isTouching(food113)){
food113.destroy()}

if(PacMan.isTouching(food114)){
food114.destroy()}

if(PacMan.isTouching(food115)){
food115.destroy()}

if(PacMan.isTouching(food116)){
food116.destroy()}

if(PacMan.isTouching(food118)){
food118.destroy()}

if(PacMan.isTouching(food119)){
food119.destroy()}

if(PacMan.isTouching(food121)){
food121.destroy()}

if(PacMan.isTouching(food122)){
food122.destroy()}

if(PacMan.isTouching(food123)){
food123.destroy()}

if(PacMan.isTouching(food124)){
food124.destroy()}

if(PacMan.isTouching(food125)){
food125.destroy()}

if(PacMan.isTouching(food126)){
food126.destroy()}

if(PacMan.isTouching(food127)){
food127.destroy()}

if(PacMan.isTouching(food128)){
food128.destroy()}

if(PacMan.isTouching(food129)){
food129.destroy()}

if(PacMan.isTouching(food130)){
food130.destroy()}

if(PacMan.isTouching(food131)){
food131.destroy()}

if(PacMan.isTouching(food132)){
food132.destroy()}

if(PacMan.isTouching(food133)){
food133.destroy()}

if(PacMan.isTouching(food134)){
food134.destroy()}

if(PacMan.isTouching(food135)){
food135.destroy()}

if(PacMan.isTouching(food136)){
food136.destroy()}

if(PacMan.isTouching(food137)){
food137.destroy()}

if(PacMan.isTouching(food138)){
food138.destroy()}

if(PacMan.isTouching(food139)){
food139.destroy()}

if(PacMan.isTouching(food140)){
food140.destroy()}

if(PacMan.isTouching(food141)){
food141.destroy()}

if(PacMan.isTouching(food142)){
food142.destroy()}

if(PacMan.isTouching(food143)){
food143.destroy()}

if(PacMan.isTouching(food144)){
food144.destroy()}

if(PacMan.isTouching(food145)){
food145.destroy()}

if(PacMan.isTouching(food146)){
food146.destroy()}

if(PacMan.isTouching(food147)){
food147.destroy()}

if(PacMan.isTouching(food148)){
food48.destroy()}

if(PacMan.isTouching(food149)){
food49.destroy()}

if(PacMan.isTouching(food150)){
food50.destroy()}

if(PacMan.isTouching(food151)){
food151.destroy()}

if(PacMan.isTouching(food152)){
food152.destroy()}

if(PacMan.isTouching(food153)){
food153.destroy()}

if(PacMan.isTouching(food154)){
food154.destroy()}

if(PacMan.isTouching(food155)){
food155.destroy()}

if(PacMan.isTouching(food156)){
food156.destroy()}

if(PacMan.isTouching(food157)){
food157.destroy()}

if(PacMan.isTouching(food158)){
food158.destroy()}

if(PacMan.isTouching(food159)){
food159.destroy()}

if(PacMan.isTouching(food160)){
food160.destroy()}

if(PacMan.isTouching(food161)){
food161.destroy()}

if(PacMan.isTouching(food162)){
food162.destroy()}

if(PacMan.isTouching(food163)){
food163.destroy()}

if(PacMan.isTouching(food164)){
food164.destroy()}

if(PacMan.isTouching(food165)){
food165.destroy()}

if(PacMan.isTouching(food166)){
food166.destroy()}

if(PacMan.isTouching(food167)){
food167.destroy()}

if(PacMan.isTouching(food168)){
food168.destroy()}

if(PacMan.isTouching(food169)){
food169.destroy()}

if(PacMan.isTouching(food170)){
food170.destroy()}

if(PacMan.isTouching(food171)){
food171.destroy()}

if(PacMan.isTouching(food172)){
food172.destroy()}

if(PacMan.isTouching(food173)){
food173.destroy()}

if(PacMan.isTouching(food174)){
food174.destroy()}

if(PacMan.isTouching(food175)){
food175.destroy()}

if(PacMan.isTouching(food176)){
food176.destroy()}

if(PacMan.isTouching(food177)){
food177.destroy()}

if(PacMan.isTouching(food178)){
food178.destroy()}

if(PacMan.isTouching(food179)){
food179.destroy()}

if(PacMan.isTouching(food180)){
food180.destroy()}

if(PacMan.isTouching(food181)){
food181.destroy()}

if(PacMan.isTouching(food182)){
food182.destroy()}

if(PacMan.isTouching(food183)){
food183.destroy()}

if(PacMan.isTouching(food184)){
food184.destroy()}

if(PacMan.isTouching(food185)){
food185.destroy()}

if(PacMan.isTouching(food186)){
food186.destroy()}

if(PacMan.isTouching(food187)){
food187.destroy()}

if(PacMan.isTouching(food188)){
food188.destroy()}

if(PacMan.isTouching(food189)){
food189.destroy()}

if(PacMan.isTouching(food190)){
food190.destroy()}

if(PacMan.isTouching(food191)){
food191.destroy()}

if(PacMan.isTouching(food192)){
food192.destroy()}

if(PacMan.isTouching(food193)){
food193.destroy()}

if(PacMan.isTouching(food194)){
food194.destroy()}

if(PacMan.isTouching(food195)){
food195.destroy()}

if(PacMan.isTouching(food196)){
food196.destroy()}

if(PacMan.isTouching(food197)){
food197.destroy()}

if(PacMan.isTouching(food198)){
food198.destroy()}

if(PacMan.isTouching(food199)){
food199.destroy()}

if(PacMan.isTouching(food200)){
food200.destroy()}

if(PacMan.isTouching(food201)){
food201.destroy()}

if(PacMan.isTouching(food202)){
food202.destroy()}

if(PacMan.isTouching(food203)){
food203.destroy()}

if(PacMan.isTouching(food204)){
food204.destroy()}

if(PacMan.isTouching(food205)){
food205.destroy()}

if(PacMan.isTouching(food206)){
food206.destroy()}

if(PacMan.isTouching(food207)){
food207.destroy()}

if(PacMan.isTouching(food208)){
food208.destroy()}

if(PacMan.isTouching(food209)){
food209.destroy()}

if(PacMan.isTouching(food211)){
food211.destroy()}



food1.setCollider("rectangle",0,0,30,30)
food2.setCollider("rectangle",0,0,30,30)
food3.setCollider("rectangle",0,0,30,30)
food4.setCollider("rectangle",0,0,30,30)
food5.setCollider("rectangle",0,0,30,30)
food6.setCollider("rectangle",0,0,30,30)
food7.setCollider("rectangle",0,0,30,30)
food8.setCollider("rectangle",0,0,30,30)
food9.setCollider("rectangle",0,0,30,30)
food10.setCollider("rectangle",0,0,30,30)
food11.setCollider("rectangle",0,0,30,30)
food12.setCollider("rectangle",0,0,30,30)
food13.setCollider("rectangle",0,0,30,30)
food14.setCollider("rectangle",0,0,30,30)
food15.setCollider("rectangle",0,0,30,30)
food16.setCollider("rectangle",0,0,30,30)
food17.setCollider("rectangle",0,0,30,30)
food18.setCollider("rectangle",0,0,30,30)
food19.setCollider("rectangle",0,0,30,30)
food20.setCollider("rectangle",0,0,30,30)
food21.setCollider("rectangle",0,0,30,30)
food22.setCollider("rectangle",0,0,30,30)
food23.setCollider("rectangle",0,0,30,30)
food24.setCollider("rectangle",0,0,30,30)
food25.setCollider("rectangle",0,0,30,30)
food26.setCollider("rectangle",0,0,30,30)
food27.setCollider("rectangle",0,0,30,30)
food28.setCollider("rectangle",0,0,30,30)
food29.setCollider("rectangle",0,0,30,30)
food30.setCollider("rectangle",0,0,30,30)
food31.setCollider("rectangle",0,0,30,30)
food32.setCollider("rectangle",0,0,30,30)
food33.setCollider("rectangle",0,0,30,30)
food34.setCollider("rectangle",0,0,30,30)
food35.setCollider("rectangle",0,0,30,30)
food36.setCollider("rectangle",0,0,30,30)
food37.setCollider("rectangle",0,0,30,30)
food38.setCollider("rectangle",0,0,30,30)
food39.setCollider("rectangle",0,0,30,30)
food40.setCollider("rectangle",0,0,30,30)
food40.setCollider("rectangle",0,0,30,30)
food41.setCollider("rectangle",0,0,30,30)
food42.setCollider("rectangle",0,0,30,30)
food43.setCollider("rectangle",0,0,30,30)
food44.setCollider("rectangle",0,0,30,30)
food45.setCollider("rectangle",0,0,30,30)
food46.setCollider("rectangle",0,0,30,30)
food47.setCollider("rectangle",0,0,30,30)
food48.setCollider("rectangle",0,0,30,30)
food49.setCollider("rectangle",0,0,30,30)
food50.setCollider("rectangle",0,0,30,30)
food51.setCollider("rectangle",0,0,30,30)
food52.setCollider("rectangle",0,0,30,30)
food53.setCollider("rectangle",0,0,30,30)
food54.setCollider("rectangle",0,0,30,30)
food55.setCollider("rectangle",0,0,30,30)
food56.setCollider("rectangle",0,0,30,30)
food57.setCollider("rectangle",0,0,30,30)
food58.setCollider("rectangle",0,0,30,30)
food59.setCollider("rectangle",0,0,30,30)
food60.setCollider("rectangle",0,0,30,30)
food61.setCollider("rectangle",0,0,30,30)
food62.setCollider("rectangle",0,0,30,30)
food63.setCollider("rectangle",0,0,30,30)
food64.setCollider("rectangle",0,0,30,30)
food65.setCollider("rectangle",0,0,30,30)
food66.setCollider("rectangle",0,0,30,30)
food67.setCollider("rectangle",0,0,30,30)
food68.setCollider("rectangle",0,0,30,30)
food69.setCollider("rectangle",0,0,30,30)
food70.setCollider("rectangle",0,0,30,30)
food71.setCollider("rectangle",0,0,30,30)
food72.setCollider("rectangle",0,0,30,30)
food73.setCollider("rectangle",0,0,30,30)
food74.setCollider("rectangle",0,0,30,30)
food75.setCollider("rectangle",0,0,30,30)
food76.setCollider("rectangle",0,0,30,30)
food77.setCollider("rectangle",0,0,30,30)
food78.setCollider("rectangle",0,0,30,30)
food79.setCollider("rectangle",0,0,30,30)
food80.setCollider("rectangle",0,0,30,30)
food81.setCollider("rectangle",0,0,30,30)
food82.setCollider("rectangle",0,0,30,30)
food83.setCollider("rectangle",0,0,30,30)
food84.setCollider("rectangle",0,0,30,30)
food85.setCollider("rectangle",0,0,30,30)
food86.setCollider("rectangle",0,0,30,30)
food87.setCollider("rectangle",0,0,30,30)
food88.setCollider("rectangle",0,0,30,30)
food89.setCollider("rectangle",0,0,30,30)
food90.setCollider("rectangle",0,0,30,30)
food91.setCollider("rectangle",0,0,30,30)
food92.setCollider("rectangle",0,0,30,30)
food93.setCollider("rectangle",0,0,30,30)
food94.setCollider("rectangle",0,0,30,30)
food95.setCollider("rectangle",0,0,30,30)
food96.setCollider("rectangle",0,0,30,30)
food97.setCollider("rectangle",0,0,30,30)
food98.setCollider("rectangle",0,0,30,30)
food99.setCollider("rectangle",0,0,30,30)
food100.setCollider("rectangle",0,0,30,30)


food101.setCollider("rectangle",0,0,30,30)
food102.setCollider("rectangle",0,0,30,30)
food103.setCollider("rectangle",0,0,30,30)
food104.setCollider("rectangle",0,0,30,30)
food105.setCollider("rectangle",0,0,30,30)
food106.setCollider("rectangle",0,0,30,30)
food107.setCollider("rectangle",0,0,30,30)
food108.setCollider("rectangle",0,0,30,30)
food109.setCollider("rectangle",0,0,30,30)
food111.setCollider("rectangle",0,0,30,30)
food112.setCollider("rectangle",0,0,30,30)
food113.setCollider("rectangle",0,0,30,30)
food114.setCollider("rectangle",0,0,30,30)
food115.setCollider("rectangle",0,0,30,30)
food116.setCollider("rectangle",0,0,30,30)
food118.setCollider("rectangle",0,0,30,30)
food119.setCollider("rectangle",0,0,30,30)
food121.setCollider("rectangle",0,0,30,30)
food122.setCollider("rectangle",0,0,30,30)
food123.setCollider("rectangle",0,0,30,30)
food124.setCollider("rectangle",0,0,30,30)
food125.setCollider("rectangle",0,0,30,30)
food126.setCollider("rectangle",0,0,30,30)
food127.setCollider("rectangle",0,0,30,30)
food128.setCollider("rectangle",0,0,30,30)
food129.setCollider("rectangle",0,0,30,30)
food130.setCollider("rectangle",0,0,30,30)
food131.setCollider("rectangle",0,0,30,30)
food132.setCollider("rectangle",0,0,30,30)
food133.setCollider("rectangle",0,0,30,30)
food134.setCollider("rectangle",0,0,30,30)
food135.setCollider("rectangle",0,0,30,30)
food136.setCollider("rectangle",0,0,30,30)
food137.setCollider("rectangle",0,0,30,30)
food138.setCollider("rectangle",0,0,30,30)
food139.setCollider("rectangle",0,0,30,30)
food140.setCollider("rectangle",0,0,30,30)
food140.setCollider("rectangle",0,0,30,30)
food141.setCollider("rectangle",0,0,30,30)
food142.setCollider("rectangle",0,0,30,30)
food143.setCollider("rectangle",0,0,30,30)
food144.setCollider("rectangle",0,0,30,30)
food145.setCollider("rectangle",0,0,30,30)
food146.setCollider("rectangle",0,0,30,30)
food147.setCollider("rectangle",0,0,30,30)
food148.setCollider("rectangle",0,0,30,30)
food149.setCollider("rectangle",0,0,30,30)
food150.setCollider("rectangle",0,0,30,30)
food151.setCollider("rectangle",0,0,30,30)
food152.setCollider("rectangle",0,0,30,30)
food153.setCollider("rectangle",0,0,30,30)
food154.setCollider("rectangle",0,0,30,30)
food155.setCollider("rectangle",0,0,30,30)
food156.setCollider("rectangle",0,0,30,30)
food157.setCollider("rectangle",0,0,30,30)
food158.setCollider("rectangle",0,0,30,30)
food159.setCollider("rectangle",0,0,30,30)
food160.setCollider("rectangle",0,0,30,30)
food161.setCollider("rectangle",0,0,30,30)
food162.setCollider("rectangle",0,0,30,30)
food163.setCollider("rectangle",0,0,30,30)
food164.setCollider("rectangle",0,0,30,30)
food165.setCollider("rectangle",0,0,30,30)
food166.setCollider("rectangle",0,0,30,30)
food167.setCollider("rectangle",0,0,30,30)
food168.setCollider("rectangle",0,0,30,30)
food169.setCollider("rectangle",0,0,30,30)
food170.setCollider("rectangle",0,0,30,30)
food171.setCollider("rectangle",0,0,30,30)
food172.setCollider("rectangle",0,0,30,30)
food173.setCollider("rectangle",0,0,30,30)
food174.setCollider("rectangle",0,0,30,30)
food175.setCollider("rectangle",0,0,30,30)
food176.setCollider("rectangle",0,0,30,30)
food177.setCollider("rectangle",0,0,30,30)
food178.setCollider("rectangle",0,0,30,30)
food179.setCollider("rectangle",0,0,30,30)
food180.setCollider("rectangle",0,0,30,30)
food181.setCollider("rectangle",0,0,30,30)
food182.setCollider("rectangle",0,0,30,30)
food183.setCollider("rectangle",0,0,30,30)
food184.setCollider("rectangle",0,0,30,30)
food185.setCollider("rectangle",0,0,30,30)
food186.setCollider("rectangle",0,0,30,30)
food187.setCollider("rectangle",0,0,30,30)
food188.setCollider("rectangle",0,0,30,30)
food189.setCollider("rectangle",0,0,30,30)
food190.setCollider("rectangle",0,0,30,30)
food191.setCollider("rectangle",0,0,30,30)
food192.setCollider("rectangle",0,0,30,30)
food193.setCollider("rectangle",0,0,30,30)
food194.setCollider("rectangle",0,0,30,30)
food195.setCollider("rectangle",0,0,30,30)
food196.setCollider("rectangle",0,0,30,30)
food197.setCollider("rectangle",0,0,30,30)
food198.setCollider("rectangle",0,0,30,30)
food199.setCollider("rectangle",0,0,30,30)
food200.setCollider("rectangle",0,0,30,30)
food201.setCollider("rectangle",0,0,30,30)
food202.setCollider("rectangle",0,0,30,30)
food203.setCollider("rectangle",0,0,30,30)
food204.setCollider("rectangle",0,0,30,30)
food205.setCollider("rectangle",0,0,30,30)
food206.setCollider("rectangle",0,0,30,30)
food207.setCollider("rectangle",0,0,30,30)
food208.setCollider("rectangle",0,0,30,30)
food209.setCollider("rectangle",0,0,30,30)
food210.setCollider("rectangle",0,0,30,30)
food211.setCollider("rectangle",0,0,30,30)




drawSprites()


}
