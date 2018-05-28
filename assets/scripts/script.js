
$(document).ready(function() {

	var icon = $('.color-dream');
	var products = $('.new');
	var modal_back = $('.modal-cover');
	var modal_container = $('.modal-container');
	var modal_body = $('.modal');



	modal_container.addClass('-close');
	 $(".owl-carousel").owlCarousel({
	 	items: 1
	 });


	 let goods = {
	 	disks: [
	 		{
		 		name:'Lenso Spec-D 17x7.5 ET40 4x100 Red',
		 		bolt_pattern: '4x100',
		 		inch: 17,
		 		size: 7.5,
		 		offset: 40,
		 		brand:'Lenso',
		 		color:'red',
		 		image: 'assets/img/content/Lenso_Red.jpeg',
		 		manufacturer_code:'Spec D',
		 		price: 199
	 		},
	 		{
		 		name:'JR-Wheels JR11 Wheels Gold 17x9.75J ET30 5x100/114.3',
		 		bolt_pattern: '	5x100',
		 		inch: 17,
		 		size: 9.75,
		 		offset: 30,
		 		brand:'	JR-Wheels',
		 		color:'	gold',
		 		image: 'assets/img/content/jr-gold.jpg',
		 		manufacturer_code:'W-2017-027',
		 		price: 189
	 		},
	 		{
	 			name:'Drag Wheels DR-41 White 16 Inch 7J ET40 4x100/114,3',
		 		bolt_pattern: '4x100',
		 		inch: 16,
		 		size: 7,
		 		offset: 40,
		 		brand:'Drag',
		 		color:'white',
		 		image: 'assets/img/content/drug-white.jpg',
		 		manufacturer_code:'Spec D',
		 		price: 289
	 		},
	 		{
	 			name:'JR-Wheels JR9 Wheels Gold 17 Inch 7.5J ET35 4x100/108',
		 		bolt_pattern: '4x100',
		 		inch: 17,
		 		size: 7.5,
		 		offset: 35,
		 		brand:'JR-Wheels',
		 		color:'gold',
		 		image: 'assets/img/content/black-gold.jpg',
		 		manufacturer_code:'JR91775143574GD',
		 		price: 280 			
	 		},
	 		{
	 			name:'Supreme Wheels SP.01 20 Inch 8.5J ET35 5x120 Black',
		 		bolt_pattern: '5x120',
		 		inch: 20,
		 		size: 8.5,
		 		offset: 35,
		 		brand:'	Supreme Wheels',
		 		color:'	black',
		 		image: 'assets/img/content/supreme-black.jpg',
		 		manufacturer_code:'	SP018520512035726MBXX',
		 		price: 255 	 			
	 		},
	 		{
	 			name:'JR-Wheels JR31 Wheels Gold 15 Inch 7.5J ET20 4x100',
		 		bolt_pattern: '4x100',
		 		inch: 15,
		 		size: 7.5,
		 		offset: 20,
		 		brand:'	JR-Wheels',
		 		color:'	gold',
		 		image: 'assets/img/content/jr-gold2.jpg',
		 		manufacturer_code:'	JR3115754H2073GDL',
		 		price: 125 	 
	 		},
	 		{
	 			name:'JR-Wheels JR12 Wheels Black 18 Inch 10J ET20 5x114.3/120',
		 		bolt_pattern: '5x114',
		 		inch: 18,
		 		size: 10,
		 		offset: 20,
		 		brand:'	JR-Wheels',
		 		color:'	silver',
		 		image: 'assets/img/content/jr-silver.jpg',
		 		manufacturer_code:'	SP018520512035726MBXX',
		 		price: 198 	 	 			
	 		}
	 	],

	 	seats: [
	 		{
		 		name:'Lenso Spec-D 17x7.5 ET40 4x100 Red',
		 		brand:'	NRG Innovations',
		 		color:'red',
		 		image: 'assets/img/content/nrg_red.jpg',
		 		manufacturer_code:'NRG-FRP-300RD',
		 		price: 280
	 		},
	 		{
		 		name:'QSP Racing Bucket Seats Fiberglass Black Drift 1 Style',
		 		brand:'	QSP',
		 		color:'black',
		 		image: 'assets/img/content/qsp_black.jpg',
		 		manufacturer_code:'	QST.27',
		 		price: 380
	 		},
	 		{
		 		name:'NRG Innovations Adjustable Seats Fabric Black,Gray Evo Style Left',
		 		brand:'NRG Innovations',
		 		color:'	black,gray',
		 		image: 'assets/img/content/nrg_black.jpg',
		 		manufacturer_code:'NRG-RSC-100L',
		 		price: 199	 			
	 		},
	 		{
		 		name:'NRG Innovations Adjustable Seats Leather Black,Red',
		 		brand:'NRG Innovations',
		 		color:'	black,red',
		 		image: 'assets/img/content/nrg-black.jpg',
		 		manufacturer_code:'NRG-RSC-100L',
		 		price: 190		 			
	 		}

	 	],

	 	accessies: [
	 	{
	 			name:'SK-Import Outdoor Car Cover PVC Stationwagon',
		 		brand:'	SK-Import',
		 		color:'grey',
		 		image: 'assets/img/content/cover.jpg',
		 		price: 66
		 		
	 	},
	 	{
	 			name:'SK-Import Indoor Car Cover Nylon',
		 		brand:'	SK-Import',
		 		color:'grey',
		 		image: 'assets/img/content/cover1.jpg',
		 		price: 80
		 			 		
	 	},
	 	{
	 			name:'QSP Seat Cushion',
		 		brand:'QSP',
		 		color:'red',
		 		image: 'assets/img/content/pillet.jpg',
		 		price: 21	 		
	 	},
	 	{
	 			name:'Headlights Black Subaru Impreza',
		 		brand:'Unbranded',
		 		color:'black',
		 		image: 'assets/img/content/impreza.jpg',
		 		price: 199		 		
	 	}

	 	]
	};


	const productFilters = [
		'disks',
		'seats',
		'accessies',
		'all'
	];


	let currentProductFilter = 0;

	function showProducts() {
		products.html('');
		let productList = goods[productFilters[currentProductFilter]];

		switch (currentProductFilter) {
			case 0:
				for (var i = 0; i < productList.length; i++) {
					products.append(createDiskPreview(productList[i]));
					}
				break;
			case 1: 
				for (var i = 0; i < productList.length; i++) {
						products.append(createSeatPreview(productList[i]));
					}
				break;
			case 2:
				for (var i = 0; i < productList.length; i++) {
						products.append(createAccessPreview(productList[i]));
					}

		}
	}

	showProducts();

	$('.js-productpicker').click(function(){
		currentProductFilter = $(this).index();
		showProducts();

	});

	function createDiskPreview(disk) {
		return '<div class="block_product"><img src="' + disk.image + '"><p class="name">' + disk.name + '</p><p class="inch">' + disk.inch + '</p><p class="size">' + disk.size + '</p><p class="brand">' + disk.brand + '</p><p class="price">' +disk.price + '<p/></div>';
	}

	function createSeatPreview(seat) {
		return '<div class="block_product"><img src="' + seat.image + '"><p class="name">' + seat.name + '</p><p class="inch">' + seat.inch + '</p><p class="size">' + seat.size + '</p><p class="brand">' + seat.brand + '</p><p class="price">' +seat.price + '<p/></div>';
	}
	function createAccessPreview(access) {
		return '<div class="block_product"><img src="' + access.image + '"><p class="name">' + access.name + '</p><p class="inch">' + access.inch + '</p><p class="size">' + access.size + '</p><p class="brand">' + access.brand + '</p><p class="price">' +access.price + '<p/></div>';
	}


   


	modal_back.click(function(){
		modal_container.addClass('-close');
	});

	let prod = $('');

	$('.new').on('click', '.block_product', function() {
		let itemIndex = $(this).index();
		let currentProduct = goods[productFilters[currentProductFilter]][itemIndex];
		
		showProductModal(currentProduct);
	});


	function showProductModal(product) {
		modal_container.removeClass('-close');
		let firstPart = '<div class ="other"><img src="' + product.image + '"><span class="name2"' + product.name +'</span></div>';






	}
	
});

