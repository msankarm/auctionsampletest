var resarr=""
function getprojects(){
    $.ajax({type: 'GET',url: "/getprojects", crossDomain: true, success: function(result){
        if(result.length>0){
            resarr=result 
  formtable(resarr)
            
        }else{
          document.getElementById("errmsg").innerHTML = result
        }
          

        
        }});
}

getprojects()

function formtable(resarr){
    for (var i = 0; i < resarr.length; i++) {
    
        var row = document.createElement("tr");
    
        for (var k in resarr[i]) {
            if (resarr[i].hasOwnProperty(k) && (k=='categoryname'||k=='project_title'||k=='username')) {
                var cell = document.createElement("td");
                var cellText = document.createTextNode(resarr[i][k]);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
         
          
        }
    
        // add the row to the end of the table body
        $("table tbody").append(row);
      }
}
function sort(){

    var type = document.getElementById("orderby").value
    if(type=='recent'){
        resarr.sort(function (a, b) {
            var key1 = new Date(a.date_added);
            var key2 = new Date(b.date_added);
        
            if (key1 < key2) {
                return -1;
            } else if (key1 == key2) {
                return 0;
            } else {
                return 1;
            }
        });
    }else{
        resarr.sort((a, b) => a[type].localeCompare(b[type]))
    }
   
    $("table tbody").empty(); 
    formtable(resarr)
}