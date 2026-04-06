// GCS bucket for all static assets (images, logos, docs)
const BUCKET = 'https://storage.googleapis.com/timmattingly-assets';

export const assets = {
  headshot: (name: string) => `${BUCKET}/headshots/${name}`,
  travel: (name: string) => `${BUCKET}/travel/${name}`,
  hobby: (name: string) => `${BUCKET}/hobbies/${name}`,
  professional: (name: string) => `${BUCKET}/professional/${name}`,
  logo: (name: string) => `${BUCKET}/logos/${name}`,
  client: (name: string) => `${BUCKET}/logos/clients/${name}`,
  doc: (name: string) => `${BUCKET}/docs/${name}`,
} as const;
