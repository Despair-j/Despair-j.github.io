document.addEventListener('DOMContentLoaded', function() {
  var searchButton = document.getElementById('search-button');
  var menusItems = document.querySelectorAll('.menus_items');

  if (searchButton && menusItems.length > 0) {
    // 获取 menusItems 的克隆节点
    var menusItemsClone = menusItems[0].cloneNode(true);

    // 将克隆节点插入到 searchButton 之前
    searchButton.parentNode.insertBefore(menusItemsClone, searchButton);

    // 删除所有的 menusItems 元素
    menusItems.forEach(function(item) {
      item.parentNode.removeChild(item);
    });
  }
});