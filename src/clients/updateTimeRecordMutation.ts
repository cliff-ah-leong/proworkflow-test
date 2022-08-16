import { gql } from "@apollo/client";
import TimeRecordFragment from "./timeRecordFragment";

export default gql`
  ${TimeRecordFragment}
  mutation UPDATE_TIMERECORD($input: UpdateTimerecordInput) {
    updateTimerecord(input: $input) {
      ...TIMERECORD_INFO
    }
  }
`;
