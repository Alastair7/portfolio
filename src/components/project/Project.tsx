type Props = {
  id: number;
  name: string;
  description: string;
  stack: string[];
  date: number;
};
export const Project = ({ id, name, description, stack, date }: Props) => {
  return (
    <div className="bg-gray-900 text-white">
      <h1 className="">{name}</h1>
      <p>{id}</p>
      <p>{description}</p>
      <p>{stack.join(", ")}</p>
      <p>{date}</p>
    </div>
  );
};
