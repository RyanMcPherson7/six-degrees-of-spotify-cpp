#include <iostream>
#include <fstream>
#include <string>
#include <unordered_map>

using namespace std;

int main() {

    fstream inputFile;
    inputFile.open("../data/connections60.txt", ios::in);
    unordered_map<string, int> artists;

    if (inputFile.is_open()) {

        string line;
        while (getline(inputFile, line)) {

            const string delimiter = " -> ";
            int i = line.find(delimiter);
            string first = line.substr(0, i);
            string second = line.substr(i + delimiter.length());

            artists[first]++;
            artists[second]++;
        }

        inputFile.close();
    }
    else {
        cout << "file not opened properly" << endl;
    }

    cout << "there are " << artists.size() << " artists listed" << endl;
    cout << "artists who have not been processed: " << endl;
    for (auto i : artists) 
        if (i.second < 5)
            cout << i.first << endl;

    return 0;
}