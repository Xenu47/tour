Function.prototype.extend = function(fn) {
  var self = this;
  return function() {
    self.apply(this, arguments);
    fn.apply(this, arguments);
  };
};

window.onload = window.onload.extend(function(){
	if(document.querySelector('#feedback_form')){
		document.querySelector('#feedback_form').addEventListener('submit',feedback);
	}
})

var current_error = ''
function feedback(event){
	event.preventDefault();
	var form = document.forms.feedback;
	let formData = new FormData(form);
	let request = new XMLHttpRequest();
	request.open("POST","../includes/mail.php");
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200){
			let check = request.responseText;
			console.log(check);
			check = JSON.parse(check);
			if(check['name'] != ''){
				if (current_error != ''){
					document.querySelector('#feedback_form [name='+current_error+']').classList.toggle("feedback_error");
				}
				if (check['name'] != 'success'){
					document.querySelector('#feedback_form [name='+check['name']+']').classList.toggle("feedback_error");
				}
				if (check['name'] == 'success'){
					document.querySelector('#feedback_form [type=submit]').toggleAttribute('disabled');
					document.querySelector('#feedback_form [type=submit]').value = 'Для следующего заказа, обновите страницу'
				}
				current_error = check['name'];
			}
			alert(check['error']);
		}
	}
	request.send(formData);
}