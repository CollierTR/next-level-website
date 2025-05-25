
import ReviewCard from "./ReviewCard"

export default function Reviews() {

  return (
    <div className="flex relative md:py-20 h-auto bg-dark xl:[1740px] flex-col justify-center place-items-center text-center my-20 w-full">


      <div className=' z-20 text-light flex flex-col gap-5 sm:gap-12 justify-center place-items-center w-full'>
        <h2 className="text-4xl sm:text-6xl ">Testimonials</h2>
        <div className="flex flex-col lg:flex-row justify-center place-items-start gap-6 w-full">
          <ReviewCard 
            author="Kyle Penrod"
            date="6/20/2024"
            text="Tristan from  Collier Web Services was very professional and did an amazing job on my business website. He is very good at what he does. If you&apos;re in need of a professional website they are the best!!!!"
            stars={5}
          />
          <ReviewCard 
            author="Matthew"
            date="6/7/2024"
            text="Tristan built two websites for me, and they are working great. He really worked hard to get me what I wanted, and to help me make decisions about those things I was unsure about. Good guy to work with!"
            stars={5}
          />
        </div>
      </div>
    </div>
  )
}


