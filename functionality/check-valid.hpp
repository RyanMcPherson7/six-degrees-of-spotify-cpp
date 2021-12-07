#pragma once

#define PRP "\e[0;35m"

bool checkValid(Graph& graph, const string& artist) {

    if (graph.adjList.find(artist) == graph.adjList.end()) {
        cout << PRP "Artist name is not contained within the database." << endl;
        cout << "Confirm the name is spelled correctly, capitalized accordingly, and has a 60 or greater popularity score." << endl;
        return false;
    }
        
    return true;
}