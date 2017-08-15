angular
.module('toolio')
.factory('Item', Item);

Item.$inject = ['API', '$resource'];
function Item(API, $resource){
  return $resource(`${API}/item/:id`, { id: '@_id'}, {
    update: { method: 'PUT'}
  });
}
