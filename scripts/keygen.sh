#!/bin/bash

## Algorithm: RSA; Key length: 2048; Format: pem ##
node -e "console.log('Generating key pairs for jwt signing and verification')"
node -e "console.log('Algorithm: RSA; Key length: 2048; Format: pem')"

# generate private key
openssl genrsa -out ./keys/private 2048
node -e "console.log('rsa pirvate key generated')"

# genreate public key using private key
openssl rsa -in ./keys/private -pubout -out ./keys/public.pub
node -e "console.log('rsa public key generted')"
