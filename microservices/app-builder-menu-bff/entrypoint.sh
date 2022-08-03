#!/bin/sh

set -e

if [ ! -z "$JAVA_TOOL_OPTIONS" ] && [ ! -f "keystore.pem" ]; then
  trustStore=`echo "${JAVA_TOOL_OPTIONS}" | sed -e 's/.*trustStore=\(.*\) .*/\1/'`
  trustStorePassword=`echo "${JAVA_TOOL_OPTIONS}" | sed -e 's/.*trustStorePassword=\(.*\)/\1/'`

  keytool -importkeystore -srckeystore $trustStore -srcstorepass $trustStorePassword -deststorepass $trustStorePassword -destkeystore intermediate.p12 -srcstoretype JKS -deststoretype PKCS12
  openssl pkcs12 -in intermediate.p12 -out keystore.pem -password "pass:$trustStorePassword"
  rm intermediate.p12

  export NODE_EXTRA_CA_CERTS=$PWD/keystore.pem
fi

exec node index.js
