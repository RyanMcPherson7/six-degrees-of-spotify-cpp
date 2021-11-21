#pragma once
#include "dijkstra.h"

// prints formatted info returned from Dijkstra's algorithm 
void displayDijkstra(Graph& graph, const string& start, const string& end) {

    // running Dijkstra's and timing
    auto startTime = chrono::high_resolution_clock::now();
    unordered_map<string, string> parents = dijkstra(graph, start);
    auto endTime = chrono::high_resolution_clock::now();
    chrono::duration<float> duration = endTime - startTime;
    cout << "Executed in " << duration.count() << " seconds." << endl;

    // responding to user
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
    " artists to connect " << start << " to " << end << "." << endl;

    cout << "Path: " << endl;

    for (auto s : response) 
        cout << s << endl;
}