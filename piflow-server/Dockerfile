FROM java

RUN mkdir -p /opt

ADD ./hadoop-2.6.0.tar.gz  /opt
ENV HADOOP_HOME=/opt/hadoop-2.6.0
ENV PATH=$PATH:${HADOOP_HOME}/bin:${HADOOP_HOME}/sbin
ENV HADOOP_CONF_DIR=/opt/hadoop-2.6.0/etc/hadoop

ADD ./scala-2.11.8.tar.gz  /opt
ENV SCALA_HOME=/opt/scala-2.11.8
ENV PATH=$PATH:${SCALA_HOME}/bin

ENV mkdir -p ~/bigdata/dfs/name
ENV mkdir -p ~/bigdata/dfs/data

ENV rm -rf /opt/hadoop-2.6.0/etc/hadoop/core-site.xml
ENV rm -rf /opt/hadoop-2.6.0/etc/hadoop/hdfs-site.xml

COPY ./apache-livy-0.7.1-incubating-bin.tar.gz  /opt
RUN tar -zxvf /opt/apache-livy-0.7.1-incubating-bin.tar.gz -C /opt 
ENV LIVY_HOME=/opt/apache-livy-0.7.1-incubating-bin
ENV PATH=$PATH:$LIVY_HOME/bin

ADD ./core-site.xml /opt/hadoop-2.6.0/etc/hadoop
ADD ./hdfs-site.xml /opt/hadoop-2.6.0/etc/hadoop

RUN echo 'export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64'>>/opt/hadoop-2.6.0/etc/hadoop/hadoop-env.sh


RUN mkdir /opt/piflow-serve
COPY ./*  /opt/piflow-serve

RUN  ./opt/piflow-server/start.sh


