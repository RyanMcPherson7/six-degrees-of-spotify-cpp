#pragma once
#include <bits/stdc++.h>
using namespace std;

class Graph {
public:
	unordered_map<string, vector<string>> adjList; 

    void insert(string from, string to) {
        adjList[from].push_back(to);
        adjList[to].push_back(from);
    }
};