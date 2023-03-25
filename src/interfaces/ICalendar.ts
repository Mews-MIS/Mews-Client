export interface IPropsDayItem {
  year: number;
  month: number;
  day: number;
  isToday: boolean;
  isSelected: boolean;
  isCurrentMonth: boolean;
  categories: string[];
}

export interface IDayItem {
  title?: string;
  startDate: number[];
  endDate: number[];
  category: string;
}
