import DayItem from "@components/DayItem";

export default {
  title: "component/DayItem",
  component: DayItem,
};

export const dayItem = () => (
  <DayItem year={0} month={0} day={0} isToday={false} isSelected={false} categories={[]} />
);
