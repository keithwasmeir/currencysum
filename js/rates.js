var currencies;
var currenciesJsonAray = [];
var rates;
var currencyOptions = '<optgroup label="Popular">' +
                         '<option selected value="USD">United States Dollar - USD(US$)</option>' +
                         '<option value="EUR">Euro - EUR(€)</option>' +
                         '<option value="JPY">Japanese Yen - JPY(￥)</option>' +
                         '<option value="GBP">Pound Sterling - GBP(£)</option>' +
                         '<option value="AUD">Australian Dollar - AUD(AU$)</option>' +
                         '<option value="CHF">Swiss Franc - CHF(CHF)</option>' +
                         '<option value="CAD">Canadian Dollar - CAD(CA$)</option>' +
                         '<option value="MXN">Mexican Peso - MXN(MX$)</option>' +
                         '<option value="CNY">Chinese Yuan - CNY(CN¥)</option>' +
                         '<option value="NZD">New Zealand Dollar - NZD(NZ$)</option>' +
						 '<option value="SEK">Swedish Krona - SEK(kr)</option>' +
						 '<option value="RUB">Russian Ruble - RUB(руб.)</option>' +
						 '<option value="HKD">Hong Kong Dollar - HKD(HK$)</option>' +
						 '<option value="SGD">Singapore Dollar - SGD(S$)</option>' +
						 '<option value="TRY">Turkish Lira - TRY(TL)</option>' +
						 '</optgroup>';

var textBoxId = 1;

var symbols = {
	"USD": {
	"aSign": "US$ "
	},
	"CAD": {
	"aSign": "CA$ "
	},
	"EUR": {
	"aSign": "€ "
	},
	"AED": {
	"aSign": "د.إ. ‏"
	},
	"AFN": {
	"aSign": " ؋"
	},
	"ALL": {
	"aSign": "Lek "
	},
	"AMD": {
	"aSign": "դր. "
	},
	"ARS": {
	"aSign": "AR$ ",
	"aDec": ',',
	"aSep": '.'
	},
	"AUD": {
	"aSign": "AU$ ",
	"aSep" : ' '
	},
	"AZN": {
	"aSign": "ман. "
	},
	"BAM": {
	"aSign": "KM "
	},
	"BDT": {
	"aSign": "৳ "
	},
	"BGN": {
	"aSign": "лв. "
	},
	"BHD": {
	"aSign": "د.ب. ‏",
	"mDec": 3
	},
	"BIF": {
	"aSign": "FBu ",
	"mDec": 0
	},
	"BND": {
	"aSign": "BN$ "
	},
	"BOB": {
	"aSign": "Bs "
	},
	"BRL": {
	"aSign": "R$ ",
	"aDec": ',',
	"aSep": '.'
	},
	"BWP": {
	"aSign": "P "
	},
	"BYR": {
	"aSign": "BYR ",
	"mDec": 0
	},
	"BZD": {
	"aSign": "BZ$ "
	},
	"CDF": {
	"aSign": "FrCD "
	},
	"CHF": {
	"aSign": " CHF",
	"mRound": 'CHF',
	"pSign": 's',
	"aDec": '.',
	"aSep": '\''
	},
	"CLP": {
	"aSign": "CL$ ",
	"mDec": 0
	},
	"CNY": {
	"aSign": "CN¥ "
	},
	"COP": {
	"aSign": "CO$ ",
	"aDec": ',',
	"aSep": '.'
	},
	"CRC": {
	"aSign": "₡ ",
	"aDec": ',',
	"aSep": '.'
	},
	"CVE": {
	"aSign": "CV$ "
	},
	"CZK": {
	"aSign": "Kč ",
	"aDec": ',',
	"aSep": '.'		
	},
	"DJF": {
	"aSign": "Fdj ",
	"mDec": 0
	},
	"DKK": {
	"aSign": "kr ",
	"aDec": ',',
	"aSep": '.'
	},
	"DOP": {
	"aSign": "RD$ "
	},
	"DZD": {
	"aSign": " د.ج.‏"
	},
	"EEK": {
	"aSign": "Ekr "
	},
	"EGP": {
	"aSign": " ج.م.‏"
	},
	"ERN": {
	"aSign": "Nfk "
	},
	"ETB": {
	"aSign": "Br "
	},
	"GBP": {
	"aSign": "£ "
	},
	"GEL": {
	"aSign": "GEL "
	},
	"GHS": {
	"aSign": "GH₵ "
	},
	"GNF": {
	"aSign": "FG "
	},
	"GTQ": {
	"aSign": "Q "
	},
	"HKD": {
	"aSign": "HK$ "
	},
	"HNL": {
	"aSign": "L "
	},
	"HRK": {
	"aSign": "kn ",
	"aDec": ',',
	"aSep": '.'
	},
	"HUF": {
	"aSign": "Ft ",
	"mDec": 0
	},
	"IDR": {
	"aSign": "Rp ",
	"aDec": ',',
	"aSep": '.'
	},
	"ILS": {
	"aSign": "₪ "
	},
	"INR": {
	"aSign": '\u20B9 ',
	"dGroup": 2
	},
	"IQD": {
	"aSign": "د.ع. ‏",
	"mDec": 3
	},
	"IRR": {
	"aSign": "﷼"
	},
	"ISK": {
	"aSign": "kr ",
	"mDec": 0
	},
	"JMD": {
	"aSign": "J$ "
	},
	"JOD": {
	"aSign": " د.أ.‏",
	"mDec": 3
	},
	"JPY": {
	"aSign": "￥",
	"mDec": 0	
	},
	"KES": {
	"aSign": "Ksh "
	},
	"KHR": {
	"aSign": "៛ "
	},
	"KMF": {
	"aSign": "FC ",
	"mDec": 0
	},
	"KRW": {
	"aSign": "₩ ",
	"mDec": 0
	},
	"KWD": {
	"aSign": " د.ك.‏",
	"mDec": 3
	},
	"KZT": {
	"aSign": "тңг. "
	},
	"LBP": {
	"aSign": "ل.ل. ‏"
	},
	"LKR": {
	"aSign": "Rs "
	},
	"LTL": {
	"aSign": "Lt ",
	"aDec": ',',
	"aSep": ' '
	},
	"LVL": {
	"aSign": "Ls "
	},
	"LYD": {
	"aSign": "د.ل. ‏",
	"mDec": 3
	},
	"MAD": {
	"aSign": " د.م.‏"
	},
	"MDL": {
	"aSign": "MDL "
	},
	"MGA": {
	"aSign": "MGA ",
	"mDec": 0
	},
	"MKD": {
	"aSign": "MKD "
	},
	"MMK": {
	"aSign": "K "
	},
	"MOP": {
	"aSign": "MOP$ "
	},
	"MUR": {
	"aSign": "MURs "
	},
	"MXN": {
	"aSign": "MX$ "
	},
	"MYR": {
	"aSign": "RM "
	},
	"MZN": {
	"aSign": "MTn ",
	"mDec": 0
	},
	"NAD": {
	"aSign": "N$ "
	},
	"NGN": {
	"aSign": "₦ "
	},
	"NIO": {
	"aSign": "C$ "
	},
	"NOK": {
	"aSign": "kr ",
	"aDec": ',',
	"aSep": '.'
	},
	"NPR": {
	"aSign": "नेरू "
	},
	"NZD": {
	"aSign": "NZ$ "
	},
	"OMR": {
	"aSign": "ر.ع. ‏",
	"mDec": 3
	},
	"PAB": {
	"aSign": "B/. "
	},
	"PEN": {
	"aSign": "S/. "
	},
	"PHP": {
	"aSign": "₱ "
	},
	"PKR": {
	"aSign": "₨ "
	},
	"PLN": {
	"aSign": "zł ",
	"aDec": ',',
	"aSep": ' '
	},
	"PYG": {
	"aSign": "₲ ",
	"mDec": 0
	},
	"QAR": {
	"aSign": " ر.ق.‏"
	},
	"RON": {
	"aSign": "RON ",
	"aDec": ',',
	"aSep": '.'
	},
	"RSD": {
	"aSign": "дин. "
	},
	"RUB": {
	"aSign": "руб. ",
	"aDec": ',',
	"aSep": '.'
	},
	"RWF": {
	"aSign": "FR ",
	"mDec": 0
	},
	"SAR": {
	"aSign": "ر.س. ‏"
	},
	"SDG": {
	"aSign": "SDG "
	},
	"SEK": {
	"aSign": "kr ",
	"aDec": ',',
	"aSep": '.'
	},
	"SGD": {
	"aSign": "S$ "
	},
	"SOS": {
	"aSign": "Ssh "
	},
	"SYP": {
	"aSign": " ل.س.‏"
	},
	"THB": {
	"aSign": "฿ "
	},
	"TND": {
	"aSign": "د.ت. ‏",
	"mDec": 3
	},
	"TOP": {
	"aSign": "T$ "
	},
	"TRY": {
	"aSign": "TL "
	},
	"TTD": {
	"aSign": "TT$ "
	},
	"TWD": {
	"aSign": "NT$ "
	},
	"TZS": {
	"aSign": "TSh "
	},
	"UAH": {
	"aSign": "₴ ",
	"aDec": ',',
	"aSep": ' '
	},
	"UGX": {
	"aSign": "USh "
	},
	"UYU": {
	"aSign": "$U ",
	"aDec": ',',
	"aSep": '.'
	},
	"UZS": {
	"aSign": "UZS "
	},
	"VEF": {
	"aSign": "Bs.F. ",
	"aDec": '.',
	"aSep": '.'
	},
	"VND": {
	"aSign": "₫ ",
	"aDec": ',',
	"aSep": '.'
	},
	"XAF": {
	"aSign": "FCFA "
	},
	"XOF": {
	"aSign": "CFA "
	},
	"YER": {
	"aSign": "ر.ي. ‏"
	},
	"ZAR": {
	"aSign": "R ",
	"aSep": ' '
	},
	"ZMK": {
	"aSign": "ZK "
	},
	"ZMW": {
	"aSign": "ZK "
	},
	"CUP": {
	"aSign": "₱ "
	},
	"XDR": {
	"aSign": "SDR "
	},
	"ZWL": {
	"aSign": "¤ ",
	"aDec": '.',
	"aSep": ' '
	}
};

$("#from button").on('click', function() {
	addFromCurrency();
});

$("#to button").on('click', function() {
	addToCurrency();
});


$(document).ready(function() {
	$.cookie.defaults = {expires: 365};
	loadData();
});


function loadData() {
	$.ajax({
		type : "GET",
		url : "service/currencies.php",
		contentType: "application/json; charset=utf-8",
		dataType: "json"
	}).done(function(msg) {						

		currencies = msg;
		$.each(currencies, function(k, v) {
			currency = {};
			currency.symbol = k;
			currency.name=v;
			currenciesJsonAray.push(currency);
		});
		
		currenciesJsonAray.sort(function(a,b) { 
			if( a.name > b.name){
		          return 1;
		      }else if( a.name < b.name ){
		          return -1;
		      }
		      return 0;		
		});
		

		currencyOptions = currencyOptions + '<optgroup label="All">';
		for(var i=0; i<currenciesJsonAray.length; i++) {
			var cur = currenciesJsonAray[i];
			if(cur.symbol == 'USD') {
				currencyOptions = currencyOptions + '<option value="' + cur.symbol + '">' + cur.name + '</option>';
			} else {
				currencyOptions = currencyOptions + '<option value="' + cur.symbol + '">' + cur.name + '</option>';
			}
		}
		currencyOptions = currencyOptions + '</optgroup>';

		
		$.ajax({
		type : "GET",
		url : "service/latest.php",
		contentType: "application/json; charset=utf-8",
		dataType: "json"
		}).done(function(msg) {						

			rates = msg.rates;
			
			buildFromCookies();
			/*
			addFromCurrency();
			addToCurrency();
			*/
		
		}).fail(function(xhr, textStatus) {
			alert('fail: ' + textStatus);
		});
		
					
	}).fail(function(xhr, textStatus) {
		alert('fail: ' + textStatus);
	});
	
	
}


function addFromCurrency(currency, value) {
	
	var num = textBoxId++;
	
	var textId = "value" +  num;
	var selectId = "currency" + num;
	
	var row = '<form>' +
	  	  		'<select id="' + selectId + '" class="form-control currency">' +
				  currencyOptions +
				'</select>' +
				'<input id="'+ textId +'" type="text" class="form-control currency-value" ></input>' +
				'<a class="remove-currency" tabindex="-1" href="#"><img alt="Remove" src="images/remove.png"/></a>' +
			  '</form>';

    $(row).insertBefore('#row-from-add-another');
    if(currency != null && value != null) {
    	$('#'+selectId).val(currency);
    	$('#'+textId).val(value);
    	$('#'+textId).autoNumeric('init', symbols[currency]);
    	if(value == 0) {
    		$('#' + textId).attr("custom", "true");
    	}
    } else {
    	$('#'+textId).val(0);
    	$('#'+textId).autoNumeric('init', symbols["USD"]);
    	$('#' + textId).attr("custom", "true");
    }
           
    setupFromRemoveClick();    
    setupSelectFromChange(selectId, textId);
    setUpOnFoucsSelect(textId);
    setupFocusOut(textId);
    setUpOnEnter(textId);
    setUpFormSubmission();
    calculateRates(); 
    
    setTabOrder();
}

function addToCurrency(currency) {
	var num = textBoxId++;
	
	var selectId = "currency" + num;
	var spanId = "span"+num;
	
	var row = '<form>' +
  	  	  		'<select id="' + selectId + '" class="form-control currency">' +
				  currencyOptions +
				'</select>' +
				'<div class="calulated-currency-value" ><span id="' + spanId + '"><span></div>' +
				'<a class="remove-currency" tabindex="-1" href="#"><img alt="Remove" src="images/remove.png"/></a>' +
			  '</form>';

    $(row).insertBefore('#row-to-add-another');
    
    if(currency != null) {
    	$('#'+selectId).val(currency);
    	$('#'+spanId).autoNumeric('init', symbols[currency]);
    } else {
    	$('#'+spanId).autoNumeric('init', symbols["USD"]);
    }
    
    setupToRemoveClick();
    setupSelectToChange(selectId, spanId);
    calculateRates(); 
    
    setTabOrder();
}


function setupFromRemoveClick() {
	$("#from .remove-currency").unbind('click');
	$("#from .remove-currency").on('click', function(e) {
		e.preventDefault();		
		$(this).parent().remove();
		
		calculateRates();		
		setTabOrder();
		
	});
}

function setupToRemoveClick() {
	$("#to .remove-currency").unbind('click');
	$("#to .remove-currency").on('click', function(e) {
		e.preventDefault();		
		$(this).parent().remove();

		setTabOrder();
		saveCookie();
	});
}

function setupFocusOut(textId) {
	$('#'+textId).focusout(function() {
		calculateRates();
	});
}

function setupSelectFromChange(selectId, textId) {
	$('#'+selectId).change(function () {

		var currencyIso = $(this).val();
		var options = { aSign: "¤ "};
		if(symbols[currencyIso] != null) {
			options = symbols[currencyIso];
		}
		
		$('#' + textId).autoNumeric('destroy');
		$('#' + textId).val(0);
		$('#' + textId).attr("custom", "true");
		$('#' + textId).autoNumeric('init', options);

		calculateRates();
	});
}

function setupSelectToChange(selectId, spanId) {
	$('#'+selectId).change(function () {
		
		var currencyIso = $(this).val();
		var options = { aSign: "¤ "};
		if(symbols[currencyIso] != null) {
			options = symbols[currencyIso];
		}

		$('#' + spanId).autoNumeric('destroy');
		$('#' + spanId).text(0);
		$('#' + spanId).autoNumeric('init', options);
		
		calculateRates();
	});
}

function calculateRates() {
	
	var total = 0;
	$('#from form').each(function (idx) {
		var id = $(this).find('.currency-value').attr("id");
		var amountStr = $('#'+ id).autoNumeric('get');
		var amount = 0;
		if(isNaN(amountStr)) {
			amount = 0;
		} else {
			amount = Number(amountStr);
		}		

		var currency = $(this).find('.currency').val();

		if(currency == "USD") {
			total = total + amount;
		} else {
			total = total + ( amount / Number(rates[currency]));
		}
	});
	
	
	$('#to form').each(function (idx) {
		var currency = $(this).find('.currency').val();		
		var amount = Number(rates[currency]) * total;
		
		var id = $(this).find('.calulated-currency-value span').attr("id");
		$('#'+id).autoNumeric('set', amount); 
		
	});
	
	saveCookie();
}

function setUpOnFoucsSelect(textId) {
	$('#'+textId).focus(function (e){
		
		var custom = $('#' + textId).attr("custom");
		if(custom != null && custom == "true") {
			$('#' + textId).autoNumeric('set', '');
			$('#' + textId).attr("custom", "false");
		}
		
	    
	});
}


function setUpOnEnter(textId) {
	$('#'+textId).keypress(function (e) {
	  if (e.which == 13) {
		  e.preventDefault();
		  var next = $('#'+textId).parent().next();
		  if(next.find(".currency-value").length) {
			  var textField = next.find(".currency-value"); 
			  textField.select();
		  } else {			  
			  addFromCurrency();
			  $('#'+textId).parent().next().find(".currency-value").focus();
		  }
	  }
	});
}

function setUpFormSubmission() {
	$('#from form').unbind('submit');
	$('#from form').submit(function (e) {
		e.preventDefault();
		calculateRates();
		return;
	});
}

function setTabOrder() {
	var fromForms = $('#from form');
	var toForms = $('#to form');
	
	var fromLength = 0;
	var toLength = 0;
	
	if(fromForms != null) {
		fromLength = fromForms.length;
	}
	if(toForms != null) {
		toLength = toForms.length;
	}
	
	var tabIndex = 1;
	for(var i = 0; i < fromLength; i++) {
		$(fromForms[i]).find(".currency").attr("tabindex", tabIndex++);
		$(fromForms[i]).find(".currency-value").attr("tabindex", tabIndex++);
		$(fromForms[i]).find(".remove-currency").attr("tabindex", tabIndex++);
		
		if(i < toLength) {
			$(toForms[i]).find(".currency").attr("tabindex", tabIndex++);
			$(toForms[i]).find(".remove-currency").attr("tabindex", tabIndex++);
		} 
		else if(i == toLength) {			
			$("#row-to-add-another button").attr("tabindex", tabIndex++);
		}
	}
	
	if(toLength > fromLength) {
		$("#row-from-add-another button").attr("tabindex", tabIndex++);
		
		for(var i = fromLength; i<toLength; i++) {
			$(toForms[i]).find(".currency").attr("tabindex", tabIndex++);
			$(toForms[i]).find(".remove-currency").attr("tabindex", tabIndex++);
		}
		
		$("#row-to-add-another button").attr("tabindex", tabIndex++);
	}
	
	if(toLength == fromLength) {
		$("#row-from-add-another button").attr("tabindex", tabIndex++);
		$("#row-to-add-another button").attr("tabindex", tabIndex++);
	}
	
	if(toLength < fromLength) {
		$("#row-from-add-another button").attr("tabindex", tabIndex++);
	}
}

function saveCookie() {
	var cookie = "";
	$.each($('#from form'), function (idx, val) {
		var cur = $(this).find(".currency").val();
		var value = $("#" + $(this).find(".currency-value").attr("id")).autoNumeric('get'); 
		if(value == null || value == "") {
			value = 0;
		}
		cookie = cookie + cur + "|" + value + ",";
	});
	
	if(cookie.length > 0) {
		cookie = cookie.substring(0, cookie.length-1);
	}
	
	cookie = cookie + ">";
	
	$.each($('#to form'), function (idx, val) {
		var cur = $(this).find(".currency").val();
		cookie = cookie + cur + ",";
	});
	
	if(cookie.length > 0) {
		cookie = cookie.substring(0, cookie.length-1);
	}
	
	$.cookie('cookie', cookie);	
}

function buildFromCookies() {
	var cookie = $.cookie('cookie');
	if(cookie == null || cookie == "") {
		addFromCurrency();
		addToCurrency();
	}
	else {
		var a = cookie.split(">");
		var left = a[0];
		var currencies = left.split(",");
		for(var i=0; i<currencies.length; i++) {
			var ca = currencies[i].split("|");
			var currency = ca[0];
			var value = ca[1];
			addFromCurrency(currency, value);
		}
		
		if(a.length > 1) {
			var right = a[1];
			var currencies = right.split(",");
			for(var i=0; i<currencies.length; i++) {
				var ca = currencies[i].split("|");
				var currency = ca[0];
				var value = ca[1];
				addToCurrency(currency, value);
			}
		}
	}
	
	$("#from").show();
	$("#arrow").show();
	$("#to").show();
}

