angular
.module('toolio')
.factory('Request', Request);

Request.$inject = ['API', '$resource'];
function Request(API, $resource){
  return $resource(`${API}/requests/:id`, { id: '@_id'}, {
    update: { method: 'PUT'},
    accept: { method: 'GET', url: `${API}/requests/:id/accept`},
    reject: { method: 'GET', url: `${API}/requests/:id/reject`}
  });
}
