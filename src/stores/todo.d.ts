export declare const useToDoStore: import("pinia").StoreDefinition<"todos", import("pinia")._UnwrapAll<Pick<{
    todos: import("vue").Ref<{
        then: <TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
        catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<void | TResult>;
        finally: (onfinally?: (() => void) | null | undefined) => Promise<void>;
        readonly [Symbol.toStringTag]: string;
    }>;
    addToDo: (addedToDo: any) => Promise<void>;
    archiveTodo: (id: any) => Promise<void>;
    getToDos: (firstDayOfTable: Date) => Promise<void>;
}, "todos">>, Pick<{
    todos: import("vue").Ref<{
        then: <TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
        catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<void | TResult>;
        finally: (onfinally?: (() => void) | null | undefined) => Promise<void>;
        readonly [Symbol.toStringTag]: string;
    }>;
    addToDo: (addedToDo: any) => Promise<void>;
    archiveTodo: (id: any) => Promise<void>;
    getToDos: (firstDayOfTable: Date) => Promise<void>;
}, never>, Pick<{
    todos: import("vue").Ref<{
        then: <TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
        catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<void | TResult>;
        finally: (onfinally?: (() => void) | null | undefined) => Promise<void>;
        readonly [Symbol.toStringTag]: string;
    }>;
    addToDo: (addedToDo: any) => Promise<void>;
    archiveTodo: (id: any) => Promise<void>;
    getToDos: (firstDayOfTable: Date) => Promise<void>;
}, "addToDo" | "archiveTodo" | "getToDos">>;
