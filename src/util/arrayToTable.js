function arrayToTable(array, rowLength) {
    const result = []

    let currentRow = [];
    for(let i = 0; i < array.length; i++) {
      currentRow.push(array[i]);
      if(currentRow.length === rowLength) {
        result.push(currentRow);
        currentRow = [];
      }
    }
    if(currentRow.length > 0) {
      result.push(currentRow);
    }

    return result
}

export default arrayToTable;
