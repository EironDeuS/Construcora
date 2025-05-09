
    // Alternar entre formularios de contacto
    const btnEmail = document.getElementById('btn-email');
    const btnWhatsapp = document.getElementById('btn-whatsapp');
    const formEmail = document.querySelector('.form-email');
    const formWhatsapp = document.getElementById('whatsapp-contact');
    
    btnEmail.addEventListener('click', () => {
        btnEmail.classList.add('btn-opcion-activo');
        btnWhatsapp.classList.remove('btn-opcion-activo');
        formEmail.style.display = 'block';
        formWhatsapp.style.display = 'none';
    });
    
    btnWhatsapp.addEventListener('click', () => {
        btnWhatsapp.classList.add('btn-opcion-activo');
        btnEmail.classList.remove('btn-opcion-activo');
        formWhatsapp.style.display = 'block';
        formEmail.style.display = 'none';
    });
    
    // Envío por WhatsApp
    const btnEnviarWhatsapp = document.getElementById('btn-enviar-whatsapp');
    
    btnEnviarWhatsapp.addEventListener('click', () => {
        const telefono = document.getElementById('wa-telefono').value;
        const mensaje = document.getElementById('wa-mensaje').value;
        
        const texto = `Hola ${mensaje}`;
        const url = `https://wa.me/56965065031?text=${encodeURIComponent(texto)}`;
        
        window.open(url, '_blank');
    });

        // Limpiar formulario después del envío
        const contactForm = document.getElementById('contact-form');

        contactForm.addEventListener('submit', function(e) {
            // Esto permite que Formspree procese el formulario primero
            setTimeout(() => {
                contactForm.reset(); // Limpia todos los campos del formulario
            }, 1000);
            
            // Opcional: Mostrar mensaje de éxito
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Mensaje Enviado!';
            submitBtn.style.backgroundColor = '#4CAF50'; // Verde para indicar éxito
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = ''; // Volver al color original
            }, 3000);
        });
        // Menú responsive
        const menuBtn = document.getElementById('menu-btn');
        const navLista = document.getElementById('nav-lista');
        
        menuBtn.addEventListener('click', () => {
            navLista.classList.toggle('active');
            menuBtn.innerHTML = navLista.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Cambiar header al hacer scroll
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
        
        // Animaciones al hacer scroll
        const animarElementos = document.querySelectorAll('.animar');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });
        
        animarElementos.forEach(el => observer.observe(el));
        
        // Smooth scrolling para enlaces
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (navLista.classList.contains('active')) {
                    navLista.classList.remove('active');
                    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
