angular
.module('toolio')
.controller('ItemsIndexCtrl', ItemsIndexCtrl);

ItemsIndexCtrl.$inject = ['Item'];
function ItemsIndexCtrl(Item) {
  const vm = this;
  vm.all   = Item.query();

  vm.categories = [];
  vm.filtered = [];

  vm.includeCategory = function(category) {
    console.log('hit');
    if (category === 'All') {
      vm.filtered = vm.all;
    } else {
      if (vm.categories.indexOf(category) !== -1) {
        const index = vm.categories.indexOf(category);
        vm.categories.splice(index, 1);
      } else {
        vm.categories.push(category);
      }
      vm.categoryFilter();

    }
  };

  vm.categoryFilter = function() {
    vm.filtered = [];
    console.log(vm.categories);
    vm.all.filter(element => {
      console.log(element.category);
      if (vm.categories.indexOf(element.category.name) !== -1) {
        vm.filtered.push(element);
      }
    });
    console.log(vm.filtered);
  };
}
