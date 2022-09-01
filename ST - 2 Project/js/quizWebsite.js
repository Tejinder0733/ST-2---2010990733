$(document).ready(function(){
	$("#formSubmit").click(function(event){

		var a = $("#fname").val();
		var reg1 = /\b[(A-Z)]{1}[(a-z)]+/;
		var reg11 = /\B[^a-z]/;
		var reg12 = /[\s_\W]+/;
		var b = $("#lname").val();

		var c = $("#eMail").val();
		var reg2 = /[\w.]+@[(a-z).]+/;
		var reg21 = /[\s!#$%^&*]+/;

		var d = $("#mnumber").val();
		var reg3 = /[(6-9)][(0-9)]{9}\b/;

		var e = $("#message").val();

		if(a.length!=0 && (a.search(reg1)!=0 || a.search(reg11)>=1 || a.search(reg12)>=0)){
			event.preventDefault();
			alert("First Name should have first letter capital followed by small letters.");
		}
		else{

			if(b.length!=0 && (b.search(reg1)!=0 || b.search(reg11)>=1 || b.search(reg12)>=0)){
				event.preventDefault();
				alert("Last Name should have first letter capital followed by small letters.");
			}
			else{

				if(c.length!=0 && (c.search(reg2)!=0 || c.search(reg21)>=0)){
					event.preventDefault();
					alert("Email Address is not written in correct format.");
				}
				else{

					if(d.length!=0 && d.search(reg3)!=0){
						event.preventDefault();
						alert("Mobile Number incorrect.");
					}
					else{

						if(a.length!=0 && b.length!=0 && c.length!=0 && d.length!=0 && e.length!=0){
							alert("Your message is sent successfully!!");
						};
					};
				};
			};
		};
	});
});