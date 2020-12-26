import { h } from 'preact';

export default function Blog({ posts }) {
  return <pre>{JSON.stringify(posts, null, 2)}</pre>;
}
