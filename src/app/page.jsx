import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Accelerator from "./components/Accelerator/Accelerator";
import JoinUs from "./components/JoinUs/JoinUs";
import { attributes, react as HomeComponent } from "../../content/home.md";

export default function Home() {
  let { title, cats } = attributes;

  return (
    <>
      <div className='main-wrapper'>
        <main className='main'>
          {/* <HomeContent /> */}
          <Header />
          <Banner />
          <Accelerator />
          <JoinUs />
        </main>
      </div>
    </>
  );
}
