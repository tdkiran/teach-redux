import { connect } from "react-redux";

function TodoList({ list }) {
  if (!list.length) {
    return "Current List is empty";
  }
  return (
    <div className="todo-list-container">
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps)(TodoList);
