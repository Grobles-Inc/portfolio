import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		id: z.string(),
		title: z.string(),
		slug: z.string(),
		pubDate: z.coerce.date(),
		description: z.string(),
		fullDescription: z.string(),
		image: image().optional(),
		technologies: z.array(z.string()),
		liveDemo: z.string().optional(),
		github: z.string().optional(),
		category: z.string(),
		client: z.string(),
		duration: z.string(),
		features: z.array(z.string()),
	}),
});

export const collections = { blog, projects };
