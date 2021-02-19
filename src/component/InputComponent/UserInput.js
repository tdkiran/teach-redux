import { connect } from 'react-redux';
import { createAdd, createClear, updateCurrentItem } from '../../redux/actions';

function UserInput({ addItem, updateCurrentItem, currentItem, clearCurrentItem }) {

  return (
    <div className="user-input">
      <label>
        Todo Item to be Added
        <input
            type="text"
            value={currentItem}
            onChange={ (e) => updateCurrentItem(e.target.value)}
        />
      </label>
      <button onClick={() => addItem(currentItem)}> Add Item</button>
      <button onClick={() => clearCurrentItem()}> Clear Item</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ) => ({
    updateCurrentItem: (item) => dispatch(updateCurrentItem(item)),
    addItem: (item) => dispatch(createAdd(item)),
    clearCurrentItem: () => dispatch(createClear())
});

const mapStateToProps = (state) => ({
    list: state.list,
    currentItem: state.currentItem,
 });

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);
