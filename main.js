var income_row_count=1;
var rent_row_count=1;
var utilities_row_count=2;
var food_row_count=1;
var others_row_count=1;
var income_attr=[];
var rent_attr=[];
var utilities_attr=[];
var food_attr=[];
var others_attr=[];
var income={};
var expenditure={};
var total_spent=0;
var amt_saved = 0;

$( document ).ready(function() {	
	$('.intro_page').attr("hidden",false);	
	$('#lower_buttons').attr("hidden",true);

});


$('#table-1').delegate('.income_count', 'change', function ()
{
    var $summands = $('#table-1').find('.income_count');
    var sum = 0;
    $summands.each(function ()
    {
        var value = Number($(this).val());
        if (!isNaN(value)) sum += value;
    });
    $('#total-1').val(sum);
	
});

$('#table-2').delegate('.rent_count', 'change', function ()
{
    var $summands = $('#table-2').find('.rent_count');
    var sum = 0;
    $summands.each(function ()
    {
        var value = Number($(this).val());
        if (!isNaN(value)) sum += value;
    });
    $('#total-2').val(sum);

});

$('#table-3').delegate('.utilities_count', 'change', function ()
{
    var $summands = $('#table-3').find('.utilities_count');
    var sum = 0;
    $summands.each(function ()
    {
        var value = Number($(this).val());
        if (!isNaN(value)) sum += value;
    });
    $('#total-3').val(sum);
});

$('#table-4').delegate('.food_count', 'change', function ()
{
    var $summands = $('#table-4').find('.food_count');
    var sum = 0;
    $summands.each(function ()
    {
        var value = Number($(this).val());
        if (!isNaN(value)) sum += value;
    });
    $('#total-4').val(sum);
});

$('#table-5').delegate('.others_count', 'change', function ()
{
    var $summands = $('#table-5').find('.others_count');
    var sum = 0;
    $summands.each(function ()
    {
        var value = Number($(this).val());
        if (!isNaN(value)) sum += value;
    });
    $('#total-5').val(sum);
});



function choose_menu(n){
		$('#lower_buttons').attr("hidden",false);
		$('.intro_page').attr("hidden",true);
		$('.income').attr("hidden",true);
		$('.rent').attr("hidden",true);
		$('.utilities').attr("hidden",true);
		$('.food').attr("hidden",true);
		$('.others').attr("hidden",true);
		$('.calculate_hourly_rate').attr("hidden",true);
	if(n==1)
	{
		$('.intro_page').attr("hidden",false);
		$('#lower_buttons').attr("hidden",true);		
	}
	else if(n==2)
		$('.income').attr("hidden",false);
	else if(n==3)
		$('.rent').attr("hidden",false);
	else if(n==4)
		$('.utilities').attr("hidden",false);
	else if(n==5)
		$('.food').attr("hidden",false);
	else if(n==7)
		$('.calculate_hourly_rate').attr("hidden",false);
	else
		$('.others').attr("hidden",false);
}

function add_new_field(num){
	var table = document.getElementById("table-"+num);	
    var row;
    var cell1;
    var cell2;
	if(num==1){
		row = table.insertRow(2);
		cell1 = row.insertCell(0);
		cell2 = row.insertCell(1);
		income_row_count+=1;
		cell1.innerHTML = '<input type="text" style="width:200px;" class="form-control input-sm " id="income-src-'+income_row_count+'"/>';
		cell2.innerHTML = '<input type="text" style="width:200px;" class="form-control input-sm income_count" id="income-amt-'+income_row_count+'"/>';
	}
	else if(num==2){
		row = table.insertRow(2);
		cell1 = row.insertCell(0);
		cell2 = row.insertCell(1);
		rent_row_count+=1;
		cell1.innerHTML = '<input type="text" style="width:200px;" class="form-control input-sm" id="rent-src-'+rent_row_count+'"/>';
		cell2.innerHTML = '<input type="text" style="width:200px;" class="form-control input-sm rent_count" id="rent-amt-'+rent_row_count+'"/>';
	}
	else if(num==3){
		row = table.insertRow(3);
		cell1 = row.insertCell(0);
		cell2 = row.insertCell(1);
		utilities_row_count+=1;
		cell1.innerHTML = '<input type="text" style="width:200px;" class="form-control input-sm" id="utilities-src-'+utilities_row_count+'"/>';
		cell2.innerHTML = '<input type="text" style="width:200px;" class="form-control input-sm utilities_count" id="utilities-amt-'+utilities_row_count+'"/>';
	}
	else if(num==4){
		row = table.insertRow(2);
		cell1 = row.insertCell(0);
		cell2 = row.insertCell(1);
		food_row_count+=1;
		cell1.innerHTML = '<input type="text" style="width:200px;" class="form-control input-sm" id="food-src-'+food_row_count+'"/>';
		cell2.innerHTML = '<input type="text" style="width:200px;" class="form-control input-sm food_count" id="food-amt-'+food_row_count+'"/>';
	}
	else if(num==7){
		row = table.insertRow(2);
		cell1 = row.insertCell(0);
		cell2 = row.insertCell(1);
		food_row_count+=1;
		cell1.innerHTML = '<input type="text" style="width:200px;" class="form-control input-sm" id="food-src-'+calculate_hourly_rate_count+'"/>';
		cell2.innerHTML = '<input type="text" style="width:200px;" class="form-control input-sm food_count" id="food-amt-'+calculate_hourly_rate_count+'"/>';
	}
	else{
		row = table.insertRow(2);
		cell1 = row.insertCell(0);
		cell2 = row.insertCell(1);
		others_row_count+=1;
		cell1.innerHTML = '<input type="text" style="width:200px;" class="form-control input-sm" id="others-src-'+others_row_count+'"/>';
		cell2.innerHTML = '<input type="text" style="width:200px;" class="form-control input-sm others_count" id="others-amt-'+others_row_count+'"/>';
	}

	
}

function get_values(n){	//0 for expenditure 1 for income
	var finance_obj={income:{},rent:{},utilities:{},food:{},others:{},saved:{}}; //TESTING
	finance_obj.income.Paycheck=$("#income-amt-1").val();
	finance_obj.rent.Apartment_Rent=$("#rent-amt-1").val();	
	finance_obj.utilities.Gas_Electricity=$("#utilities-amt-1").val();
	finance_obj.utilities.WiFi=$("#utilities-amt-2").val();	
	finance_obj.food.Food=$("#food-amt-1").val();
	
	for(i=2;i<=income_row_count;i++)
	{
		var source= $('#income-src-'+i).val();
		source = source.replace(/ /g,"_");
		finance_obj.income[source] = $("#income-amt-"+i).val();
	}
	for(i=2;i<=rent_row_count;i++)
	{
		var source= $('#rent-src-'+i).val();
		source = source.replace(/ /g,"_");
		finance_obj.rent[source] = $("#rent-amt-"+i).val();
	}
	for(i=3;i<=utilities_row_count;i++)
	{
		var source= $('#utilities-src-'+i).val();
		source = source.replace(/ /g,"_");
		finance_obj.utilities[source] = $("#utilities-amt-"+i).val();
	}
	for(i=2;i<=food_row_count;i++)
	{
		var source= $('#food-src-'+i).val();
		source = source.replace(/ /g,"_");
		finance_obj.food[source] = $("#food-amt-"+i).val();
	}
	for(i=1;i<=others_row_count;i++)
	{
		var source= $('#others-src-'+i).val();
		source = source.replace(/ /g,"_");
		finance_obj.others[source] = $("#others-amt-"+i).val();
	}
	if(!isNaN(parseInt($("#total-2").val())))
		total_spent += parseInt($("#total-2").val());
	if(!isNaN(parseInt($("#total-3").val())))
		total_spent += parseInt($("#total-3").val());
	if(!isNaN(parseInt($("#total-4").val())))
		total_spent += parseInt($("#total-4").val());
	if(!isNaN(parseInt($("#total-5").val())))
		total_spent += parseInt($("#total-5").val());
	amt_saved = parseInt($("#total-1").val()) - total_spent;
	//TESTING
	finance_obj.saved.Money_saved = amt_saved;
	finance_obj.saved.Money_spent = total_spent;
	//alert(finance_obj.saved.Money_saved);

	//alert(JSON.stringify(finance_obj));
	jQuery.extend(income,finance_obj.saved);
	jQuery.extend(expenditure,finance_obj.rent,finance_obj.utilities,finance_obj.food,finance_obj.others); //TESTING
	//alert(JSON.stringify(income));
	//alert(JSON.stringify(expenditure));
	
	if(n == 0)
		var result = $.param(expenditure);
	if(n == 1)
		var result = $.param(income);
	window.location.assign("http://www.budget.community4all.net/chart.html?"+result)
}

function nextEntry(n){
	//when n = 1 go next, when n = 0 go previous
	//next1 - next 6 class id
	//get number and then make number+1 hidden = false and the rest true
	var categories = document.getElementsByClassName("next");
	//loop through categories to see which is visible
	for(i=0; i < categories.length; i++){
		if($(categories[i]).is(":hidden") == false)
			var num = categories[i].id;
	}
	if(n == 1)
		var nextNum= parseInt(num) + 1;
	if(n == 0)
		var nextNum= parseInt(num) - 1;
	
	//change visibility
	$('#lower_buttons').attr("hidden",false);
	$('.intro_page').attr("hidden",true);
	$('.income').attr("hidden",true);
	$('.rent').attr("hidden",true);
	$('.utilities').attr("hidden",true);
	$('.food').attr("hidden",true);
	$('.others').attr("hidden",true);

	$(document.getElementById(nextNum)).attr("hidden",false);
}




