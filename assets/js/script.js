$('#currentDay').text(moment().format('dddd, MMMM Do'))

var displayHour = ["9am","10am","11am","12p","1pm", "2pm","3pm","4pm","5pm"]
var militaryHour = [9,10,11,12,13,14,15,16,17]
var hour = moment().hour()

for (let i = 0; i < displayHour.length; i++) {

   var time = ""
   if(militaryHour[i]>hour){
       time = "future"
   }
   if(militaryHour[i]<hour){
       time = "past"
   }

if(militaryHour[i]===hour){
    time = "present"
}

  $('#calendar').append(
      `  <div class="row">
      <div class="col-sm-1 hour mt-4">${displayHour[i]}</div>
      <div class="col-sm-10 ">
        <textarea class="form-control h-25 ${time}  " name="" id="" cols="30" rows="10"></textarea>

      </div>
      <div class="col-sm-1">
        <button class="saveBtn">
          save folder
        </button>
      </div>
      
    </div>`
  )
}


