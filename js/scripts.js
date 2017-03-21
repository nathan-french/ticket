$(document).ready(function(){

 $('form').submit(function(event){
var names = $('input[name=name]:checked').val();
var times = $('input[name=time]:checked').val();
var age = $('input[name=age]:checked').val();
console.log("names "  + names);
console.log("time "  + times);
console.log("age "  + age);


function Ticket (movie, time, age){
this.movie = movie;
this.time = time;
this.age = age;
this.price = 9;
}


// // time method
Ticket.prototype.eveningPricing = function(){
   this.price += 4;
 }

//name method
Ticket.prototype.youthPricing = function(){
   this.price -= 3;
 }
// userObject
var emilysTicket = new Ticket (names, times, age);

if (emilysTicket.time === "evening"){
  emilysTicket.eveningPricing();
  }
if (emilysTicket.age === "young"){
  emilysTicket.youthPricing();
  }

console.log(emilysTicket);
console.log(emilysTicket.price);
//
// console.log(emilysTicket.price());
event.preventDefault();

$(".output").text(emilysTicket.price);
});


});
