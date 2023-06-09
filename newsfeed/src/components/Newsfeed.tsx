import * as React from "react";
import { graphql } from 'relay-runtime';
import { useLazyLoadQuery } from "react-relay";

import type { NewsfeedQuery as NewsfeedQueryType } from './__generated__/NewsfeedQuery.graphql';
import Story from "./Story";

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    topStories {
      id,
      ...StoryFragment
    }
  }
`;

export default function Newsfeed() {
  const { topStories } = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});

  return (
      <div className="newsfeed">
          {topStories.map(story => <Story story={story} key={story.id} />)}
      </div>
  );
}