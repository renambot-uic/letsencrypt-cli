# NOT YET PUBLISHED

(IN-PROGRESS) 2015-12-16 - expect it in about 12 hours

# letsencrypt-cli

CLI for node-letsencrypt modeled after the official client.

## Install Node

For **Windows**:

Choose **Stable** from <https://nodejs.org/en/>

For Linux and **OS X**:

```
curl -L bit.ly/iojs-min | bash
```

# Install LetsEncrypt

```bash
npm install -g letsencrypt-cli
```

## Usage

These commands are shown using the **testing server**.

When you want to use the **live server**,
simply remove the `--server https://acme-staging.api.letsencrypt.org/directory`
or change it to `--server https://acme-v01.api.letsencrypt.org/directory`.

**Note**: This has really only been tested with single domains so if
multiple domains doesn't work for you, file a bug.

### Standalone

```bash
letsencrypt certonly \
  --agree-tos --email john.doe@example.com \
  --standalone \
  --domains example.com,www.example.com \
  --server https://acme-staging.api.letsencrypt.org/directory \
```

### WebRoot

```bash
letsencrypt certonly \
  --agree-tos --email john.doe@example.com \
  --webroot --webroot-path /srv/www/acme-challenge \
  --domains example.com,www.example.com \
  --server https://acme-staging.api.letsencrypt.org/directory
```

## Run without Root

If you'd like to allow node.js to use privileged ports `80` and `443`
(and everything under 1024 really) without being run as `root` or `sudo`,
you can use `setcap` to do so. (it may need to be run any time you reinstall node as well)

```bash
sudo setcap cap_net_bind_service=+ep /usr/local/bin/node
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

      --config-dir STRING       Configuration directory. (Default is ~/letsencrypt/etc/)

      --server [STRING]         ACME Directory Resource URI. (Default is https://acme-v01.api.letsencrypt.org/directory))

      --standalone [BOOLEAN]    Obtain certs using a "standalone" webserver.  (Default is true)

      --webroot BOOLEAN         Obtain certs by placing files in a webroot directory.

      --webroot-path STRING      public_html / webroot path.

  -h, --help                    Display help and usage details
```
