/**
 * @author Alex Rache <grumblerbear@gmail.com>
 * @since 18.08.2016 15:31
 * @project test2.3x30.ru
 */
$(function () {
	$("form").on("submit", function () {
		var $form = $(this);
		var action = $form.attr("action");
		var data = new FormData($form[0]);
		$.ajax({
			data: data,
			processData: false,
			contentType: false,
			type: $form.attr('method') || 'POST',
			url: action,
			beforeSend: function () {
			},
			success: function (data) {
				console.log(data);
				$form.closest(".form-form").next(".form-success").html(data).show().find(".form-success-close").on("click", function () {
					$(this).closest(".form-success").hide();
					return false;
				});
			}
		});
		return false;
	});
});