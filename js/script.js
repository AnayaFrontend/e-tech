// Formulário de inscrição
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inscricao-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        alert('Inscrição realizada com sucesso! Em breve você receberá um email de confirmação.');
        form.reset();
    });

    // Inicializar o mapa
    initMap();
});

// Inicialização do mapa com OpenStreetMap
function initMap() {
    // Coordenadas do evento (Taquara, RJ)
    const eventLocation = [-22.7252, -42.6271];
    
    // Criar o mapa
    const map = L.map('map').setView(eventLocation, 15);
    
    // Adicionar camada do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Adicionar marcador
    const marker = L.marker(eventLocation).addTo(map);
    
    // Adicionar popup com informações
    marker.bindPopup(`
        <div style="text-align: center;">
            <h3 style="color: #141E61; margin-bottom: 5px;">Local do Evento</h3>
            <p style="margin: 0;">Taquara, RJ</p>
        </div>
    `).openPopup();
}

// Rolagem suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, 
                behavior: 'smooth'
            });
        }
    });
});

// Modal da galeria de imagens
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.9)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '1001';
        
        const modalImg = document.createElement('img');
        modalImg.src = this.src;
        modalImg.style.maxHeight = '90vh';
        modalImg.style.maxWidth = '90vw';
        modalImg.style.objectFit = 'contain';
        
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        
        modal.addEventListener('click', function() {
            modal.remove();
        });
    });
});

// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
    });
}); 