import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function ProjectCard({projectName = 'Project Name', img='https://placehold.co/600x400', link=null}) {
  return (
    <Link href={link} target="_blank" className=" bg-primary-dark text-xl md:text-2xl text-white rounded-xl overflow-hidden outline w-full">
        <img src={img} alt="" className="width-fit" />
        <div className="flex font-bold place-items-center justify-between p-4">
        <p>{projectName}</p><FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
        </div>
    </Link>
  )
}
