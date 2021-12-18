import Dropdown from "../components/Dropdown";
import Card from "../components/Card";
import CardFooter from "../components/CardFooter";
import IArrow from "../components/icons/IArrow";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-20 bg-zinc-100 h-screen p-10">
      <Dropdown />
      <div className="flex gap-14">
        <Card className="self-start" />
        <IArrow className="-mt-36" />
        <Card title="Selected">
          <CardFooter />
        </Card>
      </div>
    </div>
  );
}
