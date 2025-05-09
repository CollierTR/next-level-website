import Marquee from "react-fast-marquee"

const Customer  = () => (
    <div className="mx-10">
        <img src="Next Level No BG.png" alt="logo" width={'200px'} />
    </div>
)


export default function OurCustomersMarquee() {
  return (
        <div className="flex flex-col place-items-center gap-4 lg:gap-16 py-8 lg:h-80">
        <p className="text-4xl lg:text-5xl">Proudly Serving</p>
        <div className=" h-32 w-full flex place-items-center overflow-visible">
            <Marquee autoFill={true} speed={20} play={true} className=" overflow-hidden h-48 relative border-y-3 border-white bg-primary-dark">
                <Customer></Customer>
            </Marquee>
        </div>
    </div>

  )
}
