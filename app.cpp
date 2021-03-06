#include "functionality/populate-graph.hpp"
#include "functionality/check-valid.hpp"
#include "functionality/display-dijkstra.hpp"
#include "functionality/display-BFS.hpp"

#define GRN "\e[0;32m"
#define YEL "\e[0;33m"
#define BLU "\e[0;34m"
#define CYN "\e[0;36m"
#define WHT "\e[0;37m"

int main() {

    Graph graph;
    string numOp, start, end, alg;

    // loading data into graph
    populateGraph(graph, "data-scrapping/data/connections60.txt");

    // running user interface
    system("clear");

    cout << BLU "Welcome to " YEL "Six Degrees of Spotify!" << endl << endl;
    cout << BLU "Enter in " YEL "2 Spotify Artists " BLU "with a " << endl;
    cout << "popularity score of " YEL "60 or above " BLU "and we'll " << endl;
    cout << "calculate the " YEL "shortest path " BLU "between them  " << endl;
    cout << "based on Spotify's " YEL "related artists " BLU "feature!" << endl << endl;

    cout << YEL "# of queries: " WHT;
    getline(cin, numOp);
    system("clear");

    for (int i = 0; i < stoi(numOp); i++) {

        // collecting user data
        cout << YEL "Enter start artist: " WHT;
        getline(cin, start);
        if (!checkValid(graph, start)) continue;
        cout << YEL "Enter end artist: " WHT;
        getline(cin, end);
        if (!checkValid(graph, end)) continue;
        cout << CYN "1 - Dijkstra's" << endl;
        cout << GRN "2 - BFS" << endl;
        cout << YEL "Choose algorithm: " WHT;
        getline(cin, alg);
        system("clear");

        // running chosen shortest path algorithm
        switch(stoi(alg)) {
            case 1:
                cout << CYN "Running Dijkstra's Algorithm..." << endl;
                displayDijkstra(graph, start, end);
                break;
            case 2:
                cout << GRN "Running BFS..." << endl;
                displayBFS(graph, start, end);
                break;
            default:
                cout << "Invalid command" << endl;
        }
    }

    cout << YEL "Thanks for playing!" << endl;

    return 0;
}