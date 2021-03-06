import ReactElement, { SFC } from "./ReactElement";
import ReactComponent, { ComponentClass } from "./ReactComponent";
import { ReactRenderComponent } from "./ReactReconciler";
export declare let instMapCompositeComponent: Map<ReactComponent, ReactCompositeComponent>;
export declare let instMapDom: Map<Element, ReactCompositeComponent>;
interface ReactCompositeComponent {
    updateComponent<T>(prevElement: T, nextElement: T, nextContext: any): void;
}
declare enum CompositeType {
    ReactComponent = 0,
    StateLessComponent = 1,
    PureComponent = 2
}
declare class ReactCompositeComponent {
    _currentElement: ReactElement<ComponentClass> | ReactElement<SFC>;
    _renderComponent: ReactRenderComponent;
    inst: ReactComponent;
    _container: Element;
    _peddingState: any[];
    _replaceNode: Node;
    _isInsert: boolean;
    _compositeType: CompositeType;
    _ref: (e: ReactComponent | null) => void;
    _context: any;
    constructor(node: ReactElement<ComponentClass>, container: Element);
    mountComponent(context?: any, replaceNode?: Node, isInsert?: boolean): void;
    isComponentClass(tagName: ComponentClass | SFC): tagName is ComponentClass;
    initialInst(): void;
    mountChildComponent(): void;
    _processNewState(prevProps?: any): any;
    _performComponentUpdate(nextElement: ReactElement<ComponentClass>, nextProps: any, nextState: any, nextContext: any): void;
    _updateRenderComponent(): void;
    receiveComponent(nextElement?: ReactElement<ComponentClass> | ReactElement<SFC>, nextContext?: any): void;
    unmountComponent(): void;
    _processContext(context: any): any;
    _processChildContext(): any;
}
export default ReactCompositeComponent;
