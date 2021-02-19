import { connect } from "react-redux";

function TodoList({ list, currentItem }) {

  return (
    <div className="list-count">
      list count: {list.length}
      <br />
      Length of current item: {currentItem.length}
    </div>
  );
}

const mapStateToProps = (state) => ({
  list: state.list,
  currentItem: state.currentItem,
});

export default connect(mapStateToProps)(TodoList);
