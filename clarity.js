var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const userinfo = '/userInfo';

const setfree = '/special/queryByCatalogAll';

if (url.indexOf(setfree) != -1) {
    for (var i = 0; i < obj.data.length; i++) {
        obj.data[i].isFree = true;
    }
    body = JSON.stringify(obj);
}

if (url.indexOf(userinfo) != -1) {
    obj.data.level = 8;
    obj.data.expireTime = 1800000000;
    body = JSON.stringify(obj);
}

$done({
    body
});
