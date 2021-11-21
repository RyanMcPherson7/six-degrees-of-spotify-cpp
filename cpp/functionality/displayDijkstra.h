#pragma once
#include "dijkstra.h"

// prints formatted info returned from Dijkstra's algorithm 
void displayDijkstra(Graph& graph, const string& start, const string& end) {

    unordered_map<string, string> parents = dijkstra(graph, start);
    vector<string> response;
    string target = end;

    if (start != end) {
        while (parents[target] != start) {
            response.push_back(target);
            target = parents[target];
        }
    }
    
    response.push_back(target);
    response.push_back(start);
    reverse(response.begin(), response.end());

    cout << "It took " << response.size() - 2 << 
    " artists to connect " << start << " to " << end << endl;

    cout << "Path: " << endl;

    for (auto s : response) 
        cout << s << endl;
}