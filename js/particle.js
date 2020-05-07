$(window).on('load', function () {
  particlesJS("particles-js", {
    "particles": {
      "number": {"value": 100, "density": {"enable": true, "value_area": 800}},
      "color": {"value": "#eeeeee"},
      "shape": {
        "type": "circle",
        "stroke": {"width": 0, "color": "#eeeeee"},
        "polygon": {"nb_sides": 5},
        "image": {"src": "img/github.svg", "width": 100, "height": 100}
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {"enable": false, "speed": 1, "opacity_min": 1, "sync": false}
      },
      "size": {"value": 20, "random": true, "anim": {"enable": false, "speed": 30, "size_min": 1, "sync": false}},
      "line_linked": {"enable": true, "distance": 150, "color": "#eeeeee", "opacity": 1, "width": 3},
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {"enable": false, "mode": "repulse"},
        "onclick": {"enable": true, "mode": "push"},
        "resize": true
      },
      "modes": {
        "grab": {"distance": 400, "line_linked": {"opacity": 1}},
        "bubble": {"distance": 400, "size": 400, "duration": 2, "opacity": 1, "speed": 3},
        "repulse": {"distance": 200, "duration": 0.4},
        "push": {"particles_nb": 4},
        "remove": {"particles_nb": 2}
      }
    },
    "retina_detect": true
  });
});
