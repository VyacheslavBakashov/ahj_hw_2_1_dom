export default class gameField {
  static generate() {
    const field = document.createElement('div');
    field.classList.add('field');

    for (let i = 0; i < 16; i++) {
      const fieldCell = document.createElement('div');
      fieldCell.classList.add('field-cell');
      field.appendChild(fieldCell);
    }
    return field;
  }
}
