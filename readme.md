# Setting up a lightsail instance

I followed https://medium.com/@sharmasha2nk/aws-lightsail-bitnami-nodejs-letsencrypt-cf653573b8a1.

```
ssh <your lightsail instance>
cd /opt/bitnami/apps
git clone git@github.com:kieferrm/123.git
npm install
```

Change the **active** application edit `/opt/bitnami/apache2/conf/bitnami/bitnami-apps-prefix.conf` to be
```
Include "/opt/bitnami/apps/123/conf/httpd-prefix.conf"
```

Restart the Apache server:
```
sudo /opt/bitnami/ctlscript.sh restart apache
```

Go to https://certbot.eff.org and retrieve the installation instructions for certbot.
Install certbot but don't run it.

```
cd /opt/bitnami/apps/123
node server.js &
sudo certbot --webroot certonly -w ./static  -d yourdomain.org -d subdomain.yourdomain.org
```

```
sudo vi /opt/bitnami/apache2/conf/bitnami/bitnami.conf
```
- Replace the value of `SSLCertificateFile` with `/etc/letsencrypt/live/yourdomain.org/fullchain.pem`.
- Replace the value of `SSLCertificateKeyFile` with to `/etc/letsencrypt/live/yourdomain.org/privkey.pem`.

