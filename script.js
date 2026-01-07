// ====================
// FORMULARIO DE CONTACTO CON EMAILJS - CONFIGURACIÓN VERIFICADA
// ====================

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
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
      
      // DATOS CORRECTOS - VERIFICADOS
      const SERVICE_ID = 'service_lvc7vvl';      // ✅ Correcto
      const TEMPLATE_ID = 'template_0gdveop';    // ✅ Correcto
      const PUBLIC_KEY = 'ZtrKfFUeAmq_tapuA';    // ✅ Correcto
      
      // Parámetros del template
      const templateParams = {
        to_name: 'Cristian',      // A QUIÉN llega el email (tú)
        from_name: name,          // Nombre del remitente
        from_email: email,        // Email del remitente
        message: message,         // Mensaje
        reply_to: email,          // Para responder
        date: dateStr             // Fecha
      };
      
      console.log('🚀 Configuración EmailJS:');
      console.log('Service ID:', SERVICE_ID);
      console.log('Template ID:', TEMPLATE_ID);
      console.log('Public Key:', PUBLIC_KEY);
      console.log('Params:', templateParams);
      
      // Enviar email
      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
        .then(function(response) {
          console.log('✅ ÉXITO - Email enviado:', response);
          
          showStatus('¡Mensaje enviado con éxito! Te responderé pronto.', 'success', statusEl);
          submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Enviado!';
          submitBtn.style.background = 'linear-gradient(135deg, #10b981, #22d3ee)';
          
          // Resetear después de 4 segundos
          setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            clearStatus(statusEl);
          }, 4000);
        })
        .catch(function(error) {
          console.error('❌ ERROR DETALLADO:');
          console.error('Status:', error.status);
          console.error('Text:', error.text);
          console.error('Error completo:', error);
          
          let errorMessage = 'Error al enviar. ';
          
          // Errores comunes
          if (error.text.includes('template ID not found')) {
            errorMessage = 'ERROR: Template no encontrado. Verifica en EmailJS Dashboard.';
          } else if (error.text.includes('service ID')) {
            errorMessage = 'ERROR: Service ID incorrecto o servicio no conectado.';
          } else if (error.text.includes('Public Key')) {
            errorMessage = 'ERROR: Public Key incorrecta. Verifica en EmailJS.';
          } else {
            errorMessage = 'Error del servidor. Intenta más tarde.';
          }
          
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
});