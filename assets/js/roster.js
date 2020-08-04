// Define the method, mode and the headers for the fetch JSON
var myInit = { method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                cache: 'default' };


var myRequest = new Request("assets/js/roster.json", myInit);

// Fetch the data from the JSON file
fetch(myRequest)
    .then(function(resp) {
        return resp.json();
    })
    .then(makeTable());
    



function makeTable() {
    return function (data) {
        var el = document.getElementById("data");
        el.innerHTML = "";
        data = data.members;
// Sort out the data by members rank before it get send to the table
        data.sort((a, b) => {
            var keyA = a.rank;
            var keyB = b.rank;
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });
// Create a table 
        var dataRow = [];
        console.log(data);
        data.forEach(function (item) {


            Object.keys(item).forEach(function (key) {

                 var obj = item[key];
                 var rowDataRank = item.rank;
                if (key == "character") {
                    
                    var rowDataName = obj.name;
                    var rowDataLevel = obj.level;
                    var rowDataRole = obj.playable_class.id;
                    dataRow.push(`<tr><td>${rowDataName}</td><td>${rowDataLevel}</td><td>${rowDataRole}</td><td>${rowDataRank}</td></tr>`);
                }
            });


            el.innerHTML = `<table>${dataRow}</table>`.replace(/,/g, "");
        });
    };
}