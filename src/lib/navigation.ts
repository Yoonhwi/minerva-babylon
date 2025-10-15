export enum Page {
  Home = "/",

  FactoryMethod = "/creational-patterns/factory-method",
  AbstractFactory = "/creational-patterns/abstract-factory",
  Builder = "/creational-patterns/builder",
  Prototype = "/creational-patterns/prototype",
  Singleton = "/creational-patterns/singleton",

  Adapter = "/structural-patterns/adapter",
  Bridge = "/structural-patterns/bridge",
  Composite = "/structural-patterns/composite",
  Decorator = "/structural-patterns/decorator",
  Facade = "/structural-patterns/facade",
  Flyweight = "/structural-patterns/flyweight",
  Proxy = "/structural-patterns/proxy",

  ChainOfResponsibility = "/behavioral-patterns/chain-of-responsibility",
  Command = "/behavioral-patterns/command",
  Iterator = "/behavioral-patterns/iterator",
  Mediator = "/behavioral-patterns/mediator",
  Observer = "/behavioral-patterns/observer",
  State = "/behavioral-patterns/state",
  Strategy = "/behavioral-patterns/strategy",
  TemplateMethod = "/behavioral-patterns/template-method",
  Visitor = "/behavioral-patterns/visitor",
}

export interface NavigationItem {
  label: string;
  pathname: string;
  children?: NavigationItem[];
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: "Creational Patterns",
    pathname: Page.FactoryMethod,
    children: [
      { label: "Factory Method", pathname: Page.FactoryMethod },
      { label: "Abstract Factory", pathname: Page.AbstractFactory },
      { label: "Builder", pathname: Page.Builder },
      { label: "Prototype", pathname: Page.Prototype },
      { label: "Singleton", pathname: Page.Singleton },
    ],
  },
  {
    label: "Structural Patterns",
    pathname: Page.Adapter,
    children: [
      { label: "Adapter", pathname: Page.Adapter },
      { label: "Bridge", pathname: Page.Bridge },
      { label: "Composite", pathname: Page.Composite },
      { label: "Decorator", pathname: Page.Decorator },
      { label: "Facade", pathname: Page.Facade },
      { label: "Flyweight", pathname: Page.Flyweight },
      { label: "Proxy", pathname: Page.Proxy },
    ],
  },
  {
    label: "Behavioral Patterns",
    pathname: Page.ChainOfResponsibility,
    children: [
      { label: "Chain of Responsibility", pathname: Page.ChainOfResponsibility },
      { label: "Command", pathname: Page.Command },
      { label: "Iterator", pathname: Page.Iterator },
      { label: "Mediator", pathname: Page.Mediator },
      { label: "Observer", pathname: Page.Observer },
      { label: "State", pathname: Page.State },
      { label: "Strategy", pathname: Page.Strategy },
      { label: "Template Method", pathname: Page.TemplateMethod },
      { label: "Visitor", pathname: Page.Visitor },
    ],
  },
];
