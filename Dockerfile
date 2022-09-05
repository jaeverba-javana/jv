FROM tomcat:10.0.23

LABEL maintainer="jaeverba@gmil.com"

COPY jv.war /usr/local/tomcat/webapps/

CMD ["catalina.sh", "run"]