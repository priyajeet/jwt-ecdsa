# Install
run `yarn install`

# Usage

```
./index.js --privateKey=../private.pem --publicKey=../public.pem --payload.foo=bar --payload.tom=cat

------------------- Payload -----------------
{"foo":"bar","tom":"cat"}
------------------- Payload -----------------

--------------------- JTW -------------------
eyJhbGciOiJFUzM4NCIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJ0b20iOiJjYXQiLCJpYXQiOjE1OTc4OTM2MDZ9.Gsy83CvY50QCInNOkGe0GdMNpoaqGUlZ1mPsW1w6C2DQniKhba4Csm-K8j0WFLYMXAic3Ur1hbGTKuE1uXJZy1wNl15tzvkF91E0US42KMtoCadiHP3dRzDjvpZe3nqd
--------------------- JTW -------------------

------------------- Decode ------------------
{ foo: 'bar', tom: 'cat', iat: 1597893606 }
------------------- Decode ------------------

------------------- Verify ------------------
{ foo: 'bar', tom: 'cat', iat: 1597893606 }
------------------- Verify ------------------
```

