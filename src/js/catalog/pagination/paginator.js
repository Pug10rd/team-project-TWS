import Pagination from 'tui-pagination';
import { getCocktailsAmountPerPage } from '../../shared/get-cocktails-amount-per-page';

export class Paginator {
  constructor({
    selector,
    drawMarkup
  }) {
    this.container = document.querySelector(selector);

    if (!this.container) {
      console.error(`Selector: ${selector} was not found`);
      return;
    }

    this.drawMarkup = drawMarkup;
    this.initialize();
  }

  get paginatorButtonsTemplate() {
    return {
      page: '<a href="#" class="tui-page-btn paginator__btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn current-page paginator__btn tui-is-selected">{{page}}</strong>',
      moveButton:
        `<a href="#" class="tui-page-btn pagination-move-btn paginator__btn tui-{{type}}">
          <span class="tui-ico-{{type}}">{{type}}</span>
        </a>`,
      disabledMoveButton:
        `<span class="tui-page-btn pagination-move-btn paginator__btn tui-is-disabled tui-{{type}}">
          <span class="tui-ico-{{type}}">{{type}}</span>
        </span>`,
      moreButton:
        `<a href="#" class="tui-page-btn paginator__btn tui-{{type}}-is-ellip">
          <span class="tui-ico-ellip">...</span>
        </a>`,
    }
  }

  initialize() {
    this.itemsPerPage = getCocktailsAmountPerPage();
    this.paginator = new Pagination(this.container, {
      totalItems: 0,
      itemsPerPage: this.itemsPerPage,
      visiblePages: 3,
      page: 1,
      template: this.paginatorButtonsTemplate,
    });

    this.hidePaginator();

    this.paginator.on('afterMove', this.paginate.bind(this));
  }

  update(items) {
    if (!items?.length) {
      console.error(`Empty items array was passed: ${items}`);
      return;
    }

    if (items.length <= this.itemsPerPage) {
      this.drawMarkup(items);
      this.hidePaginator();
      return;
    }

    this.items = items;
    this.totalItems = items.length;
    this.paginator.reset(this.totalItems);
    this.paginator.movePageTo(1);
    this.showPaginator();
  }


  paginate({ page }) {
    const startIndex = this.getChunkStartIndex(page);
    const chunk = this.items.slice(startIndex, startIndex + this.itemsPerPage);

    return this.drawMarkup(chunk);
  }

  getChunkStartIndex(page) {
    return (page - 1) * this.itemsPerPage; 
  }

  hidePaginator() {
    this.container.classList.add('hidden');
  }

  showPaginator() {
    this.container.classList.remove('hidden');
  }
}
