function deleteItem (deleteId) {
  let formCopy = [...this.state.formData];
  this.setState({formData: formCopy.filter( ({id}) => id !== deleteId)});
} 

function editItem (editId){
  const editRef = this.state.formData.find( ({id}) => id === editId);
  this.setState(editRef);
} 

export { deleteItem, editItem };