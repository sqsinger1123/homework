// Your code goes here
'use strict';

(function() {
	// App config vars, in case needed. In theory, these could differ b/w dev/prod.
	var config = {
		debug: true
	};

	// 1. Validate data entry (age is required and > 0, relationship is required)
	function validateAge(age) {

	}

	// Higher-level function that will validate the form entirely.
	function validate_form(event, data) {
		event.preventDefault(); // Do not let that form reload the page
		console.log("validate_form", data, arguments);
	}

	(function setup_event_listeners() {
		// Assumption special for this page: we have only one <form> element.
		var form_elem = document.getElementsByTagName('form')[0];
		if(form_elem.addEventListener){
		    form_elem.addEventListener("submit", validate_form, false);  //Modern browsers
		}else if(form_elem.attachEvent){
		    form_elem.attachEvent('onsubmit', validate_form);            //Old IE
		}
	})();

	// ----- Tests. Because hey, let's be test-driven :)
	// Custom assert function: take string and boolean condition; throw error if failure.
	function myAssert(statement, condition) {
		if(!condition) {
			throw new Error("Condition not met: " + statement);
		}
	}
	function run_tests() {

	}
	if(config.debug) {
		run_tests();
	}

})();
