angular
.module('toolio')
.factory('Item', Item);

Item.$inject = ['API', '$resource'];
function Item(API, $resource){
  return $resource(`${API}/items/:id`, { id: '@_id'}, {
    update: { method: 'PUT'}
  });
}
