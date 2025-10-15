type NotifyFunction<T> = (data: T) => void;

export class Subject<T> {
  private listeners = new Set<NotifyFunction<T>>();

  public subscribe(listener: NotifyFunction<T>) {
    this.listeners.add(listener);

    return () => this.unsubscribe(listener);
  }

  public unsubscribe(listener: NotifyFunction<T>) {
    this.listeners.delete(listener);
  }

  protected notify(data: T) {
    this.listeners.forEach((listener) => listener(data));
  }
}
