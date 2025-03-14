//---------------//
//модальное окно
(function() {
	window.ModalForm = function(params) {
		var self = this;
		this.settings = {
			fadeTime: 500,
			fadeOpacity: 0.6,
			fadeColor: "#666666",
			modalPadding:"15px 35px 15px 35px",
			modalBackgroundColor:"#fff",
			closeButtonHeight: "20px",
			closeButtonWidth: "14px",
			html: '<div style = "position: fixed;left: 0;top: 0;width: 100%;height: 100%;z-index: 800;"><div id = "fader"></div><div id = "modalCarrier"><div id = "modal"><div style = "position:relative;float:right;top:0px;right:0px;"><div id = "closeModalButton"> </div><div id = "modalContent"></div></div></div></div>'
		}

		this.setSettings = function(params) {
			for (var key in params) {
				self.settings[key] = params[key];
			}
		}
		
		self.setSettings(params);

		this.showModal = function(text, target, callBack) {
			var target = $(target).closest(".modalCaller");
			var data = $(target).data();

		//	alertObj(data);
		
			if (document.getElementById("modalMessage")) self.closeModal();
			
			var el = document.createElement("div");
			el.id = "modalMessage";
			el.innerHTML = self.settings.html;
			document.body.appendChild(el);

			$('#modalContent').html(text);

			for (var key in data) { //перенос всех аттрибутов кнопки в кнопку модальной формы
				$('#modalContent .sendButton').attr("data-" + key, data[key]);
			}
			
			if (!$('#modalContent .sendButton').attr("data-form_id")) {
				$('#modalContent .sendButton').attr("data-form_id", "modalForm")
			}

			$('#fader').css({
				position: "absolute",
				left: "0px",
				right: "0px",
				top: "0px",
				bottom: "0px",
				backgroundColor: self.settings.fadeColor,
				opacity: 0
			});
			
			$('#fader').on("click", function() {self.closeModal()});
			$('#closeModalButton').on("click", function() {self.closeModal()});
			
			$('#modalCarrier').css({
				position: "absolute",
				top: "36%",
				right: 0,
				left: 0,
				zIndex:999,
				textAlign:"center"
			});
			
			$('#modalCarrier #modal').css({
				margin: "auto",
				display:"inline-block",
				padding:self.settings.modalPadding,
				backgroundColor:self.settings.modalBackgroundColor,
				opacity: 1.0,
				textAlign:"left",
				padding:"20px 50px 20px 50px",
				zIndex:999
			});
			
			$('#modalCarrier #closeModalButton').css({
				"background-image":"url(/_res/img/close.png)",
				"background-position":"right top",
				"background-repeat":"no-repeat",
				"width":self.settings.closeButtonHeight,
				"height":self.settings.closeButtonWidth,
				"position":"absolute",
				"float":"right",
				"top":"0px",
				"right":"0px",
				"cursor":"pointer",
				"margin":"-5px -35px 0px 0px"
			});

			$("#fader").stop().animate({
				opacity: self.settings.fadeOpacity,
			}, self.fadeTime, function() {
				if (typeof(callBack) == "function") {
					callBack();
				}
			});
		}
		
		this.closeModal = function() {
			$('#modalMessage').remove();
		}
	}

	//if (!window.modalForm) window.modalForm = new ModalForm({}, function() {});
})();

//---------------//
//модальное окно 2
(function() {
	window.ModalForm2 = function(params) {
		var self = this;
		
		self.showModal = function(text, target, callBack) {
			var target = $(target).closest(".modalCaller");
			var data = $(target).data();

			if (!text) {
				var id = $(target).attr("data-content-id");
				
				if (id) {
					text = $($(target).attr("data-content-id")).html();
				} else if ($(target).attr("data-content")) {
					text = $(target).attr("data-content");
				} else {
					console.log("window.ModalForm2 Error: Нет информации для вывода формы.");
					
					return;
				}
			}

			var box = bootbox.dialog({
				message: text,
				title: "",
				size: "large",
				className: "modalForm",
				closeButton: true,
				onEscape: function() {
					$(".modalForm").modal("hide");
				}
			});
			
			box.on('shown.bs.modal', function(e) {
				$(".modalForm .saveBook").on("click", function() {
					
				});
				
				for (var key in data) { //перенос всех аттрибутов кнопки в кнопку модальной формы
					$('.modalForm .sendButton').attr("data-" + key, data[key]);
				}
				
				$(".modalForm .cancel").on("click", function() {
					$(".modalForm").modal("hide");
				});
			});
		}
	}
})();