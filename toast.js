import { sourceMdx } from '@toastdotdev/mdx';

export const sourceData = async ({ setDataForSlug }) => {
  const postMeta = await sourceMdx({
    setDataForSlug,
    directory: './content',
    slugPrefix: '/blog',
  });

  await setDataForSlug('/blog', {
    data: {
      posts: postMeta.map(({ meta }) => meta),
    },
  });
};
