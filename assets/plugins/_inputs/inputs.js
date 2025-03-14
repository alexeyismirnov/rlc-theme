//---------------//
/*Телефон клиента*/ 
(function() {
	window.setClientPhone = function(container) {
		var self = this;
		
		if (!container) container = "";

		$(container + " .clientPhone").mask("+7 (A00) 000-00-00", {'translation': {
			A: {pattern: /[1-79]/}
		}});

		$(container + " .clientPhone").focusout(function() {
			if (this.value.length < 18) this.value = "";
			$(container + " .clientPhone").attr("placeholder", "Ваш номер");
		});
		$(container + " .clientPhone").focus(function() {
			$(container + " .clientPhone").attr("placeholder", "+7 (___) ___-__-__");
		});
		$(container + " .clientPhone").attr("placeholder", "Ваш номер");

	}

	window.setClientPhone();
})();

//---------------//
/*Имя клиента*/
(function() {
	window.setClientName = function(container) {
		if (!container) container = "";

		$(container + " .clientName").attr("placeholder", "Ваше имя");
		
		$(container + " .clientName").on("input", function() {
			$(this).val($(this).val().replace(/[0-9!"№;%:?*()_+=@#$^&]/g, ''));
		});
	}

	window.setClientName();
})();

//---------------//
/*Email клиента*/
(function() {
	window.setClientEmail = function(container) {
		if (!container) container = "";

		$(container + " .clientEmail").attr("placeholder", "Ваш email");
	}

	window.setClientEmail();
})();

//---------------//
/*Телефон клиента*/ 
(function() {
	window.setClientPhone = function(container) {
		var self = this;
		
		if (!container) container = "";

		$(container + " .clientPhone").mask("+7 (A00) 000-00-00", {'translation': {
			A: {pattern: /[1-79]/}
		}});

		$(container + " .clientPhone").focusout(function() {
			if (this.value.length < 18) this.value = "";
			$(container + " .clientPhone").attr("placeholder", "Ваш номер");
		});
		$(container + " .clientPhone").focus(function() {
			$(container + " .clientPhone").attr("placeholder", "+7 (___) ___-__-__");
		});
		$(container + " .clientPhone").attr("placeholder", "Ваш номер");

	}

	window.setClientPhone();
})();

//---------------//
/*Имя клиента*/
(function() {
	window.setClientName = function(container) {
		if (!container) container = "";

		$(container + " .clientName").attr("placeholder", "Ваше имя");
		
		$(container + " .clientName").on("input", function() {
			$(this).val($(this).val().replace(/[0-9!"№;%:?*()_+=@#$^&]/g, ''));
		});
	}

	window.setClientName();
})();

//---------------//
/*Email клиента*/
(function() {
	window.setClientEmail = function(container) {
		if (!container) container = "";

		$(container + " .clientEmail").attr("placeholder", "Ваш email");
	}

	window.setClientEmail();
})();

(function() {
	window.setInputs = function(container) {
		if (!container) container = "";
		window.setClientPhone(container);
		window.setClientName(container);
		window.setClientEmail(container);
	}
})();