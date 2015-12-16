# letsencrypt-cli

CLI for node-letsencrypt modeled after the official client.

## Install

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
