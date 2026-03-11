class Router {
    constructor() {
        this.routes = {
                'log in':  () => this.loadPage('scr/html/Log_in.html'),
                'home':    () => this.loadPage('/index.html'),
                'impressum': () => this.loadPage('scr/html/impressum.html'),
        };

        // Alle Links mit data-route abfangen
        document.querySelectorAll('[data-route]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const route = link.dataset.route;
                this.navigate(route);
            });
        });
    }

    navigate(route) {
        if (this.routes[route]) {
            this.routes[route]();
        }
    }

    loadPage(page) {
        // Seite laden, z.B. per fetch() oder window.location
        window.location.href = page;
    }
}

const router = new Router()