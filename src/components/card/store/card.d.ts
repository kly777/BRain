export declare const useCardStore: import("pinia").StoreDefinition<"card", import("pinia")._UnwrapAll<Pick<{
    card: import("vue").Ref<{
        id: number;
        title: string;
        content: string;
        relation: {
            parents: never[];
            children: never[];
        };
    }>;
    getCard: (id: number) => Promise<void>;
    createCard: () => Promise<any>;
    deleteCard: (id: number) => Promise<void>;
    browseCard: (id: number) => Promise<void>;
    updateTitle: (id: number, title: string) => Promise<void>;
    updateContent: (id: number, content: string) => Promise<void>;
    relation_card: import("vue").Ref<{
        id: number;
        title: string;
        content: string;
        relation: {
            parents: never[];
            children: never[];
        };
    }>;
    deleteRelation: (id: number) => Promise<void>;
    addRelation: (type: string, parent_id: number, child_id: number) => Promise<void>;
    addRelationOf: (type: string, id: number, main_id: number, relation: string) => Promise<void>;
    updateRelation: (id: number, type: string, parent_id: number, child_id: number) => Promise<void>;
}, "card" | "relation_card">>, Pick<{
    card: import("vue").Ref<{
        id: number;
        title: string;
        content: string;
        relation: {
            parents: never[];
            children: never[];
        };
    }>;
    getCard: (id: number) => Promise<void>;
    createCard: () => Promise<any>;
    deleteCard: (id: number) => Promise<void>;
    browseCard: (id: number) => Promise<void>;
    updateTitle: (id: number, title: string) => Promise<void>;
    updateContent: (id: number, content: string) => Promise<void>;
    relation_card: import("vue").Ref<{
        id: number;
        title: string;
        content: string;
        relation: {
            parents: never[];
            children: never[];
        };
    }>;
    deleteRelation: (id: number) => Promise<void>;
    addRelation: (type: string, parent_id: number, child_id: number) => Promise<void>;
    addRelationOf: (type: string, id: number, main_id: number, relation: string) => Promise<void>;
    updateRelation: (id: number, type: string, parent_id: number, child_id: number) => Promise<void>;
}, never>, Pick<{
    card: import("vue").Ref<{
        id: number;
        title: string;
        content: string;
        relation: {
            parents: never[];
            children: never[];
        };
    }>;
    getCard: (id: number) => Promise<void>;
    createCard: () => Promise<any>;
    deleteCard: (id: number) => Promise<void>;
    browseCard: (id: number) => Promise<void>;
    updateTitle: (id: number, title: string) => Promise<void>;
    updateContent: (id: number, content: string) => Promise<void>;
    relation_card: import("vue").Ref<{
        id: number;
        title: string;
        content: string;
        relation: {
            parents: never[];
            children: never[];
        };
    }>;
    deleteRelation: (id: number) => Promise<void>;
    addRelation: (type: string, parent_id: number, child_id: number) => Promise<void>;
    addRelationOf: (type: string, id: number, main_id: number, relation: string) => Promise<void>;
    updateRelation: (id: number, type: string, parent_id: number, child_id: number) => Promise<void>;
}, "getCard" | "createCard" | "deleteCard" | "browseCard" | "updateTitle" | "updateContent" | "deleteRelation" | "addRelation" | "addRelationOf" | "updateRelation">>;
