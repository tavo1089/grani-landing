/* ═══════════════════════════════════════════════════════
   FORM.JS — Envío del formulario al webhook de n8n
   ───────────────────────────────────────────────────────
   ÚNICO valor que cambiás por cliente: N8N_WEBHOOK_URL
═══════════════════════════════════════════════════════ */

const N8N_WEBHOOK_URL = 'https://[TU-N8N]/webhook/[ID-DEL-CLIENTE]';

/* ── No tocar nada debajo de esta línea ── */

document.addEventListener('DOMContentLoaded', () => {

  const form       = document.getElementById('contactForm');
  const submitBtn  = document.getElementById('submitBtn');
  const btnText    = submitBtn?.querySelector('.btn-text');
  const btnLoading = submitBtn?.querySelector('.btn-loading');
  const successEl  = document.getElementById('formSuccess');
  const errorEl    = document.getElementById('formError');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validación básica
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Privacidad obligatoria
    const privacy = form.querySelector('#privacy');
    if (privacy && !privacy.checked) {
      privacy.focus();
      return;
    }

    // Estado loading
    setLoading(true);
    hideMessages();

    // Recopilar datos
    const data = {};
    new FormData(form).forEach((val, key) => {
      if (key !== 'privacy') data[key] = val;
    });

    // Metadatos útiles para n8n
    data._source  = window.location.href;
    data._cliente = document.title;
    data._fecha   = new Date().toISOString();

    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        showSuccess();
        form.reset();
      } else {
        throw new Error(`HTTP ${res.status}`);
      }

    } catch (err) {
      console.error('[form.js] Error al enviar:', err);
      showError();
    } finally {
      setLoading(false);
    }
  });

  /* ── Helpers ── */
  function setLoading(loading) {
    if (!submitBtn) return;
    submitBtn.disabled = loading;
    btnText?.toggleAttribute('hidden', loading);
    btnLoading?.toggleAttribute('hidden', !loading);
  }

  function hideMessages() {
    successEl?.setAttribute('hidden', '');
    errorEl?.setAttribute('hidden', '');
  }

  function showSuccess() {
    successEl?.removeAttribute('hidden');
    successEl?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function showError() {
    errorEl?.removeAttribute('hidden');
    errorEl?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

});
