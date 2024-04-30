function setup() {
  createCanvas(400, 400);

}

function preload(){
  mytable = loadTable('WaterBottlesInADay.csv','csv','header');
  
}

function drawRowData(){
  let d = 25;
  let weekColour = 0;
  let mondayCount = 0;
  let tuesdayCount = 0;
  let wednesdayCount = 0;
  let thursdayCount = 0;
  let fridayCount = 0;
  let saturdayCount = 0;
  let sundayCount = 0;

  text("Bottles of Water in A Day in a Month", width/4, 50);
  y=100;
  for(rowNumber = 0; rowNumber < mytable.getRowCount(); rowNumber++){
    weekColour += 64;
    x = 75;
    fill(0,0,weekColour);
    
    let row = mytable.getRow(rowNumber);

    weekNumber = row.get("Week");
    text(weekNumber, 10, y+10);
    mondayCount += int(row.get("Monday"));
    //text(mondayCount, 300, 300)
    circle(x, y, mondayCount);
    text(mondayCount, x, y+25);
    x += 50;
    tuesdayCount += int(row.get("Tuesday"));
    circle(x, y, tuesdayCount);
    text(tuesdayCount, x, y+25);
    x += 50;
    wednesdayCount += int(row.get("Wednesday"));
    circle(x, y, wednesdayCount);
    text(wednesdayCount, x, y+25);
    x += 50;
    thursdayCount += int(row.get("Thursday"));
    circle(x, y, thursdayCount);
    text(thursdayCount, x, y+25);
    x += 50;
    fridayCount += int(row.get("Friday"));
    circle(x, y, fridayCount);
    text(fridayCount, x, y+25);
    x += 50;
    saturdayCount += int(row.get("Saturday"));
    circle(x, y, saturdayCount);
    text(saturdayCount, x, y+25);
    x += 50;
    sundayCount += int(row.get("Sunday"));
    circle(x, y, sundayCount);
    text(sundayCount, x, y+25);
    y+=50;
  }
}

function draw() {
  background(256);
  drawRowData();
}
