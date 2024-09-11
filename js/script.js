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
    anime({
        targets: '#rectangle', 
        backgroundColor: ['#3F51B5', '#00BCD4', '#FF6F61', '#9C27B0', '#3F51B5'], 
        scale: [1, 1.2, 1], 
        duration: 2000, 
        easing: 'easeInOutQuad', 
        direction: 'normal', 
        loop: false 
    }).finished.then(() => {
        
        document.getElementById('adviceText').textContent = "Dans un monde en perpétuel mouvement, savoir s'adapter est la clé pour atteindre l'excellence. Embrasse le changement, surmonte les défis, et révèle le meilleur de toi-même.";
    });
}


// Fonction pour l'animation au survol (mouseover)
function mouseOver() {
    anime({
        targets: '#rectangle',
        scale: [1, 1.1],
        rotate: '1turn',
        easing: 'easeInOutQuad',
        duration: 1000
    });
}


// Fonction pour l'animation lors du retrait du survol (mouseout)
function mouseOut() {
    anime({
        targets: '#rectangle',
        scale: 1, 
        duration: 20,
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


// Fonction pour récupérer un conseil
// function fetchAdvice() {
//     fetch('https://api.adviceslip.com/advice')
//         .then(response => response.json())
//         .then(data => gsap.fromTo('#adviceText', 
//             { opacity: 0, y: 20 }, 
//             { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', onComplete: () => document.getElementById('adviceText').textContent = data.slip.advice }
//         ))
//         .catch(error => console.error('Erreur lors de la récupération du conseil:', error));
// }

// Ajouter les événements
document.getElementById('rectangle').addEventListener('click', clicked);
document.getElementById('rectangle').addEventListener('dblclick', dblClicked);
document.getElementById('rectangle').addEventListener('mouseover', mouseOver);
document.getElementById('rectangle').addEventListener('mouseout', mouseOut);
document.getElementById('rectangle').addEventListener('mouseenter', mouseEnter);

// document.getElementById('fetchAdviceButton').addEventListener('click', fetchAdvice);
