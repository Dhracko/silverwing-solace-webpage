// Define the method, mode and the headers
var myInit = { method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                cache: 'default' };


var myRequest = new Request("assets/js/members.json", myInit);

// Fetch the data from the JSON file
fetch(myRequest)
    .then(function(resp) {
        return resp.json();
    })
    .then(newFunction());





function newFunction() {
    return function (data) {
        var el = document.getElementById("data");
        // el.innerHTML = "";
        // var dataRow = [];
        // var tableRow = [];
        // memberArray = [];
        // for (i = 0; i < 10; i++) {
        //     var memberName = (data.members[i].character.name);
        //     memberArray.push(memberName);
        //     console.log(memberArray);
        // };
        // dataRow.push(`<td>${memberArray}</td>`);
        // tableRow.push(`<tr>${dataRow}</tr>`);
        // console.log(dataRow);
        // console.log(tableRow);

        var data = data.members;
        var dataRow = [];
        var tableRow = [];
        
        data.forEach(function (item) {
            
            Object.keys(item).forEach(function (key) {
                obj = item[key];
                if (key == "character") {
                var rowDataName = obj.name;
                var rowDataLevel = obj.level;
                dataRow.push(`<tr><td>${rowDataName}</td><td>${rowDataLevel}</td></tr>`);
                console.log(dataRow);
                }    
            });
              
            el.innerHTML = `<table>${dataRow}</table>`.replace(/,/g, "");
        });
    }
}
   