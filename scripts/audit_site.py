from pathlib import Path
from urllib.parse import urljoin, urlparse
import requests
from bs4 import BeautifulSoup

BASE = "http://localhost:3000"
ROUTES = [
    "/", "/admin-login", "/books", "/businesses", "/cart", "/churches", "/contact", "/devotionals", "/events", "/gospel", "/membership", "/organisations", "/pastors", "/prayer", "/privacy", "/shop", "/subscriptions", "/terms",
]

def main():
    route_status = {}
    internal_links = {}
    broken_internal = []
    for route in ROUTES:
        response = requests.get(urljoin(BASE, route), timeout=10)
        route_status[route] = response.status_code
        soup = BeautifulSoup(response.text, "html.parser")
        links = []
        for anchor in soup.select("a[href]"):
            href = anchor.get("href", "")
            if href.startswith("/") and not href.startswith("//"):
                parsed = urlparse(href)
                normalized = parsed.path or "/"
                links.append(normalized)
                if normalized not in ROUTES and not normalized.startswith("/api/"):
                    broken_internal.append((route, href))
        internal_links[route] = sorted(set(links))

    api = requests.get(urljoin(BASE, "/api/members"), timeout=10)
    print("ROUTE_STATUS")
    for route, status in route_status.items():
        print(f"{status}\t{route}")
    print("\nBROKEN_INTERNAL_LINKS")
    if broken_internal:
        for source, href in broken_internal:
            print(f"{source}\t{href}")
    else:
        print("none")
    print("\nMEMBERS_API")
    print(f"{api.status_code}\t{api.headers.get('content-type', '')}")
    print("\nLINK_COUNTS")
    for route, links in internal_links.items():
        print(f"{route}\t{len(links)}")

if __name__ == "__main__":
    main()
