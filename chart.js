var parseQueryString;

google.load('visualization', '1.0', {
  'packages': ['corechart']
});

$(document).ready(function() {
	var url= window.location.href;
	var queryString = url.substring( url.indexOf('?') + 1 );
	parseQueryString = parse_string(queryString);
	//alert(JSON.stringify(parseQueryString));
    drawChart();
	
});


function parse_string( queryString ) {
    var params = {}, queries, temp, i, l;
    // Split into key/value pairs
    queries = queryString.split("&");
    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = Number(temp[1]);
    }
    return params;
}

function json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result;
}

// creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function drawChart() {
  // Create the data table.
  var result = [];
	for(var i in parseQueryString)
		result.push([i, parseQueryString [i]]);
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Expenses');
  data.addColumn('number', 'Amount');
  data.addRows(result);
  
  // Set chart options
  var options = {
    'title': 'HOW MUCH MONEY I SPENT AND SAVED THIS MONTH',
    'width': 1000,
    'height': 900
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_1'));
  
    google.visualization.events.addListener(chart, 'ready', function () {
        document.getElementById('png').innerHTML = '<a href="' + chart.getImageURI() + '" download="My_Expenditure_Chart"><button type="button" class="btn btn-success btn-lg">Download</button></a>';
        console.log(document.getElementById('png').innerHTML);
      });
  chart.draw(data, options);

  
  
}
