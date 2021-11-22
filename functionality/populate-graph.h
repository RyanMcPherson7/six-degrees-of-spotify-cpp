#pragma once
#include "graph.h"

void populateGraph(Graph& graph, const string& file) {

    fstream inputFile;
    inputFile.open(file, ios::in);
    const string delimiter = " -> ";

    if (inputFile.is_open()) {

        string line;
        while (getline(inputFile, line)) {

            int i = line.find(delimiter);
            string first = line.substr(0, i);
            string second = line.substr(i + delimiter.length());

            graph.insert(first, second);
        }

        inputFile.close();
    }
}