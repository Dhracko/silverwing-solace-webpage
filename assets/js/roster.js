
var myInit = { method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                cache: 'default' };


let myRequest = new Request("assets/js/members.json", myInit);


fetch(myRequest)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(data.members[0].character["name"]);
    })