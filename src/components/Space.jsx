export default function Space({ index, space }) {
  return <div className="space">
    {index + 1}
    {space && space.name}
    </div>;
}
