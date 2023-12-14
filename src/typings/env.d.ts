/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_X_API_KEY: string;
  readonly VITE_JWT_SECRET_KEY: string;
  readonly VITE_IMAGE_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
