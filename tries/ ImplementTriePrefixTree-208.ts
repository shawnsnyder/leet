class TrieNode {
    children: Map<string, TrieNode> = new Map();
    isEnd: boolean = false;
}


class Trie {
    private root: TrieNode;
    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string): void {
        let curr:TrieNode = this.root
        for(const char of word){
            console.log(char)
            if(!curr.children.has(char)){
                curr.children.set(char, new TrieNode())
            }
            curr = curr.children.get(char)!
        }
        curr.isEnd = true
    }

    search(word: string): boolean {
        let curr = this.root;
        for(const char of word){
            if(!curr.children.has(char)){
                return false
            }
            curr = curr.children.get(char)!
        }
        return curr.isEnd
    }

    startsWith(prefix: string): boolean {
        let curr = this.root;
        for (const char of prefix){
            if(!curr.children.has(char)){
                return false
            }
            curr = curr.children.get(char)!
        }
        return true
    }
}

//O(n)
//O(t)  t is the total number of TrieNodes created in the Trie

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */