// Inicializar AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000,
        once: false
    });
	
	animateAvatar();  // Iniciar la animación

	
	particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 80,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
					"enable": false,
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "bounce",
				"bounce": false,
				"attract": {
					"enable": false,
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "repulse"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	});
});

// Animación del avatar
const avatar = document.querySelector('.avatar img');
let angle = 0;

function animateAvatar() {
    angle += 0.05;  // Incrementar el ángulo para la animación
    const x = Math.sin(angle) * 20;  // Calcular la posición x
    const y = Math.cos(angle) * 20;  // Calcular la posición y
    avatar.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;  // Aplicar la transformación
    requestAnimationFrame(animateAvatar);  // Solicitar el siguiente cuadro de animación
}

// JavaScript para cambiar la barra de navegación al hacer scroll
window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');  // Agregar clase si se hace scroll
    } else {
        navbar.classList.remove('scrolled');  // Remover clase si no hay scroll
    }
};
