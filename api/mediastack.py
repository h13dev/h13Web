import http.client, urllib.parse

conn = http.client.HTTPConnection('api.mediastack.com')

params = urllib.parse.urlencode({
    'access_key': '95a79c05da87b094c555f09cc0f2e00a',
    'categories': '-general,-science,-technology',
    'sort': 'published_desc',
    'limit': 10,
    })

conn.request('GET', '/v1/news?{}'.format(params))

res = conn.getresponse()
data = res.read()

print(data.decode('utf-8'))