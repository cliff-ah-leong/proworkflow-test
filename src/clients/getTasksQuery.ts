import { gql } from "@apollo/client";

export default gql`
  query GET_TASKS {
    tasks(
      input: {
        orderby: { name: asc }
        where: { displaytype: { NEQ: heading }, status: { EQ: active } }
      }
    ) {
      id
      name
      timerecords(input: { running: { IN: [true, false] } }) {
        id
        timespent
        startdate
        enddate
        running
        notes
        task {
          id
        }
        contact {
          id
          fullname
        }
      }
      taskTotalTimespent: timespent
    }
  }
`;
