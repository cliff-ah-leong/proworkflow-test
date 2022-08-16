import { gql } from "@apollo/client";

export default gql`
  query FILTER_TASKS($searchTerm: String) {
    tasks(
      input: {
        limit: 10
        orderby: { name: asc }
        where: {
          displaytype: { NEQ: heading }
          status: { EQ: active }
          name: { LIKE: $searchTerm }
        }
      }
    ) {
      id
      name
      timerecords {
        ...TIMERECORD_INFO
      }
      taskTotalTimespent: timespent
    }
  }
`;
