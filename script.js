// ====================
// PAGE LOADER
// ====================
window.addEventListener('load', () => {
  const loader = document.querySelector('.page-loader');
  document.body.classList.remove('loading');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 300);
});

// ====================
// SMOOTH SCROLL & ANIMATIONS
// ====================

document.addEventListener('DOMContentLoaded', function() {
  
  // Smooth scroll para navegación
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Animaciones al hacer scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observar elementos con animación
  document.querySelectorAll('.info-card, .skill-category, .project-card, .contact-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Navbar scroll effect
  let lastScroll = 0;
  const nav = document.querySelector('.nav');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      nav.style.boxShadow = '0 4px 20px rgba(0,0,0,.3)';
    } else {
      nav.style.boxShadow = 'none';
    }
    
    if (currentScroll > lastScroll && currentScroll > 500) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
  });

  // ====================
  // BACK TO TOP BUTTON
  // ====================
  const backToTopBtn = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ====================
  // SCROLL PROGRESS BAR
  // ====================
  const progressBar = document.querySelector('.scroll-progress');
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
    progressBar.setAttribute('aria-valuenow', Math.round(scrolled));
  });

  // ====================
  // REQUEST CV BUTTON
  // ====================
  const requestFullCvBtn = document.getElementById('request-full-cv');
  
  requestFullCvBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Opción 1: Redirigir a WhatsApp con mensaje predefinido
    const whatsappNumber = '573235297831'; // Tu número actualizado
    const message = encodeURIComponent('Hola Cristian, me interesa solicitar tu CV. ¿Podrías enviármelo?');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Opción 2: Scroll al formulario de contacto
    // const contactSection = document.getElementById('contact');
    // contactSection.scrollIntoView({ behavior: 'smooth' });
    
    // Mostrar opciones al usuario
    const userChoice = confirm(
      '📋 Solicitar CV\n\n' +
      '¿Cómo prefieres solicitarlo?\n\n' +
      'OK = WhatsApp (recomendado)\n' +
      'Cancelar = Formulario de contacto'
    );
    
    if (userChoice) {
      // Abrir WhatsApp
      window.open(whatsappUrl, '_blank');
    } else {
      // Ir al formulario de contacto
      const contactSection = document.getElementById('contact');
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Pre-llenar el mensaje (opcional)
      setTimeout(() => {
        const messageField = document.getElementById('message');
        if (messageField && !messageField.value) {
          messageField.value = 'Hola Cristian, me interesa solicitar tu CV. ¿Podrías enviármelo?';
          messageField.focus();
        }
      }, 800);
    }
  });

  // Formulario de contacto
  setupContactForm();
});

// ====================
// FORMULARIO DE CONTACTO CON EMAILJS
// ====================

function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const statusEl = document.getElementById('form-status');
    const originalBtnText = submitBtn.innerHTML;
    
    // Validación
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
      showStatus('Por favor completa todos los campos', 'error', statusEl);
      return;
    }
    
    if (!isValidEmail(email)) {
      showStatus('Por favor ingresa un email válido', 'error', statusEl);
      return;
    }
    
    // Estado "enviando"
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    // Fecha actual
    const now = new Date();
    const dateStr = now.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    // Configuración EmailJS
    const SERVICE_ID = 'service_lvc7vvl';
    const TEMPLATE_ID = 'template_0gdveop';
    const PUBLIC_KEY = 'ZtrKfFUeAmq_tapuA';
    
    const templateParams = {
      to_name: 'Cristian',
      from_name: name,
      from_email: email,
      message: message,
      reply_to: email,  // Este es el email del remitente para responder
      date: dateStr
    };
    
    // Enviar email
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(function(response) {
        console.log('✅ Email enviado:', response);
        
        showStatus('¡Mensaje enviado con éxito! Te responderé pronto.', 'success', statusEl);
        submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Enviado!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #22d3ee)';
        
        setTimeout(() => {
          contactForm.reset();
          submitBtn.innerHTML = originalBtnText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
          clearStatus(statusEl);
        }, 4000);
      })
      .catch(function(error) {
        console.error('❌ Error:', error);
        
        let errorMessage = 'Error al enviar el mensaje. Por favor intenta más tarde.';
        
        showStatus(errorMessage, 'error', statusEl);
        submitBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error';
        submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #f97316)';
        
        setTimeout(() => {
          submitBtn.innerHTML = originalBtnText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
        }, 4000);
      });
  });
}

// Funciones auxiliares
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showStatus(message, type, element) {
  if (!element) return;
  element.textContent = message;
  element.className = 'form-status ' + type;
  element.style.display = 'block';
  element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function clearStatus(element) {
  if (!element) return;
  element.textContent = '';
  element.className = 'form-status';
  element.style.display = 'none';
}