/* global window */
(function( window, $, undefined ) {
	var document = window.document,

	SKELET = {
		common: {
			init: function() {
				// application-wide code
			}
		},

		users: {
			init: function() {
				// controller-wide code
			},

			Xcreate_new: function() {
				// action-specific code

				/*
				 * Check whether login is available.
				 * Simple demo of working with an API.
				 */
				var $login = $( "#id_login" ),
					$icon = $( "<span class='glyphicon'></span>" ).insertAfter( $login );

				$login.on( "change", function() {
					// Login input value to check.
					var value = $login.val(),
					// API URL.
						url = "/api/" + $( "html" ).attr( "lang" ) + "/login_availabilities/detail/",
					// GET values for API. Available formats: xml, json, yaml, jsonp.
						data = {
							login: value,
							format: "json"
						};

					// AJAX request to the API.
					if ( value !== "" ) {
						$.ajax({
							dataType: "json",
							url: url,
							data: data,
							success: function( json ) {
								$icon.attr( "title", json.status );

								if ( json.status !== "available" ) {
									$icon.removeClass( "glyphicon-ok" ).addClass( "glyphicon-remove" );
								} else {
									$icon.removeClass( "glyphicon-remove" ).addClass( "glyphicon-ok" );
								}
							}
						});
					} else {
						$icon.removeClass( "glyphicon-ok glyphicon-remove" ).attr( "title", "" );
					}
				}).change();
			}
		}
	};


	/*
	 * Garber-Irish DOM-based routing.
	 * See: http://goo.gl/z9dmd
	 */
	SKELET.UTIL = {
		exec: function( controller, action ) {
			var ns = SKELET;

			if ( action === undefined ) {
				action = "init";
			}

			if ( controller !== "" && ns[controller] && typeof ns[controller][action] === "function" ) {
				ns[controller][action]();
			}
		},

		init: function() {
			var body = document.body,
			controller = body.getAttribute( "data-controller" ),
			action = body.getAttribute( "data-action" );

			SKELET.UTIL.exec( "common" );
			SKELET.UTIL.exec( controller );
			SKELET.UTIL.exec( controller, action );
		}
	};

	// Expose SKELET to the global object.
	window.SKELET = SKELET;

	// Initialize application.
	$( document ).ready( SKELET.UTIL.init );
})( window, window.jQuery );