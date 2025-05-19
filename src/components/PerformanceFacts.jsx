

export default function PerformanceFacts() {
  return (
    <div className="min-h-screen lg:flex justify-center place-items-center hidden">
        <div className="w-10/12 max-w-[1300px] h-full grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 justify-center place-items-center mx-auto">
            <div className="size-full col-span-2 bg-primary-dark text-white outline-2 p-12 pb-24 rounded-xl">
                <p>
                    <span className="text-7xl">100%</span>
                    {/* <hr className="my-6 block w-40 border-2"/> */}
                    <br />
                    <span className="text-3xl ">client satisfaction guarantee</span>
                </p>
            </div>
            <div className="size-full bg-primary-dark text-white outline-2 p-12 pb-24 rounded-xl">
                <p>
                    <span className="text-6xl">2+</span>
                    {/* <hr className="my-4 block w-20 border-2"/> */}
                    <br />
                    <span className="text-2xl ">years of experience</span>
                </p>
            </div>
            <div className="size-full bg-primary-dark text-white outline-2 p-12 pb-24 rounded-xl">
                <p>
                    <span className="text-6xl">20+</span>
                    {/* <hr className="my-4 block w-20 border-2"/> */}
                    <br />
                    <span className="text-2xl ">completed projects!</span>
                </p>
            </div>
            <div className="size-full col-span-2 bg-primary-dark text-white outline-2 p-12 pb-24 rounded-xl">
                <p>
                    <span className="text-6xl">Fully Customizable!</span>
                </p>
            </div>
        </div>
    </div>
  )
}
