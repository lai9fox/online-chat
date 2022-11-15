const components = import.meta.glob('./*.vue', {
  eager: true,
});
export default function install(app) {
  for (const [key, value] of Object.entries(components)) {
    const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    app.component(name, value.default);
  }
};
