export interface Contact {
  id: string;
  fullname: string;
  __typename: string;
}

export interface Timerecord {
  contact: Contact;
  startdate: string;
  enddate?: string;
  id: string;
  notes: string;
  running: boolean;
  task: Task;
  timespent: number;
  __typename: string;
}

export interface Task {
  id: string;
  name: string;
  taskTotalTimespent: number;
  timerecords: Timerecord[];
  __typename: string;
}

export interface Data {
  tasks: Task[];
}
