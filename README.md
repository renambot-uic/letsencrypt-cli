# letsencrypt-cli

CLI for node-letsencrypt modeled after the official client.

(IN-PROGRESS)

## Install Node

For Windows:

Choose **Stable** from <https://nodejs.org/en/>

For Linux and OS X:

```
curl -L bit.ly/iojs-min | bash
```

# Install LetsEncrypt

```bash
npm install -g letsencrypt-cli
```

## Usage

### Standalone

```bash
letsencrypt certonly \
  --agree-tos --email john.doe@example.com \
  --standalone \
  --domains example.com,www.example.com
```

### WebRoot

```bash
letsencrypt certonly \
  --agree-tos --email john.doe@example.com \
  --webroot --webroot-path /srv/www/acme-challenge \
  --domains example.com,www.example.com
```

## Command line Options

```
Usage:
  letsencrypt [OPTIONS] [ARGS]

Options:
      --email EMAIL             Email used for registration and recovery contact. (default: null)

      --domains URL             Domain names to apply. For multiple domains you can enter a comma
                                separated list of domains as a parameter. (default: [])

      --duplicate BOOLEAN       Allow getting a certificate that duplicates an existing one

      --agree-tos BOOLEAN       Agree to the Let's Encrypt Subscriber Agreement

      --debug BOOLEAN           show traces and logs

      --tls-sni-01-port NUMBER  Port number to perform tls-sni-01 challenge.
                                Boulder in testing mode defaults to 5001. (default: 443 and 5001)

      --http-01-port [NUMBER]   Port used in the SimpleHttp challenge. (Default is 80)

      --rsa-key-size [NUMBER]   Size (in bits) of the RSA key. (Default is 2048)

      --cert-path STRING        Path to where new cert.pem is saved
                                (Default is :conf/live/:hostname/cert.pem)

      --fullchain-path [STRING] Path to where new fullchain.pem (cert + chain) is saved
                                (Default is :conf/live/:hostname/fullchain.pem)

      --chain-path [STRING]     Path to where new chain.pem is saved
                                (Default is :conf/live/:hostname/chain.pem)

      --domain-key-path STRING  Path to privkey.pem to use for domain (default: generate new)

      --config-dir STRING       Configuration directory.

      --server [STRING]         ACME Directory Resource URI. (Default is https://acme-v01.api.letsencrypt.org/directory))

      --standalone [BOOLEAN]    Obtain certs using a "standalone" webserver.  (Default is true)

      --webroot BOOLEAN         Obtain certs by placing files in a webroot directory.

      --webroot-path STRING      public_html / webroot path.

  -h, --help                    Display help and usage details
```
