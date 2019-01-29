var squareOne = document.getElementById("squareOne");
var squareTwo = document.getElementById("squareTwo");
var squareThree = document.getElementById("squareThree");
var squareFour = document.getElementById("squareFour");
var squareFive = document.getElementById("squareFive");
var squareSix = document.getElementById("squareSix");
var squareSeven = document.getElementById("squareSeven");
var squareEight = document.getElementById("squareEight");
var squareNine = document.getElementById("squareNine");
var body = document.getElementsByTagName("BODY");
var reset = document.getElementById("reset");
var reMatch = document.getElementById("reMatch");
var displayOne = document.getElementById("scoreOne");
var displayTwo = document.getElementById("scoreTwo");
var clicked = 0;
var player=0;
var scorePOne = 0;
var scorePTwo = 0;
var data = [];
for(var i=0;i<9;i++){
	data[i]=2;
}
reset.addEventListener("click",function(){
	scorePTwo=0;
	scorePOne=0;
	displayOne.textContent=scorePOne;
	displayTwo.textContent=scorePTwo;
	squareOne.style.backgroundColor="#282828";
	squareTwo.style.backgroundColor="#282828";
	squareThree.style.backgroundColor="#282828";
	squareFour.style.backgroundColor="#282828";
	squareFive.style.backgroundColor="#282828";
	squareSix.style.backgroundColor="#282828";
	squareSeven.style.backgroundColor="#282828";
	squareEight.style.backgroundColor="#282828";
	squareNine.style.backgroundColor="#282828";
	for(var i=0;i<9;i++){
	data[i]=2;
	}
	clicked=0;
	player=0;
})
reMatch.addEventListener("click",function(){
	squareOne.style.backgroundColor="#282828";
	squareTwo.style.backgroundColor="#282828";
	squareThree.style.backgroundColor="#282828";
	squareFour.style.backgroundColor="#282828";
	squareFive.style.backgroundColor="#282828";
	squareSix.style.backgroundColor="#282828";
	squareSeven.style.backgroundColor="#282828";
	squareEight.style.backgroundColor="#282828";
	squareNine.style.backgroundColor="#282828";
	for(var i=0;i<9;i++){
	data[i]=2;
	}
	clicked=0;
	player=0;
})

squareOne.addEventListener("click", function(){ 
if((player==0)&&(data[0]==2)){
data[0]=0;
squareOne.style.backgroundColor="#b3ff99";
clicked++;
player=1;
 }
else if((player==1)&&(data[0]==2)){
 	data[0]=1;
 	squareOne.style.backgroundColor="#80bfff";
	clicked++;
	player=0;
 }
 won();
});

squareTwo.addEventListener("click", function(){ 
if((player==0)&&(data[1]==2)){
	data[1]=0;
	squareTwo.style.backgroundColor="#b3ff99";
	clicked++;
	player=1;
 }
 else if((player==1)&&(data[1]==2)){
 	data[1]=1;
 	squareTwo.style.backgroundColor="#80bfff";
	clicked++;
	player=0;
 }
 won();
});

squareThree.addEventListener("click", function(){ 
if((player==0)&&(data[2]==2)){
	data[2]=0;
	squareThree.style.backgroundColor="#b3ff99";
	clicked++;
	player=1;
 }
 else if((player==1)&&(data[2]==2)){
 	data[2]=1;
 	squareThree.style.backgroundColor="#80bfff";
	clicked++;
	player=0;
 }
 won();
});

squareFour.addEventListener("click", function(){ 
if((player==0)&&(data[3]==2)){
	data[3]=0;
	squareFour.style.backgroundColor="#b3ff99";
	clicked++;
	player=1;
 }
 else if((player==1)&&(data[3]==2)){
 	data[3]=1;
 	squareFour.style.backgroundColor="#80bfff";
	clicked++;
	player=0;
 }
 won();
});

squareFive.addEventListener("click", function(){ 
if((player==0)&&(data[4]==2)){
	data[4]=0;
	squareFive.style.backgroundColor="#b3ff99";
	clicked++;
	player=1;
 }
 else if((player==1)&&(data[4]==2)){
 	data[4]=1;
 	squareFive.style.backgroundColor="#80bfff";
	clicked++;
	player=0;
 }
 won();
});

squareSix.addEventListener("click", function(){ 
if((player==0)&&(data[5]==2)){
	data[5]=0;
	squareSix.style.backgroundColor="#b3ff99";
	clicked++;
	player=1;
 }
 else if((player==1)&&(data[5]==2)){
 	data[5]=1;
 	squareSix.style.backgroundColor="#80bfff";
	clicked++;
	player=0;
 }
 won();
});

squareSeven.addEventListener("click", function(){ 
if((player==0)&&(data[6]==2)){
	data[6]=0;
	squareSeven.style.backgroundColor="#b3ff99";
	clicked++;
	player=1;
 }
 else if((player==1)&&(data[6]==2)){
 	data[6]=1;
 	squareSeven.style.backgroundColor="#80bfff";
	clicked++;
	player=0;
 }
 won();
});

squareEight.addEventListener("click", function(){ 
if((player==0)&&(data[7]==2)){
	data[7]=0;
	squareEight.style.backgroundColor="#b3ff99";
	clicked++;
	player=1;
 }
 else if((player==1)&&(data[7]==2)){
 	data[7]=1;
 	squareEight.style.backgroundColor="#80bfff";
	clicked++;
	player=0;
 }
 won();
});

squareNine.addEventListener("click", function(){ 
if((player==0)&&(data[8]==2)){
	data[8]=0;
	squareNine.style.backgroundColor="#b3ff99";
	clicked++;
	player=1;
 }
 else if((player==1)&&(data[8]==2)){
 	data[8]=1;
 	squareNine.style.backgroundColor="#80bfff";
	clicked++;
	player=0;
 }
 won();
});

function won(){
if(clicked>4){
	if((data[0]==data[1])&&(data[1]==data[2])&&(data[0]==0))
	{
		scorePOne++;
		displayOne.textContent=scorePOne;
		squareOne.style.backgroundColor="#b3ff99";
		squareTwo.style.backgroundColor="#b3ff99";
		squareThree.style.backgroundColor="#b3ff99";
		squareFour.style.backgroundColor="#b3ff99";
		squareFive.style.backgroundColor="#b3ff99";
		squareSix.style.backgroundColor="#b3ff99";
		squareSeven.style.backgroundColor="#b3ff99";
		squareEight.style.backgroundColor="#b3ff99";
		squareNine.style.backgroundColor="#b3ff99";
	}
	else if((data[0]==data[1])&&(data[1]==data[2])&&(data[0]==1))
	{
		scorePTwo++;
		displayTwo.textContent=scorePTwo;
		squareOne.style.backgroundColor="#80bfff";
		squareTwo.style.backgroundColor="#80bfff";
		squareThree.style.backgroundColor="#80bfff";
		squareFour.style.backgroundColor="#80bfff";
		squareFive.style.backgroundColor="#80bfff";
		squareSix.style.backgroundColor="#80bfff";
		squareSeven.style.backgroundColor="#80bfff";
		squareEight.style.backgroundColor="#80bfff";
		squareNine.style.backgroundColor="#80bfff";
	}
	else if((data[0]==data[3])&&(data[3]==data[6])&&(data[0]==0))
	{
		scorePOne++;
		displayOne.textContent=scorePOne;
		squareOne.style.backgroundColor="#b3ff99";
		squareTwo.style.backgroundColor="#b3ff99";
		squareThree.style.backgroundColor="#b3ff99";
		squareFour.style.backgroundColor="#b3ff99";
		squareFive.style.backgroundColor="#b3ff99";
		squareSix.style.backgroundColor="#b3ff99";
		squareSeven.style.backgroundColor="#b3ff99";
		squareEight.style.backgroundColor="#b3ff99";
		squareNine.style.backgroundColor="#b3ff99";
	}
	else if((data[0]==data[3])&&(data[3]==data[6])&&(data[0]==1))
	{
		scorePTwo++;
		displayTwo.textContent=scorePTwo;
		squareOne.style.backgroundColor="#80bfff";
		squareTwo.style.backgroundColor="#80bfff";
		squareThree.style.backgroundColor="#80bfff";
		squareFour.style.backgroundColor="#80bfff";
		squareFive.style.backgroundColor="#80bfff";
		squareSix.style.backgroundColor="#80bfff";
		squareSeven.style.backgroundColor="#80bfff";
		squareEight.style.backgroundColor="#80bfff";
		squareNine.style.backgroundColor="#80bfff";
	}
	else if((data[3]==data[4])&&(data[4]==data[5])&&(data[3]==0))
	{
		scorePOne++;
		displayOne.textContent=scorePOne;
		squareOne.style.backgroundColor="#b3ff99";
		squareTwo.style.backgroundColor="#b3ff99";
		squareThree.style.backgroundColor="#b3ff99";
		squareFour.style.backgroundColor="#b3ff99";
		squareFive.style.backgroundColor="#b3ff99";
		squareSix.style.backgroundColor="#b3ff99";
		squareSeven.style.backgroundColor="#b3ff99";
		squareEight.style.backgroundColor="#b3ff99";
		squareNine.style.backgroundColor="#b3ff99";
	}
	else if((data[3]==data[4])&&(data[4]==data[5])&&(data[3]==1))
	{
		scorePTwo++;
		displayTwo.textContent=scorePTwo;
		squareOne.style.backgroundColor="#80bfff";
		squareTwo.style.backgroundColor="#80bfff";
		squareThree.style.backgroundColor="#80bfff";
		squareFour.style.backgroundColor="#80bfff";
		squareFive.style.backgroundColor="#80bfff";
		squareSix.style.backgroundColor="#80bfff";
		squareSeven.style.backgroundColor="#80bfff";
		squareEight.style.backgroundColor="#80bfff";
		squareNine.style.backgroundColor="#80bfff";
	}
	else if((data[6]==data[7])&&(data[7]==data[8])&&(data[6]==1))
	{
		scorePTwo++;
		displayTwo.textContent=scorePTwo;
		squareOne.style.backgroundColor="#80bfff";
		squareTwo.style.backgroundColor="#80bfff";
		squareThree.style.backgroundColor="#80bfff";
		squareFour.style.backgroundColor="#80bfff";
		squareFive.style.backgroundColor="#80bfff";
		squareSix.style.backgroundColor="#80bfff";
		squareSeven.style.backgroundColor="#80bfff";
		squareEight.style.backgroundColor="#80bfff";
		squareNine.style.backgroundColor="#80bfff";
	}
	else if((data[6]==data[7])&&(data[7]==data[8])&&(data[6]==0))
	{
		scorePOne++;
		displayOne.textContent=scorePOne;
		squareOne.style.backgroundColor="#b3ff99";
		squareTwo.style.backgroundColor="#b3ff99";
		squareThree.style.backgroundColor="#b3ff99";
		squareFour.style.backgroundColor="#b3ff99";
		squareFive.style.backgroundColor="#b3ff99";
		squareSix.style.backgroundColor="#b3ff99";
		squareSeven.style.backgroundColor="#b3ff99";
		squareEight.style.backgroundColor="#b3ff99";
		squareNine.style.backgroundColor="#b3ff99";
	}
	else if((data[1]==data[4])&&(data[4]==data[7])&&(data[1]==0))
	{
		scorePOne++;
		displayOne.textContent=scorePOne;
		squareOne.style.backgroundColor="#b3ff99";
		squareTwo.style.backgroundColor="#b3ff99";
		squareThree.style.backgroundColor="#b3ff99";
		squareFour.style.backgroundColor="#b3ff99";
		squareFive.style.backgroundColor="#b3ff99";
		squareSix.style.backgroundColor="#b3ff99";
		squareSeven.style.backgroundColor="#b3ff99";
		squareEight.style.backgroundColor="#b3ff99";
		squareNine.style.backgroundColor="#b3ff99";
	}
	else if((data[1]==data[4])&&(data[4]==data[7])&&(data[1]==1))
	{
		scorePTwo++;
		displayTwo.textContent=scorePTwo;
		squareOne.style.backgroundColor="#80bfff";
		squareTwo.style.backgroundColor="#80bfff";
		squareThree.style.backgroundColor="#80bfff";
		squareFour.style.backgroundColor="#80bfff";
		squareFive.style.backgroundColor="#80bfff";
		squareSix.style.backgroundColor="#80bfff";
		squareSeven.style.backgroundColor="#80bfff";
		squareEight.style.backgroundColor="#80bfff";
		squareNine.style.backgroundColor="#80bfff";
	}
	else if((data[2]==data[5])&&(data[5]==data[8])&&(data[2]==0))
	{
		scorePOne++;
		displayOne.textContent=scorePOne;
		squareOne.style.backgroundColor="#b3ff99";
		squareTwo.style.backgroundColor="#b3ff99";
		squareThree.style.backgroundColor="#b3ff99";
		squareFour.style.backgroundColor="#b3ff99";
		squareFive.style.backgroundColor="#b3ff99";
		squareSix.style.backgroundColor="#b3ff99";
		squareSeven.style.backgroundColor="#b3ff99";
		squareEight.style.backgroundColor="#b3ff99";
		squareNine.style.backgroundColor="#b3ff99";
	}
	else if((data[2]==data[5])&&(data[5]==data[8])&&(data[2]==1))
	{
		scorePTwo++;
		displayTwo.textContent=scorePTwo;
		squareOne.style.backgroundColor="#80bfff";
		squareTwo.style.backgroundColor="#80bfff";
		squareThree.style.backgroundColor="#80bfff";
		squareFour.style.backgroundColor="#80bfff";
		squareFive.style.backgroundColor="#80bfff";
		squareSix.style.backgroundColor="#80bfff";
		squareSeven.style.backgroundColor="#80bfff";
		squareEight.style.backgroundColor="#80bfff";
		squareNine.style.backgroundColor="#80bfff";
	}
	else if((data[0]==data[4])&&(data[4]==data[8])&&(data[0]==0))
	{
		scorePOne++;
		displayOne.textContent=scorePOne;
		squareOne.style.backgroundColor="#b3ff99";
		squareTwo.style.backgroundColor="#b3ff99";
		squareThree.style.backgroundColor="#b3ff99";
		squareFour.style.backgroundColor="#b3ff99";
		squareFive.style.backgroundColor="#b3ff99";
		squareSix.style.backgroundColor="#b3ff99";
		squareSeven.style.backgroundColor="#b3ff99";
		squareEight.style.backgroundColor="#b3ff99";
		squareNine.style.backgroundColor="#b3ff99";
	}
	else if((data[0]==data[4])&&(data[4]==data[8])&&(data[0]==1))
	{
		scorePTwo++;
		displayTwo.textContent=scorePTwo;
		squareOne.style.backgroundColor="#80bfff";
		squareTwo.style.backgroundColor="#80bfff";
		squareThree.style.backgroundColor="#80bfff";
		squareFour.style.backgroundColor="#80bfff";
		squareFive.style.backgroundColor="#80bfff";
		squareSix.style.backgroundColor="#80bfff";
		squareSeven.style.backgroundColor="#80bfff";
		squareEight.style.backgroundColor="#80bfff";
		squareNine.style.backgroundColor="#80bfff";
	}
	else if((data[2]==data[4])&&(data[4]==data[6])&&(data[2]==0))
	{
		scorePOne++;
		displayOne.textContent=scorePOne;
		squareOne.style.backgroundColor="#b3ff99";
		squareTwo.style.backgroundColor="#b3ff99";
		squareThree.style.backgroundColor="#b3ff99";
		squareFour.style.backgroundColor="#b3ff99";
		squareFive.style.backgroundColor="#b3ff99";
		squareSix.style.backgroundColor="#b3ff99";
		squareSeven.style.backgroundColor="#b3ff99";
		squareEight.style.backgroundColor="#b3ff99";
		squareNine.style.backgroundColor="#b3ff99";
	}
	else if((data[2]==data[4])&&(data[4]==data[6])&&(data[2]==1))
	{
		scorePTwo++;
		displayTwo.textContent=scorePTwo;
		squareOne.style.backgroundColor="#80bfff";
		squareTwo.style.backgroundColor="#80bfff";
		squareThree.style.backgroundColor="#80bfff";
		squareFour.style.backgroundColor="#80bfff";
		squareFive.style.backgroundColor="#80bfff";
		squareSix.style.backgroundColor="#80bfff";
		squareSeven.style.backgroundColor="#80bfff";
		squareEight.style.backgroundColor="#80bfff";
		squareNine.style.backgroundColor="#80bfff";
	}
}
}
