# Node.js Apps with Nginx Routing Assignment

This project demonstrates running two Node.js applications on ports 3000 and 5000, configuring `/etc/hosts` for `app1.local` and `app2.local`, and routing traffic via Nginx in an Ubuntu VM. The setup is version-controlled for a Junior DevOps role.

## Setup
- **Apps**: Two Node.js Express apps (`app1` on port 3000, `app2` on 5000) return "Hello from AppX".
- **Hosts**: `/etc/hosts` maps `127.0.0.1` to `app1.local` and `app2.local`.
- **Nginx**: Config in `nginx.conf` routes `app1.local` to port 3000 and `app2.local` to 5000.
- **Access**: Apps accessible via browser at `http://app1.local` and `http://app2.local`.

## Installation
1. Clone: `git clone https://github.com/[YourUsername]/apps-assignment.git`
2. Install Node.js v20 using `nvm install 20`.
3. Install dependencies: `cd app1 && npm install`, `cd app2 && npm install`.
4. Run apps: `cd app1 && node index.js &`, `cd app2 && node index.js &`.
5. Configure `/etc/hosts`: Add `127.0.0.1 app1.local` and `127.0.0.1 app2.local`.
6. Install Nginx: `sudo apt install nginx`.
7. Copy `nginx.conf` to `/etc/nginx/sites-available/apps` and link: `sudo ln -sf /etc/nginx/sites-available/apps /etc/nginx/sites-enabled/apps`.
8. Restart Nginx: `sudo systemctl restart nginx`.
9. Access in browser: `http://app1.local`, `http://app2.local`.

## Troubleshooting
- **Nginx Errors**: Check `sudo cat /var/log/nginx/error.log` and `sudo nginx -t`.
- **App Issues**: Verify ports with `netstat -tulpn` and processes with `ps aux | grep node`.
- **Lessons Learned**: Fixed a symlink error and Node.js version issue, mirroring CI/CD debugging in my hotel/finance project.

## Author
Abu Bakkar, Cloud Engineer with Python/Django and DevOps experience (AWS, Terraform, GitHub Actions).
