import ReactPost from "./ReactPost";

const BulletinBoard = ({ container }) => {
  // console.log(container);
  return (
    <div>
      <ul>
        {container.map(({ question, answer }, i) => (
          <ReactPost question={question} answer={answer} key={i} />
        ))}
      </ul>
    </div>
  )
}
export default BulletinBoard;