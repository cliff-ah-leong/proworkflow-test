import { gql } from "@apollo/client";
import TimeRecordFragment from "./timeRecordFragment";

export default gql`
  ${TimeRecordFragment}
  mutation STOP_TIMERECORD($input: StartTimerecordInput) {
    stopTimerecord(input: $input) {
      ...TIMERECORD_INFO
    }
  }
`;
