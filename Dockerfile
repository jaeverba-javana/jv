from tomcat:10.0.23

label maintainer="jaeverba@gmil.com"

copy jv.war /usr/local/tomcat/webapps/
copy jv2.war /usr/local/tomcat/webapps/
copy jv3.war /usr/local/tomcat/webapps/

CMD ["catalina.sh", "run"]



#FROM mcr.microsoft.com/java/tomcat:11-zulu-ubuntu-tomcat-9
# ARG APP_FILE=ROOT.war
#
# RUN rm -rf /usr/local/tomcat/webapps/*
#
# COPY $APP_FILE /build?

# RUN mkdir /usr/local/tomcat/webapps/ROOT && \
#     cd /usr/local/tomcat/webapps/ROOT && \
#     unzip ../ROOT.war && \
#     rm -f ../ROOT.war

