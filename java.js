/*$('.main-carousel').flickity({
  // options
  autoPlay: true,
  cellAlign: 'left',
  contain: true
});
*/

$(document).ready(function(){
  $('.main-carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true
  });

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

});

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Thank you for subscribing"); 
document.form1.text1.focus();
return true;
}
else
{
alert("Please enter a valid email address");
document.form1.text1.focus();
return false;
}
}
