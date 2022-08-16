import React, { useCallback } from "react";
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  ToggleButton,
  Typography,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";

import { Task, Data } from "src/types";

interface SelectFormProps {
  curTask: string;
  setCurTask: (curTast: string) => void;
  isStart: boolean;
  setIsStart: (isStart: boolean) => void;
  taskList: Task[];
  startRecord: () => void;
}

export const SelectForm: React.FC<SelectFormProps> = ({
  curTask,
  setCurTask,
  isStart,
  setIsStart,
  taskList,
  startRecord,
}) => {
  const handleTaskChange = useCallback((event: SelectChangeEvent) => {
    setCurTask(event.target.value as string);
  }, []);
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      <FormControl sx={{ minWidth: 240 }}>
        <InputLabel id="task--select--label">Select Task</InputLabel>
        <Select
          labelId="task--select--label"
          id="task--select"
          value={curTask}
          label="Select Task"
          onChange={handleTaskChange}
          disabled={isStart}
        >
          {taskList.map((item: Task) => (
            <MenuItem value={item.name} key={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ToggleButton
        value="check"
        selected={isStart}
        onChange={startRecord}
        sx={{ ml: 2 }}
      >
        {isStart ? (
          <>
            <Typography>Start</Typography>
            <PlayArrowIcon color="success" />
          </>
        ) : (
          <>
            <Typography>Stop</Typography>
            <StopIcon color="disabled" />
          </>
        )}
      </ToggleButton>
    </Box>
  );
};
