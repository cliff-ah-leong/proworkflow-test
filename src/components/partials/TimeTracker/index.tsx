import React, { useState } from "react";
import { Box } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridSortModel,
} from "@mui/x-data-grid";
import { useMemo } from "react";
import { Task, Timerecord } from "src/types";
import moment from "moment";

const columns: GridColDef[] = [
  { field: "notes", headerName: "Notes", width: 200, align: "center" },
  { field: "tracked_by", headerName: "Tracked By", width: 200 },
  {
    field: "date",
    headerName: "Date",
    width: 200,
  },
  {
    field: "time_tracked",
    headerName: "Time Tracked",
    width: 200,
  },
];

interface TimeTrackerProps {
  taskList: Task[];
  curTask: string;
  isStart: boolean;
  updatedRecord?: Timerecord;
}

export const TimeTracker: React.FC<TimeTrackerProps> = ({
  taskList,
  curTask,
  updatedRecord,
}) => {
  const [sortModel, setSortModel] = useState<GridSortModel>([
    {
      field: "time_tracked",
      sort: "asc",
    },
  ]);

  const curRecords = useMemo(() => {
    const res =
      taskList.find((task: Task) => task.name === curTask)?.timerecords || [];
    return updatedRecord ? [...res, updatedRecord] : [...res];
  }, [curTask, updatedRecord]);

  const rows: GridRowsProp = useMemo(() => {
    const res =
      curRecords?.map((record: Timerecord) => ({
        id: record.id,
        notes: record.notes,
        tracked_by: record.contact.fullname,
        date: moment(record.startdate).format("DD MMM YYYY"),
        time_tracked: record.running
          ? "running"
          : moment(record.enddate).format("HH:mm"),
      })) || [];
    return [...res];
  }, [curRecords]);

  return (
    <Box sx={{ p: 5, mt: 2, height: 600, width: 900 }}>
      {taskList && (
        <DataGrid
          rows={rows}
          columns={columns}
          sortModel={sortModel}
          onSortModelChange={(model) => setSortModel(model)}
        />
      )}
    </Box>
  );
};
