var options = {
  controls: false,
  autoplay: false,
  fluid: true,
  responsive: true,
};

$("#hamburger").click(() => {
  $(".navBox").toggleClass('shown')
})

$("#close").click(() => {
  $(".navBox").toggleClass('shown')
})

$(".navBox a").click(() => {
  $(".navBox").toggleClass('shown')
})

$("#btnHome").click(() => {
  $.scrollTo('#scrlHome', 800)
})

$("#btnWorkshops").click(() => {
  $.scrollTo('#scrlWorkshops', 800)
})

$("#btnTeam").click(() => {
  $.scrollTo('#scrlTeam', 800)
})

$(document).ready(() => {
  $('.reviewSlider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    speed: 300,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5
        }
      }

    ]
  })

  $(function () {
    $(".accordionPlayer").accordion({ animate: 1200, heightStyle: "content" });
  });

  $('.videoWrapper video').each(function () {
    let thisID = $(this).attr('id');

    let btnPlayPause = $(this).parent().parent().find('.btnPlayPause');
    let btnRewind = $(this).parent().parent().find('.btnRewind');
    let btnForward = $(this).parent().parent().find('.btnForward');
    let modalpopup = $(this).parent().parent().find('.modal');

    videojs(thisID, options, function onPlayerReady() {
      let player = this;
      console.log("juist");

      $(btnPlayPause).click(function () {
        if ($(this).hasClass('btnPause')) {
          $(this).removeClass('btnPause');
          $(this).addClass('btnPlay');

          player.pause();
        } else {
          $(this).addClass('btnPause');
          $(this).removeClass('btnPlay');
          player.play();
        }
      });

      $(btnRewind).click(function () {
        player.currentTime(player.currentTime() - 10);
      });

      $(btnForward).click(function () {
        player.currentTime(player.currentTime() + 10);
      });

      player.on('ended', function () {
        modalpopup.append(`
        <div class="modalVideo">
          <div class="modalText">
            <p>Ha! Ik heb je naar een ad laten kijken! Wat ga je er aan doen? Ad-blocker? Werkt toch niet lol</p>
          </div>
          <div class="modalClose" href="index.html#accordion"><div class="modalCloseHover">godverdomme</div></div>
        </div>`)
          .append('<div class="modalBackdrop"></div>').show('slow');

        $(".modalClose").click(() => {
          $(".modal").empty();
        });
        $(".modalBackdrop").click(() => {
          $(".modal").empty();
        });
      });

    });
  });
})

const toggleSwitch = document.querySelector('.themeSwitch input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);