FROM ruby:2.5
RUN apt-get update -qq && apt-get install -y build-essential \
  nodejs \
  python3-pip \
  # Image tools
  imagemagick \
  # Vidio tools
  ffmpeg \
  # Audio tools
  sox \
  lame \
  libsox-fmt-all \
  vorbis-tools

RUN pip3 install --upgrade setuptools pip
RUN pip3 install opencv-python numpy
RUN mkdir /work
WORKDIR /work
ADD . /work
