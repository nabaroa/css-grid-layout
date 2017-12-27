  // add event listener on load
  window.addEventListener('load', function() {

    // scroll to top
    document.querySelector('.js-scroll-to-top').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('header').scrollIntoView({
        behavior: 'smooth'
      });
    });


    document.querySelector('.js-scrooll-into-about').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
      });
    });

    // scroll into view
    // document.querySelector('.js-scroll-into-example-grid').addEventListener('click', function(e) {
    //   e.preventDefault();
    //   document.querySelector('section.example-grid').scrollIntoView({
    //     behavior: 'smooth'
    //   });
    // });

    document.querySelector('.js-open-panel').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.example-set-1').classList.add('is-open', 'position-1');
      document.querySelector('.example-set-1').classList.remove('position-2');
      document.querySelector('.example-set-1').classList.remove('position-3');
      document.querySelector('.example-set-1').classList.remove('position-4');
      document.querySelector('.example-set-1').scrollIntoView({
        behavior: 'smooth'
      });
    });

    document.querySelector('.js-open-panel-2').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.example-set-1').classList.add('is-open', 'position-2');
      document.querySelector('.example-set-1').classList.remove('position-1');
      document.querySelector('.example-set-1').classList.remove('position-3');
      document.querySelector('.example-set-1').classList.remove('position-4');
      document.querySelector('.example-set-1').scrollIntoView({
        behavior: 'smooth'
      });
    });


    document.querySelector('.js-close-panel').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.example-set-1').classList.remove('is-open');
      // document.querySelector('.example-grid').scrollIntoView({
      //   behavior: 'smooth'
      // });
    });

  });
