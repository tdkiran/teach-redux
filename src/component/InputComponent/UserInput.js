function UserInput() {
  return (
    <div className="user-input">
      <label>
        Todo Item to be Added
        <input type="text" />
      </label>
      <button> Add Item</button>
      <button> Clear Item</button>
    </div>
  );
}

export default UserInput;
