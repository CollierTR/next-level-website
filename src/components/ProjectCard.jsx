import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ProjectCard() {
  return (
    <div className=" bg-primary-dark text-2xl text-white rounded-xl overflow-hidden outline">
        <img src="https://placehold.co/600x400" alt="" />
        <div className="flex font-bold place-items-center justify-between p-4">
        <p>Project Title</p><FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
        </div>
    </div>
  )
}
