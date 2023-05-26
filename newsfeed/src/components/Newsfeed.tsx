import * as React from "react";
import { graphql } from 'relay-runtime';
import { useLazyLoadQuery } from "react-relay";

import type { NewsfeedQuery as NewsfeedQueryType } from './__generated__/NewsfeedQuery.graphql';
import Story from "./Story";

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    topStory {
      title
      summary
      poster {
        name
        profilePicture {
          url
        }
      }
      thumbnail {
        url
      }
    }
  }
`;

// eslint-disable-next-line no-empty-pattern
export default function Newsfeed({}) {
  const data = useLazyLoadQuery<NewsfeedQueryType>(
      NewsfeedQuery,
      {},
  );

  const story = data.topStory;
  // As before:
  return (
      <div className="newsfeed">
        <Story story={story} />
      </div>
  );
}