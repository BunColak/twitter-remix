import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import gqlClient from "~/gqlClient.server";
import { GetTweets, GetTweetsQuery } from "~/graphql/generated";

type LoaderData = GetTweetsQuery["tweets"];

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  const data = await gqlClient.query<GetTweetsQuery>({
    query: GetTweets,
  });

  return data.data.tweets;
};

const Home = () => {
  const tweets = useLoaderData<LoaderData>();

  return (
    <div>
      {tweets.map((tweet) => (
        <div key={tweet.id}>{tweet.content}</div>
      ))}
    </div>
  );
};

export default Home;
