$(function () {
	loadData()
	/* load data */
	function loadData() {
	  $.getJSON("./data.json", function (data) {

		generateWebsites(data);
		generateWebsites2(data)
	  });
	}
	/* Work */
	function generateWebsites(data) {

	  var tpl = $("#tpl").html();

	  var template = Handlebars.compile(tpl);

	  var context = data;

	  var html = template(context);
	  console.log(context.Works);

	  $('.work').html(html);
	}
	/* Internship */
	function generateWebsites2(data) {

	  var tpl2 = $("#tpl2").html();

	  var template = Handlebars.compile(tpl2);

	  var context = data;

	  var html = template(context);

	  $('.experience').html(html);
	}



	/* Nevigation */
	$(window).scroll(function () {
	  var scrolled = $(window).scrollTop();/* height */
	  var maintop = $('.et-main').offset().top;/* element height from top */
	  var topheight = $('.et-hero-tabs-container').height();/* nevigation container height */
	  var abouttop = $('#tab-about').offset().top;/* about */
	  var myworktop = $('#tab-mywork').offset().top;/* mywork */
	  var experience = $('#tab-experience').offset().top;/* internship */
	  var contactship = $('#tab-contact').offset().top;/* contact */

	  /* When the scrolling height is greater than the height of the et-main class 
	  from the top of the page - the top navigation bar,let the navigation bar top */
	  if (scrolled >= maintop - topheight) {
		$('.et-hero-tabs-container').addClass('fixed')
	  } else {
		/* Remove the top effect */
		$('.et-hero-tabs-container').removeClass('fixed')
		$('.et-hero-tab').removeClass('sure')
	  }
	  /* When the page scrolls, the corresponding tab at the top is highlighted */
	  if (scrolled > contactship - topheight) {
		$('.et-hero-tab').eq(3).addClass('sure').siblings().removeClass('sure')
	  } else if (scrolled > experience - topheight) {
		$('.et-hero-tab').eq(2).addClass('sure').siblings().removeClass('sure')
	  } else if (scrolled > myworktop - topheight) {
		$('.et-hero-tab').eq(1).addClass('sure').siblings().removeClass('sure')
	  } else if (scrolled > abouttop - topheight) {
		$('.et-hero-tab').eq(0).addClass('sure').siblings().removeClass('sure')
	  }
	})
  })