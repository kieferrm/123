To change the active directory edit `/opt/bitnami/apache2/conf/bitnami/bitnami-apps-prefix.conf` to
> Include "/opt/bitnami/apps/123/conf/httpd-prefix.conf"


Restart the Apache server:
> sudo /opt/bitnami/ctlscript.sh restart apache
