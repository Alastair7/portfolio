import "./Project.css"
import noImageIcon from "../../assets/noimage.svg"

type Props = {
  id: number
  name: string
  description: string
  thumbnail?: string
  status: ProjectStatus
}

export type ProjectStatus = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED"



export type Project = {
  id: number
  name: string
  description: string
  thumbnail?: string
  status: ProjectStatus
}

export const ProjectPreview = ({
  name = "Untitled", status = "NOT_STARTED", description, thumbnail = noImageIcon }: Props) => {
  return <div className="project">
    <div className="project__header">
      <img className="project__thumbnail" src={thumbnail} />
      <h1 className="project__title">{name}</h1>
    </div>
    <div className="project__details">
      <p className="project__description">{description}</p>
      <p className="project__status">{status}</p>
    </div>
  </div >
}
