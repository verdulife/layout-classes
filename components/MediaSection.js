export function MediaSection() {
  return /* html */ `
    <section class="col">
      <h3>img / video</h3>

      <article class="row">
        <div class="col">
          <p>no class</p>
          <img width="100px" height="50px" src="https://github.com/verdulife/start/raw/master/static/logo-192.png" alt="media">
        </div>

        <div class="col">
          <p>.cover</p>
          <img width="100px" height="50px" class="cover" src="https://github.com/verdulife/start/raw/master/static/logo-192.png" alt="media">
        </div>

        <div class="col">
          <p>.contain</p>
          <img width="100px" height="50px" class="contain" src="https://github.com/verdulife/start/raw/master/static/logo-192.png" alt="media">
        </div>
      </article>
      
      <article class="row">
        <div class="col">
          <p>.top</p>
          <img width="100px" height="50px" class="top" src="https://github.com/verdulife/start/raw/master/static/logo-192.png" alt="media">
        </div>
        <div class="col">
          <p>.bottom</p>
          <img width="100px" height="50px" class="bottom" src="https://github.com/verdulife/start/raw/master/static/logo-192.png" alt="media">
        </div>
        <div class="col">
          <p>.bottom</p>
          <img width="50px" height="100px" class="left" src="https://github.com/verdulife/start/raw/master/static/logo-192.png" alt="media">
        </div>
        <div class="col">
          <p>.bottom</p>
          <img width="50px" height="100px" class="right" src="https://github.com/verdulife/start/raw/master/static/logo-192.png" alt="media">
        </div>
      </article>

      <h3>.icon > img / video / svg</h3>
      <div style="width: 30px; height: 30px;" class="icon">
        <img src="https://github.com/verdulife/start/raw/master/static/logo-192.png" alt="media">
      </div>
    </section>

    <style>
      section {
        width: 1200px;
        margin: 0.5em auto;
        gap: 1.5rem;
        background-color: var(--c-neutral-100);
        padding: 2em;
      }
      
      article {
        gap: 1.5rem;
      }

      article > .col {
        gap: 1em;
      }
    </style>
  `;
}
