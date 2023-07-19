import { observable } from "@legendapp/state"

export const authorStore = observable<{ authors: Author[] }>({
    authors: []
})