#include <iostream>
#include <fstream>
#include <string>
#include <unordered_set>

using namespace std;

int main() {

    fstream inputFile;
    inputFile.open("../data/connections.txt", ios::in);
    unordered_set<string> artists;

    if (inputFile.is_open()) {

        string line;
        while (getline(inputFile, line)) {

            const string delimiter = " -> ";
            int i = line.find(delimiter);
            string first = line.substr(0, i);
            string second = line.substr(i + delimiter.length());

            artists.insert(first);
            artists.insert(second);

            // cout << first << " " << second << endl;
        }

        inputFile.close();
    }
    else {
        cout << "file not opened properly" << endl;
    }

    cout << "there are " << artists.size() << " artists listed" << endl;

    return 0;
}