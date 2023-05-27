import * as React from "react";
import { graphql } from 'relay-runtime';
import { useLazyLoadQuery } from "react-relay";

import type { NewsfeedQuery as NewsfeedQueryType } from './__generated__/NewsfeedQuery.graphql';
import Story from "./Story";

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    topStory {
      ...StoryFragment
    }
  }
`;

export default function Newsfeed() {
  const data = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});
  //debugger
  const story = data?.topStories;

  return (
      <div className="newsfeed">
        <Story story={story[0]} />
      </div>
  );
}