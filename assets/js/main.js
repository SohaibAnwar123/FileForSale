// hero slick start 
$('.social_slick').slick({
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    arrows: true,
    dots: true,
    swipe: true,
    swipeToSlide: true,

    nextArrow: '.slick-next',
    prevArrow: '.slick-prev',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2.5,
            centerMode: false,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            centerMode: true,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});
// hero slick end

// Counter start 
// $(".get_counter").each(function () {
//     var $this = $(this),
//       countTo = $this.attr("data-countto");
//     countDuration = parseInt($this.attr("data-duration"));
//     $({ counter: $this.text() }).animate(
//       {
//         counter: countTo
//       },
//       {
//         duration: countDuration,
//         easing: "linear",
//         step: function () {
//           $this.text(Math.floor(this.counter));
//         },
//         complete: function () {
//           $this.text(this.counter);
//         }
//       }
//     );
//   });

$(".get_counter").each(function () {
    var $this = $(this),
        countTo = $this.attr("data-countto"),
        countDuration = parseInt($this.attr("data-duration"));

    // Check if the value of countTo is in abbreviated format
    if (countTo.indexOf("K") !== -1) {
        // If it is, remove the "K" character and multiply by 1000
        countTo = parseInt(countTo.replace("K", "")) * 1000;
    } else if (countTo.indexOf("M") !== -1) {
        // If it is, remove the "M" character and multiply by 1000000
        countTo = parseInt(countTo.replace("M", "")) * 1000000;
    }

    $({
        counter: $this.text()
    }).animate({
        counter: countTo
    }, {
        duration: countDuration,
        easing: "linear",
        step: function () {
            // Check if the current value is >= 1000
            if (this.counter >= 1000000) {
                // If it is, format it in abbreviated format with "M"
                $this.text(Math.floor(this.counter / 1000000) + "M");
            } else if (this.counter >= 1000) {
                // If it is, format it in abbreviated format with "K"
                $this.text(Math.floor(this.counter / 1000) + "K");
            } else {
                $this.text(Math.floor(this.counter));
            }
        },
        complete: function () {
            // Check if the final value is >= 1000
            if (this.counter >= 1000000) {
                // If it is, format it in abbreviated format with "M"
                $this.text(Math.floor(this.counter / 1000000) + "M");
            } else if (this.counter >= 1000) {
                // If it is, format it in abbreviated format with "K"
                $this.text(Math.floor(this.counter / 1000) + "K");
            } else {
                $this.text(this.counter);
            }
        }
    });
});

// Counter end