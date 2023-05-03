export function routeToToken(route) {
    switch (route) {
        case '/home': return 1;
        case '/events': return 2;
        default: return 1;
    }
}