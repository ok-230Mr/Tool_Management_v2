function addStock() {
    const toolName = document.getElementById('toolSelect').value;
    const stock = parseInt(document.getElementById('stock').value, 10);
    if (!toolName || isNaN(stock)) {
        alert('正しい工具名と在庫数を入力してください。');
        return;
    }

    // 既存の在庫データを `localStorage` から取得（なければ空の配列を使用）
    const toolStock = JSON.parse(localStorage.getItem('toolStock')) || [];

    // 選択した工具が既に存在するか確認
    const existingToolIndex = toolStock.findIndex(tool => tool.name === toolName);
    if (existingToolIndex !== -1) {
        // 存在する場合、在庫数を更新
        toolStock[existingToolIndex].quantity = stock;
    } else {
        // 存在しない場合、新しい在庫データを追加
        toolStock.push({ name: toolName, quantity: stock });
    }

    // 更新した在庫データを `localStorage` に保存
    localStorage.setItem('toolStock', JSON.stringify(toolStock));

    alert('在庫が追加されました。');
}
