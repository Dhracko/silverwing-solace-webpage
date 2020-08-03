// Define the method, mode and the headers for the fetch JSON
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
    .then(makeTable());
    



function makeTable() {
    return function (data) {
        var el = document.getElementById("data");
        el.innerHTML = "";
        data = data.members;

        data.sort((a, b) => {
            var keyA = a.rank;
            var keyB = b.rank;
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });

        var dataRow = [];
        var tableRow = [];
        console.log(data);
        data.forEach(function (item) {


            Object.keys(item).forEach(function (key) {

                 var obj = item[key];
                if (key == "character") {
                    var rowDataName = obj.name;
                    var rowDataLevel = obj.level;
                    dataRow.push(`<tr><td>${rowDataName}</td><td>${rowDataLevel}</td></tr>`);
                }
            });


            el.innerHTML = `<table>${dataRow}</table>`.replace(/,/g, "");
        });
    };
}