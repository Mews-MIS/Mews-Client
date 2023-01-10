import CardSlider from "@components/CardSlider";
import ContentCard from "@components/ContentCard";

export default {
  title: "component/CardSlider",
  component: CardSlider,
};

export const contentCard = () => (
  <CardSlider>
    <div className={"CardContainer"}>
      <ContentCard />
    </div>
    <div className={"CardContainer"}>
      <ContentCard />
    </div>
    <div className={"CardContainer"}>
      <ContentCard />
    </div>
    <div className={"CardContainer"}>
      <ContentCard />
    </div>
    <div className={"CardContainer"}>
      <ContentCard />
    </div>
    <div className={"CardContainer"}>
      <ContentCard />
    </div>

    <style jsx>
      {`
        .CardContainer {
          width: 200px;
          height: 300px;
        }
      `}
    </style>
  </CardSlider>
);
