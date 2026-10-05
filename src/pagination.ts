/** The wire shape of every list response. */
export interface ListEnvelope<T> {
  object: 'list';
  data: T[];
  next_cursor: string | null;
  has_more: boolean;
}

/**
 * One page of results. Iterate it with `for await` to walk every item on
 * this page and all following pages.
 */
export class Page<T> implements AsyncIterable<T> {
  readonly object = 'list' as const;
  readonly data: T[];
  readonly hasMore: boolean;
  readonly nextCursor: string | null;
  readonly #fetchPage: (cursor: string) => Promise<Page<T>>;

  constructor(envelope: ListEnvelope<T>, fetchPage: (cursor: string) => Promise<Page<T>>) {
    this.data = Array.isArray(envelope?.data) ? envelope.data : [];
    this.nextCursor = envelope?.next_cursor ?? null;
    this.hasMore = Boolean(envelope?.has_more) && this.nextCursor !== null;
    this.#fetchPage = fetchPage;
  }

  hasNextPage(): boolean {
    return this.hasMore;
  }

  /** Fetches the following page. Throws if there is none; check `hasNextPage()` first. */
  getNextPage(): Promise<Page<T>> {
    if (!this.hasMore || this.nextCursor === null) {
      return Promise.reject(new Error('No more pages. Check hasNextPage() before calling getNextPage().'));
    }
    return this.#fetchPage(this.nextCursor);
  }

  /** Iterates pages, starting with this one. */
  async *iterPages(): AsyncGenerator<Page<T>, void, undefined> {
    let page: Page<T> = this;
    for (;;) {
      yield page;
      if (!page.hasNextPage()) return;
      page = await page.getNextPage();
    }
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<T, void, undefined> {
    for await (const page of this.iterPages()) {
      for (const item of page.data) yield item;
    }
  }
}

/**
 * Returned by every `list()` call. `await` it for the first page, or iterate
 * it directly with `for await` to auto-page through every item.
 */
export class PagePromise<T> implements PromiseLike<Page<T>>, AsyncIterable<T> {
  readonly #promise: Promise<Page<T>>;

  constructor(promise: Promise<Page<T>>) {
    this.#promise = promise;
    // Avoid an unhandled-rejection warning when the caller only iterates.
    promise.catch(() => undefined);
  }

  then<R1 = Page<T>, R2 = never>(
    onfulfilled?: ((value: Page<T>) => R1 | PromiseLike<R1>) | null,
    onrejected?: ((reason: unknown) => R2 | PromiseLike<R2>) | null,
  ): Promise<R1 | R2> {
    return this.#promise.then(onfulfilled, onrejected);
  }

  catch<R = never>(onrejected?: ((reason: unknown) => R | PromiseLike<R>) | null): Promise<Page<T> | R> {
    return this.#promise.catch(onrejected);
  }

  finally(onfinally?: (() => void) | null): Promise<Page<T>> {
    return this.#promise.finally(onfinally);
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<T, void, undefined> {
    const page = await this.#promise;
    yield* page;
  }
}
