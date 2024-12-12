import FlawDetectorCard from './FlawDetectorCard';
import ScrollBy from './ScrollBy';
export default function Project() {
  return (
    <>
      <section className="min-h-screen flex relative justify-center items-center">
        <div className="grid grid-cols-3 py-12 w-full gap-6 container">
          <FlawDetectorCard />
        </div>
        <div className="absolute bottom-[30px] right-[46%]">
          <ScrollBy />
        </div>
      </section>
    </>
  );
}
