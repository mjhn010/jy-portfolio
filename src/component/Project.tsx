import FlawDetectorCard from './FlawDetectorCard';
import ScrollBy from './ScrollBy';
export default function Project() {
  return (
    <>
      <section className="min-h-screen flex relative justify-center items-center">
        <div className="grid grid-cols-3 py-12 w-full gap-6 container max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:flex max-sm:flex-col max-sm:items-center">
          <FlawDetectorCard />
        </div>
        <div className="max-[1024px]:hidden absolute bottom-[30px] right-[46%]">
          <ScrollBy />
        </div>
      </section>
    </>
  );
}
