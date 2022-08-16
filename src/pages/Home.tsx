import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Alert, AlertTitle } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";

import {
  getTasksQuery,
  startTimeRecordMutation,
  stopTimeRecordMutation,
  updateTimeRecordMutation,
} from "src/clients";
import { SelectForm } from "src/components/layouts/SelectForm";
import { TimeTracker } from "src/components/partials/TimeTracker";

import { Task, Timerecord } from "src/types";

const Home: React.FC = () => {
  const [curTask, setCurTask] = useState<string>("");
  const [isStart, setIsStart] = useState<boolean>(false);
  const { loading, error, data } = useQuery(getTasksQuery);
  const [startTimeRecord] = useMutation(startTimeRecordMutation);
  const [stopTimeRecord] = useMutation(stopTimeRecordMutation);
  const [updateTimeRecord] = useMutation(updateTimeRecordMutation);
  const [taskList, setTaskList] = useState<Task[]>(data?.tasks || []);
  const [resUpdatedRecord, setResUpdatedRecord] = useState<Timerecord>();

  useEffect(() => {
    setTaskList(data?.tasks);
  }, [data]);

  const startRecord = async () => {
    setIsStart(!isStart);

    const curTaskData = taskList?.find((task: Task) => task.name === curTask);
    const input = {
      variables: {
        input: {
          taskid: curTaskData?.id,
          notes: curTask,
        },
      },
    };
    if (curTask && !isStart) {
      const startedRecord = await startTimeRecord(input);
    } else if (isStart) {
      const stoppedRecord = await stopTimeRecord(input);
      const updatedRecord = await updateTimeRecord({
        variables: {
          input: {
            id: stoppedRecord.data.stopTimerecord.id,
            timespent: stoppedRecord.data.timespent,
            notes: "UPDATED NOTES",
          },
        },
      });
      setResUpdatedRecord(updatedRecord.data.updateTimerecord);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 2,
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Error occured while fetching
        </Alert>
      ) : (
        taskList?.length && (
          <React.Fragment>
            <SelectForm
              curTask={curTask}
              setCurTask={setCurTask}
              isStart={isStart}
              setIsStart={setIsStart}
              taskList={taskList}
              startRecord={startRecord}
            />
            <TimeTracker
              taskList={taskList}
              curTask={curTask}
              isStart={isStart}
              updatedRecord={resUpdatedRecord}
            />
          </React.Fragment>
        )
      )}
    </Box>
  );
};

export default Home;
