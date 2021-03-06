document.addEventListener("DOMContentLoaded", function (){
   
   var clockDiv = document.querySelector("#clockDiv");
   var clockBtn = document.querySelector("#clockBtn");
   
   function printClockDiv(a){
       clockDiv.innerHTML = a;
   }
  var clockOneFlag = ""; 
   function clock(){
       var t = new Date();
       var y = t.getFullYear();
       var months = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
       var month = t.getMonth();
       var dNum = t.getDate();
       var d = t.getDay();
       var days = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
       var h = t.getHours();
       var m = t.getMinutes();
       var s = t.getSeconds();
       
	   //analog clock begin

	  //clock One
	  (function(h, m, s, clockOneFlag){
		  if(clockOneFlag != 1){
		var oneSecondsHand = document.querySelector('.clockOne .seconds');
		var oneMinutesHand = document.querySelector('.clockOne .minutes');
		var oneHoursHand = document.querySelector('.clockOne .hours');
		
		oneSecondsHand.style.animationDelay = '-' + s + 's'
		oneMinutesHand.style.animationDelay = '-' + m*60 + 's'
		oneHoursHand.style.animationDelay = '-' + (h-7)*3600 + 's'
		  }
	  })(h, m ,s, clockOneFlag)
		clockOneFlag = 1;
		
	   //clock Two
	   	var twoSecondsHand = document.querySelector('.clockTwo .seconds');
		var twoMinutesHand = document.querySelector('.clockTwo .minutes');
		var twoHoursHand = document.querySelector('.clockTwo .hours');
		
		twoSecondsHand.style.transform = "rotate(" + s*6 + "deg)";
		twoMinutesHand.style.transform = "rotate(" + m*6 + "deg)";
		twoHoursHand.style.transform = "rotate(" + h*30 + "deg)";
	   
	   //analog clock end
       
       return twoNum(h) + ":" + twoNum(m) + ":"+ twoNum(s) + ", " + days[d] + " " + dNum + " " + months[month] + " " +y;
   }
   
   function twoNum(a){
       (a<10) ? a = "0"+a : a;
       return a;
   }
   
   function refresh(){
       printClockDiv(clock(clockOneFlag));
       setTimeout(refresh, 1000);
   }
   
   refresh();
   
   function clockBtnFunc(){
       clockDiv.classList.toggle("hide0");
   }
   
   clockBtn.addEventListener("click", clockBtnFunc);
   
   // TO DO LIST
   
   var toDoInput = document.querySelector("#toDoInput");
   var toDoUl = document.querySelector("#toDoUl");
   var toDoBtn = document.querySelector("#toDoBtn");
   
   function toDoFunc(a){
       
       if (toDoInput.value){
       var newLi = document.createElement("li");
       toDoUl.appendChild(newLi);
       newLi.innerHTML = "<label></label> " + "<button class='deleteBtn'>usuń</button>";
	   var newAllLabel = document.querySelectorAll("label")
	   newAllLabel[newAllLabel.length-1].innerText = toDoInput.value;
	   
	   var newInput = document.createElement("input");
	   newInput.type = "checkbox";
	   newInput.className = "checkbox";
	   newAllLabel[newAllLabel.length-1].appendChild(newInput);
	   
       toDoInput.value = "";

       }
       
		// deneteBtn event
       var deleteBtn=document.querySelectorAll(".deleteBtn");
       for(i=0;i<deleteBtn.length;i++){
           deleteBtn[i].addEventListener("click", function (){
               this.parentNode.remove();
			   remAllBtnFunc();
           });
       }
       
       var checkbox=document.querySelectorAll(".checkbox");
       var checkboxFlag = document.querySelectorAll(".checkboxDone").length;

       
       for (i=0; i<checkbox.length;i++){
            checkbox[i].addEventListener("change", function (){
           if(this.checked){
               this.parentNode.classList.add("checkboxDone");
               remAllBtnFunc();
           } else {
               this.parentNode.classList.remove("checkboxDone");
               remAllBtnFunc();
               
           }
             });
       }
	   
		// hide remAllBtn
       var remAllBtn = document.querySelector("#remAllBtn");
       function remAllBtnFunc(){
		   checkboxFlag = document.querySelectorAll(".checkboxDone").length;
           if (checkboxFlag>0){
               remAllBtn.classList.remove("hide0");
           } else {
               remAllBtn.classList.add("hide0");
           }

       }
       
		// remAllBtn event
       remAllBtn.addEventListener("click", function(){
           var classDone = document.querySelectorAll(".checkboxDone");
           for(i=0;i<classDone.length;i++){
               classDone[i].parentNode.remove("li");
               remAllBtn.classList.add("hide0");

           }
        
           
       });
       

   }
   
   toDoBtn.addEventListener("click", toDoFunc);
   
   document.onkeydown = function(){
    if(window.event.keyCode=='13'){
        toDoFunc();
    }
}
   
    
});
