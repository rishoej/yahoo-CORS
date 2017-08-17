import $ from 'jquery';

function scrapper() {
    $.getJSON("https://query.yahooapis.com/v1/public/yql", {
        q: "select * from json where url=\"https://api.github.com/repos/facebook/react/issues?state=closed\"",
        format: "json"
    },
    function (data) {
        if (data.query.results) {
                console.log(data.query.results.json);
            } else {
                console.log("failed");
            }
        }
    );
}
scrapper();
