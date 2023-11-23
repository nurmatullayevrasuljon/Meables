var arr = []
function get() {
	var userName = document.getElementById("fish").value 
	// var carName = document.getElementById("car").value
	var pey = document.getElementById("pey").value 
	var q = ''
	var date = new Date().getDate() + "." + ( new Date().getMonth()+1 ) + "." + new Date().getFullYear()
	console.log(date)
	if (userName != '' && pey != '') {
		if (pey >= 5527) {
			var obj = {
				userName,
				pey,
				date
			}
			arr.push(obj)
			console.log(arr)
			inner() ;
		}
		else{
			alert("Uyni sotib olish uchun hisobingiz yetarli emas")
		}
	}
	else{
		alert("Iltimos maydonni to'diring")
	}
}
