export default function Page({ params }: { params: { slug: string } }) {
  return `This is ${params.slug} page`;
}

export function generateStaticParams() {
  return [{ slug: "privacy" }, { slug: "terms" }];
}

export const dynamicParams = false;
