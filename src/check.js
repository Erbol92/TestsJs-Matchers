export function healthSort(units) {
    units.sort((a, b) => b.health - a.health);
    return units
}
