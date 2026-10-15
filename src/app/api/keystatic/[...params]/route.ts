import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

const handler = makeRouteHandler({ config });

/** Same rule as the editor page: no local-disk writes on the live site. */
const hidden =
  process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO;

function notFound() {
  return new Response("Not found", { status: 404 });
}

export const GET = hidden ? notFound : handler.GET;
export const POST = hidden ? notFound : handler.POST;
