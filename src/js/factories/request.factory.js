angular
.module('toolio')
.factory('Request', Request);

Request.$inject = ['API', '$resource'];
function Request(API, $resource){
  return $resource(`${API}/requests/:id`, { id: '@_id'}, {
    update: { method: 'PUT'},
    accept: { method: 'POST', url: `${API}/requests/:id/accept`},
    reject: { method: 'POST', url: `${API}/requests/:id/reject`}
  });
}
