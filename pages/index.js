import Dropdown from "../components/Dropdown";
import Card from "../components/Card";
import CardFooter from "../components/CardFooter";
import IArrow from "../components/icons/IArrow";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-20 bg-gray-100 h-screen p-10">
      <Dropdown />
      <div className="flex gap-14">
        <Card className="self-start" />
        <IArrow />
        <Card title="Selected">
          <CardFooter />
        </Card>
      </div>
    </div>
  );
}
