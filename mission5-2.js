function display(difference){
    var target_date = new Date(current_date.getFullYear(), current_date.getMonth()+difference)

    var caption_object = document.getElementById("caption_calendar");
    caption_object.style.fontSize = "40px";
    caption_object.innerText = target_date.getFullYear();
    caption_object.innerText += "年";
    caption_object.innerText += target_date.getMonth()+1;
    caption_object.innerText += "月";

    var first_date = new Date(target_date.getFullYear(), target_date.getMonth(),1);
    var last_date = new Date(target_date.getFullYear(), target_date.getMonth()+1,0);
    var temp_date = 1;
    for (var i = 0; i < 6; i++){

        if (temp_date <= last_date.getDate()){
            var body_row = document.createElement('tr');

            for (var j = 0; j < 7; j++){
                if ((i== 0 && j < first_date.getDay()) || temp_date > last_date.getDate()){
                    var bcell = document.createElement('td');
                    body_row.append(bcell);
                }
                else{
                    var bcell = document.createElement('td');
                    bcell.textContent = temp_date;
                    
                    if (j == 0){
                        bcell.style.color = "red";
                    }
                    else if (j == 6){
                        bcell.style.color = "blue";
                    }

                    if (temp_date == current_date.getDate() &&
                        target_date.getMonth() == current_date.getMonth() &&
                        target_date.getFullYear() == current_date.getFullYear()){
                        bcell.style.backgroundColor = "pink";
                    }

                    body_row.append(bcell);
                    temp_date++;
                }
                body_object.appendChild(body_row);
            }
        }
    }
}

function update(i){
    difference += i;

    for (var i = 0; i < 6; i++){
        body_object.deleteRow(-1);
    }
    display(difference);
}

var current_date = new Date();
var difference = 0;

var head_object = document.getElementById("head_calendar");
    head_object.style.backgroundColor = "lightgray";        
    var head_row = document.createElement('tr');
    head_row.style.fontSize = "25px";
    var week = ['日','月','火','水','木','金','土']
    for (var i = 0; i < 7; i++){
        var hcell = document.createElement('th');
        if(week[i] == "日"){
            hcell.style.color = "red";
        }
        else if(week[i] == "土"){
            hcell.style.color = "blue";
        }
        hcell.textContent = week[i];
        head_row.append(hcell);
    }
    head_object.append(head_row);

var body_object = document.getElementById("body_calendar");

display(difference);

