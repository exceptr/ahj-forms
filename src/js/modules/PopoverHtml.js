export default class PopoverHtml {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
        <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim animi culpa nobis eos aspernatur ut perferendis quia. Ea quae ullam consectetur repellendus expedita in harum similique sint minus nulla!
      </h3>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid labore animi, voluptatem amet ea eveniet recusandae delectus nam vel dolore, quam sequi veritatis veniam magni quod, expedita nihil molestiae alias.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit neque est deleniti quidem soluta placeat ipsum, reprehenderit cum impedit excepturi ea doloribus et ducimus laudantium quae ipsam nostrum a. Minus.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur cum eius nam illo, amet velit provident repellendus. Numquam tenetur voluptatibus cumque optio ducimus eveniet modi hic dolor reprehenderit fuga?
      </p>
        <div class="popover">
      <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officia quam laboriosam iure facere. Tenetur temporibus, iste amet quis doloribus delectus earum vel quidem pariatur, consequatur quasi hic eos quam?
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit dolor nesciunt repellendus voluptas a ipsam, blanditiis minus, exercitationem repellat, temporibus autem soluta cupiditate? Suscipit architecto ipsa sequi sunt rem.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos aperiam laudantium quam dicta temporibus voluptates omnis aliquid officia porro ullam at deleniti, libero animi, qui fuga. Hic, libero earum.
    </p>
    <div class="popover">
      <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
    </div>
        `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = PopoverHtml.markup;
  }
}
