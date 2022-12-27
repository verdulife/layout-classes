export function TextSection() {
  const lorem =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque sequi natus explicabo reprehenderit, pariatur, necessitatibus ratione dolores possimus illum voluptates quisquam quasi tenetur ea quibusdam tempora rerum ad sit.";

  return /* html */ `
    <section class="col">
      <h3>all text containers</h3>

      <article class="row xfill">
        <div class="col xfill">
          <p>no class - <em>${lorem}</em></p>
          <p class="system">.system - <em>${lorem}</em></p>
          <p class="title">.title - <em>${lorem}</em></p>
          <p class="text">.text - <em>${lorem}</em></p>
          <p class="tleft">.tleft - <em>${lorem}</em></p>
          <p class="tcenter">.tcenter - <em>${lorem}</em></p>
          <p class="tright">.tright - <em>${lorem}</em></p>
          <p class="tjustify">.tjustify - <em>${lorem}</em></p>
          <p class="ltr">.ltr - <em>${lorem}</em></p>
          <p class="rtl">.rtl - <em>${lorem}</em></p>
          <p>.rotated - <em class="rotated">${lorem}</em></p>
          <p>.vertical-lr - <em class="vertical-lr">${lorem}</em></p>
          <p>.vertical-rl - <em class="vertical-rl">${lorem}</em></p>
          
          <div class="row jevenly xfill">
            <p class="clamp">.clamp - <em>${lorem}</em></p>
            <p class="clamp2">.clamp2 - <em>${lorem}</em></p>
            <p class="clamp3">.clamp3 - <em>${lorem}</em></p>
            <p class="clamp4">.clamp4 - <em>${lorem}</em></p>
          </div>
        </div>
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

      article > .col {
        gap: 1em;
      }
      
      article p {
        width: 100%;
      }
      
      article p > em:is(.rotated, .vertical-lr, .vertical-rl) {
        max-height: 300px;
      }

      article > .col > .row > p {
        max-width: 20%;
      }
    </style>
  `;
}
