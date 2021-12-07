#pragma once
#include "BFS.hpp"
#include <windows.h>

#define GRN "\e[0;32m"
#define CYN "\e[0;36m"

void displayBFS(Graph& graph, const string& start, const string& end)
{
	auto startTime = chrono::high_resolution_clock::now();

	unordered_map<string, string> path = BFS(graph, start, end);

	auto endTime = chrono::high_resolution_clock::now();
	chrono::duration<float> duration = endTime - startTime;
	cout << GRN "Executed in " CYN << duration.count() << GRN " seconds." << endl;

	int size = 0;
	
	stack<string> order;

	string index = end;
	order.push(index);

	while (index != "-1")
	{
		size++;
		index = path[index];
		order.push(index);
	}

	cout << GRN "It took " CYN << size - 2;
	cout << GRN " artists to connect " CYN << start << GRN " to " CYN << end << GRN "." << endl;

	cout << GRN "Path: " << endl;

	while (!order.empty())
	{
		if (order.top() != "-1")
		{
			Sleep(600);
			cout << CYN << order.top();
			if (order.top() != end)
				cout << GRN << " -->";
			cout << endl;
		}
		order.pop();
	}

	cout << endl;
	
}