document.addEventListener("DOMContentLoaded", function () {
    // Animação para a aparição do conteúdo
    const content = document.querySelector('.content');
    content.classList.add('fade-in');

    // Efeito de clique nos botões de navegação
    const buttons = document.querySelectorAll('nav ul li a');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
                window.location.href = button.href;
            }, 300);
        });
    });

    // Criar bolhas flutuantes no fundo da página
    const body = document.body;
    for (let i = 0; i < 10; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        const size = Math.random() * 50 + 20;
        bubble.style.width = size + "px";
        bubble.style.height = size + "px";
        bubble.style.left = Math.random() * 100 + "vw";
        bubble.style.animationDuration = (Math.random() * 5 + 5) + "s";
        body.appendChild(bubble);
    }

    // Configuração do carrossel de imagens
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Função para exibir o slide atual
    function showSlide(index) {
        slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    }

    // Função para mover para o próximo slide automaticamente
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Função para mover para o slide anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Inicializa o slide e define o intervalo para mudança automática
    showSlide(currentSlide);
    const slideInterval = setInterval(nextSlide, 3000); // Muda o slide a cada 3 segundos

    // Adicionar eventos de clique nos botões "Próximo" e "Anterior" do carrossel
    document.getElementById('nextBtn').addEventListener('click', () => {
        clearInterval(slideInterval); // Pausa o carrossel automático ao clicar
        nextSlide();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        clearInterval(slideInterval); // Pausa o carrossel automático ao clicar
        prevSlide();
    });

    // Detecção de toque para navegação manual nos dispositivos móveis
    let xStart = null;
    document.getElementById('slideshow-container').addEventListener('touchstart', handleTouchStart, false);
    document.getElementById('slideshow-container').addEventListener('touchmove', handleTouchMove, false);

    function handleTouchStart(event) {
        xStart = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
        if (!xStart) return;

        let xDiff = xStart - event.touches[0].clientX;
        if (Math.abs(xDiff) > 50) { // Sensibilidade ao toque
            clearInterval(slideInterval); // Pausa o carrossel automático ao deslizar
            if (xDiff > 0) {
                nextSlide(); // Próximo slide
            } else {
                prevSlide(); // Slide anterior
            }
            xStart = null;
        }
    }

    // Inicializar contador de tempo desde 27/09/2024 às 00:00 (horário de Brasília)
    const startDate = new Date("2024-09-27T00:00:00-03:00"); // Offset -3:00 para horário de Brasília

    function updateCounter() {
        const now = new Date(); // Hora atual
        const diff = now - startDate; // Diferença em milissegundos

        // Calcular dias, horas, minutos e segundos
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Atualizar o conteúdo do contador
        document.getElementById("counter").textContent =
            `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
    }

    // Atualizar o contador a cada segundo
    setInterval(updateCounter, 1000);
    updateCounter(); // Chamada inicial para exibir o tempo imediatamente
});
