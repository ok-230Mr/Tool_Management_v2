function loadStockFromStorage() {
    const storedToolStock = JSON.parse(localStorage.getItem('toolStock')) || [];
  
    storedToolStock.forEach(storedTool => {
        machineData.forEach(machine => {
            machine.tools.forEach(tool => {
                if (tool.name === storedTool.name) {
                    tool.stock = storedTool.quantity;
                }
            });
        });
    });
  }
  
  // ページの読み込み時にこの関数を呼び出す
  window.onload = function() {
    loadStockFromStorage(); // `localStorage` から在庫データを読み込む
    populateTable();
    displayEmployeeName();
    updateInUseList();
    updateOutOfStockList();
  };
  