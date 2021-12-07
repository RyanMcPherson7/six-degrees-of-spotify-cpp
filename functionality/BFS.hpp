#pragma once
#include "graph.hpp"
#include <string>
#include <unordered_map>
#include <queue>
using namespace std;

unordered_map<string, string> BFS(Graph& graph, const string start, const string goal)
{
	unordered_map<string, bool> visited;
	unordered_map<string, string> path;

	queue<string> search;

	path[start] = "-1";
	search.push(start);
	visited[start] = true;

	bool found = false;
	
	while (!search.empty())
	{
		string front = search.front();
		search.pop();

		vector<string> vec = graph.adjList[front];

		for (int i = 0; i < vec.size(); i++)
		{
			if (vec[i] == goal)
			{
				found = true;
				path[goal] = front;
				break;
			}
			else if( !visited[vec[i]] )
			{
				search.push(vec[i]);
				path[vec[i]] = front;
				visited[vec[i]] = true;
			}
		}
		if (found)
			break;
	}

	return path;
}