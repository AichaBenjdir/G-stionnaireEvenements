// Fonction pour l'animation au clic
function clicked() {
    anime({
        targets: '#rectangle',
        translateX: 250,
        duration: 1000,
        easing: 'easeOutElastic(1, 0.5)',
        direction: 'alternate',
        loop: true
    });
}

// Fonction pour l'animation au double-clic
function dblClicked() {
    const numCircles = 20; 
    const container = document.getElementById('circleContainer');
    const rectangle = document.getElementById('rectangle');
    const rect = rectangle.getBoundingClientRect();
    
    const adviceText = document.getElementById('adviceText');

    // Modifier le texte au double-clic
    adviceText.textContent = 'Les changements apportent de nouvelles opportunités et perspectives enrichissantes. Osez le changement pour évoluer !';

    // Générer plusieurs petits cercles avec des couleurs aléatoires
    for (let i = 0; i < numCircles; i++) {
        const circle = document.createElement('div');
        
        // Appliquer les styles directement en JavaScript
        circle.style.position = 'absolute';
        circle.style.width = '20px';
        circle.style.height = '20px';
        circle.style.borderRadius = '50%'; 
        circle.style.opacity = '0.8';
        
        // Définir une couleur aléatoire pour chaque cercle
        const colors = ['#FF6347', '#15ffa5', '#00BCD4', '#FFD700', '#FF69B4'];
        circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Positionner les cercles autour du texte
        const angle = Math.random() * 2 * Math.PI; 
        const radius = 100; 
        circle.style.left = `${rect.left + rect.width / 2 + radius * Math.cos(angle) - 10}px`; 
        circle.style.top = `${rect.top + rect.height / 2 + radius * Math.sin(angle) - 10}px`;
        
        container.appendChild(circle); 
    }

    // Anime les petits cercles
    anime({
        targets: '#circleContainer div', 
        translateX: function(el) {
            
            const angle = Math.random() * 2 * Math.PI;
            return 100 * Math.cos(angle); 
        },
        translateY: function(el) {
            
            const angle = Math.random() * 2 * Math.PI;
            return 100 * Math.sin(angle); 
        },
        scale: [0, 1], 
        duration: 2000,
        easing: 'easeInOutQuad',
        delay: anime.stagger(50),
        complete: function() {
            
            container.innerHTML = '';
        }
    });

}



// Fonction pour l'animation au survol (mouseover)
function mouseOver() {
    anime({
        targets: '#rectangle',
        scale: [1, 1.1],
        rotate: '1turn',
        easing: 'easeInOutBounce',
        duration: 1000
    });
}

// Fonction pour l'animation lors du retrait du survol (mouseout)
function mouseOut() {
    anime({
        targets: '#rectangle',
        scale: 1,
        duration: 500,
        easing: 'easeInOutQuad'
    });
}

// Fonction pour l'animation lors de l'entrée dans l'élément (mouseenter)
function mouseEnter() {
    anime({
        targets: '#rectangle',
        scale: [1, 1.1],
        backgroundColor: '#FF6347',
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
        borderRadius: ['10px', '50%'],
        duration: 800,
        easing: 'easeInOutQuad'
    });
}

// Ajouter les événements
document.getElementById('rectangle').addEventListener('click', clicked);
document.getElementById('rectangle').addEventListener('dblclick', dblClicked);
document.getElementById('rectangle').addEventListener('mouseover', mouseOver);
document.getElementById('rectangle').addEventListener('mouseout', mouseOut);
document.getElementById('rectangle').addEventListener('mouseenter', mouseEnter);
