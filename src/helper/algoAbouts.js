export const dfs = 'Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. \
The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking. \
DFS is typically used to traverse an entire graph, and takes time O(|V| + |E|), where |V| is the number of vertices and |E| the number of edges.'

export const bfs = 'Breadth-first search (BFS) is an algorithm for searching a tree data structure for a node that satisfies a given property. \
It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level. \
The time complexity can be expressed as O(|V|+|E|), since every vertex and every edge will be explored in the worst case. \
|V| is the number of vertices and |E| is the number of edges in the graph.'

export const dijkstra = 'Dijkstras algorithm is an algorithm for finding the shortest paths between nodes in a graph. \
Dijkstras algorithm uses a data structure for storing and querying partial solutions sorted by distance from the start. \
While the original algorithm uses a min-priority queue and runs in time O((|V|+|E|)log |V|)(where |V| is the number of nodes and |E| is the number of edges), \
it can also be implemented in O(|V|^{2}) using an array.'

export const astar = 'A* (pronounced "A-star") is a graph traversal and path search algorithm. \
Compared to Dijkstras algorithm, the A* algorithm only finds the shortest path from a specified source to a specified goal, and not the shortest-path tree from a specified source to all possible goals. \
This is a necessary trade-off for using a specific-goal-directed heuristic.'


export const dfs_if_guarantees = 'Depth First Search does not guarantee shortest path.'
export const bfs_if_guarantees = 'Breadth First Search guarantees shortest path in an unweighted graph.'
export const dijkstra_if_guarantees = 'Dijkstra guarantees shortest path in a weighted and unweighted graph.'
export const astar_if_guarantees = 'A* guarantees shortest path in a weighted and unweighted graph.'