export function getPath() {
  return window.location.pathname.replace(/\/$/, "") || "/";
}

export function navigate(path) {
  const next = path === "/" ? "/" : `/${path.replace(/^\//, "").replace(/\/$/, "")}`;
  if (getPath() === next) {
    return;
  }

  window.history.pushState({}, "", next);
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
