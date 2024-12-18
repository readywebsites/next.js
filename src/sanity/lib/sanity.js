import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'yourProjectId',
  dataset: 'production',
  useCdn: true,
});
