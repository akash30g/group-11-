// JavaScript Document
$(document).ready( function(){


	function updatePrice() {

		
		var productCost; 
		var productQuantity;
		var productTotal = 0;
		var calcTotal;
		
		$('span.product_cost:not(:first)').each( function(){
			
				productCost = $(this).text();
				productQuantity = $(this).nextAll('span.product_quantity').text();
				calcTotal = parseFloat(productCost) * parseInt(productQuantity);
				$(this).nextAll('span.product_total').html(calcTotal);
				
				productTotal = productTotal + parseFloat(calcTotal);

		});

		$('#total_cost').html(productTotal);
	
	}


	function updateHeight() {
		
	var formHeight = $('#order_form').height();
	formHeight = formHeight + 400;
	$('#order_form_container').css({
		'min-height': formHeight,
		'height': formHeight
	});	
		
		
	}



	$('.product_selection_0').hide().clone(true).attr('class', "product_selection_1").appendTo('#product_selection_container').show();
	
	$('.remove_product').hide();


	$('p.add_product').click( function(){
	
		var divClassName = $('#product_selection_container div:last-child').attr('class');
		var classNumber = divClassName.substr(18, 1);

		
		classNumber = parseInt(classNumber) + 1;
		divClassName = 'product_selection_' + classNumber;
		
		
		$('.product_selection_0').clone(true).attr('class', divClassName).appendTo('#product_selection_container').slideDown();
		
		$('#product_selection_container div:last-child .remove_product').show();
		
		updatePrice();
		updateHeight();
	
	});


	$('.remove_product').click( function(){
	
		$(this).parent().remove();
		
		updatePrice();
		updateHeight();
	
	});
	
	
	$('select.product_type').change( function() {

		var productType = $(this).val();
		var productCost;
		
		
		if (productType === "Clown Loach") 
			{productCost = 3.5;}
		else if (productType === "Blue Acara Cichlid ") 
			{productCost = 5;} 
		else if (productType === "Blacktop corydora") 
			{productCost = 11;}
		else if (productType === "Emerald green cat fish ") 
			{productCost = 4;}  
		else if (productType === "Premium Pearlscale Koi Angelfish ") 
			{productCost = 3;} 
		else if (productType === "Assorted Blue Angelfish ") 
			{productCost = 4;}
			else if (productType === "Marbled Blue Angelfish ") 
			{productCost = 5;}
			else if (productType === "Albino Pearlscale Angelfish ") 
			{productCost = 4;}
			else if (productType === "Dalmatian Sailfin Molly") 
			{productCost = 5;}
			else if (productType === "Black Phantom Guppy") 
			{productCost = 4;}
			else if (productType === "Bubble-Eye Goldfish") 
			{productCost = 5;}
			else if (productType === "Guppy") 
			{productCost = 4;}
			else if (productType === "Defense Fish Stress Relief ") 
			{productCost = 5;}
			else if (productType === "AquaCleanse Tap Water Detoxifier ") 
			{productCost = 4;}
			else if (productType === "Nitrifying Bacteria ") 
			{productCost = 5;}
			else if (productType === "Waste-Away Sludge Busting Bacteria ") 
			{productCost = 4;}
	        else if (productType ==="Xtreme Premium Flake Food, 1 oz") 
			{productCost = 5;}
			else if (productType ==="Xtreme Premium Flake Food, 5.6 oz") 
			{productCost = 4;}
			else if (productType ==="Fish for a 10-gallon Warm-Water Aquarium ") 
			{productCost = 5;}
			else if (productType ==="Fish for a 15-gallon Warm-Water Aquarium ") 
			{productCost = 4;}
			else if (productType ==="Fish for a 20-gallon Warm-Water Aquarium ") 
			{productCost = 5;}
			else if (productType ==="Denytrifying Lava Rocks") 
			{productCost = 4;}
			else if (productType ==="Top Fin Premium Aquarium Gravel") 
			{productCost = 5;}
			else if (productType ==="Pet Grooming") 
			{productCost = 50;}
			else if (productType ==="Pet Taxi") 
			{productCost = 40;}
			else if (productType ==="algae proliferation") 
			{productCost = 70;}
			else if (productType ==="Pet Sitting") 
			{productCost = 24;}
			else 
			{productCost = 0;} 
			 
		
		
		$(this).nextAll('.product_cost').html(productCost);
	
	});


	$('input.quantity').change( function() {	
		
		var productQuantity = $(this).val();
		$(this).nextAll('.product_quantity').html(productQuantity);

	});

	$('#product_selection_container').change(updatePrice);

});


$(document).ready( function(){
		
	var formHeight = $('#order_form').height();
	$('#order_form_container').atr('min-height', formHeight);


});

