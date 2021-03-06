#pragma once
#include <windows.h>
#include "dijkstra.hpp"

#define BLU "\e[0;34m"
#define CYN "\e[0;36m"

// prints formatted info returned from Dijkstra's algorithm 
void displayDijkstra(Graph& graph, const string& start, const string& end) {

    // running Dijkstra's and timing
    auto startTime = chrono::high_resolution_clock::now();
    unordered_map<string, string> parents = dijkstra(graph, start);
    auto endTime = chrono::high_resolution_clock::now();
    chrono::duration<float> duration = endTime - startTime;
    cout << BLU "Executed in " CYN << duration.count() << BLU " seconds." << endl;

    // finding path
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

    cout << BLU "It took " CYN << response.size() - 2;
    cout << BLU " artists to connect " CYN << start << BLU " to " CYN << end << BLU "." << endl;

    cout << BLU "Path: " << endl;

    // displaying path
    for (int i = 0; i < response.size(); i++) {

        Sleep(600);
        cout << CYN << response[i];

        if (i != response.size() - 1)
            cout << BLU " -->";

        cout << endl;
    }

    cout << endl;
}