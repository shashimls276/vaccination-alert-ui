FROM openjdk:8
ARG JAR_FILE=vaccination-jar-builder/target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]