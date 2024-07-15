addSubDomain({
  description: 'An app to share youtube subscribes list',
  domain: 'is-an.app',
  subdomain: 'ytsubscribes', // desired subdomain name
  owner: {
    email: 'dynamicchallengers@gmail.com',
  },
  record: {
    TXT: ['deta-verification=NPWH4zwwNZTXExBAWefn8yzMVybj6zPS'],
    A: ['75.2.69.226']
  },
})
