import { gql } from "@apollo/client";
import TimeRecordFragment from "./timeRecordFragment";

export default gql`
  ${TimeRecordFragment}
  mutation START_TIMERECORD($input: StartTimerecordInput) {
    startTimerecord(input: $input) {
      ...TIMERECORD_INFO
    }
  }
`;
