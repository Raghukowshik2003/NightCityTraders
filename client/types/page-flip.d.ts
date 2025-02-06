// types/page-flip.d.ts
declare module "page-flip" {
  export class PageFlip {
    constructor(element: HTMLElement, options: any);
    loadFromHTML(pages: NodeListOf<Element>): void;
    destroy(): void;
  }

  export const SizeType: { FIXED: string };
}