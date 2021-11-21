#include "functionality/populateGraph.h"
#include "functionality/displayDijkstra.h"
#include "functionality/checkValid.h"

int main() {

    Graph graph;
    string numOp, start, end, alg;

    // loading data into graph
    populateGraph(graph, "../data/connections60.txt");

    cout << "# of operations: ";
    getline(cin, numOp);
    for (int i = 0; i < stoi(numOp); i++) {

        cout << "--------------------------------------" << endl;

        // collecting user data
        cout << "Enter start artist: ";
        getline(cin, start);
        if (!checkValid(graph, start)) continue;
        cout << "Enter end artist: ";
        getline(cin, end);
        if (!checkValid(graph, end)) continue;
        cout << "0 - Dijkstra's" << endl;
        cout << "1 - BFS" << endl;
        cout << "Choose algorithm:" << endl;
        getline(cin, alg);

        // running shortest path algorithm
        switch(stoi(alg)) {
            case 0:
                cout << "Running Dijkstra's Algorithm..." << endl;
                displayDijkstra(graph, start, end);
                break;
            case 1:
                cout << "Running BFS..." << endl;
                cout << "Feature not impimented yet" << endl;
                break;
            default:
                cout << "Invalid command" << endl;
        }
    }

    cout << "--------------------------------------" << endl;
    cout << "Thanks for playing!" << endl;

    return 0;
}