		$(document).ready(function() {
			$(document).on("click", "input[name='send']", function () {
				var d = new Date();
				var locale = "rus";
				var month = d.toLocaleString(locale, { month: "long" });


				var day = d.getDate();

				var output = ((''+day).length<2 ? '0' : '') + day + ' ' +
				((''+month).length<2 ? '0' : '') + month + ' ' + d.getFullYear();

				$("<div class='commentary-top'>" + "<span class='commentary-top__name'>Петя</span>" + "<span class='commentary-top__date'>" + output + "</span>" + "</div>").appendTo("#comment-area1");
			});

			$(document).on("click", "input[name='send']", function () {
				var comment = $("textarea[name='field']").val ();
				alert("Подождите идёт загрузка комментариев...");
				$("<div class='commentary-main'>" + comment + "</div>").appendTo("#comment-area1");
			});

		});