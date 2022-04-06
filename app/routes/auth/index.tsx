import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return {
    "X-Hasura-User-Id": "1",
    "X-Hasura-Role": "user"
  };
};
