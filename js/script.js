$(document).ready(function() {
	"use strict";

	$(".newsletter-signup").ajaxChimp({
		callback: mailchimpResponse,
		url: "" 
	});
    $( window ).resize(function() {
	location.reload();
	});
	function mailchimpResponse(resp) {
		 if(resp.result === 'success') {
		 
			$('.alert-success').html(resp.msg).fadeIn().delay(3000).fadeOut();
			
		} else if(resp.result === 'error') {
			$('.alert-warning').html(resp.msg).fadeIn().delay(3000).fadeOut();
		}  
	};
 });