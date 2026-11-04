/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** URL des Formular-Endpoints (POST, multipart/form-data). Leer = Versand nicht eingerichtet. */
  readonly PUBLIC_FORM_ENDPOINT?: string;
  /** reCAPTCHA v2 Site Key. Leer = Platzhalter wird angezeigt. */
  readonly PUBLIC_RECAPTCHA_SITE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
