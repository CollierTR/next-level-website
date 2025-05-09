import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export default function ReviewCard() {


  return (
    <div className="text-start p-6 flex flex-col text-xl border-2 border-black justify-center place-items-start gap-4 text-dark bg-white rounded-xl w-10/12 sm:w-1/2 lg:w-[28%]">

      <div className="flex justify-between place-items-center w-full lg:py-2 xl:py-4">
        <img src="/google.png" alt="" className="size-1/12" />
        <div className="flex flex-row text-[gold]">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>

      <div className="flex w-full">
        <p>“The level of expertise and detailed inspection, including the report that Kyle delivered to us, reassured our decision in purchasing the…”</p>
      </div>

      <div className="flex flex-col">
        <p className="font-bold">James Dean</p>
        <p className="italic">2/28/2023</p>
      </div>

    </div>
  )
}
