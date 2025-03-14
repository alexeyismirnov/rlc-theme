(function() {
	$(document).ready( function() {
		$(".text .spoilerText").css({display: "none"});
		$(".text .spoilerTitle").on("click", function(event) {
			var target = event.target;
			
			var spoilerBlock = $($(target).attr("data-spoiler_block_id"));
			if (!spoilerBlock) {
				spoilerBlock = $(target).closest(".spoilerText");
			}
			
		//	console.log(spoilerBlock)
			
			if ($(spoilerBlock).css("display") == "block") {
				$(".text .spoilerText").hide("500");
			} else {
				$(".text .spoilerText").hide("500");
				
				$(spoilerBlock).show("500");
			}
		});
		
	});
})();