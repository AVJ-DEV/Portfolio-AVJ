export function withBase(path = "") {
    const base = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "");
    const cleanPath = path.replace(/^\/+/, "");

    if (!cleanPath) {
        return base === "/" ? "/" : base;
    }

    if (base === "/") {
        return `/${cleanPath}`;
    }

    return `${base}/${cleanPath}`;
}
