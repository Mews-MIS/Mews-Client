export interface IScheduleItem {
  title: string;
  Color: string;
}

export interface IScheduleCategory {
  category: string;
  titles: string[];
}

export interface IScheduleItemProps {
  category: string;
  title: string;
  startDate: number[];
  endDate: number[];
}
