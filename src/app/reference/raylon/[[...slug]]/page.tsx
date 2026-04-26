import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import { raylonRouteMap } from "@/lib/raylon-routes";

type ReferencePageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function RaylonReferencePage({
  params,
}: ReferencePageProps) {
  const { slug = [] } = await params;
  const normalizedSlug = slug.filter(Boolean).join("/");

  if (normalizedSlug === "") {
    redirect("/");
  }

  const route = raylonRouteMap[normalizedSlug];

  if (!route) {
    notFound();
  }

  redirect(route);
}
