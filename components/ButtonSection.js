export function ButtonSection() {
  return /* html */ `
    <section class="col">
      <h3>button / .btn</h3>

      <article class="row">
        <button>no class</button>
      </article>

      <article class="row">  
        <button class="accent">.accent</button>
        
        <button class="alt">.alt</button>

        <button class="success">.success</button>
        <button class="warning">.warning</button>
        <button class="error">.error</button>
        <button class="info">.info</button>

        <button class="disabled">.disabled</button>
      </article>

      <article class="row">
        <button class="accent round">.round</button>
        <button class="accent outline">.outline</button>
        <button class="accent outline round">.outline .round</button>
      </article>
      
      <h3>a / .link</h3>

      <article class="row">
        <a href="#">default</a>
        <p><a href="#">p > a / .link</a></p>
      </article>
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
    </style>
  `;
}
