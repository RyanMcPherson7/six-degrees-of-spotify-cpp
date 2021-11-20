#include <bits/stdc++.h>
using namespace std;

class Graph {
public:
	int numVertices;
	unordered_map<string, vector<string>> adjList; 

	Graph() : numVertices(0) {}

    void insert(string from, string to) {

        adjList[from].push_back(to);
        adjList[to].push_back(from);
        numVertices = adjList.size();
    }
};


unordered_map<string, int> dijkstraDist(Graph& graph, string src) {
   
   unordered_set<string> computed;
   unordered_set<string> unprocessed;
   unordered_map<string, int> dist;
   unordered_map<string, string> parent;   

    // initial seeding
    for (auto edge : graph.adjList) {
        unprocessed.insert(edge.first);
        dist[edge.first] = INT_MAX;
        parent[edge.first] = "-1";
    }

    dist[src] = 0;

    // filling out distances and parents
    while (!unprocessed.empty()) {

        // finding smallest distance
        string curr = "";
        int currDist = INT_MAX;
        for (auto vertex : unprocessed) 
            if (currDist > dist[vertex]) {
                curr = vertex;
                currDist = dist[vertex];
            }

        // processing vertex
        computed.insert(curr);
        unprocessed.erase(curr);

        // relaxing
        for (auto edge : graph.adjList[curr]) 
            if (dist[edge] > dist[curr] + 1) {
                dist[edge] = dist[curr] + 1;
                parent[edge] = curr;
            }
    }

   return dist;
}


unordered_map<string, string> dijkstraParent(Graph& graph, string src) {
   
   unordered_set<string> computed;
   unordered_set<string> unprocessed;
   unordered_map<string, int> dist;
   unordered_map<string, string> parent;   

    // initial seeding
    for (auto edge : graph.adjList) {
        unprocessed.insert(edge.first);
        dist[edge.first] = INT_MAX;
        parent[edge.first] = "-1";
    }

    dist[src] = 0;

    // filling out distances and parents
    while (!unprocessed.empty()) {

        // finding smallest distance
        string curr = "";
        int currDist = INT_MAX;
        for (auto vertex : unprocessed) 
            if (currDist > dist[vertex]) {
                curr = vertex;
                currDist = dist[vertex];
            }

        // processing vertex
        computed.insert(curr);
        unprocessed.erase(curr);

        // relaxing
        for (auto edge : graph.adjList[curr]) 
            if (dist[edge] > dist[curr] + 1) {
                dist[edge] = dist[curr] + 1;
                parent[edge] = curr;
            }
    }

   return parent;
}


int main() {

    fstream inputFile;
    inputFile.open("../data/connections60.txt", ios::in);
    unordered_map<string, int> artists;
    Graph graph = Graph();

    if (inputFile.is_open()) {

        string line;
        while (getline(inputFile, line)) {

            const string delimiter = " -> ";
            int i = line.find(delimiter);
            string first = line.substr(0, i);
            string second = line.substr(i + delimiter.length());

            graph.insert(first, second);
        }

        inputFile.close();
    }


    cout << "---------------------------------------------------" << endl;
    string start, end;
    cout << "Enter start vertex: ";
    getline(cin, start);
    cout << "Enter end vertex: ";
    getline(cin, end);
    unordered_map<string, string> parents = dijkstraParent(graph, start);
    vector<string> response;
    string target = end;
    while (parents[target] != start) {
        response.push_back(target);
        target = parents[target];
    }

    response.push_back(target);
    response.push_back(start);
    reverse(response.begin(), response.end());

    cout << "It took " << response.size() - 1 
    << " fans to connect " << start << " to " << end << endl;

    cout << "Path: " << endl;

    for (auto s : response) 
        cout << s << endl;

    cout << "---------------------------------------------------" << endl;

    return 0;
}