//---------------//
//вывод информационных сообщений
(function() {
	window.Message = function(params) {
		var self = this;
		var timeout;

		this.settings = {
			upTime:5000,
			showTime:400,
			hideTime:400,
			css: {
				color:"#fff",
				left:"0px",
				top:"44%",
				backgroundColor:"rgba(0, 0, 0, 1.0)"
			},
			className: ""
		};

		for (var key in params) {
			if (typeof(params[key] == "object")) {
				for (var key2 in params[key]) {
					self.settings[key][key2] = params[key][key2];
				}
				
			} else {
				self.settings[key] = params[key];
			}
		}
		
		var messageEl = document.createElement("div");
		messageEl.id = "userMessage";
		document.body.appendChild(messageEl);
		
		$('#userMessage').css({
			display:"block",
			position:"fixed",
			zIndex:9999,
			padding:"20px",
			width:"300px",
			marginLeft:"-300px",
			textAlign:"left"
		});
		$('#userMessage').css(this.settings.css);

		this.show = function(message, isError) { //показать сообщение
			if (timeout) clearTimeout(timeout);
			
			$('#userMessage').stop().animate({
				marginLeft: '-300px'
			}, 10 , "linear", function() {
				
				timeout = setTimeout(function() {
					self.clear();
				}, self.settings.upTime);

				$('#userMessage').html("<div style = 'opacity:1.0;filter: alpha(opacity=100);' class = '" + self.settings.className + "'>" + message + "</div>");
				
				$('#userMessage').stop().animate({
					marginLeft: '0px'
				}, self.settings.showTime );
				
				$('#userMessage').on("mouseover", function() {
					self.clear();
				});
			});
		}
		
		this.clear = function() { //очистка сообщений
			if (timeout) clearTimeout(timeout);

			$('#userMessage').stop().animate({
				marginLeft: '-300px'
			}, self.settings.hideTime , "linear", function() {});
		}
	}
})();