
import ReviewCard from "./ReviewCard"

export default function Reviews() {

  return (
    <div className="flex relative md:py-20 h-auto bg-dark xl:[1740px] flex-col justify-center place-items-center text-center my-20 w-full">


      <div className=' z-20 text-light flex flex-col gap-5 sm:gap-12 justify-center place-items-center w-full'>
        <h2 className="text-4xl sm:text-6xl ">Testimonials</h2>
        <div className="flex flex-col lg:flex-row justify-center place-items-center gap-6 w-full">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>

      {/* <div className={`opacity-35 bg-no-repeat bg-cover bg-center h-full w-full overflow-hidden absolute z-10`}>
      </div> */}

    </div>
  )
}


