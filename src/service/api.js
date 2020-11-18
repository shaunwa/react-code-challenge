class Api {
  static headers() {
    return {
      "Content-Type": "application/json",
    };
  }

  static get(route) {
    return this.xhr(route, null, "GET");
  }

  static put(route, params) {
    return this.xhr(route, params, "PUT");
  }

  static post(route, params) {
    return this.xhr(route, params, "POST");
  }

  static delete(route) {
    return this.xhr(route, null, "DELETE");
  }

  static fetchUrl(route) {
    if(route) {
      return `https://swapi.dev${route}`;
    }

    return 'https://swapi.dev'
  }

  static xhr(route, params, verb) {
    const url = this.fetchUrl(route);
    const options = Object.assign(
      { method: verb },
      params ? { body: JSON.stringify(params) } : null
    );
    options.headers = this.headers();
    return fetch(url, options)
      .then(resp => {
        const json = resp.json();
        if (resp.ok) {
          return json;
        }
        return json.then(err => {
          throw err;
        });
      });
  }
}

export default Api;
