export function getBase() {
  const base = import.meta.env.BASE_URL || "/";
  return base.endsWith("/") ? base : `${base}/`;
}

export function withBase(path) {
  const base = getBase();
  if (!path || path === "/") {
    return base;
  }
  if (path.startsWith("/#")) {
    return `${base}${path.slice(1)}`;
  }
  return `${base}${path.replace(/^\//, "")}`;
}

export function getPath() {
  const base = getBase().replace(/\/$/, "");
  let path = window.location.pathname;
  if (base && path.startsWith(base)) {
    path = path.slice(base.length) || "/";
  }
  return path.replace(/\/$/, "") || "/";
}

export function navigate(path) {
  const next = path === "/" ? "/" : `/${path.replace(/^\//, "").replace(/\/$/, "")}`;
  if (getPath() === next) {
    return;
  }

  window.history.pushState({}, "", withBase(next));
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function goToLearn() {
  const scroll = () => {
    const node = document.getElementById("aprender");
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (getPath() === "/") {
    scroll();
    return;
  }

  navigate("/");
  window.setTimeout(scroll, 80);
}
